using System.Web.Optimization;

namespace MvcApp2017
{
	public class BundleConfig
	{
		public static void RegisterBundles(BundleCollection bundles)
		{
			bundles.Add(new ScriptBundle("~/bundles/app").Include("~/dist/bundle.js"));
			bundles.Add(new StyleBundle("~/content/css").Include("~/dist/*.css"));
		}
	}
}
