$("documnt").ready(function () {
    $(".menu").on("click", function () {
        $(".sidenav").animate({
            width: "250px",
        })
    })

    scaleVideoContainer();

    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');

    $(window).on('resize', function () {
        scaleVideoContainer();
        scaleBannerVideoSize('.video-container .poster img');
        scaleBannerVideoSize('.video-container .filter');
        scaleBannerVideoSize('.video-container video');
    });

    function scaleVideoContainer() {

        var height = $(window).height() + 5;
        var unitHeight = parseInt(height) + 'px';
        $('.homepage-hero-module').css('height', unitHeight);

    }

    function initBannerVideoSize(element) {

        $(element).each(function () {
            $(this).data('height', $(this).height());
            $(this).data('width', $(this).width());
        });

        scaleBannerVideoSize(element);

    }

    function scaleBannerVideoSize(element) {

        var windowWidth = $(window).width(),
            windowHeight = $(window).height() + 5,
            videoWidth,
            videoHeight;

        $(element).each(function () {
            var videoAspectRatio = $(this).data('height') / $(this).data('width');

            $(this).width(windowWidth);

            if (windowWidth < 1000) {
                videoHeight = windowHeight;
                videoWidth = videoHeight / videoAspectRatio;
                $(this).css({ 'margin-top': 0, 'margin-left': -(videoWidth - windowWidth) / 2 + 'px' });

                $(this).width(videoWidth).height(videoHeight);
            }

            $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

        });

    }

    $(".homepagebutton1").animate({
        height: '+= 200px'
    })

    let Introduction = "Hello! Welcome to Thomas's Website!"

    const runletterfunction = () => {
        const printLetter = i => {
            setTimeout(() => {
                $(".welcome").append(Introduction[i])
            }, i*100);
        }
        for(let i=0; i<Introduction.length; i++){
            printLetter(i)
        }
    }
    runletterfunction();

    $(".closemenu").on("click", function () {
        $(".sidenav").animate({
            width: "0",
        })
    })
    $(window).scroll(function () {
        if($(window).scrollTop()>5){
            // $(".menu").animate({
            //     fontSize: "40px"
            // });
            var i = $(window).scrollTop();
            
            console.log("i", i)
            // console.log(typeof i)
            var colorArray = [255,255,255,i/200];            
            $("nav").css({"backgroundColor": "rgba(" + colorArray.join() +")"})
            // if($(".menu").css("width")<"40px"){
                $(".menu").css("width", 10+i+"px")
            // }
            

        }else{
            $(".menu").animate({
                fontSize: "25px"
            });
            $("nav").css("background-color", "transparent")
        }
        if ($(window).scrollTop() > 150) {
            $(".personal-profile").addClass("come-in")
        }
        if ($(window).scrollTop() > 350) {
            $(".projects").addClass("come-in")
        }
    });
    // $(window).scroll(function () {
    //     console.log($(window).scrollTop());
    //     if ($(window).scrollTop() > 200) {
    //         $('#div').stop().animate({
    //             'marginTop': $(window).scrollTop() + 'px',
    //             'marginLeft': $(window).scrollLeft() + 'px'
    //         }, 'slow');
    //     }
    // });

    $(".menu").animate({ scrollTop: 0 }, 500, 'swing', function () {
        // alert("Finished animating");
    });

    // var navBarColor = {
    //     white: [255, 255 ,255];
    
    // };



})

    





