"use strict";function LimiteNum(t,e,a){$(t).on("blur",function(){$(this).val()<e?(alert(e+"~"+a+" 사이의 숫자를 입력하세요"),$(this).val(e).focus()):$(this).val()>a&&(alert(e+"~"+a+" 사이의 숫자를 입력하세요"),$(this).val(a).focus())})}function NumOver(t,e){$(t).on("change",function(){""!=$.trim($(e).val())&&Number($(this).val())>Number($(e).val())&&(alert("첫 번째 값을 두 번째 값보다 높게 설정할 수 없습니다"),$(this).val($(e).val()))}),$(e).on("change",function(){""!=$.trim($(e).val())&&Number($(t).val())>Number($(this).val())&&(alert("두 번째 값을 첫 번째 값보다 낮게 설정할 수 없습니다"),$(this).val($(t).val()))})}function checkDate(t){var e=t.val().replace(/\D/g,""),a={year:/^(158[2-9]|159[0-9]|1[6-9]\d{2}|[2-9]\d{3})$/,month:/^(0[1-9]|1[0-2])$/,day:/^(0[1-9]|[1-2][0-9]|3[0-1])$/};if(""==$.trim(e))return t.focus(),!1;if(e.length<8)return alert("날짜를 입력하세요"),t.val(t.data("val")),!1;var n={year:e.substr(0,4),month:e.substr(4,2),day:e.substr(6,2)};if(!a.year.test(n.year))return t.val(t.data("val")),alert("1582~9999년까지만 검색할 수 있습니다"),!1;if(!a.month.test(n.month)||!a.day.test(n.day))return t.val(t.data("val")),alert("날짜 범위를 벗어났습니다"),!1;t.val(n.year+"."+n.month+"."+n.day);var i=t.data("chain");if(2==$('.date[data-chain="'+i+'"]').length&&(dataStart=$('.date[data-chain="'+i+'"]').eq(0),dataEnd=$('.date[data-chain="'+i+'"]').eq(1),""!=$.trim(dataStart.val())&&""!=$.trim(dataEnd.val()))){var o=dataStart.val().split("."),r=dataEnd.val().split(".");if(o=new Date(o[0],o[1],o[2]).getTime(),r=new Date(r[0],r[1],r[2]).getTime(),o>r){if(dataStart.attr("id")==t.attr("id"))return alert("시작일을 종료일보다 이전으로 선택하세요"),dataStart.val(dataEnd.val()),!1;if(dataEnd.attr("id")==t.attr("id"))return alert("종료일를 시작일보다 이후로 선택하세요"),dataEnd.val(dataStart.val()),!1}}}function LimiteDate(t,e){$(t).on("change",function(){if(""!=$.trim($(e).val())){var t=$(this).val().split("."),a=$(e).val().split(".");(t=new Date(t[0],t[1],t[2]).getTime())>(a=new Date(a[0],a[1],a[2]).getTime())&&(alert("시작일을 종료일보다 느리게 설정할 수 없습니다"),$(this).val($(e).val()))}}),$(e).on("change",function(){if(""!=$.trim($(t).val())){var e=$(t).val().split("."),a=$(this).val().split(".");(e=new Date(e[0],e[1],e[2]).getTime())>(a=new Date(a[0],a[1],a[2]).getTime())&&(alert("종료일을 시작일보다 빠르게 설정할 수 없습니다"),$(this).val($(t).val()))}})}function asyncSet(){$(".async").each(function(){var t,e=$(this).data("on");$(this).find("li").each(function(){$(this).data("target")==e&&(t=$(this).data("group"))}),""!=e&&void 0!=e&&$(this).find("li").removeClass("on").each(function(){$(this).data("target")==e&&$(this).addClass("on")}),$("."+t).hide(),$("."+t+"."+e).show()})}function vw(t){return Math.floor(t/6.4*100)/100+"vw"}function priceSync(t){}if($(".navList").find(">li>a").on("focus",function(){$(this).next().show()}),$(".autoFocus").focus(),$(".num").on({keydown:function(t){var e=t.which?t.which:t.keyCode;return!1===t.shiftKey&&e>=48&&e<=57||e>=96&&e<=105||e>=35&&e<=40||65==t.keyCode&&!0===t.ctrlKey||67==t.keyCode&&!0===t.ctrlKey||86==t.keyCode&&!0===t.ctrlKey||8==e||9==e||13==e||46==e||($(this).val($(this).val().replace(/[^0-9]/g,"")),!1)},keyup:function(){$(this).val($(this).val().replace(/[^0-9]/g,""))},blur:function(){$(this).val($(this).val().replace(/[^0-9]/g,""))}}),$(".date").on({focus:function(){$(this).data("val",$(this).val())},keydown:function(t){var e=t.which?t.which:t.keyCode,a=$(this);return e>=35&&e<=40||(!1===t.shiftKey&&e>=48&&e<=57||e>=96&&e<=105||65==t.keyCode&&!0===t.ctrlKey||67==t.keyCode&&!0===t.ctrlKey||86==t.keyCode&&!0===t.ctrlKey||8==e||9==e||13==e||46==e||110==e||190==e?(setTimeout(function(){a.val().replace(/\D/g,"").length>7&&checkDate(a)},0),!0):(a.val(a.val().replace(/[^0-9.]/g,"")),!1))},keyup:function(){$(this).val($(this).val().replace(/[^0-9.]/g,""))},blur:function(){var t=$(this);""===t.val().replace(/[^0-9]/g,"")?t.val(""):checkDate(t),t.removeData("val")}}),$(".async").length>0&&asyncSet(),$(".async").find("li").on("click",function(){var t=$(this).data("group"),e=$(this).data("target");$(this).parent().find("li").removeClass("on"),$(this).addClass("on"),$("."+t).hide(),$("."+t+"."+e).show()}),$(document).on("click",".unfold dt",function(){var t=$(this),e=t.next(),a=$(this).parents(".unfold");0!==e.length&&(t.hasClass("on")?(t.removeClass("on"),e.slideUp()):(t.addClass("on"),e.toggle()),a.find("dt").not(t).each(function(){$(this).removeClass("on")}),a.find("dd").not(e).each(function(){$(this).slideUp()}))}),$(document).on("click",".unfold .q .title span",function(){var t=$(this).parents(".q"),e=t.next(".a"),a=$(this).parents(".unfold");t.data("private")||(t.toggleClass("on"),e.toggle(),a.find(".q").not(t).each(function(){$(this).removeClass("on")}),a.find(".a").not(e).each(function(){$(this).hide()}))}),$(".fileWrap .file").on("change",function(){$(this).parents("div.fileWrap").find('input[type="text"]').val($(this).val())}),$(".selectEmail").on("change",function(){var t=$(this).val();""==$.trim(t)?$(".valueEmail").val("").removeAttr("readonly").focus():$(".valueEmail").val($(this).val()).attr("readonly","readonly")}),$(".execPostcode").on("click",function(){var t=$(this).parents(".address"),e={wrap:this.parentNode.parentNode.getElementsByClassName("addressWrap")[0],postcode:t.find(".postcode"),address:t.find(".address"),address2:t.find(".address2")};Math.max(document.body.scrollTop,document.documentElement.scrollTop);"none"===$(e.wrap).css("display")?(new daum.Postcode({oncomplete:function(t){var a="",n="";a=t.roadAddress,""!==t.bname&&(n+=t.bname),""!==t.buildingName&&(n+=""!==n?", "+t.buildingName:t.buildingName),a+=""!==n?" ("+n+")":"",e.postcode.val(t.zonecode),e.address.val(a),e.wrap.style.display="none",e.address2.focus()},width:"100%",height:"100%",maxSuggestItems:5}).embed(e.wrap),e.wrap.style.display="block"):e.wrap.style.display="none"}),$(".hamburgerOpen").on("click",function(){$("html").addClass("nav")}),$(".hamburgerClose").on("click",function(){$("html, body").scrollTop(0),$("html").removeAttr("class")}),$(".asyncArea.n3").find("button").on("click",function(){$(".viewToggle").parent().next().hide(),$(".viewToggle").parent().next().next().hide(),$(".unfold").find("dd").hide(),$(".unfold").find(".a").hide()}),$(".resultProduct").on("click",function(){$(this).parent().toggleClass("on")}),$("#menuSlider").length>0){function menuSlider(){var t=$("#menuSlider");t.parent();t.find("li").each(function(){$(this).width($(this).width()+20)}),t.sly({horizontal:1,itemNav:"centered",smart:1,activateOn:"click",mouseDragging:1,touchDragging:1,releaseSwing:1,startAt:t.find("li.active").index(),speed:300,elasticBounds:1,dragHandle:1,dynamicHandle:1,clickBar:1})}menuSlider()}if($(".sliderArea").length>0&&($(".sliderArea.main").bSlider({width:$(window).width(),height:vw(550),paging:!0,swipe:{touch:!0}}),$(".sliderArea.sub").bSlider({width:$(window).width(),height:vw(500),paging:!0,swipe:{touch:!0}}),$(".sliderArea.banner1f").bSlider({motion:"blink",width:$(window).width(),height:vw(450),paging:!0,swipe:{touch:!0}}),$(".sliderArea.banner2").bSlider({motion:"blink",width:$(".sliderArea.banner2").width(),height:$(".sliderArea.banner2").find(".img > ul > li > div").outerHeight(),paging:!0,swipe:{touch:!0}})),$(".quickMenu").length>0){function quickMenuFixed(){var t=$(window).scrollTop();$("#container").offset().top<t?$(".quickMenu").addClass("fixed"):$(".quickMenu").removeClass("fixed")}quickMenuFixed(),$(window).on("scroll",function(){quickMenuFixed()})}if($(".quickMenu .top button").click(function(){return $("html, body").animate({scrollTop:0},400),!1}),$(".category.circle").length>0){function categoryCircleSlider(){var t=$(".category.circle .frame"),e=t.parent();t.sly({horizontal:1,itemNav:"centered",smart:1,activateOn:"click",mouseDragging:1,touchDragging:1,releaseSwing:1,startAt:t.find("li.active").index(),speed:300,elasticBounds:1,dragHandle:1,dynamicHandle:1,clickBar:1,prevPage:e.find(".prevPage"),nextPage:e.find(".nextPage")})}categoryCircleSlider()}if($(".ratingCycle button").click(function(){return $(this).parent().children("button").removeClass("on").text("☆"),$(this).text("★").addClass("on").prevAll("button").text("★").addClass("on"),!1}),$(".viewToggle").on("click",function(){$(this).parent().next().toggle(),$(this).parent().next().next().toggle()}),$(".listToggle").on("click",function(){$(this).parents(".order").next().next().toggle(),$(this).parents(".order").next().next().next().toggle()}),$(".paymentArea").length>0){function paymentAreaFixed(){var t=$(window).scrollTop();$(".paymentArea").offset().top<t?$(".paymentArea").find(".price").addClass("fixed"):$(".paymentArea").find(".price").removeClass("fixed")}paymentAreaFixed(),$(window).on("scroll",function(){paymentAreaFixed()})}$(".productEvent.up").on("click",function(){var t=$(this).data("product");$(".productEvent.count").each(function(){$(this).data("product")==t&&(parseInt($(this).val())<999?($(this).val(parseInt($(this).val())+1),priceSync($(this))):(alert("상품 수량은 999보다 클 수 없습니다"),$(this).val(999)))})}),$(".productEvent.down").on("click",function(){var t=$(this).data("product");$(".productEvent.count").each(function(){$(this).data("product")==t&&(parseInt($(this).val())>1?($(this).val(parseInt($(this).val())-1),priceSync($(this))):(alert("상품 수량은 1보다 작을 수 없습니다"),$(this).val(1)))})}),$(".radioPick").on("change",function(){var t={type:$(this).data("type"),target:$(this).data("target"),event:$(this).data("event"),eventTarget:$(this).data("eventtarget")};switch(t.type){case"disabled":"on"===t.event?$("."+t.target).attr("disabled",!0):"off"===t.event&&$("."+t.target).attr("disabled",!1).first().focus();break;case"readonly":"change"===t.event&&($("."+t.target).attr("readonly",!1).first().focus(),$("."+t.eventTarget).attr("readonly",!0));break;case"show":if("change"===t.event)if(void 0===t.target)for(var e=t.eventTarget.split(","),a=0;e.length>a;a++)$("."+e[a]).hide();else $("."+t.target).show(),$("."+t.eventTarget).hide()}}),$(".popupOpen").on("click",function(){var t=$(this).data("popup");$(".popupArea").each(function(){$(this).data("popup")==t&&(t=$(this))}),$("body").css("overflow","hidden"),t.show(),t.find(".shadow").css({top:$(window).scrollTop(),height:$(window).height()}),t.find(".popup").css({top:$(window).scrollTop()+($(window).height()-t.find(".popup").height())/2,left:$(window).scrollLeft()+($(window).width()-t.find(".popup").width())/2})}),$(".popupClose").on("click",function(){var t=$(this).data("popup");$(".popupArea").each(function(){$(this).data("popup")==t&&(t=$(this))}),$("body").css("overflow","auto"),t.hide()});try{dhtmlXCalendarObject.prototype.langData.kr={dateformat:"%Y.%m.%d",monthesFNames:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],monthesSNames:["1","2","3","4","5","6","7","8","9","10","11","12"],daysFNames:["일요일","월요일","화요일","수요일","목요일","금요일","토요일"],daysSNames:["일","월","화","수","목","금","토"],weekstart:7,weekname:"주"},dhtmlXCalendarObject.prototype.lang="kr"}catch(t){}$(".contactBtn").on("click",function(){return""==$.trim($("#company").val())?(alert("회사명을 입력하세요"),$("#company").focus(),!1):""==$.trim($("#name").val())?(alert("성함을 입력하세요"),$("#name").focus(),!1):""==$.trim($("#spot").val())?(alert("직위를 입력하세요"),$("#spot").focus(),!1):""==$.trim($("#contact").val())?(alert("연락처를 입력하세요"),$("#contact").focus(),!1):""==$.trim($("#mail").val())?(alert("이메일을 입력하세요"),$("#mail").focus(),!1):0===$("input[name=type]:checked").length?(alert("관심이 있으신 서비스를 선택해주세요"),$("#type1").focus(),!1):""==$.trim($("#questions").val())?(alert("문의사항을 입력하세요"),$("#questions").focus(),!1):!!$("#agree").prop("checked")||(alert("약관에 동의하세요"),$("#agree").focus(),!1)});