$('#skin-btns span').on('click',function(){
	thiscol =this;
	console.log(thiscol);
	$(this).addClass('selected').siblings().removeClass('selected');
	$('.top').css('background',$(this).attr('skin-color'));
	$('.flower-show').css('background',$(this).attr('skin-color'));
	$('#flower-nav').css('background',$(this).attr('skin-color'));
	$('.top-nav li:first-child').css('background',$(this).attr('skin-color'));
	$('.login').css('background',$(this).attr('skin-color'));
	$('.top-nav li').on('mouseover',function(){
		$(this).css('background',$(thiscol).attr('skin-color'));
	}).on('mouseout',function(){
		$(this).css('background','');
		//$(this).removeAttr('background');

	});
	//$('.top-nav li').toggle(
	//	function(){$(this).on('mouseover',function(){
	//	$(this).css('background',$(thiscol).attr('skin-color'));
	//})})
});


//鼠标划入
$("#flower-nav").on('mouseover',function(){
	$('.flower-show').css('display','block').css('z-index','1');
}).on('mouseout',function(){
	$('.flower-show').css('display','none')
})

//
var $btns = $('.carousel-btns li');
var index =0;
run();
$btns.on('click',function(){
	$(this).addClass('car-selected').siblings().removeClass('car-selected');
	// console.log($(this).index());
	 index = $(this).index();
	 // 怎么处理淡入淡出
	$('.carsousel-imgs img').eq(index).fadeIn().siblings().fadeOut();
});
var timer;
	// console.log(timer);
	$('.carousel').on('mouseover',function(){
		clearInterval(timer);
	}).on('mouseout',function(){
		run();
	})
	function run(){
		timer = setInterval(function(){

			index++;
			if(index == $btns.length){
				index =0;
			}
			$btns.eq(index).trigger('click');
		},2000)
	}
//注册的按钮
 var html1 ='<input type="password" placeholder="确认密码" class="login-input">'
$('.register').on('click',function(){
	// console.log('abcd');
	// console.log($('.login-input').last().index());
	if($('.login-input').last().index()==2){
		console.log('不可以添加了')
		// $(html1).appendTo('.input-form');	
	}else{
		$(html1).appendTo('.input-form');
	};
	
})
//鼠标划入出现微信二维码
$(".menu-left li:last-child").on('mouseover',function(){
	$('.wechat').css('display','block').css('z-index','1');
}).on('mouseout',function(){
	$('.wechat').css('display','none')
})
