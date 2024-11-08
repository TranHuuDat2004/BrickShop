fontSize();
$(window).resize(function(){
	fontSize();
	});
function fontSize(){
	var size;
	var winW=$(window).width();
	if(winW<=1680 && winW>800){
		size=Math.round(winW/16.8);
	}else if(winW<=800){
		size=Math.round(winW/7.5);
		if(size>65){
			size=65;
			}
	}else{
		size=100;
		}
	$('html').css({
		'font-size':size+'px'
		})
	}
//--
$(function(){
	//--
	$('.navA').click(function(){
		$('.navLayer').animate({ right: "0", width: "100%" }, 500);
		setTimeout(function () { $('.navLayer .lan').css({ 'position': 'fixed' }) }, 500)
		})
	$('.navLayer').find('.closeBtn').click(function(){
		$('.navLayer').animate({right: "-100%",width:0}, 500);
		$('.navLayer').find('a').removeClass('aNow');
		$('.navLayer').find('.list').hide();
		$('.navLayer .lan').css({ 'position': 'absolute' })
		})
	//--
	$('.tabContentDiv').find('.tabContent:first').show();
	$('.tab').each(function(i){
		$(this).find('li').each(function(ii){
			$(this).hover(
			function(){
				$('.tab').eq(i).find('li').removeClass('liNow');
				$(this).addClass('liNow');
				$('.tabContentDiv').eq(i).find('.tabContent').hide();
				$('.tabContentDiv').eq(i).find('.tabContent').removeClass('on');
				$('.tabContentDiv').eq(i).find('.tabContent').eq(ii).addClass('on');
				$('.tabContentDiv').eq(i).find('.tabContent').eq(ii).show();
				},
			function(){}	
				)
			})
		})
	//ä¸‹æ‹‰é€ç”¨
	$('.select').each(function(i){
		function showFn(selectObj) {	
			
			$('.select').children("dd").slideUp(200);
			selectObj.children("dd").slideDown(200);
			selectObj.addClass('on');
		}  
		function hideFn(selectObj){   
			selectObj.children("dd").slideUp(200);
			selectObj.removeClass('on');
		}
		function hideAll(){
			$('.select dd').slideUp(200);
		};

		$(this).children('dt').click(function(){
			var index = $(this).parent().index();
			var selectObj = $(this).parent();
			$(this).next().is(":hidden")?showFn(selectObj):hideFn(selectObj);
		});
		$(this).children('dd').find("li").click(function(){   
			var index = $(this).closest('.select').index();
			var dataId=$(this).attr('data-id');
			var selectObj = $(this).closest('.select');
			$(this).closest('.select').children("dt").find('a').html($(this).html());
			$(this).closest('.select').children("dt").find('a').attr('data-id',dataId);
			hideFn(selectObj);
		});
		$("body").click(function(i){ 
			!$(i.target).parents(".select").first().is($(".select")) ? hideAll():"";
		});

	});
})