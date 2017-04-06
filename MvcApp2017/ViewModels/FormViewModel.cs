using System.ComponentModel.DataAnnotations;

namespace MvcApp2017.ViewModels
{
	public class FormViewModel
	{
		[Required]
		[Display(Name = "Name")]
		public string Name { get; set; }

		[Required]
		[Display(Name = "Email")]
		public string Email { get; set; }

		public FormViewModel()
		{
		}
	}
}
