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

