using System;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Services.Interfaces;
using NewsAPI.Constants;
using System.Collections.Generic;
using System.Linq;

namespace BackgroundServices
{
    public class BackgroundEmailNewsSender : BackgroundService
    {
        private readonly ILogger<BackgroundEmailNewsSender> _logger;
        private readonly IEmailSubscriptionService _emailSubscriptionService;

        public BackgroundEmailNewsSender(ILogger<BackgroundEmailNewsSender> logger, IEmailSubscriptionService emailSubscriptionService)
        {
            _logger = logger;
            _emailSubscriptionService = emailSubscriptionService;
        }

        protected override async Task ExecuteAsync(CancellationToken stoppingToken)
        {
            while (!stoppingToken.IsCancellationRequested)
            {
                _logger.LogInformation("Worker running at: {time}", DateTimeOffset.Now);

                List<Categories> categories = Enum.GetValues(typeof(Categories)).Cast<Categories>().ToList();

                foreach (var category in categories)
                {
                    var news = await _emailSubscriptionService.GetLatestNewsInCategory(category);
                    var subscriptions = await _emailSubscriptionService.GetSubscroptionsByCategory(category);

                    await _emailSubscriptionService.SendNewsToSubscribers(news, subscriptions);
                }

                await Task.Delay((int)TimeSpan.FromDays(1).TotalMilliseconds, stoppingToken);
            }
        }
    }
}
