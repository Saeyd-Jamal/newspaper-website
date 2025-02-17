$(document).ready(function() {
    $(".header--search-btn").click(function(event) {
        event.preventDefault(); // Prevent form submission

        $(".header--search-form").addClass("active");
    });

    // Remove 'active' class when clicking outside the form
    $(document).click(function(event) {
        if (!$(event.target).closest(".header--search-form").length) {
            $(".header--search-form").removeClass("active");
        }
    });
});



$(document).ready(function() {


    // Remove 'open' class when clicking outside
    $(document).click(function(event) {
        if (!$(event.target).closest(".dropdown").length) {
            $(".dropdown").removeClass("open");
        }
    });
});



$(document).ready(function() {


    // When clicking the close button, remove "open" class
    $(".close-menu").click(function() {
        $(".navbar-collapse").removeClass("in");
    });

});

// Click outside the menu to close it
$(document).click(function(event) {
    if (!$(event.target).closest(".navbar-collapse, .navbar-toggle").length) {
        $(".navbar-collapse").removeClass("in");
    }
});




$(document).ready(function() {


    // Initialize the carousel
    $('#myCarousel').carousel({
        interval: 3000, // Set the interval for auto-sliding (3 seconds)
        pause: "hover" // Pause on hover
    });

    // Event listener for when the carousel slides
    $('#myCarousel').on('slide.bs.carousel', function(event) {

    });

    // Event listener for when the carousel has slid
    $('#myCarousel').on('slid.bs.carousel', function(event) {

    });

    // Custom function to go to a specific slide
    function goToSlide(slideIndex) {
        $('#myCarousel').carousel(slideIndex);
    }

    // Example: Go to slide 2 after 5 seconds
    setTimeout(function() {
        goToSlide(2);
    }, 5000);

    // Custom function to pause the carousel
    function pauseCarousel() {
        $('#myCarousel').carousel('pause');
    }

    // Custom function to resume the carousel
    function resumeCarousel() {
        $('#myCarousel').carousel('cycle');
    }

    // Example: Pause the carousel on button click
    $('#pauseButton').click(function() {
        pauseCarousel();
    });

    // Example: Resume the carousel on button click
    $('#resumeButton').click(function() {
        resumeCarousel();
    });
});