/*
 * A tiny jQuery plugin that could control the button's state
 */
var SNButton = {
	init: function(e) {
		var snnode = "#"+$("#"+e).data("snnode");
		$("#"+e).attr("disabled", ""==$(snnode).val());
		$(snnode).on('input propertychange', function() {
			$("#"+e).attr("disabled", ""==$(snnode).val());
		});
	}
}
