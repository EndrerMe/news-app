﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Models;
using Services.Interfaces;

namespace NewsApp.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class CityController : BaseController
    {
        private ICityService _cityService;

        public CityController(ICityService cityService)
        {
            _cityService = cityService;
        }

        [HttpPost]
        [Route("/searchCity/{name}")]
        public async Task<ActionResult> FindCityByName(string name)
        {
            SearchCityResultModel result = await _cityService.FindCityByNameAsync(name);
            return Ok(result);
        }
    }
}