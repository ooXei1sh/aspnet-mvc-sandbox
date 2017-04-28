using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MvcApp2017.ViewModels;
using MvcApp2017.Filters;

namespace MvcApp2017.Controllers
{
	public class ApiController : Controller
	{
		[HttpGet]
		public ActionResult Index()
		{
			return View();
		}

		[HttpPost]
		public ActionResult ReadViewModel()
		{
			var vm = new ApiViewModel();
			vm.Id = 1;
			vm.FruitId = 102;
			vm.FruitName = "Orange";
			return Json(new[] { vm });
		}

		[HttpPost]
		public ActionResult UpdateViewModel(ApiViewModel vm)
		{
			return Json(new[] { vm });
		}

		[HttpPost]
		public ActionResult CreateViewModel()
		{
			return Json(new[] { new object() });
		}

		[HttpPost]
		public ActionResult DeleteViewModel()
		{
			return Json(new[] { new object() });
		}

		[HttpPost]
		public ActionResult ReadSelectListOpts()
		{
			var list = new List<SelectListItem>(){
				new SelectListItem(){ Value = "101", Text = "Apple", },
				new SelectListItem(){ Value = "102", Text = "Orange", },
				new SelectListItem(){ Value = "103", Text = "Bannana", },
			};
			return Json(list);
		}
	}

	public class ApiViewModel
	{
		public int Id;
		public int? FruitId;
		public string FruitName;
	}
}
