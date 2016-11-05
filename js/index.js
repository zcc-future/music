$(function(){
	var inner=2;
	
	var music=[
		{
			name:'安和桥',
			author:'包师语',
			src:"music/包师语 - 安和桥.mp3",
			
		},
		{
			name:'男人歌',
			author:'晋商魂',
			src:'music/男人歌.mp3'
			
		},
		{
			name:'方圆几里 (Live)',
			author:'薛之谦 ',
			src:'music/薛之谦 - 方圆几里 (Live).mp3',
			geci:"<li>《方圆几里》</li><li>词/曲/唱：薛之谦</li><li>感觉很诚恳 是好事</li><li>不需要发誓 那么幼稚</li><li>本以为可以 就这样随你</li><li>反正我也无处可去</li><li>我怕太负责任的人</li><li>因为他随时会牺牲</li><li>爱不爱都可以 我怎样都依你</li><li>连借口 我都帮你寻</li><li>与其在你不要的世界里</li><li>不如痛快把你忘记</li><li>这道理谁都懂 说容易 爱透了还要嘴硬</li><li>我宁愿 留在你方圆几里</li><li>我的心 要不回就送你</li><li>因为我爱你 和你没关系</li><li>感觉会压抑 的样子</li><li>勉强 也没什么意思</li><li>我不算很自私 也越来越懂事</li><li>爱你只是我的事</li><li>与其在你不要的世界里</li><li>不如痛快把你忘记</li><li>这道理谁都懂 说容易 爱透了还要嘴硬</li><li>我宁愿 留在你方圆几里</li><li>至少能感受你的悲喜</li><li>在你需要我的时候 就能陪你</li><li>我在你 不要的世界里</li><li>何苦不找个人来代替</li><li>可惜我 谁劝都不停</li><li>我宁愿 留在你方圆几里</li><li>我的心 要不回就送你</li><li>爱不爱都可以 我怎样都依你</li><li>因为我爱你 和你没关系</li><li>我的爱 扩散在方圆几里</li><li>近的能 听见你的呼吸</li><li>只要你转身 我就在这里</li>"
		}
	];
	//声明变量
	var audio = $("#audio").get(0);
	var play = $("#play");
	var pause=$("#pause");
	var current=$("#current-time");
	var duration=$("#duration");
	var progress=$("#progress");
	var progress_1=$("#progress_1");
	var pi=$("#p-i");
	var vol=$("#volume");
	var vi=$("#v-i");
	var mote = $("#mote");
	var but1=$(".pre")
	var but2=$(".next")
	var yinliang=$(".yinliang")
	var geciHeight=$("#geci ul").height()
	//将秒数转为时间
	function format(v){
		var v = Math.floor(v);
		var s = v % 60;
		var m = Math.floor(v/60);
		s = (s < 10)?( '0' + s) : s;
		return m+":"+s;
	}
	$(audio).on("canplay",function(){
		duration.html(format(audio.duration));
	})
	function render(){
		$("#list").empty();
		audio.src = music[inner].src;
		head()
		$.each(music,function(i , v){
			var c=(i === inner) ? "active" : "";
			$('<li class="'+c+'"><span class="name">'+v.name+'</span>-<span class="author">'+v.author+'</span></li>').appendTo("#list");
		});
	}
	//头部歌名和歌手 歌词
	function head(){
		$("#head").html("");
		$("#author").html("");
		$("#geci").html("");
		$('<li class="headname">'+music[inner].name+'</li>').appendTo("#head");
		$('<li class="headauthor">—'+music[inner].author+'—</li>').appendTo("#author");
		$('<ul>'+music[inner].geci+'</ul>').appendTo("#geci");
		
	}

	$("#list").on("click","li",function(){
		$("#list").find("li").removeClass('active');
		$(this).addClass("active");
		inner = $(this).index();
		audio.src = music[inner].src;
		audio.play();
		head();
	});
	render();
	//播放和暂停
	play.on("click",function(){
	
		if(audio.paused){
			audio.play();
		}else{
			audio.pause();
		}
	});
	$(audio).on("play",function(){
			play.css({"background":"url(images/zt.png)","backgroundRepeat":"no-repeat","backgroundPosition":"center","backgroundSize":"80%"});
	})
	$(audio).on("pause",function(){
			play.css({"background":"url(images/bofang.png)","backgroundRepeat":"no-repeat","backgroundPosition":"center","backgroundSize":"80%"});
	})
	//歌曲播放过程中调用的函数
	
	$(audio).on("timeupdate",function(){
		current.html(format(audio.currentTime));
		var left = progress.width() * audio.currentTime / audio.duration - pi.width() / 2;
		pi.css("left",left);
		progress_1.css("width",left);
	});
	//歌曲进度条点击
	progress.on('click',function(e){
		audio.currentTime=e.offsetX/$(this).width()*audio.duration;
		return false;
	});	
	pi.on('click',false);
	// duration.html=format(audio.duration);	
	//歌曲进度拖拽
	pi.on('mousedown',function(e){
		var r=pi.width()/2;
		var start=r-e.offsetX;
//		var start=e.offsetX;
		$(document).on('mousemove',function(e){
			var left=e.clientX-progress.position().left+start;
			var c = left/progress.width()*audio.duration;
			progress_1.css("width",left);
			if(c >= audio.duration || c <= 0){
				return;
			}
			audio.currentTime=c;
		});
		return false;
	});
	$(document).on('mouseup',function(){
		$(document).off("mousemove");
	});
	//音频进度条点击
	vol.on("click",function(e){
		audio.volume = e.offsetX / vol.width();
		mote.removeAttr('data-v');
	});
	vi.on('click',false);
	//音频拖拽
	vi.on("mousedown" , function(e){
//		e.preventDefault();
		var r = vi.width() / 2;
		var start = r - e.offsetX;
		$(document).on("mousemove" , function(e){
//			console.log(e.clientX);
			var left = e.clientX - vol.position().left + start;
			var v = left / vol.width();
			if(v > 1 || v < 0){
				return;
			}
			audio.volume = v;
		});
		return false;
	});
	$(document).on('mouseup',function(){
		$(document).off("mousemove");
	});
	//静音
	mote.on("click",function(){
		if($(this).attr("data-v")){
			audio.volume=$(this).attr("data-v");
			$(this).removeAttr("data-v");
			$(this).css({"background":"url(images/yinliang1.png)","backgroundRepeat":"no-repeat","backgroundPosition":"center","backgroundSize":"60%"});
			
		}else{
			$(this).attr("data-v",audio.volume);
			audio.volume=0;
			$(this).css({"background":"url(images/jingyin1.png)","backgroundRepeat":"no-repeat","backgroundPosition":"center","backgroundSize":"60%"});
			
		}
	});
	$(audio).on("volumechange",function(){
		vi.css("left",vol.width() * audio.volume - vi.width() / 2);		
	});
	
	
	but1.eq(0).click(function(){
		if(inner==undefined){
			inner=music.length-1;
		}else{
			inner--
			if(inner<0){
			inner=music.length-1;
	        }
		}
		render()
		audio.play();
	})	
	but2.eq(0).click(function(){
		if(inner==undefined){
			inner=0;
		}else{
			inner++
			if(inner>=music.length){
			inner=0;
		   }
		}
		render()
		audio.play();
	})
//默认状态
yinliang.css("display","none")
$(".liebiao").css("display","none")
//音量显示及隐藏
	$(".header").on("touchend",".dian",function(){
		yinliang.css("display","block")
		return false;
	})
	yinliang.on("touchend",".yl_2",function(){
		yinliang.css("display","none");
		return false;
	})
//列表显示及隐藏

	$(".foot").on("touchend",".list_1",function(){
		$(".liebiao").css("display","block");
		return false;
	})
	$(".liebiao").on("touchend",".qx_1",function(){
		$(".liebiao").css("display","none");
		return false;
	})
	
	
	
});
