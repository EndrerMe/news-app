using Entities.Enums;
using System.Threading.Tasks;

namespace Services.Interfaces
{
    public interface ISubscriptionService
    {
        Task<bool> AddSubscription(string email, Category category);
    }
}
