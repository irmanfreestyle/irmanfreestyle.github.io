$(document).ready(function() {
   

    let i = 0;
    let text = ["H","i",",","<br>","I","'","m","I","r","m","a","n",",","<br>","W","e","b","D","e","v","e","l","o","p","e","r","."];
    
    type = setInterval(()=> {
        if(i >= 26) {                                
            clearInterval(type);
        }

        if(i == 7 || i == 17) {
            $(".intro").append(`
                <span class="space">${text[i]}</span>
            `);
        } else if(i != 3 && i != 13 && i != 7) {
            $(".intro").append(`
                <span>${text[i]}</span>
            `);
        } else if(i == 3 || i == 13) {
            $(".intro").append(`${text[i]}`);
        }
        
        i++;

    }, 10);    
    
    n = 0;
    animate = setInterval(()=> {

        if(n>=25) {
            $(".my-btn").fadeIn(1000);   
            $(".intro").append("<p class='animated fadeIn'>Html / Css / Javascript / Jquery / Vue.js / Bootstrap / Php / MySQL</p>")
            setTimeout(()=> {
                $(".intro span").removeClass("rubberBand");      
                $(".intro p").addClass("show")          
            }, 1000);
            clearInterval(animate)
        }
        console.log(n)
        $(".intro span").eq(n).addClass("show animated rubberBand")

        n++;
    }, 140);


    $(document).on("mouseover", ".intro span", function() {
        $(this).addClass("rubberBand");
    });

    $(document).on("mouseout", ".intro span", function() {
        setTimeout(()=> {
            $(this).removeClass("rubberBand");
        }, 2000);
    });


    $(".menus-btn").click(function() {
        $(".mynav").toggleClass("toggle-nav");
        $(".menus-btn span").eq(0).toggleClass("one");
        $(".menus-btn span").eq(1).toggleClass("two");
        $(".menus-btn span").eq(2).toggleClass("three");
    })
    

});


$(".pages").click(function() {
    let target = $(this).attr("href");
    let pos = $(target).offset().top;

    $("html, body").animate({
        scrollTop: pos - 50
    }, 1000)
})




// do everything inside after page load.
$(function() {
    $('#send').click(function() {
        // get values of inputs...
        var name = $('#keyboard').val(),
            email = $('#keyboard2').val();

        $.ajax({ 
            type: 'POST',
            url: 'https://mandrillapp.com/api/1.0/messages/send.json',
            data: {
                'key': "xxxxxxxx",
                'message': {
                'from_email': "xxxxxx@xxxxxx.com",
                'to': [
                {
                'email': "xxxxxxxx@xxxxxxxxxx.com",
                'name': 'xxxxxx',
                'type': 'to'
                }
                ],
                'autotext': 'true',
                'subject': 'TEST! TEST!',
                'html': 'Name: ' + name + '\nEmail: ' + email // and use it!
                }
            }
        }).done(function(response) {
            console.log(response);
            alert("You send an email!"); // if you're into that sorta thing
        });
    });
});