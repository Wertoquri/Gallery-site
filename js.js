$(document).ready(function(){
    $(".item").on("click", function(){
        let src = $(this).children("img").attr("src")
        $(".overlay img").attr("src", src)
        $(".overlay").addClass("open")
    })
    $('.close').on("click", function(){
       $(".overlay").removeClass("open")
    })
})