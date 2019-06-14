
      // menu를 누르면 sub이 나타나고 이 때 화살표 모양은 up이었다가 클릭하면 down 모양으로 바뀐다.
    $(document).ready(function(){
      $("#gnb a.dp1").click(function(){
        $(".sub").removeClass("on");
        $(this).next(".sub").addClass("on");
        $("#gnb a.dp1").removeClass("on");
        $(this).addClass("on");
      });
      var wd = parseInt($(".vs").width());
      $(".btnbox li").click(function(){
        var idx = $(this).index();
        $(".imgbox").not(":animated").animate({"margin-left":wd*idx*-1+"px"},600);
        $(".btnbox li").removeClass("on");
        $(this).addClass("on");
    });

    });
