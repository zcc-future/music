$(function(){
	var inner=2;
	
	var music=[
		{
			name:'安和桥',
			author:'包师语',
			src:"music/包师语 - 安和桥.mp3"
		},
		{
			name:'方圆几里 (Live)',
			author:'薛之谦 ',
			src:'music/薛之谦 - 方圆几里 (Live).mp3'
		},
		{
			name:'男人歌',
			author:'晋商魂',
			src:'music/男人歌.mp3'
		}
	];
	//声明变量
	var audio = $("#audio").get(0);
	var play = $("#play");
	var pause=$("#pause");
	var current=$("#current-time");
	var duration=$("#duration");
	var progress=$("#progress");
	var pi=$("#p-i");
	var vol=$("#volume");
	var vi=$("#v-i");
	var mote = $("#mote");
	var but1=$(".pre")
	var but2=$(".next")
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
		
		$.each(music,function(i , v){
			var c=(i === inner) ? "active" : "";
			$('<li class="'+c+'"><span>'+v.name+'</span><span class="author">'+v.author+'</span></li>').appendTo("#list");
		});
	}

	$("#list").on("click","li",function(){
		$("#list").find("li").removeClass('active');
		$(this).addClass("active");
		inner = $(this).index();
		audio.src = music[inner].src;
		audio.play();
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
			play.html("暂停");
	})
	$(audio).on("pause",function(){
			play.html("播放");
	})
	//歌曲播放过程中调用的函数
	$(audio).on("timeupdate",function(){
		current.html(format(audio.currentTime));
		var left = progress.width() * audio.currentTime / audio.duration - pi.width() / 2;
		pi.css("left",left);
	});
	//歌曲进度条点击
	progress.on('click',function(e){
		audio.currentTime=e.offsetX/$(this).width()*audio.duration;
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
		}else{
			$(this).attr("data-v",audio.volume);
			audio.volume=0;
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
	


});
