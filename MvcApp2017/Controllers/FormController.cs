using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MvcApp2017.ViewModels;
using MvcApp2017.Filters;

namespace MvcApp2017.Controllers
{
	public class FormController : Controller
	{
		[HttpGet]
		public ActionResult Index()
		{
			var viewModel = new FormViewModel();
			viewModel.Name = "Todd";
			viewModel.Email = "foo@bar.baz.biz";
			return View(viewModel);
		}

		[HttpPost]
		[PreventDuplicateRequest(DelayRequest = 1)]
		public ActionResult Index(FormViewModel viewModel)
		{
			if(ViewData.ModelState.ContainsKey("DuplicateRequest"))
			{
			}

			ModelState.Clear();
			TryValidateModel(viewModel);
			return View(viewModel);
		}
	}
}
