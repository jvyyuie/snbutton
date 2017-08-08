/*
 * A tiny jQuery plugin that could control button's state
 */
var SNButton = {
	init: function(e, params) {
		var button = "#"+e;
		var input = "#"+jQuery(button).data("snnode");

		if(params)
		{
			var enabletext = params.enabletext ? params.enabletext : $(button).text();
			var disabletext = params.disabletext ? params.disabletext : $(button).text();
		}
		jQuery(button).attr("disabled", ""==jQuery(input).val());
		jQuery(button).text(disabletext);
		jQuery(input).on('input propertychange', function() {
		if(jQuery(input).val()=="")
		{
			jQuery(button).attr("disabled", true);
			jQuery(button).text(disabletext);
		}
		else
		{
			jQuery(button).attr("disabled", false);
			jQuery(button).text(enabletext);
		}
		});
	}
}
