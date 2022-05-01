//$(".navbar, .showcase, .blog, .languages, .footer").hide();
$(document).ready(function() {
    //$(".navbar, .showcase, .blog, .languages, .footer").hide();
    //$(".atoz-larg").show();
    //alert($(".atoz-larg").attr("style")); 
    //alert($("body").attr("style")); 
    setTimeout(function(){
        $(".atoz-larg").hide();
        $(".intro-hide").show();
        console.log('jquery done!');    
        //$('body').addClass('loaded');
        
    }, 1500);
    
}); 

//function plusSlides() {
//
//}