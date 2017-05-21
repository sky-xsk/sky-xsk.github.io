$(window).load(function(){
	(function(){
		//weixin
		$('.weixin').hover(function(){
			$(this).children('.weixin_main').stop().slideDown(300);	
		},function(){
			$(this).children('.weixin_main').stop().slideUp(300);		
		})	
		//nav
		$('.nav_list li').eq(3).addClass('other');
		$('.nav_list li').eq(4).addClass('other');
		$('.nav_list li').eq(5).addClass('other');
		$('.nav_list li').each(function(){
			$(this).addClass('li'+$(this).index());	
		})
		
		
		$('.nav_list li').hover(function(){
			$('.subnav_bg').stop().slideDown(300);
			$(this).children('.subnav').show();	
			$(this).find('.subnav a').each(function(){
				$(this).delay($(this).index()*300).fadeIn(1000);
			});
		},function(){
			$('.subnav_bg').stop().slideUp(300);
			$(this).children('.subnav').hide().children('a').hide();	
		})
		
	})();	
	//banner
	(function(){
		var imgList=$('.banner_list li');
		var aBtn=$('.banner_dot span');
		var lBtn=$('.banner_left');
		var rBtn=$('.banner_right');	
		var index=0;
		function hideShow(){
			imgList.eq(index).fadeIn().siblings().fadeOut();	
			aBtn.eq(index).addClass('active').siblings().removeClass('active');
		}
		function next(){
			if(index>imgList.length-1)
			index=0;
			else if(index<0)
			index=imgList.length-1;
			hideShow();	
		}
		function play(){
			index++;
			next();	
		}
		var timer=setInterval(play,5000);
		aBtn.click(function(){
			clearInterval(timer);
			index=$(this).index();
			next();
			timer=setInterval(play,5000);
		})
		imgList.hover(function(){
			clearInterval(timer);
		},function(){
			timer=setInterval(play,5000);	
		})
		lBtn.click(function(){
			clearInterval(timer);
			index--;
			next();
			timer=setInterval(play,5000);
		})
		rBtn.click(function(){
			clearInterval(timer);
			index++;
			next();
			timer=setInterval(play,5000);
		})
	})();
	(function(){
		$('.video_list li').hover(function(){
			$(this).children('.video_bg').stop().animate({'top':'20px'},'slow');
			$(this).children('.video_icon').stop().animate({'top':'284px'},'slow');	
		},function(){
			$(this).children('.video_bg').stop().animate({'top':'-224px'},'slow');
			$(this).children('.video_icon').stop().animate({'top':'207px'},'slow');	
		})
		var length=$('.video_list li').length;
		$('.video_list li').each(function(){
			if($(this).index()%4==0)
			$(this).addClass('other01');
			else if($(this).index()%5==0)
			$(this).addClass('other02');
			else if($(this).index()%6==0)
			$(this).addClass('other03')	
		})
			
	})();
	(function(){
		$('.question_list li .question').click(function(){
			if($(this).css('dislpay')=='block')
			{
				$(this).siblings('.answer').stop().slideUp(300);
				
			
			}
			else
			{
				$(this).siblings('.answer').stop().slideDown(300);
				$(this).parents('li').siblings().children('.answer').stop().slideUp(300);
			}
			
		})	
	})();
	(function(){
		var index=0;
		$('.link_list li').each(function(){
			var n=$(this).index()%8
			if(n==0 || n==2 || n==5 || n==7)
			{
				$(this).addClass('other');
			}
		})	
	})();
	(function(){
		function change(){			
			var nn=$(window).width()-260;
			var hh=$('.music_banner img').height();
			$('.music_list').css('width',nn);
			$('.music_list').css('padding-top',hh);
			var nn2=nn/4;
			var hh2=nn2*288/295;
			$('.music_list li').css('width',nn2);
			$('.music_list li').css('height',hh2);
			$('.music_list li .music_touming').css('width',nn2-28);
			$('.music_list li .music_touming').css('height',hh2).hide().delay(800).show(1);
			$('.menu_main_left').css('height',hh-20);
		}
		
		change();
		$(window).resize(function(){
			$('.music_list li .music_touming').hide().delay(800).show(1);
			change();			
		});
	})();
	(function(){
		var imgList=$('.menu_slide_main>ul li');
		var lBtn=$('.menu_slide .prev');
		var rBtn=$('.menu_slide .next');
		var num=4;
		var index=0;
		if(imgList.lengt<=num)return false;
		function scrollUl(){
			if(index>imgList.length-4)
			index=imgList.length-4
			else if(index<0)
			index=0
			$('.menu_slide_main>ul').stop(true,true).animate({'left':-index*236},500);	
		}	
		lBtn.click(function(){
			index--;
			scrollUl();	
		})
		rBtn.click(function(){
			index++;
			scrollUl();	
		})
	})();
	(function(){
		$('.jp-container2').scroll_absolute({arrows:false});	
	})();
	//return top
	$('.return_top a').click(function(){
		$('body,html').animate({scrollTop:0},1000);
		return false;	
	})
	
	
})
