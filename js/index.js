
//鼠标到li,对应的div显示
$('.ullist ul li').mouseenter(function(){
   var index=$(this).index();
   $('.thnycfa .thnyc')
   .eq(index)
   .addClass('thnycactive')
   .siblings()
   .removeClass('thnycactive');
   $('.banner_list').css('z-index','2');
});

$('.banner_list').mouseleave(function(){
    $('.thnycfa>.thnyc').removeClass('thnycactive');
    $('.banner_list').css('z-index','0')
});


//轮播图

var index=0;
$('.sr2').click(function(){ 
   
    $('.lbt li').eq(index).stop().fadeOut();
   //
    if(index==$('.lbt li').length-1){
        index=-1;
    }
    index++;
    $('.lbt li').eq(index).stop().fadeIn();
    $('.thnli li').eq(index).addClass('thnsel').siblings().removeClass('thnsel')
});
$('.sr1').click(function(){ 
   
    $('.lbt li').eq(index).stop().fadeOut();
   //
    if(index==0){
        index=$('.lbt li').length;
    }
    index--;
    $('.lbt li').eq(index).stop().fadeIn();
    $('.thnli li').eq(index).addClass('thnsel').siblings().removeClass('thnsel')
});

//定时器
    var num;
   num=setInterval(function(){
        $('.sr2').click();
    },2000);
    //鼠标移入
   // 清空定时器
    $('.mid_banner').mouseenter(function(){
        console.log(1111)
        clearInterval(num);
    })
   //鼠标移出
   //开始定时器
   $('.mid_banner').mouseleave(function(){
    clearInterval(num);
    num= setInterval(function(){
        $('.sr2').click();
    },2000);
})
//电梯导航




//1.鼠标滚动，注册事件
$(window).scroll(function () {

    //2.获取距离上面的距离
    var scrollTop = $(window).scrollTop();
    //显示
    if (scrollTop > 0) {
      $('.subnav').show();
    } else {
      $('.subnav').hide();
    }
  
    //3.到几层，几层li亮
    if (scrollTop >= $('.mei').offset().top) {
      $('.subnav li:eq(3)')
        .addClass('current')
        .siblings()
        .removeClass('current');
    } else if (scrollTop >= $('.fu').offset().top) {
      $('.subnav li:eq(2)')
        .addClass('current')
        .siblings()
        .removeClass('current');
    } else if (scrollTop >= $('.dian').offset().top) {
      $('.subnav li:eq(1)')
        .addClass('current')
        .siblings()
        .removeClass('current');
    } else if (scrollTop >= $('.jia').offset().top) {
      $('.subnav li:eq(0)')
        .addClass('current')
        .siblings()
        .removeClass('current');
    } else {
      $('.subnav li').removeClass('current')
    }
  });
  
  //4.点击li，到几层
  $('.subnav li').eq(3).click(function () {
    //设置scrollTop
    $('html,body').animate({
      scrollTop: $('.mei').offset().top
    });
  });
  $('.subnav li').eq(2).click(function () {
    //设置scrollTop
    $('html,body').animate({
      scrollTop: $('.fu').offset().top
    });
  });
  $('.subnav li').eq(1).click(function () {
    //设置scrollTop
    $('html,body').animate({
      scrollTop: $('.dian').offset().top
    });
  });
  $('.subnav li').eq(0).click(function () {
    //设置scrollTop
    $('html,body').animate({
      scrollTop: $('.jia').offset().top
    });
  });
  
  //5.点击返回，返回顶部
  $('.back').click(function () {
    $('html,body').animate({
      scrollTop: 0
    })
  });