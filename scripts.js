// JavaScript Document

//--- Adjust height of sections to fit the contents ---//
$(document).ready(function() {
	// Loop through each section
	$('#live').each(function() {
	  // Get the height of the content inside the section
	  var contentHeight = $(this).find('.container').outerHeight();
	  // Set the section height to be the maximum of the window height and the content height
	  $(this).css('height', Math.max($(window).height(), contentHeight) + 'px');
	});

	  // Adjust the section height when the window is resized
	//   $(window).resize(function() {
	// 	$('#live').each(function() {
	// 	  var contentHeight = $(this).find('.container').outerHeight();
	// 	  $(this).css('height', Math.max($(window).height(), contentHeight) + 'px');
	// 	});
	//   });
	
  });
  
// #live
// var live_section = document.getElementByld('live');
// var live_container = document.getElementByld('live .container');
// live_section.style.height = live_container.offsetHeight + 'px';
// live_container.style.zindex = 1000;

// #bio
// var bio_section = document.getElementByld('bio');
// var bio_container = document.getElementByld('bio .container');
// bio_section.style.height = live_container.offsetHeight + 'px';

//--- sns-link-show ---//
jQuery(function($){
	// execute when scrolling and loading
	$(window).on('scroll load', function(){
		$('live').each( function() {
			var this_pos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if ( scroll > this_pos - windowHeight ) {
				$('.sns-link').css({
					visibility: visible,
					// opacity: 'translate(0)'
				});
			}
		});
	});
});

//--- FADE-IN---//
jQuery(function($){
	// execute when scrolling and loading
	$(window).on('scroll load', function(){
		$('.fade-in').each( function() {
			var this_pos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if ( scroll > this_pos - windowHeight ) {
				$(this).css({
					opacity: 1,
					transform: 'translate(0)'
				});
			}
		});
	});
});

//--- FADE-IN FROM LEFT ---//
jQuery(function($){
	// execute when scrolling and loading
	$(window).on('scroll load', function(){
		$('.fade-left').each( function() {
			var this_pos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if ( scroll > this_pos - windowHeight ) {
				$(this).css({
					opacity: 1,
					transform: 'translate(0)'
				});
			}
		});
	});
});

//--- FADE-IN FROM RIGHT ---//
jQuery(function($){
	// execute when scrolling and loading
	$(window).on('scroll load', function(){
		$('.fade-right').each( function() {
			var this_pos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if ( scroll > this_pos - windowHeight ) {
				$(this).css({
					opacity: 1,
					transform: 'translate(0)'
				});
			}
		});
	});
});

//--- FADE-IN FROM BOTTOM ---//
jQuery(function($){
	// execute when scrolling and loading
	$(window).on('scroll load', function(){
		$('.fade-up').each( function() {
			var this_pos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if ( scroll > this_pos - windowHeight ) {
				$(this).css({
					opacity: 1,
					transform: 'translate(0)'
				});
			}
		});
	});
});