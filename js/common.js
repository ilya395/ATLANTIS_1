$(document).ready(function() {
	
	$("#wf-form-Phone-Form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data:  $(this).serialize()
		}).done(function() {
			alert("by!");
		});
		return false;
	});
	
});