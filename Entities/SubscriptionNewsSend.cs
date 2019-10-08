using System;
using System.Collections.Generic;
using System.Text;

namespace Entities
{
    public class SubscriptionNewsSend : BaseEntity
    {
        public string NewsId { get; set; }
        public Guid SubscriptionId { get; set; }
    }
}
