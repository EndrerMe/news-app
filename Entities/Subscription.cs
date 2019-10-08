using System;
using System.Collections.Generic;
using Entities.Enums;

namespace Entities
{
    public class Subscription : BaseEntity
    {
        public string Email { get; set; }
        public Category Category { get; set; }
    }
}
