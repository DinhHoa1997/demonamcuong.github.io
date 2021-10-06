$(document).ready(function() {
    $('#nav > li > a').click(function() {
        if ($(this).attr('class') != 'active') {
            $('#nav li ul').slideUp();
            $(this).next().slideToggle();
            $('#nav li a').removeClass('active');
            $(this).addClass('active');
        }
    });
});
// count
$(document).ready(function() {
    $('.minus').click(function() {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function() {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
});

// date picker
$(document).ready(function() {
    $(".check-in").datepicker({
        dateFormat: "d, M, yy",
    });

    $(".check-out").datepicker({
        dateFormat: "d, M, yy",
    });
});

// sticky top
$(window).scroll(function() {
    if ($(window).scrollTop() >= 100) {
        $('.top-header').addClass('fixed-header');
        $('.top-header').animate({
            duration: 5000,
        }, "slow");

    } else {
        $('.top-header').removeClass('fixed-header');
        $('.top-header').animate({
            duration: 5000,
        }, "slow");

    }
});
// galerry

// Gallery image hover
$(".img-wrapper").hover(
    function() {
        $(this).find(".img-overlay").animate({ opacity: 1 }, 600);
    },
    function() {
        $(this).find(".img-overlay").animate({ opacity: 0 }, 600);
    }
);

// Lightbox
var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $prevButton = $('<div id="prevButton"><i class="fa fa-chevron-left"></i></div>');
var $nextButton = $('<div id="nextButton"><i class="fa fa-chevron-right"></i></div>');
var $exitButton = $('<div id="exitButton"><i class="fa fa-times"></i></div>');

// Add overlay
$overlay.append($image).prepend($prevButton).append($nextButton).append($exitButton);
$("#gallery").append($overlay);

// Hide overlay on default
$overlay.hide();

// When an image is clicked
$(".img-overlay").click(function(event) {
    // Prevents default behavior
    event.preventDefault();
    // Adds href attribute to variable
    var imageLocation = $(this).prev().attr("href");
    // Add the image src to $image
    $image.attr("src", imageLocation);
    // Fade in the overlay
    $overlay.fadeIn("slow");
});

// When the overlay is clicked
$overlay.click(function() {
    // Fade out the overlay
    $(this).fadeOut("slow");
});

// When next button is clicked
$nextButton.click(function(event) {
    // Hide the current image
    $("#overlay img").hide();
    // Overlay image location
    var $currentImgSrc = $("#overlay img").attr("src");
    // Image with matching location of the overlay image
    var $currentImg = $('#image-gallery img[src="' + $currentImgSrc + '"]');
    // Finds the next image
    var $nextImg = $($currentImg.closest(".image").next().find("img"));
    // All of the images in the gallery
    var $images = $("#image-gallery img");
    // If there is a next image
    if ($nextImg.length > 0) {
        // Fade in the next image
        $("#overlay img").attr("src", $nextImg.attr("src")).fadeIn(800);
    } else {
        // Otherwise fade in the first image
        $("#overlay img").attr("src", $($images[0]).attr("src")).fadeIn(800);
    }
    // Prevents overlay from being hidden
    event.stopPropagation();
});

// When previous button is clicked
$prevButton.click(function(event) {
    // Hide the current image
    $("#overlay img").hide();
    // Overlay image location
    var $currentImgSrc = $("#overlay img").attr("src");
    // Image with matching location of the overlay image
    var $currentImg = $('#image-gallery img[src="' + $currentImgSrc + '"]');
    // Finds the next image
    var $nextImg = $($currentImg.closest(".image").prev().find("img"));
    // Fade in the next image
    $("#overlay img").attr("src", $nextImg.attr("src")).fadeIn(800);
    // Prevents overlay from being hidden
    event.stopPropagation();
});

// When the exit button is clicked
$exitButton.click(function() {
    // Fade out the overlay
    $("#overlay").fadeOut("slow");
});