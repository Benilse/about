/* bSlider v4.3 | Copyright 2015 봉석윤 Co., Ltd. All Rights Reserved. */
!function(i){"use strict";i.fn.bSlider=function(a){return this.each(function(){var t,n,s,r,o,l=i(this),g=i.extend({},i.fn.bSlider.defaults,a||{}),d={},p={};(p={crossBrowsing:function(){Array.prototype.indexOf||(Array.prototype.indexOf=function(i){for(var a=0;a<this.length;a++)if(this[a]==i)return a;return-1}),p.crossBrowsing.noCss3=function(){r<n?(t.eq(r).hide(),t.eq(r+1).show(),g.paging&&(g.setting.paging.group&&s.filter(".on").parent().find("li").last().is(s.filter(".on"))&&g.pagingArea.find("> li.on").removeClass("on").next().addClass("on"),s.eq(r).removeClass("on"),s.eq(r+1).addClass("on")),r++):(t.eq(r).hide(),t.first().show(),g.paging&&(g.setting.paging.group&&s.filter(".on").parent().find("li").last().is(s.filter(".on"))&&(g.pagingArea.find("> li.on").removeClass("on"),g.pagingArea.find("> li").first().addClass("on")),s.eq(n).removeClass("on"),s.first().addClass("on")),r=0),g.num&&t.length>0&&g.numArea.select.text(r+1),d.color&&(void 0!==t.eq(r).data("background")?g.wrap.css("background-color",t.eq(r).data("background")):g.wrap.css("background-color",""))}},css3Ani:function(){try{return void 0!==document.createElement("div").style.transition}catch(i){return!1}},init:function(){if(g.wrap=l.find(g.wrap),g.area=l.find(g.area),g.imgArea=l.find(g.imgArea+" > ul"),g.numArea=l.find(g.numArea),g.btnArea=l.find(g.btnArea),t=g.imgArea.find("li"),n=t.length-1,r=0,d={color:!1,slider:!0,tab:0},g.wrap.css({height:g.height,position:"relative"}),g.area.css({top:0,left:"50%"}),g.autoMargin&&g.area.css({"margin-left":-g.width/2+"px"}),g.area.css({width:g.width,height:g.height,position:"absolute"}),g.imgArea.parent().css({overflow:"hidden"}),t.find("> a img").css({width:g.width,height:g.height}),g.num?(g.numArea={select:g.numArea.find(".select"),total:g.numArea.find(".total")},t.length<=0?g.numArea.select.text("0"):g.numArea.select.text("1"),g.numArea.total.text(n+1)):g.numArea.remove(),g.btns||g.btnArea.remove(),g.paging){var a={array:[]};if(g.area.append('<div class="'+g.pagingArea+'"><ul></ul></div>'),g.pagingArea=g.area.find("."+g.pagingArea+" ul"),g.setting.paging.group){for(u=0;u<n+1;u++)a.array.indexOf(t.eq(u).data("group"))<0&&a.array.push(t.eq(u).data("group"));for(u=0;u<a.array.length;u++){a.append="<li>",g.setting.paging.groupLink?(a.append+='<a href="'+t.eq(u).find("a").attr("href")+'"',void 0!==t.eq(u).find("a").attr("target")&&(a.append+=' target="'+t.eq(u).find("a").attr("target")+'"'),a.append+=">"+a.array[u]+"</a>"):a.append+='<button type="button">'+a.array[u]+"</button>",a.append+="<ul>";for(var e=0;e<n+1;e++)t.eq(e).data("group")===a.array[u]&&(a.append+="<li>",g.setting.paging.link?(a.append+='<a href="'+t.eq(e).find("a").attr("href")+'"',void 0!==t.eq(e).find("a").attr("target")&&(a.append+=' target="'+t.eq(e).find("a").attr("target")+'"')):a.append+='<button type="button"',void 0!==t.eq(e).data("pagingimg")&&(a.append+=" style=\"background-image: url('"+t.eq(e).data("pagingimg")+"')\""),a.append+=">",void 0===t.eq(e).data("paging")?a.append+="slider paging "+(e+1):a.append+=t.eq(e).data("paging"),g.setting.paging.link?a.append+="</a>":a.append+="</button>",a.append+="</li>");a.append+="</ul></li>",g.pagingArea.append(a.append)}(s=g.pagingArea.find("> li ul > li")).first().addClass("on"),g.pagingArea.find("> li").first().addClass("on")}else{for(var u=0;u<n+1;u++)a.append="<li>",g.setting.paging.link?(a.append+='<a href="'+t.eq(u).find("a").attr("href")+'"',void 0!==t.eq(u).find("a").attr("target")&&(a.append+=' target="'+t.eq(u).find("a").attr("target")+'"')):a.append+='<button type="button"',void 0!==t.eq(u).data("pagingimg")&&(a.append+=" style=\"background-image: url('"+t.eq(u).data("pagingimg")+"')\""),a.append+=">",void 0===t.eq(u).data("paging")?a.append+="slider paging "+(u+1):a.append+=t.eq(u).data("paging"),g.setting.paging.link?a.append+="</a>":a.append+="</button>",a.append+="</li>",g.pagingArea.append(a.append);(s=g.pagingArea.find("> li")).first().addClass("on")}g.autoPlay&&g.setting.paging.stop&&g.pagingArea.append('<li class="stop"><button type="button">stop</button></li>'),g.setting.paging.full&&s.css("width",100/s.length+"%")}else l.find("."+g.pagingArea).remove();"auto"===g.animateTime&&("blink"==g.motion||"show"==g.motion?g.animateTime=250:g.animateTime=500),t.each(function(){if(void 0!==i(this).data("background"))return d.color=!0,!1}),g.autoPlay&&i(window).on("focus",function(){d.tab>1&&(clearInterval(o),g.limit&&(d.slider=!1),"regular"==g.motion||"regular-rolling"==g.motion||"rolling"==g.motion||"rolling-regular"==g.motion?(g.imgArea.off("transitionend"),g.imgArea.css({transform:"translateX("+-g.width*r+"px)","transition-duration":"0s"}),setTimeout(function(){g.imgArea.css({transform:"translateX("+-g.width*(r+1)+"px)","transition-duration":g.animateTime+"ms"})},0)):"blink"!=g.motion&&"show"!=g.motion||(t.css({opacity:0,visibility:"hidden"}),t.eq(r).css({opacity:1,visibility:"visible"})),g.paging&&(g.setting.paging.group&&(g.pagingArea.find("> li.on").removeClass("on"),s.eq(r).parents("li").addClass("on")),s.filter(".on").removeClass("on"),s.eq(r).addClass("on")),g.num&&t.length>0&&g.numArea.select.text(r+1),d.color&&(void 0!==t.eq(r).data("background")?g.wrap.css({background:t.eq(r).data("background"),"transition-duration":"0s"}):g.wrap.css({background:"","transition-duration":"0s"})),d.slider=!0,d.tab=0,p.auto())})},auto:function(){if(g.autoPlay){if(g.setting.paging.stop&&g.pagingArea.find("> li").hasClass("play"))return!1;o=setInterval(function(){p.slider("right")},g.autoTime)}},hover:function(){g.hoverStop&&g.autoPlay&&g.area.on({mouseenter:function(){clearInterval(o)},mouseleave:function(){if(g.setting.paging.stop&&g.pagingArea.find("> li").hasClass("play"))return!1;clearInterval(o),o=setInterval(function(){p.slider("right")},g.autoTime)}})},css:function(){if("regular"==g.motion||"regular-rolling"==g.motion||"rolling"==g.motion||"rolling-regular"==g.motion){var i=g.imgArea.find("li");g.imgArea.css({width:(n+3)*g.width+"px",transform:"translateX("+-g.width+"px)"}),setTimeout(function(){g.imgArea.css({transition:"transform "+g.animateTime+"ms ease-in-out"})},0),t.css({float:"left"}),i.first().clone().appendTo(g.imgArea),i.last().clone().prependTo(g.imgArea)}else"blink"!=g.motion&&"show"!=g.motion||(t.css({top:0,opacity:0,visibility:"hidden",position:"absolute"}),t.first().css({opacity:1,visibility:"visible"}),"blink"==g.motion&&setTimeout(function(){t.css({transition:"visibility "+g.animateTime+"ms ease-in-out, opacity "+g.animateTime+"ms ease-in-out"})},0));d.color&&(g.wrap.css({background:t.first().data("background")}),"show"!=g.motion&&setTimeout(function(){g.wrap.css({transition:"background "+g.animateTime+"ms ease-in-out"})},0))},color:function(){d.color&&(void 0!==t.eq(r).data("background")?g.wrap.css({background:t.eq(r).data("background")}):g.wrap.css({background:""}),"show"!=g.motion&&g.wrap.css({"transition-duration":g.animateTime+"ms"}))},slider:function(a){clearInterval(o),g.limit&&(d.slider=!1),d.tab++,"left"===a?("regular"==g.motion||"regular-rolling"==g.motion?parseInt(g.imgArea.css("transform").split(",")[4])==-g.width?(g.imgArea.css({transform:"translateX(0px)","transition-duration":g.animateTime+"ms"}),g.imgArea.on("transitionend",function(a){i(this).off("transitionend"),i(this).css({transform:"translateX("+-g.width*t.length+"px)","transition-duration":"0s"}),a.stopPropagation()})):g.imgArea.css({transform:"translateX("+-g.width*r+"px)","transition-duration":g.animateTime+"ms"}):"rolling"==g.motion||"rolling-regular"==g.motion?r>0?g.imgArea.css({transform:"translateX("+-g.width*r+"px)","transition-duration":g.animateTime+"ms"}):g.imgArea.css({transform:"translateX("+-g.width*(n+1)+"px)","transition-duration":g.animateTime+"ms"}):"blink"!=g.motion&&"show"!=g.motion||(r>0?(t.eq(r).css({opacity:0,visibility:"hidden"}),t.eq(r-1).css({opacity:1,visibility:"visible"})):(t.first().css({opacity:0,visibility:"hidden"}),t.eq(n).css({opacity:1,visibility:"visible"}))),r>0?(g.paging&&(g.setting.paging.group&&s.filter(".on").parent().find("li").first().is(s.filter(".on"))&&g.pagingArea.find("> li.on").removeClass("on").prev().addClass("on"),s.eq(r).removeClass("on"),s.eq(r-1).addClass("on")),r--):(g.paging&&(g.setting.paging.group&&s.filter(".on").parent().find("li").first().is(s.filter(".on"))&&(g.pagingArea.find("> li.on").removeClass("on"),g.setting.paging.stop?g.pagingArea.find("> li").last().prev().addClass("on"):g.pagingArea.find("> li").last().addClass("on")),s.first().removeClass("on"),s.eq(n).addClass("on")),r=n)):"right"===a&&("regular"==g.motion||"regular-rolling"==g.motion?parseInt(g.imgArea.css("transform").split(",")[4])==-g.width*t.length?(g.imgArea.css({transform:"translateX("+-g.width*(t.length+1)+"px)","transition-duration":g.animateTime+"ms"}),g.imgArea.on("transitionend",function(a){i(this).off("transitionend"),i(this).css({transform:"translateX("+-g.width+"px)","transition-duration":"0s"}),a.stopPropagation()})):g.imgArea.css({transform:"translateX("+-g.width*(r+2)+"px)","transition-duration":g.animateTime+"ms"}):"rolling"==g.motion||"rolling-regular"==g.motion?r<n?g.imgArea.css({transform:"translateX("+-g.width*(r+2)+"px)","transition-duration":g.animateTime+"ms"}):g.imgArea.css({transform:"translateX("+-g.width+"px)","transition-duration":g.animateTime+"ms"}):"blink"!=g.motion&&"show"!=g.motion||(r<n?(t.eq(r).css({opacity:0,visibility:"hidden"}),t.eq(r+1).css({opacity:1,visibility:"visible"})):(t.eq(r).css({opacity:0,visibility:"hidden"}),t.first().css({opacity:1,visibility:"visible"}))),r<n?(g.paging&&(g.setting.paging.group&&s.filter(".on").parent().find("li").last().is(s.filter(".on"))&&g.pagingArea.find("> li.on").removeClass("on").next().addClass("on"),s.eq(r).removeClass("on"),s.eq(r+1).addClass("on")),r++):(g.paging&&(g.setting.paging.group&&s.filter(".on").parent().find("li").last().is(s.filter(".on"))&&(g.pagingArea.find("> li.on").removeClass("on"),g.pagingArea.find("> li").first().addClass("on")),s.eq(n).removeClass("on"),s.first().addClass("on")),r=0)),g.num&&t.length>0&&g.numArea.select.text(r+1),"show"==g.motion?(d.slider=!0,d.tab--):g.imgArea.on("transitionend",function(a){i(this).off("transitionend"),d.slider=!0,d.tab--,a.stopPropagation()}),d.tab<2&&p.color(),p.auto()},btns:function(){g.btns&&(g.btnArea.find(".left").on("click",function(){d.slider&&p.slider("left")}),g.btnArea.find(".right").on("click",function(){d.slider&&p.slider("right")}))},paging:function(){function a(a,n){if(g.autoPlay&&g.setting.paging.stop&&(a.hasClass("play")||a.hasClass("stop")))return!1;var e=-1;if(g.setting.paging.group){var l;"group"===n?l=a.find("li").first():"paging"===n&&(l=a),s.each(function(){if(e++,i(this).is(l))return!1})}else e=parseInt(a.index());if(e!=r&&d.slider){if(clearInterval(o),g.limit&&(d.slider=!1),"regular"==g.motion||"rolling-regular"==g.motion)if(e>r)e-r==1?(g.imgArea.css({transform:"translateX("+-g.width*e+"px)","transition-duration":"0s"}),setTimeout(function(){g.imgArea.css({transform:"translateX("+-g.width*(e+1)+"px)","transition-duration":g.animateTime+"ms"})},0)):((u=g.imgArea.find("li").eq(r+1).clone()).insertBefore(g.imgArea.find("li").eq(e+1)),g.imgArea.css({transform:"translateX("+-g.width*(e+1)+"px)","transition-duration":"0s"}),setTimeout(function(){g.imgArea.css({transform:"translateX("+-g.width*(e+2)+"px)","transition-duration":g.animateTime+"ms"})},0),g.imgArea.on("transitionend",function(a){i(this).off("transitionend"),i(this).css({transform:"translateX("+-g.width*(e+1)+"px)","transition-duration":"0s"}),i(this).find(u).detach(),setTimeout(function(){g.imgArea.css({"transition-duration":g.animateTime+"ms"})},0),a.stopPropagation()}));else if(e-r==-1)g.imgArea.css({transform:"translateX("+-g.width*(e+2)+"px)","transition-duration":"0s"}),setTimeout(function(){g.imgArea.css({transform:"translateX("+-g.width*(e+1)+"px)","transition-duration":g.animateTime+"ms"})},0);else{var u=g.imgArea.find("li").eq(r+1).clone();u.insertAfter(g.imgArea.find("li").eq(e+1)),g.imgArea.css({transform:"translateX("+-g.width*(e+2)+"px)","transition-duration":"0s"}),setTimeout(function(){g.imgArea.css({transform:"translateX("+-g.width*(e+1)+"px)","transition-duration":g.animateTime+"ms"})},0),g.imgArea.on("transitionend",function(a){i(this).off("transitionend"),i(this).css({transform:"translateX("+-g.width*(e+1)+"px)","transition-duration":"0s"}),i(this).find(u).detach(),setTimeout(function(){g.imgArea.css({"transition-duration":g.animateTime+"ms"})},0),a.stopPropagation()})}else"rolling"==g.motion||"regular-rolling"==g.motion?g.imgArea.css({transform:"translateX("+-g.width*(e+1)+"px)"}):"blink"!=g.motion&&"show"!=g.motion||(t.css({opacity:0,visibility:"hidden"}),t.eq(e).css({opacity:1,visibility:"visible"}),"show"==g.motion&&(d.slider=!0));g.setting.paging.group?"group"===n?(g.pagingArea.find("> li.on").removeClass("on"),a.addClass("on"),s.filter(".on").removeClass("on"),a.find("li").first().addClass("on")):"paging"===n&&(g.pagingArea.find("> li.on").removeClass("on"),a.parents("li").addClass("on"),s.filter(".on").removeClass("on"),a.addClass("on")):(s.filter(".on").removeClass("on"),a.addClass("on")),r=e,g.num&&g.numArea.select.text(r+1),g.imgArea.on("transitionend",function(a){i(this).off("transitionend"),d.slider=!0,a.stopPropagation()}),p.color(),p.auto()}}g.paging&&(g.setting.paging.group&&(g.setting.paging.groupHover?g.pagingArea.find("> li").on("mouseenter",function(t){1===i(t.target).parents("ul").length&&a(i(this),"group")}):g.pagingArea.find("> li").on("click",function(){a(i(this),"group")})),g.setting.paging.hover?s.on("mouseenter",function(t){a(i(this),"paging"),t.stopPropagation()}):s.on("click",function(t){a(i(this),"paging"),t.stopPropagation()})),g.autoPlay&&g.setting.paging.stop&&g.pagingArea.find("> li.stop").on("click",function(a){i(this).hasClass("stop")?(i(this).removeClass("stop").addClass("play").find("button").text("play"),clearInterval(o)):i(this).hasClass("play")&&(i(this).removeClass("play").addClass("stop").find("button").text("stop"),o=setInterval(function(){p.slider("right")},g.autoTime))})},swipe:function(){var a={start:{},end:{},startEvent:!1},t={move:25,scroll:50};g.swipe.touch&&(g.area.css("touch-action","pan-y"),g.area.on({touchstart:function(i){a.start.pageX=i.originalEvent.touches[0].pageX,a.start.pageY=i.originalEvent.touches[0].pageY,a.startEvent=!0},touchmove:function(i){if(!a.startEvent)return!1;a.end.pageX=i.originalEvent.touches[0].pageX,a.end.pageY=i.originalEvent.touches[0].pageY,a.drag=Math.abs(a.end.pageX-a.start.pageX),a.scroll=Math.abs(a.end.pageY-a.start.pageY),a.move=Math.abs(a.drag/g.width*100),a.scroll>t.scroll?"regular"!=g.motion&&"regular-rolling"!=g.motion&&"rolling"!=g.motion&&"rolling-regular"!=g.motion||a.drag>=a.scroll&&g.imgArea.css({transform:"translateX("+-g.width*(r+1)+"px)","transition-duration":g.animateTime+"ms"}):"regular"!=g.motion&&"regular-rolling"!=g.motion&&"rolling"!=g.motion&&"rolling-regular"!=g.motion||a.drag>=a.scroll&&(g.imgArea.css({"transition-duration":"0s"}),a.start.pageX<a.end.pageX?g.imgArea.css({transform:"translateX("+-(g.width*(r+1)-a.drag)+"px)"}):g.imgArea.css({transform:"translateX("+-(g.width*(r+1)+a.drag)+"px)"}))},touchend:function(i){if(!a.startEvent)return!1;"regular"!=g.motion&&"regular-rolling"!=g.motion&&"rolling"!=g.motion&&"rolling-regular"!=g.motion||(a.move>t.move?g.imgArea.css({"transition-duration":g.animateTime+"ms"}):g.imgArea.css({transform:"translateX("+-g.width*(r+1)+"px)","transition-duration":g.animateTime+"ms"})),a.move>t.move&&a.scroll<t.scroll&&(a.start.pageX<a.end.pageX?p.slider("left"):p.slider("right")),a={start:{},end:{},startEvent:!1}}})),g.swipe.drag&&g.imgArea.on({mousedown:function(t){t.preventDefault(),a.start.pageX=t.pageX,a.start.pageY=t.pageY,i(this).on("mousemove",function(i){i.preventDefault(),"mousemove"===i.type&&(a.end.pageX=i.pageX,a.end.pageY=i.pageY,a.drag=Math.abs(a.end.pageX-a.start.pageX),a.scroll=Math.abs(a.end.pageY-a.start.pageY),a.move=a.drag/g.width*100,"regular"!=g.motion&&"regular-rolling"!=g.motion&&"rolling"!=g.motion&&"rolling-regular"!=g.motion||a.drag>=a.scroll&&(g.imgArea.css({"transition-duration":"0s"}),a.start.pageX<a.end.pageX?g.imgArea.css({transform:"translateX("+-(g.width*(r+1)-a.drag)+"px)"}):g.imgArea.css({transform:"translateX("+-(g.width*(r+1)+a.drag)+"px)"})))})},mouseup:function(t){t.preventDefault(),i(this).off("mousemove"),i(this).find("a").on("click",function(i){i.preventDefault()}),"regular"!=g.motion&&"regular-rolling"!=g.motion&&"rolling"!=g.motion&&"rolling-regular"!=g.motion||(Math.abs(a.move)>20?g.imgArea.css({"transition-duration":g.animateTime+"ms"}):g.imgArea.css({transform:"translateX("+-g.width*(r+1)+"px)","transition-duration":g.animateTime+"ms"})),void 0===a.move||0===a.move?i(this).find("a").off("click"):Math.abs(a.move)>20&&(a.start.pageX<a.end.pageX?p.slider("left"):p.slider("right")),a={start:{},end:{}}}}),g.swipe.wheel&&g.imgArea.on("mousewheel DOMMouseScroll",function(i){if(i.preventDefault(),d.slider){var a=0;i.originalEvent.wheelDelta?a=i.originalEvent.wheelDelta/120:i.originalEvent.detail&&(a=-i.originalEvent.detail/3),a>0?p.slider("left"):p.slider("right")}})}}).crossBrowsing(),p.init(),0!=n&&(p.css3Ani()?(p.css(),p.auto(),p.hover(),p.btns(),p.paging(),p.swipe()):(d.color&&g.wrap.css({background:t.first().data("background")}),t.css({top:0,display:"none",position:"absolute"}),t.first().show(),g.autoPlay&&(o=setInterval(p.crossBrowsing.noCss3,g.autoTime)),g.hoverStop&&g.autoPlay&&g.area.on({mouseenter:function(){clearInterval(o)},mouseleave:function(){if(g.setting.paging.stop&&g.pagingArea.find("> li").hasClass("play"))return!1;clearInterval(o),o=setInterval(p.crossBrowsing.noCss3,g.autoTime)}}),g.paging&&(g.setting.paging.group&&(g.setting.paging.groupHover?g.pagingArea.find("> li").on("mouseenter",function(){if(g.autoPlay&&g.setting.paging.stop&&(i(this).hasClass("play")||i(this).hasClass("stop")))return!1;if(1===i(e.target).parents("ul").length){var a=i(this).find("li").first(),n=-1,l=-1;if(s.each(function(){if(n++,i(this).is(a))return!1}),a=s.filter(".on"),s.each(function(){if(l++,i(this).is(a))return!1}),clearInterval(o),parseInt(n)!=r&&(t.stop(!0,!0),t.eq(l).hide(),t.eq(n).show(),g.setting.paging.group&&(g.pagingArea.find("> li.on").removeClass("on"),i(this).addClass("on")),s.filter(".on").removeClass("on"),i(this).find("li").first().addClass("on"),r=n,g.num&&g.numArea.select.text(r+1)),d.color&&(void 0!==t.eq(r).data("background")?g.wrap.css("background-color",t.eq(r).data("background")):g.wrap.css("background-color","")),g.autoPlay){if(g.setting.paging.stop&&g.pagingArea.find("> li").hasClass("play"))return!1;o=setInterval(noCss3Slider,g.autoTime)}}}):g.pagingArea.find("> li").on("click",function(){if(g.autoPlay&&g.setting.paging.stop&&(i(this).hasClass("play")||i(this).hasClass("stop")))return!1;var a=i(this).find("li").first(),n=-1,e=-1;if(s.each(function(){if(n++,i(this).is(a))return!1}),a=s.filter(".on"),s.each(function(){if(e++,i(this).is(a))return!1}),clearInterval(o),parseInt(n)!=r&&(t.stop(!0,!0),t.eq(e).hide(),t.eq(n).show(),g.setting.paging.group&&(g.pagingArea.find("> li.on").removeClass("on"),i(this).addClass("on")),s.filter(".on").removeClass("on"),i(this).find("li").first().addClass("on"),r=n,g.num&&g.numArea.select.text(r+1)),d.color&&(void 0!==t.eq(r).data("background")?g.wrap.css("background-color",t.eq(r).data("background")):g.wrap.css("background-color","")),g.autoPlay){if(g.setting.paging.stop&&g.pagingArea.find("> li").hasClass("play"))return!1;o=setInterval(noCss3Slider,g.autoTime)}})),g.setting.paging.hover?s.on("mouseenter",function(a){if(g.autoPlay&&g.setting.paging.stop&&(i(this).hasClass("play")||i(this).hasClass("stop")))return!1;var n=-1,e=-1;if(g.setting.paging.group){var l=i(this);s.each(function(){if(n++,i(this).is(l))return!1}),l=s.filter(".on"),s.each(function(){if(e++,i(this).is(l))return!1})}else n=parseInt(i(this).index()),e=s.filter(".on").index();if(clearInterval(o),n!=r&&(t.stop(!0,!0),t.eq(e).hide(),t.eq(n).show(),g.setting.paging.group&&(g.pagingArea.find("> li.on").removeClass("on"),i(this).parents("li").addClass("on")),s.filter(".on").removeClass("on"),i(this).addClass("on"),r=n,g.num&&g.numArea.select.text(r+1)),d.color&&(void 0!==t.eq(r).data("background")?g.wrap.css("background-color",t.eq(r).data("background")):g.wrap.css("background-color","")),g.autoPlay){if(g.setting.paging.stop&&g.pagingArea.find("> li").hasClass("play"))return!1;o=setInterval(p.crossBrowsing.noCss3,g.autoTime)}a.stopPropagation()}):s.on("click",function(a){if(g.autoPlay&&g.setting.paging.stop&&(i(this).hasClass("play")||i(this).hasClass("stop")))return!1;var n=-1,e=-1;if(g.setting.paging.group){var l=i(this);s.each(function(){if(n++,i(this).is(l))return!1}),l=s.filter(".on"),s.each(function(){if(e++,i(this).is(l))return!1})}else n=parseInt(i(this).index()),e=s.filter(".on").index();if(clearInterval(o),n!=r&&(t.stop(!0,!0),t.eq(e).hide(),t.eq(n).show(),g.setting.paging.group&&(g.pagingArea.find("> li.on").removeClass("on"),i(this).parents("li").addClass("on")),s.filter(".on").removeClass("on"),i(this).addClass("on"),r=n,g.num&&g.numArea.select.text(r+1)),d.color&&(void 0!==t.eq(r).data("background")?g.wrap.css("background-color",t.eq(r).data("background")):g.wrap.css("background-color","")),g.autoPlay){if(g.setting.paging.stop&&g.pagingArea.find("> li").hasClass("play"))return!1;o=setInterval(p.crossBrowsing.noCss3,g.autoTime)}a.stopPropagation()}),g.autoPlay&&g.setting.paging.stop&&g.pagingArea.parent().find(".stop").on("click",function(a){i(this).hasClass("stop")?(i(this).text("play").removeClass("stop").addClass("play"),clearInterval(o)):i(this).hasClass("play")&&(i(this).text("stop").removeClass("play").addClass("stop"),o=setInterval(function(){p.slider("right")},g.autoTime))})),g.btns&&(g.btnArea.find(".left").on("click",function(){if(clearInterval(o),t.stop(!0,!0),r>0?(t.eq(r).hide(),t.eq(r-1).show(),g.paging&&(g.setting.paging.group&&s.filter(".on").parent().find("li").first().is(s.filter(".on"))&&g.pagingArea.find("> li.on").removeClass("on").prev().addClass("on"),s.eq(r).removeClass("on"),s.eq(r-1).addClass("on")),r--):(t.first().hide(),t.eq(n).show(),g.paging&&(g.setting.paging.group&&s.filter(".on").parent().find("li").first().is(s.filter(".on"))&&(g.pagingArea.find("> li.on").removeClass("on"),g.setting.paging.stop?g.pagingArea.find("> li").last().prev().addClass("on"):g.pagingArea.find("> li").last().addClass("on")),s.first().removeClass("on"),s.eq(n).addClass("on")),r=n),g.num&&t.length>0&&g.numArea.select.text(r+1),d.color&&(void 0!==t.eq(r).data("background")?g.wrap.css("background-color",t.eq(r).data("background")):g.wrap.css("background-color","")),g.autoPlay){if(g.setting.paging.stop&&g.pagingArea.find("> li").hasClass("play"))return!1;o=setInterval(p.crossBrowsing.noCss3,g.autoTime)}}),g.btnArea.find(".right").on("click",function(){if(clearInterval(o),t.stop(!0,!0),p.crossBrowsing.noCss3(),g.autoPlay){if(g.setting.paging.stop&&g.pagingArea.find("> li").hasClass("play"))return!1;o=setInterval(p.crossBrowsing.noCss3,g.autoTime)}}))))})},i.fn.bSlider.defaults={motion:"regular",width:1200,height:650,wrap:".sliderWrap",area:".sliderArea",imgArea:".img",numArea:".num",btnArea:".btns",pagingArea:"paging",autoMargin:!0,num:!1,btns:!1,paging:!1,swipe:{touch:!1,drag:!1,wheel:!1},limit:!0,hoverStop:!0,autoPlay:!0,animateTime:"auto",autoTime:1e4,setting:{paging:{link:!1,hover:!1,group:!1,groupLink:!1,groupHover:!1,stop:!1,full:!1}}}}(jQuery);