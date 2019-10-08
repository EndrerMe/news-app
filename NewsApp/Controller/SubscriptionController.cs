using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Threading.Tasks;
using Entities.Enums;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Services.Interfaces;

namespace NewsApp.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class SubscriptionController : BaseController
    {
        private ISubscriptionService _subscriptionService;

        public SubscriptionController(ISubscriptionService subscriptionService)
        {
            _subscriptionService = subscriptionService;
        }

        [Route("/addSubscription")]
        [HttpPost]
        public async Task<ActionResult> AddSubsctiption(string email, Category category)
        {
            if (string.IsNullOrWhiteSpace(email))
            {
                return BadRequest("You shuold provide valid email");
            }

            MailAddress mailAddress = new MailAddress(email);

            bool result = await _subscriptionService.AddSubscription(email, category);

            if (result)
            {
                return Ok("You subscribed to news!");
            }

            return BadRequest("Something went wrong!");
        }
    }
}