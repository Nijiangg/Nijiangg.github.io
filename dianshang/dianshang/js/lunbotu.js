

$(function(){
	var page = 1;
	var i = 4;

	$('span.next').click(function(){
	var $parent = $(this).parents('div.weibu')； //找到祖先元素
	var $v_show = $parent.find('div.content_list');//找到视频展示区域
	var $v_content = $parent.find('div.content');//找到视频展示区外围div

	var v_width = $v_content.width(); //获取区域内容的宽度
	var len = $v_show.find('li').length; //总的视频图片数
	var page_count = Math.ceil(len/i);
	if(page == page_count){
		//如果已经到最后一个版面
		$v_show.animate({ left:'0px' },'slow'); //通过改变left值跳转到第一个版面
		page = 1;
	}else{
		$v_show.animate({ left: '-='+v_width},'slow'); //改变left值达到每次换一个版面
		page++;
	}
})
})
