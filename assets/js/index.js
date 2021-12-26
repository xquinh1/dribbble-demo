$(document).ready(function() {

    $(".filter-btn").click(function() {
        $(".filter-btn-icon").toggleClass('fa-chevron-up');
        $(".filter-btn-separate").slideToggle(200);
    });

    $(".filter-description-search-btn-1").click(function() {
        $(".filter-description-search-btn-1 .search-btn-icon").toggleClass('fa-chevron-up');
        $(".description-search-btn-separate-1").slideToggle(200);
    });

    $(".filter-description-search-btn-2").click(function() {
        $(".filter-description-search-btn-2 .search-btn-icon").toggleClass('fa-chevron-up');
        $(".description-search-btn-separate-2").slideToggle(200);
    });

    $(".filter-description-search-btn-3").click(function() {
        $(".filter-description-search-btn-3 .search-btn-icon").toggleClass('fa-chevron-up');
        $(".description-search-btn-separate-3").slideToggle(200);
    });

    $(".filter-description").css('display', 'none');

    $(".filter-filter-btn").click(function() {
        $(".filter-description").slideToggle(200);
    });

    $(".container-menu-mobile-item").click(function() {
        $(this).next().slideToggle(200);
    })


    $(".container-mobile-icon").click(function() {
        $(this).toggleClass('fa-times');
        $(".container-menu-mobile").slideToggle(200);
    })

});