

   //첫 번째 슬라이더


    // 방법 2 토글 나타내기
    $(document).ready(function(){

    var sw1 = true;
    
    $(".stick").click(function(){
        if(sw1){
        $(".hdtoggle").stop().animate({"right":"0px"}, 200);
    }else{
        $(".hdtoggle").stop().animate({"right":"-100%"}, 200);    
    }
    sw1=!sw1
    });
});
$(document).ready(function(){
    $(".lngbtn").click(function(){
        $(".lng, .lngbtn2").fadeIn();
        $(".lngbtn").fadeOut();
    });
    $(".lngbtn2").click(function(){
        $(".lng, .lngbtn2").fadeOut();
        $(".lngbtn").fadeIn();
    });
});
// 한페이지씩 상하 넘기기 
$(document).ready(function(){
    var wh = $(window).height();
    $(".page").each(function(index){
        $(this).attr("data-val", index*wh);
    });
    $(".page").on("mousewheel DOMMouseScroll", function(e){
        var secPos = parseInt($(this).attr("data-val"));
        if(e.originalEvent.wheelDelta >= 0){
            $("html, body").stop().animate({scrollTop:secPos - wh}, 800);
            return false;
        } else if(e.originalEvent.wheelDelta < 0){
            $("html, body").stop().animate({scrollTop:secPos + wh}, 800);
            return false;
        }
    });
    $(".slbtnbox li").click(function(){
        var ix = $(this).index();
        $("html, body").stop().animate({scrollTop:wh*ix}, 800);
    });
    $(window).scroll(function(){
        var pageSc = $(window).scrollTop();
        var pacgeCnt = parseInt(pageSc / wh);
        $(".slbtnbox li").removeClass("on");
        $(".slbtnbox li").eq(pacgeCnt).addClass("on");
    });
});
// 토글메뉴 나타내기
$(document).ready(function(){
    $(".slbtnbox li").click(function(i){
        $(this).addClass("on");
        $(this).siblings().removeClass("on");
        var idx = $(this).index();
        $(".slide1 li").eq(idx).addClass("on");
        $(".slide1 li").eq(idx).siblings().removeClass("on");
        $(".slbtnbox").not(":animated").animate({"margin-left":idx*-1*wd});
   });
});
    
$(document).ready(function(){
        var sw = true;
        $(".stick").click(function(){
            if(sw){
                $(".hdtoggle").addClass("on");
                $(".stick").addClass("on");
            } else {
                $(".stick").removeClass("on");
                $(".hdtoggle").removeClass("on");
            }
            sw = !sw
        });
    });
// 첫슬라이드 그림
$(document).ready(function(){
    var intv = setInterval(function() { nextAni(); }, 2800);
    function nextAni() {
        $(".slide1").not(":animated").animate({"margin-left":"-100%"}, 800, function(){
            $(".slide1 li").eq(0).appendTo($(".slide1"));
            $(".slide1").css("margin-left", "0px");
        });
    }
    function prevAni(){
        $("slide1 li").eq(2).prependTo($(".slide1"));
        $(".slide1").css("margin-left", "-100%");
        $(".slide1").not(":animated").animate({"margin-left":"0px"}, 800);
    }
});  
// //magazine slide
$(document).ready(function(){
    var intv=setInterval(function(){ nextAni(); }, 3000);
   function nextAni(){ //nextAni()함수 : 다음 이미지 모션 정의
        $(".vsbox ul").eq(0).appendTo($(".vsbox"));
        $(".vsbox ul").eq(0).addClass("on");
        $(".vsbox ul").not(":first-child").removeClass("on");
    }
    function prevAni(){
        $(".vsbox ul").eq(2).prependTo($(".vsbox"));
        $(".vsbox ul").eq(0).addClass("on");
        $("..vsbox ul").not(":first-child").removeClass("on");
    }
    });
    // mazazine slide
    $(document).ready(function(){
        var intv=setInterval(function(){ nextAni(); }, 2900);
       function nextAni(){ //nextAni()함수 : 다음 이미지 모션 정의
            $(".magazine li").eq(0).appendTo($(".magazine"));
            $(".magazine li").eq(0).addClass("on");
            $(".magazine li").not(":first-child").removeClass("on");
        }
        function prevAni(){
            $(".magazine lii").eq(2).prependTo($(".magazine"));
            $(".magazine li").eq(0).addClass("on");
            $(".magazine li").not(":first-child").removeClass("on");
        }
    });