using System;
using System.Linq;
using System.Web.Mvc;
using System.Text;
using System.Web.Caching;
using System.Security.Cryptography;

namespace MvcApp2017.Extensions
{
	public static class HtmlExtensions
	{
		public static MvcHtmlString ValidationSummaryBootstrap(this HtmlHelper htmlHelper)
		{
			string markup = "";

			var errors = htmlHelper.ViewContext.ViewData.ModelState.SelectMany(s => s.Value.Errors.Select(err => err.ErrorMessage));

			// ensure no empty error messages
			errors = errors.Where(s => !string.IsNullOrWhiteSpace(s));

			if (errors != null && errors.Count() > 0)
			{
				markup += "<div class=\"alert-dismissible alert-danger alert ix_ajax_naf_validation_msg_alert_box\" role=\"alert\">";
				markup += "<button tabindex=\"-1\" class=\"no-tab-focus close\" aria-label=\"Close\" type=\"button\" data-dismiss=\"alert\">";
				markup += "<span aria-hidden=\"true\">&times;</span>";
				markup += "</button>";

				// suppress duplicate messages
				var errs = errors.Distinct().ToArray();

				var ul = new TagBuilder("ul");
				foreach (var error in errs)
				{
					var li = new TagBuilder("li");
					li.SetInnerText(error);
					ul.InnerHtml += li.ToString();
				}

				markup += ul.ToString();
				markup += "</div>";
			}

			return new MvcHtmlString(markup);
		}
	}
}
