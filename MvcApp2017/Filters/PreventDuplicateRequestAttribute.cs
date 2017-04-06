using System;
using System.Linq;
using System.Web.Mvc;
using System.Text;
using System.Web.Caching;
using System.Security.Cryptography;

namespace MvcApp2017.Filters
{
	// http://rion.io/2013/02/24/prevent-repeated-requests-using-actionfilters-in-asp-net-mvc/
	public class PreventDuplicateRequestAttribute : ActionFilterAttribute
	{
		public int DelayRequest = 5; // seconds
		public string ErrorKey = "DuplicateRequest";
		public string ErrorMessage = "Duplicate Request Attempts Detected.";

		public override void OnActionExecuting(ActionExecutingContext filterContext)
		{
			var request = filterContext.HttpContext.Request;
			var cache = filterContext.HttpContext.Cache;
			var originationInfo = request.ServerVariables["HTTP_X_FORWARDED_FOR"] ?? request.UserHostAddress;
			originationInfo += request.UserAgent;

			// use only posted params to determin duplicate requests
			string customParams = "";
			foreach (string key in request.Params.Keys)
			{
				if ("ASP.NET_SessionId" == key)
				{
					break;
				}
				else if ("__RequestVerificationToken" == key)
				{
					continue;
				}

				customParams += key + "=" + request.Params[key] + "&";
			}

			string hashInfo = originationInfo + request.RawUrl + request.QueryString + customParams;

			string hashValue = string.Join("", MD5.Create().ComputeHash(Encoding.ASCII.GetBytes(hashInfo)).Select(s => s.ToString("x2")));

			if (cache[hashValue] != null)
			{
				filterContext.Controller.ViewData.ModelState.AddModelError(ErrorKey, ErrorMessage);
			}
			else
			{
				cache.Add(hashValue, new object { }, null, DateTime.Now.AddSeconds(DelayRequest), System.Web.Caching.Cache.NoSlidingExpiration, CacheItemPriority.Default, null);
			}

			base.OnActionExecuting(filterContext);
		}
	}
}
