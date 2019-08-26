$(document).ready(function(){
        //animate menu 
        $("#navbarDropdownMenuLink").click(function(){
            
            $(".dropdown-menu").slideToggle(2000);//toggle
        });
    
    $("#web-login").click(function(){
            
            $("#signin").slideToggle(2000);//toggle
        });
    $("#mob-login").click(function(){
            
            $("#signin").slideToggle(2000);//toggle
        });
    
        
    if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}
    
});

$(document).ready(function() {
            $('#sidebarCollapse').on('click', function() {
                $('#sidebar').toggleClass('active');
            });
        });

