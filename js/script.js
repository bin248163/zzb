var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "//hm.baidu.com/hm.js?e36a613b3a493df38e5d52f810fe62fa";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();

$(function() {
	
	//禁止右键代码，单机鼠标右键时禁止它的默认事件
	/*var body = document.getElementsByTagName('body')[0];
	body.oncontextmenu = function() {
		return false;
	}*/
	

	
	var zsq=$('#z-sq');
	var zsqs=$('#z-sq span');
	var sqw = $('#sq');
	var sq = $('#sq div');
	var lqq=$('#l-qq');
	sq.hover(function() {
		$(this).find('div').show();
	}, function() {
		$(this).find('div').hide();
	});
	$top = $('#top');
	$(window).scroll(function() {
		if ($(window).scrollTop() > 400) {
			sqw.fadeIn(500);//一秒渐入动画
	
		} else {
			sqw.fadeOut(500);

		}
	});
	zsqs.click(function(){
		zsq.hide();
	})

	$top.click(function() {
		var speed = 300; //滑动的速度
		$('body,html').animate({
			scrollTop: 0
		}, speed);
		return false;
	});
	//about
	var $ppai=$('#ppai'),
	    $jjie=$('#jjie'),
	    $whua=$('#whua'),
	    $tdui=$('#tdui'),
	    $jshao=$('#jshao'),
	    $lnian=$('#lnian'),
	    $lxi=$('#lxi'),
	    $ppain=$('#ppain'),
	    $jjien=$('#jjien'),
	    $whuan=$('#whuan'),
	    $tduin=$('#tduin'),
	    $jshaon=$('#jshaon'),
	    $lniann=$('#lniann'),
	    $lxin=$('#lxin');
	$ppai.click(function(){
		 var scroll_offset = $ppain.offset();
		   $("body,html").animate({ scrollTop:scroll_offset.top },500);
         return false;
    });
    $jjie.click(function(){
		 var scroll_offset = $jjien.offset();
		   $("body,html").animate({ scrollTop:scroll_offset.top },500);
         return false;
    });
    $whua.click(function(){
		 var scroll_offset = $whuan.offset();
		   $("body,html").animate({ scrollTop:scroll_offset.top },500);
         return false;
    });
    $tdui.click(function(){
		 var scroll_offset = $tduin.offset();
		   $("body,html").animate({ scrollTop:scroll_offset.top },500);
         return false;
    });
    $jshao.click(function(){
		 var scroll_offset = $jshaon.offset();
		   $("body,html").animate({ scrollTop:scroll_offset.top },500);
         return false;
    });
    $lnian.click(function(){
		 var scroll_offset = $lniann.offset();
		   $("body,html").animate({ scrollTop:scroll_offset.top },500);
         return false;
    });
    $lxi.click(function(){
		 var scroll_offset = $lxin.offset();
		   $("body,html").animate({ scrollTop:scroll_offset.top },500);
         return false;
    });


	//banner
	var bannerSlider = new Slider($('#banner_tabs'), {
		time: 5000,
		delay: 400,
		event: 'hover',
		auto: true,
		mode: 'fade',
		controller: $('#bannerCtrl'),
		activeControllerCls: 'active'
	});
	$('#banner_tabs .flex-prev').click(function() {
		bannerSlider.prev()
	});
	$('#banner_tabs .flex-next').click(function() {
		bannerSlider.next()
	});
	//二级菜单隐藏
	var $nav = $('#nav ul li');
	$nav.hover(function() {
			$(this).find('ul').slideDown(200);
		}, function() {
			$(this).find('ul').delay(200).hide(0);
		})
	
	//左右滚动
	$(".gd_main div span").mouseover(function(){
		$(this).addClass("gd_main_span1").siblings("span").removeClass("gd_main_span1");
	}).mouseout(function(){
		$(this).removeClass("gd_main_span1").siblings("span");
	})	
	
	var 
		 index = 0 ;
		Swidth = 1000 ;
		 timer = null ;
		   len = $(".gd_title span a").length ; 
		
		function NextPage()
		{	
			if(index>2)
			{
				index = 0 ;
			}
			$(".gd_title span a").removeClass("gd_title_a1").eq(index).addClass("gd_title_a1");
			$(".gd_main").stop(true, false).animate({left: -index*Swidth+"px"},600)		
		}
		
		function PrevPage()
		{	
			if(index<0)
			{
				index = 2 ;
			}
			$(".gd_title span a").removeClass("gd_title_a1").eq(index).addClass("gd_title_a1");
			$(".gd_main").stop(true, false).animate({left: -index*Swidth+"px"},600)		
		}
		
		$(".gd_title span a").each(function(a){
            $(this).mouseover(function(){
				index = a ;
				NextPage();
			});
        });
		//下一页
		$(".gd_next").click(function(){
			 index++ ;
			 NextPage();
		});
		//上一页
		$(".gd_prev").click(function(){
			 index-- ;
			 PrevPage();
		});
		//自动滚动
		var timer = setInterval(function(){
				index++ ;
				NextPage();
			},4000);
			
		$(".gd_next, #gd_main , .gd_prev").mouseover(function(){
			clearInterval(timer);
		});
		$(".gd_next, #gd_main , .gd_prev").mouseleave(function(){
			timer = setInterval(function(){
				index++ ;
				NextPage();
			},4000);	
		});
     //首页tab1
	

	var $tabList = $('#tablist1 ul li');
	var $tab = $('#tab1');
	$tabList.hover(function() {
		$(this).addClass('this').siblings().removeClass('this');
		var index = $tabList.index(this);
		$tab.find('>div').eq(index).show().siblings().hide();
	})
	$tabList.click(function() {
			$(this).addClass('this').siblings().removeClass('this');
			var index = $tabList.index(this);
			$tab.find('>div').eq(index).show().siblings().hide();
			return false;
		})
		//返回顶部
	$top = $('#top');
	$top.click(function() {
		$('body,html').animate({
			scrollTop: 0
		}, 300);
		return false;
	});
	//向左滚动效果
	if ($('#demo')[0]) {
		var speed = 50; //数字越大速度越慢
	    var t = $('#demo')[0];
	    var t1 = $('#demo1')[0];
	    var t2 = $('#demo2')[0];
	    t2.innerHTML = t1.innerHTML;
	    function Marquee() {
		    if(t2.offsetWidth - t.scrollLeft <= 0)
			    t.scrollLeft -= t1.offsetWidth;
		    else {
			    t.scrollLeft++;
		    }
	    }
	    var MyMar = setInterval(Marquee, speed);
	    t.onmouseover = function() {clearInterval(MyMar)};
	    t.onmouseout = function() {MyMar = setInterval(Marquee, speed)};
	    } else{return false;}
	
	//图片预加载
	function preloader() {
		if(document.images) {
			var img1 = new Image();
			var img2 = new Image();
			var img3 = new Image();
			img1.src = "/images/banner1.jpg";
			img2.src = "/images/banner2.jpg";
			img3.src = "/images/banner3.jpg";
		}
	}

	function addLoadEvent(func) {
		var oldonload = window.onload;
		if(typeof window.onload != 'function') {
			window.onload = func;
		} else {
			window.onload = function() {
				if(oldonload) {
					oldonload();
				}
				func();
			}
		}
	}
	addLoadEvent(preloader);
})