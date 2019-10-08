using Entities;
using Entities.Enums;
using Repositories.Interfaces;
using Services.Interfaces;
using System;
using System.Threading.Tasks;

namespace Services
{
    public class SubscriptionService : ISubscriptionService
    {
        private ISubscriptionRepository _subscriptionRepository;

        public SubscriptionService(ISubscriptionRepository subscriptionRepository)
        {
            _subscriptionRepository = subscriptionRepository;
        }

        public async Task<bool> AddSubscription(string email, Category category)
        {
            var subscribtion = new Subscription()
            {
                Email = email,
                Category = category,
                Created = DateTime.UtcNow
            };

            bool result = await _subscriptionRepository.InsertSubscription(subscribtion);

            return result;
        }
    }
}
