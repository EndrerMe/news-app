using Entities;
using Entities.Enums;
using System.Threading.Tasks;

namespace Repositories.Interfaces
{
    public interface ISubscriptionRepository : IBaseRepository<Subscription>
    {
        Task<bool> InsertSubscription(Subscription subscription);
    }
}
