using Entities;
using Entities.Enums;
using Microsoft.EntityFrameworkCore;
using Repositories.Interfaces;
using System;
using System.Threading.Tasks;

namespace Repositories
{
    public class SubscriptionRepository : ISubscriptionRepository
    {
        public NewsAppContext _context;
        public DbSet<Subscription> _set;

        public SubscriptionRepository(NewsAppContext context)
        {
            _context = context;
            _set = _context.Set<Subscription>();
        }

        public async Task<bool> InsertSubscription(Subscription subscription)
        {
            Subscription oldRecord = await _set.FirstOrDefaultAsync(x => x.Email == subscription.Email && x.Category == subscription.Category);
            if (oldRecord != null)
            {
                return false;
            }

            var result = await _set.AddAsync(subscription);

            if (result != null)
            {
                return true;
            }

            return false;
        }
    }
}
