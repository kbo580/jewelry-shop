
$(function(){

  // スライダー
  $('.slider').slick({
		autoplay: true,//自動的に動き出すか。初期値はfalse。
		infinite: true,//スライドをループさせるかどうか。初期値はtrue。
		speed: 800,//スライドのスピード。初期値は300。
		slidesToShow: 3,//スライドを画面に3枚見せる
		slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
		prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
		nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
		centerMode: true,//要素を中央ぞろえにする
		variableWidth: true,//幅の違う画像の高さを揃えて表示
		// dots: true,//下部ドットナビゲーションの表示
	});

  // ハンバーガー
  $(".humberger").click(function () {//ボタンがクリックされたら
    $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
      $("#spHeaderNav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
  });

  $("#spHeaderNav a").click(function () {//ナビゲーションのリンクがクリックされたら
      $(".humberger").removeClass('active');//ボタンの activeクラスを除去し
      $("#spHeaderNav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
  });

  // 固定ヘッダー
  var fixedNav = $( '.header-nav' ).offset().top;
  $(window).scroll(function(){
    if($(this).scrollTop()>fixedNav){
      $('.header-nav').addClass('nav-wrapper-scroll');
    }else{
      $('.header-nav').removeClass('nav-wrapper-scroll');
    }
  });

  // スクロール
  $('.header-nav ul li a').on("click", function(){
    if( $(".header-nav").hasClass("nav-wrapper-scroll")){
      // ヘッダーナビの分だけマイナス
      var navHeight = 70;
      var id =$(this).attr('href');
      var pos = $(id).offset().top - navHeight;
      $('html, body').animate({'scrollTop': pos}, 500);
      return false;

    }else{
      // ヘッダーとpaddingの分をマイナス
      var minu = 170;
      var id =$(this).attr('href');
      var pos = $(id).offset().top-minu;
      $('html, body').animate({'scrollTop': pos}, 500);
      return false;
    }
  });

  //画面をスクロールしたら
  $(window).scroll(function(){
    //height600以上でボタンがfadein
  if($(this).scrollTop()>1000){
    $('#toTop').fadeIn();
    //height600以下でボタンがfadeout
    return false;
  }else{
    $('#toTop').fadeOut();
    return false;
  }
  });

  //「topへ戻る」ボタンを押すとtopから0の地点へスクロールする
  $('#toTop').click(function(){ 
    $('html,body').animate({'scrollTop':0},500);
    return false;
  });



  
    

















});