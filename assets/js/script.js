//PC用　ナビゲーションの固定
$(function() {
    // 変数navPosに、nav要素の初期位置を代入
    var navPos = $("#pc_nav").offset().top;

    // ブラウザをスクロール
    $(window).scroll(function() {
        // スクロール量とnav要素の初期位置を比較
        if ($(window).scrollTop() > navPos) {
            // 条件を満たした場合：nav要素をブラウザ上部に固定
            $("#pc_nav").css("position", "fixed");
        } else {
            // 満たさない場合：nav要素を通常の配置にする
            $("#pc_nav").css("position", "static");
        }
    });
});

//スマホ用ナビゲーション開閉

/*$(function(){
    // アイコンをクリック
    $("button").click(function(){
      // ul要素を開閉
      $("ul").slideToggle(200);
    });
  });*/

  $(function(){
    // アイコンをクリック
    $(".fixed_hum").click(function(){
      // ul要素を開閉
      $(".hum").slideToggle(200);
    });
  });
