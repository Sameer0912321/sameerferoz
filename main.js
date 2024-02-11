$(document).ready(function(){
        $('#serviceimg').click(function(){
                $('#invimg').slideToggle()
                $('.footer').toggleClass('footer2')
        })
        // $('#img').click(function(){
        //         $('.navbar').css("display","none");
        //         $('section').css("display","none");
        //         $('footer').css("display","none");
        //         $('.picid').css("display","block");
        //         $('.out').css("display","block");
        //         $('cross').css("display","flex");
        //         $('video').css("display","none");
        //         $('#img').css("display","none");

                    
        // })
        // $('video').click(function(){
        //         $('.navbar').css("display","none");
        //         // $('video').css("height","80vh");
        //         // $('video').css("margin","0%");
        //         // $('video').css("padding","0%");
        //         // $('video').css("width","80em"); 
        //         $('.video').toggleClass('video2');
        //         $('section').css("display","none");
        //         $('footer').css("display","none");
        //         $('cross').css("display","none");
        //         $('.out').css("display","none");
        //         $('.picid').css("display","none");
        //         $('#img').css("display","none");
        //         $('.video').css("display","block");
        //         $('#cross2').css("display","block");
        //         // $('#services').css("display","none");




                    
        // })
        // $('#cross2').click(function(){
        //         $('#img').css("display","block");
        //         $('.video').toggleClass('video2');
        //         $('.navbar').css("display","block");
        //         $('section').css("display","block");
        //         $('footer').css("display","block");
        //         $('video').css("display","block");
        //         $('.picid').css("display","none");
        //         $('.out').css("display","none");
        //         $('#cross2').css("display","none");


        // })
        // $('#cross').click(function(){
        //         $('.navbar').css("display","block");
        //         $('section').css("display","block");
        //         $('footer').css("display","block");
        //         $('video').css("display","block");
        //         $('.picid').css("display","none");
        //         $('.out').css("display","none");
        //         $('cross').css("display","none");
        //         $('#img').css("display","block");



        // })
        // mouse movement
        $(document).mousemove(function(e){
                $('.cursor').offset({
                        top:e.pageY,
                        left:e.pageX+5

                })
        })
        
        // ..................
// mouse transform
        $('#box').mouseenter(function(){
                $('#cursor').toggleClass('cursor2')
        })
        $('#box').mouseleave(function(){
                $('#cursor').toggleClass('cursor2')

        })
    })
    $('#float').mouseenter(function(){
        $('#cursor').toggleClass('cursor2')
})
$('#float').mouseleave(function(){
        $('#cursor').toggleClass('cursor2')

})
    