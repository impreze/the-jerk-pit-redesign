$(document).ready(function () {
    //jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
	$('a.page-scroll').bind('click', function (event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1500, 'easeInOutExpo');
		event.preventDefault();
	});
});
    
    
    $("#contactForm").submit(function (event) {
		// cancels the form submission
		event.preventDefault();
		submitForm();
	});

	function submitForm() {
		// Initiate Variables With Form Content
		var name = $("#inputName").val();
		var email = $("#inputEmail").val();
		var subject = $("#inputSubject").val();
		var message = $("#inputMessage").val();

		$.ajax({
			type: "POST",
			url: "php/process.php",
			data: "name=" + name + "&email=" + email + "&subject=" + subject + "&message=" + message,
			success: function (text) {
				if (text == "success") {
					formSuccess();
				}
                else {
                    alert(failed);
                }
			}
		});
	}

	function formSuccess() {
		alert("Message Submitted!");
	}
    
});