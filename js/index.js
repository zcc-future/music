$(function(){
	var inner=1;
	
	var music=[
		{
			name:'安和桥',
			author:'包师语',
			src:"music/包师语 - 安和桥.mp3",
			geci:'<li>安和桥 - 包师语</li><li>原唱：宋冬野</li><li>词曲：宋冬野</li><li>编曲：闫天午</li><li>让我再看你一遍 从南到北</li><li>像是被五环路蒙住的双眼</li><li>请你再讲一遍 关于那天</li><li>抱着盒子的姑娘</li><li>和擦汗的男人</li><li>我知道</li><li>那些夏天就像青春一样回不来</li><li>代替梦想的也只能是勉为其难</li><li>我知道</li><li>吹过的牛皮</li><li>也会随青春一笑了之</li><li>让我困在城市里纪念你</li><li>让我再尝一口 秋天的酒</li><li>一直往南方开 不会太久</li><li>让我再听一遍</li><li>最美的那一句</li><li>你回家了 我在等你呢</li><li>我知道</li><li>那个夏天</li><li>就像青春一样回不来</li><li>代替梦想的</li><li>也只能是勉为其难</li><li>我知道</li><li>吹过的牛皮</li><li>也会随青春一笑了之</li><li>让我困在城市里纪念你</li><li>我知道</li><li>那个夏天就像你一样回不来</li><li>我也不会再对谁满怀期待</li><li>我知道</li><li>这个世界 每天都有太多的遗憾</li><li>所以 你好 再见</li><li>我知道</li><li>那个夏天</li><li>就像青春一样回不来</li><li>所以 你好 再见 </li>'
		},
		{
			name:'我可以',
			author:'魏世伟',
			src:'music/我可以.mp3',
			geci:'<li>作词:林唯 蔡昮佑</li><li>作曲:蔡昮佑</li><li>演唱:魏世伟</li><li>寄没有地址的信</li><li>这样的情绪有种距离</li><li>你放着谁的歌曲</li><li>是怎样的心情</li><li>能不能说给我听</li><li>雨下得好安静</li><li>是不是你偷偷在哭泣</li><li>幸福真的不容易</li><li>在你的背景有我爱你</li><li>我可以陪你去看星星</li><li>不用再多说明</li><li>我就要和你在一起</li><li>我不想又再一次和你分离</li><li>我多么想每一次的美丽</li><li>是因为你</li><li>寄没有地址的信</li><li>这样的情绪有种距离</li><li>你放着谁的歌曲</li><li>是怎样的心情</li><li>能不能说给我听</li><li>雨下得好安静</li><li>是不是你偷偷在哭泣</li><li>幸福真的不容易</li><li>在你的背景有我爱你</li><li>我可以陪你去看星星</li><li>不用再多说明</li><li>我就要和你在一起</li><li>我不想又再一次和你分离</li><li>我多么想每一次的美丽</li><li>是因为你</li><li>我可以陪你去看星星</li><li>不用再多说明</li><li>我就要和你在一起</li><li>我不想又再一次和你分离</li><li>我多么想每一次的美丽</li><li>是因为你 </li><li></li><li></li><li></li><li></li><li></li><li></li>'
			
		},
		{
			name:'方圆几里 (Live)',
			author:'薛之谦 ',
			src:'music/薛之谦 - 方圆几里 (Live).mp3',
			geci:"<li>《方圆几里》</li><li></li><li>词/曲/唱：薛之谦</li><li>感觉很诚恳 是好事</li><li>不需要发誓 那么幼稚</li><li>本以为可以 就这样随你</li><li>反正我也无处可去</li><li>我怕太负责任的人</li><li>因为他随时会牺牲</li><li>爱不爱都可以 我怎样都依你</li><li>连借口 我都帮你寻</li><li>与其在你不要的世界里</li><li>不如痛快把你忘记</li><li>这道理谁都懂 说容易 爱透了还要嘴硬</li><li>我宁愿 留在你方圆几里</li><li>我的心 要不回就送你</li><li>因为我爱你 和你没关系</li><li>感觉会压抑 的样子</li><li>勉强 也没什么意思</li><li>我不算很自私 也越来越懂事</li><li>爱你只是我的事</li><li>与其在你不要的世界里</li><li>不如痛快把你忘记</li><li>这道理谁都懂 说容易 爱透了还要嘴硬</li><li>我宁愿 留在你方圆几里</li><li>至少能感受你的悲喜</li><li>在你需要我的时候 就能陪你</li><li>我在你 不要的世界里</li><li>何苦不找个人来代替</li><li>可惜我 谁劝都不停</li><li>我宁愿 留在你方圆几里</li><li>我的心 要不回就送你</li><li>爱不爱都可以 我怎样都依你</li><li>因为我爱你 和你没关系</li><li>我的爱 扩散在方圆几里</li><li>近的能 听见你的呼吸</li><li>只要你转身 我就在这里</li>"
		},
		{
			name:'你还要我怎样',
			author:'魏世伟',
			src:'music/你还要我怎样.mp3',
			geci:'<li>你还要我怎样</li><li>词：薛之谦 曲：薛之谦</li><li>演唱：薛之谦</li><li>你停在了这条我们熟悉的街</li><li>把你准备好的台词全念一遍</li><li>我还在逞强 说着谎</li><li>也没能力遮挡 你去的方向</li><li>至少分开的时候我落落大方</li><li>我后来都会选择绕过那条街</li><li>又多希望在另一条街能遇见</li><li>思念在逞强 不肯忘</li><li>怪我没能力跟随 你去的方向</li><li>若越爱越被动 越要落落大方</li><li>你还要我怎样 要怎样</li><li>你突然来的短信就够我悲伤</li><li>我没能力遗忘 你不用提醒我</li><li>哪怕结局就这样</li><li>我还能怎样 能怎样</li><li>最后还不是落得情人的立场</li><li>你从来不会想 我何必这样</li><li>我慢慢的回到自己的生活圈</li><li>也开始可以接触新的人选</li><li>爱你到最后 不痛不痒</li><li>留言在计较 谁爱过一场</li><li>我剩下一张 没后悔的模样</li><li>你还要我怎样 要怎样</li><li>你千万不要在我婚礼的现场</li><li>我听完你爱的歌 就上了车</li><li>爱过你很值得</li><li>我不要你怎样 没怎样</li><li>我陪你走的路你不能忘</li><li>因为那是我 最快乐的时光</li><li>后来我的生活还算理想</li><li>没为你落到孤单的下场</li><li>有一天晚上 梦一场</li><li>你白发苍苍 说带我流浪</li><li>我还是没犹豫 就随你去天堂</li><li>不管能怎样 我能陪你到天亮 </li>'
		},
		{
			name:'一半',
			author:'魏世伟',
			src:'music/一半.mp3',
			geci:'<li>一半</li><li>作词：薛之谦</li><li>演唱：魏世伟</li><li>多平淡 所以自己刻意为难</li><li>多遗憾 被抛弃的人没喜感</li><li>像被人围起来 就特别放不开</li><li>都在期待 角色要坏 别委屈了人才</li><li>别期待 伤人的话变得柔软</li><li>也别揭穿 剧透的电影不好看</li><li>隔墙有只耳朵 嘲笑你多难过</li><li>你越反驳 越像示弱</li><li>请别再招惹我</li><li>我可以 为我们的散 承担一半</li><li>可我偏要摧毁所有的好感</li><li>看上去能孤独的很圆满</li><li>我做作的表情让自己很难堪</li><li>可感情这玩意儿怎么计算</li><li>别两难 hey晚安</li><li>少了有点不甘 但多了太烦</li><li>多困难 狠话有几句新鲜感</li><li>又有多难 掩饰掉全程的伤感</li><li>我毁了艘小船 逼我们隔着岸</li><li>冷眼旁观 最后一段 对白还有点烂</li><li>你可以 为我们的散 不用承担</li><li>是我 投入到一半 感到不安</li><li>好过未来一点一点纠缠</li><li>我帮你 摘下的那颗廉价指环</li><li>像赠品附送完 人群涣散</li><li>心很酸 烟很淡</li><li>难过若写不完 用情歌刁难</li><li>我非要 锈了的皇冠 还不肯摘</li><li>在悲伤明显前 举杯离散</li><li>为何亏欠的人 特别勇敢</li><li>我撑到 你的恨 开始无限扩散</li><li>该流的泪才刚刚流一半</li><li>别有关 就两断</li><li>故事已经说完 懒得圆满 </li>'
		},
		{
			name:'醉仙歌',
			author:'魏世伟',
			src:'music/醉仙歌.mp3',
			geci:'<li>醉仙歌</li><li>原曲：樱花樱花</li><li>作词：夜小岛</li><li>演唱：魏世伟</li><li>晃仙：我看过很多遍的花开花谢</li><li>采过很多甜美或者苦涩的果实</li><li>酿过很多种类的好酒</li><li>却只遇见过一个能举樽共饮的人……</li><li>[妖君]</li><li>千杯尽 一笑泯恩怨</li><li>梦流光 思华年</li><li>清歌一曲罢 无言</li><li>叹红尘 风雨路三千</li><li>曲未终 人已散</li><li>遗世而独立 无眠</li><li>晃仙：今年，霜迟花会开吧……</li><li>妖君：霜迟……莫非你要送我缠梦……</li><li>晃仙：可惜等“缠梦”酿好之时</li><li>你还在此地，我却不知道谪往何方了……</li><li>妖君：甚好，那我就寻着醇香，再去自投罗网一次。</li><li>[晃仙]</li><li>窗移影 鸟鸣涧</li><li>丝竹响 又几遍</li><li>隐约夜风起 幽香染轻弦</li><li>借一世 探人间</li><li>谁红线 暗自牵</li><li>浮生匆忙客 奈何惹尘缘</li><li>[妖君]</li><li>三生石 素心莲</li><li>檀香近 碧落远</li><li>长明灯一盏 引君过彼岸</li><li>[晃仙]</li><li>问重逢 是何年</li><li>莫笑我 痴人愿</li><li>繁华落 看惊鸿照影碧水连天</li><li>[妖君]</li><li>千杯尽 一笑泯恩怨</li><li>梦流光 思华年</li><li>清歌一曲罢 无言</li><li>[晃仙]</li><li>叹红尘 风雨路三千</li><li>曲未终 人已散</li><li>遗世而独立 无眠</li><li>晃仙：……告诉我，怎样才能醉一场……</li><li>妖君：哈~你要等这山开满桃花，</li><li>盛露一杯，能喝得百日醉；</li><li>等稚儿变了耄耋</li><li>老翁，煮酒一壶，能喝得千日醉；</li><li>而他年若隔世，你偶遇我埋骨之地，</li><li>独饮一坛，就能喝得长醉不醒。</li><li>[合]</li><li>提笔沾新墨 忘却旧容颜</li><li>[妖君]残烛泪烬空（晃仙：泪烬空）</li> <li>[晃仙]倦意深几重（妖：谁入梦）</li><li>[妖君]凝霜夜（晃仙：凝霜夜）</li> <li>[晃仙]月似怯 花如雪（妖：催红颜）</li><li>[妖君]听谁又说永远（晃仙：说永远）</li> <li>[晃仙]道再见（妖：道再见）</li><li>[合]不如一醉千年</li><li>[晃仙]</li><li>转身 一缕冷香远</li><li>逝雪深 笑意浅</li><li>来世你渡我 可愿</li><li>[合]</li><li>再回首 沧海已桑田</li><li>云缠绵 水缱绻</li><li>惯看风月浊酒酬苍天</li>'
		},
		{
			name:'丑八怪',
			author:'魏世伟',
			src:'music/丑八怪.mp3',
			geci:'<li>丑八怪</li><li>作词：甘世佳 作曲：李荣浩</li><li>演唱：薛之谦</li><li>如果世界漆黑 其实我很美</li><li>在爱情里面进退 最多被消费</li><li>无关痛痒的是非</li><li>又怎么不对 无所谓</li><li>如果像你一样 总有人赞美</li><li>围绕着我的卑微 也许能消退</li><li>其实我并不在意 有很多机会</li><li>像巨人一样的无畏</li><li>放纵我心里的鬼</li><li>可是我不配</li><li>丑八怪 能否别把灯打开</li><li>我要的爱 出没在漆黑一片的舞台</li><li>丑八怪 在这暧昧的时代</li><li>我的存在 像意外</li><li>有人用一滴泪 会红颜祸水</li><li>有人丢掉称谓 什么也不会</li><li>只要你足够虚伪</li><li>就不怕魔鬼 对不对</li><li>如果剧本写好 谁比谁高贵</li><li>我只能沉默以对 美丽本无罪</li><li>当欲望开始贪杯 有更多机会</li><li>像尘埃一样的无畏</li><li>化成灰谁认得谁管他配不配</li><li>丑八怪 能否别把灯打开</li><li>我要的爱 出没在漆黑一片的舞台</li><li>丑八怪 在这暧昧的时代</li><li>我的存在 不意外</li><li>丑八怪 其实见多就不怪</li><li>放肆去high 用力踩</li><li>那不堪一击的洁白</li><li>丑八怪 这是我们的时代</li><li>我不存在 才意外 </li>'
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
		head();
		$.each(music,function(i , v){
			var c=(i === inner) ? "active" : "";
			$('<li class="'+c+'"><span class="name">'+v.name+'</span>-<span class="author">'+v.author+'</span><span class="delete">删除<span></li>').appendTo("#list");
		});
	}
	
	//删除
	$("#list").on("touchend",".delete",function(){
		var aa=$(this).closest("li")
		var num=aa.index()
		music.splice(num,1);
		
		if(num==inner){
			if(music[inner]){
				audio.src=music[inner].src  
			}else{
				audio.src="";
				inner=0;
			}
			
		}else if(num > inner){
			
		}else if(num < inner){
			inner-=1
		}
		render();
		head();
		 audio.play()
		return false;
	})
	
	//头部歌名和歌手 歌词
	function head(){
		$("#head").html("");
		$("#author").html("");
		$("#geci").html("");
		$('<li class="headname">'+music[inner].name+'</li>').appendTo("#head");
		$('<li class="headauthor">—'+music[inner].author+'—</li>').appendTo("#author");
		$('<ul class="geci">'+music[inner].geci+'</ul>').appendTo("#geci");
		
	}

	$("#list").on("click","li",function(){
		$("#list").find("li").removeClass('active');
		$(this).addClass("active");
		inner = $(this).index();
		audio.src = music[inner].src;
		audio.play();
		head();
		return false;
	});
	render();
	head();
	//播放和暂停
	play.on("click",function(){
	
		if(audio.paused){
			audio.play();
			head()
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
		var geciHeight=$("#geci .geci").height()
		var height=geciHeight* audio.currentTime / audio.duration ;
		$("#geci .geci").css("top","100"-height)
		var index=Math.floor(($(".geci li").length)*audio.currentTime / audio.duration)
		$(".geci li").css("color","white").eq(index).css("color","#D40203");
	});
	//歌曲进度条点击
	progress.on('click',function(e){
		audio.currentTime=e.offsetX/$(this).width()*audio.duration;
		return false;
	});	
	pi.on('click',false);
	// duration.html=format(audio.duration);	
	//歌曲进度拖拽
	pi.on('touchend',function(e){
		var r=pi.width()/2;
		var start=r-e.offsetX;
//		var start=e.offsetX;
		$(document).on('touchmove',function(e){
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
	$(document).on('touchend',function(){
		$(document).off("touchmove");
	});
	//音频进度条点击
	vol.on("click",function(e){
		audio.volume = e.offsetX / vol.width();
		mote.removeAttr('data-v');
		return false;
	});
	vi.on('click',false);
	//音频拖拽
	vi.on("touchstart" , function(e){
//		e.preventDefault();
		var r = vi.width() / 2;
		var start = r - e.offsetX;
		$(document).on("touchmove" , function(e){
//			console.log(e.clientX);
			var left = e.clientX - vol.position().left + start;
			var v = left / vol.width();
			if(v > 1 || v < 0){
				return;
			}
			audio.volume = v;
		})
	});
	$(document).on('touchend',function(){
		$(document).off("touchmove");
	});
	//静音
	mote.on("touchend",function(){
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
		head()
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
		head()
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
	//闪屏
	$(".shan").on("touchstart",function(e){
    	 pos=e.originalEvent.changedTouches[0].clientX
    	
    })
    var now=0
    $(".shan").css("display","none").eq(0).css("display","block")
	$(".shan").on("touchend",function(e){
  	 var y=e.originalEvent.changedTouches[0].clientX
 	 var index=$(this).index()
  	 if(y-pos<=-30){
 	 	now++
  	 	if(now>=$(".shan").length){
  	 		return;
 	 	}
 	 	$(".shan").css("display","none").eq(now).css("display","block") 	 	
 	 }
//	 if(y-pos>=30){
//	 	if(now==1){
// 	 		$(".shan").css("display","none").eq(now).css("display","block")
// 	    } 
//     }
  })
	
	$(audio).on("ended",function(){
		inner++
	})
	
	
});
