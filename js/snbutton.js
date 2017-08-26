/*
 * Version 0.2.0
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
			var fields = params.fields ? params.fields : null;
		}
		if(fields)
		{
			input = Array();
			$.each(fields, function(index, value, array) {
					input.push("#"+value);
					});
		}

		jQuery(button).attr("disabled", SNButton.allhastext(input));
		jQuery(button).text(disabletext);
		if(Array.isArray(input))
		{
			$.each(input, function(index, value, array) {
				jQuery(value).on('input propertychange', function() {
					if(SNButton.allhastext(input))
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
			});
		}
		else
		{
			jQuery(input).on('input propertychange', function() {
				if(SNButton.allhastext(input))
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
	},
	allhastext: function(sdf) {
		console.log(sdf);
		if(Array.isArray(sdf))
		{
			var ret = false;
			$.each(sdf, function(index, value, array) {
				if(jQuery(value).val()=="")
				{
					ret = true;
				}
			});
			return ret;
		}
		else
		{
			if(jQuery(sdf).val()=="")
			{
				return true;
			}
			else
			{
				return false;
			}
		}
	}
}
