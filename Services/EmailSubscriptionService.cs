using System.Collections.Generic;
using System.Linq;
using NewsAPI;
using NewsAPI.Models;
using NewsAPI.Constants;
using System.Threading.Tasks;
using Entities;
using Services.Interfaces;
using System;
using Repositories.Interfaces;
using MimeKit;
using MailKit.Net.Smtp;

namespace Services
{
    public class EmailSubscriptionService : IEmailSubscriptionService
    {
        private ISubscriptionRepository _subscriptionRepository;

        public EmailSubscriptionService(ISubscriptionRepository subscriptionRepository)
        {
            _subscriptionRepository = subscriptionRepository;
        }

        public async Task<List<Article>> GetLatestNewsInCategory(Categories category)
        {
            List<Article> newsArticles = new List<Article>();
            bool isChecked = false;
            int pageCount = 1;

            do
            {
                var result = await GetLatestNewsFromApi(category, pageCount);
                newsArticles.AddRange(result.Articles);

                isChecked = newsArticles.Last().PublishedAt < DateTime.UtcNow.AddMinutes(-30);
            }
            while (!isChecked);

            return newsArticles;
        }

        public async Task<List<Subscription>> GetSubscroptionsByCategory(Categories category)
        {
            List<Subscription> result = await _subscriptionRepository.GetSubscriptionsByCategoryAsync(category);
            return result;
        }

        public async Task SendNewsToSubscribers(List<Article> news, List<Subscription> subscriptions)
        {
            string smptServer = "smtp.gmail.com";
            string smplLogin = "CampaTstPrereq@gmail.com";
            string smtpPassword = "Yrq3AwZAtMTY";

            try
            {

                foreach (Subscription sub in subscriptions)
                {
                    using (var client = new SmtpClient())
                    {
                        await client.ConnectAsync(smptServer, 465, true);
                        await client.AuthenticateAsync(smplLogin, smtpPassword);



                        var emailMessage = await PrepareEmailMessage(news, sub);
                        await client.SendAsync(emailMessage);

                        await client.DisconnectAsync(true);
                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
        }

        private async Task<ArticlesResult> GetLatestNewsFromApi(Categories category, int page = 1)
        {
            var newsApiClient = new NewsApiClient("8a4d40be944c4dbeb2d365c05cfe3eab");
            const int pageSize = 10;

            ArticlesResult newsResponse = await newsApiClient.GetTopHeadlinesAsync(new TopHeadlinesRequest
            {
                Language = Languages.EN,
                Category = category,
                Page = page,
                PageSize = pageSize
            });

            return newsResponse;
        }

        private async Task<MimeMessage> PrepareEmailMessage(List<Article> news, Subscription subscription)
        {
            var emailMessage = new MimeMessage();

            emailMessage.From.Add(new MailboxAddress("Администрация сайта", "login@yandex.ru"));
            emailMessage.To.Add(new MailboxAddress("", subscription.Email));
            emailMessage.Subject = "We got some news for you!";
            emailMessage.Body = new TextPart(MimeKit.Text.TextFormat.Html)
            {
                Text = "Some test mail text"
            };

            return emailMessage;
        }
    }
}
