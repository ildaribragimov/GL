$(function(){

	// Переопределяем ширину панели Динамического Меню
	if( $("div").is("#dynamic_menu") ){
		// при загрузке странцы
		dynMenuRedefine();
		// при изменении размера окна
		window.onresize = function(){
			dynMenuRedefine();
		};
	}

	// Генерируем дочерний элемент "загрузчика"
	$("#dynamic_menu").append("<div id='loader'></div>");

	// Добавляем css-класс
	$(".main_page .products_list .cells").addClass("one_row");

	// Переопределяем скроллбар
	if( $("div").is(".main_page") || $("div").is(".similar") ){
		scrollRedefine();
	}

	// Генерация кнопки вызова окна формы "Оформление заказа"
	$(".poduct_desc .desc .price").after("<div class='button'><a href='/' target='_self' title='ОФОРМИТЬ ЗАКАЗ'>ОФОРМИТЬ ЗАКАЗ</a></div>");

	// Перехват события "Клик по категориям"
	$("#tools_classifications a").click(function(){
		$("#tools_classifications a.active").removeClass("active");
		$(this).addClass("active").blur();
		if(modalWindow_display()==1){
			dynMenuAnimate($(this));
		}
		return false;
	});

	// "Отложеная" загрузка фотографии галереи товара
	$(".gallery li a").click(function(){
		productSrc=$(this).attr("href");
		poductAlt=$(this).find("img").attr("alt");
		poductTitle=$(this).attr("title");
		if(modalWindow_display()==1){
			$(".foto")
				.height( 400 )
				.find("img").fadeOut("slow")
				.end()
				.html("<img src='"+productSrc+"' alt='"+poductAlt+"' title='"+poductTitle+"' style='display:none'/>")
				.find("img").load(function(){
					$(".foto")
						.animate( {height: $(".foto > img").height()}, "fast", "easeOutQuart", function(){
							$(".foto > img").fadeIn("slow", function(){
								modalWindow_display();
							});
						});
				});
		}
		return false;
	});

	// Перехват собития "Клик по кнопкам панели скроллбара"
	$(".scrollbar .butt").click(function(){
		$(this).blur();
		scrolling($(this).attr("class").split(" ")[1],"slow",false);
		return false;
	});

	// Перехват события "Прокрутка колеса мышки над прокручиваемой панелью"
	$('.scrollbar .c, .products_list .cells').bind('mousewheel', function(event, delta) {
		if($(".scrollbar").length!=false && $(".scrollbar").css("display")!="none"){
			dir = delta > 0 ? 'prev' : 'next';
			scrolling(dir,"normal",false);
			return false;
		}
	});

});

var dynMenu_status=1, // Статус динамического меню (0 - скрыто, 1 - отображено)
	ajax_status=0, // Статус AJAX-запроса (0 - не выполнен, 1 - выполнен )
	status = 0,  // Статус модльного окна (0 - скрыто, 1 - отображено)
	products_list_height; // Переменная высоты панели товаров

// Позиционирование панели Диначеского Меню
function dynMenuRedefine(){
	$("#dynamic_menu").css({width:$("body").width(), marginLeft:-($("body").width()-$("#container").outerWidth())/2});
}

// Анимация панелей "заголовка категории" и "описания категории" динамического меню
function dynMenuPans_Action(action,hideStep,moveDown){
	action=(jQuery.support.opacity==true) ? action : "1";
	$("#class-on_header").animate({opacity:action, marginLeft:"-"+hideStep, marginTop:moveDown}, "normal", "easeOutQuart");
	$("#class-on_desc").animate({opacity:action, marginRight:"-"+hideStep, marginTop:moveDown}, "normal", "easeOutQuart", function(){
		dynMenu_status = (dynMenu_status==1) ? 0 : 1;
	});
	return dynMenu_status;
}

// Анимация Динамического меню
function dynMenuAnimate(element){
	// Если динамическое меню отображено
	if(dynMenu_status==1){
		// Определяем параметры анимации динмического меню
		action="hide";
		hideStep=($("#dynamic_menu").width()-$("#container").width())/2+$("#class-on_header").width()+464+50;
		moveDown="18";
		// Анимация панелей "заголовка категории" и "описания категории" динамического меню
		dynMenuPans_Action(action,hideStep,moveDown);
		// Анимация панели товаров "Выбор профессионалов" (прозрачность)
		$(".main_page .products_list").animate({opacity:0}, "normal", function(){
			// Скрываем скроллбар (исчезновение)
			$(".scrollbar").fadeOut();
			// Изменяем высоту панели товаров "Выбор профессионалов" до нуля
			$(".main_page .products_list").animate({height:0}, "normal", "easeOutQuart", function(){
				// Анимация изображения категории
				$("#class-on_img").animate({opacity:action, left:"0", marginLeft:"-"+$("#class-on_img img").width()}, "normal", "easeOutQuart", function(){
					$("#loader").fadeIn("normal",function(){
						// Получение данных категории
						$.ajax({
							type: "POST",
							url: "index.php",
							data: {ajaxData:element.attr('href')},
							async: false,
							cache: false,
							timeout: 10000,
							dataType: "json",
							success: function(data){
								if(data === null){
									alert('Произошла ошибка.');
								}
								// Вставляем изображение активной категории
								$("#class-on_img div").html("<img src="+data['category'].params['image']+" alt="+data['category'].title+" title="+data['category'].title+" />");
								// Вставляем зголовок активной категории
								$("#class-on_header").html('<h1>'+data['category'].title+'</h1>');
								// Применяем шрифт к новому заголовку
								Cufon.replace("h1");
								// Вставляем описание активной категории
								$("#class-on_desc_board .category-desc").html(data['category'].description);
								// Вставляем ссылку на соответствующую категорию каталога
								$("#class-on_desc_board .open_catalog").attr('href', (data['category'].link));	
								if(data['params'].show_category_goods == 1 && data['items'].length){
									var HTML = '';
									for(var i=0; i<data['items'].length; i++){
										HTML += '<div class="cell">'
											+'<div class="img">'
											+'<a href="'+data['items'][i].link+'" target="_self" title="'+data['items'][i].title+'">'
											+ data['items'][i].photos
											+'</a>'
											+'</div>'
											+'<a class="name" href="'+data['items'][i].link+'" target="_self" title="'+data['items'][i].title+'">'+data['items'][i].title+'</a>'
											+'<span>'+data['items'][i].price+'</span>'
											+'</div>';
									}
									HTML += '<div class="cleaner"></div>';
									$(".cells").html(HTML);
								}else{
									$("#content").html('');
								}
								$("#class-on_img div img").load(function() {
									$("#loader").fadeOut("normal", function(){
										// Показываем содержимое
										dynMenuAnimate();
										modalWindow_display();
									});
								});
							},
							error: function(){
								alert("Ошибка! Попробуйте позже!");
							}
						});
					});
				});
			});
		});
	}
	// Если динамическое меню скрыто
	else{
		// Определяем параметры анимации динмического меню
		action="show";
		hideStep=464;
		moveDown="0";
		// Анимация "изображения категории"
		$("#class-on_img").css({"left":"100%","marginLeft":"0"}).animate({opacity:action,left:"50%"},"normal","easeOutQuart",function(){
			// Анимация панелей "заголовка категории" и "описания категории" динамического меню
			action=(jQuery.support.opacity==true) ? action : "1";
			dynMenuPans_Action(action,hideStep,moveDown);
			// Анимация панели товаров "Выбор профессионалов"
			$(".main_page .products_list").animate({height:products_list_height}, "normal", "easeOutQuart", function(){
				$(".main_page .products_list").animate({opacity:1}, "normal", function(){
					scrollRedefine();
				});
			});
		});
	}
}

// Переопределение параметров скроллбара
function scrollRedefine(){
	// Устанавлваем позицию прокручиваемой панели товаров и скроллбара в начало
	$(".cells").removeAttr("style");
	$(".scrollbar .scroll").removeAttr("style");
	// Определяем ширину/высоту панели товаров
	elementsInRow = $(".products_list .cells .cell").length;
	$(".products_list .cells").width(elementsInRow*$(".products_list .cells .cell").outerWidth(true));
	products_list_height = (products_list_height == null)? $(".products_list").height(): products_list_height;
	// Выводим скроллбар, если количество товаров в выкладке более 5
	if( $(".products_list .cells .cell").length > 5 ){
		// Генерируем скроллбар если он не существует
		if( !$("div").is(".scrollbar") ){
			$(".products_list").append('<div class="bottom_bar scrollbar"><div class="bar"><div class="l"></div><div class="c"><a class="butt prev" href="/" target="_self" title="предыдущая"><img src="images/none.gif" alt="&larr;" title="предыдущая"/></a><div class="scroll"><div><div></div></div></div><a class="butt next" href="/" target="_self" title="следущая"><img src="images/none.gif" alt="&rarr;" title="следущая"/></a></div><div class="r"></div></div></div><div class="cleaner"></div>');
		}
		// Определяем ширину скроллбара
		$(".scrollbar .scroll > div").width( ( ($(".scrollbar .c").width()*5)/$(".products_list .cells .cell").length ) -10 );
		// Увеличиваем высоту панели товаров на высоту скроллбара
		$(".products_list").animate({height: "+="+$(".scrollbar").height()},500, "easeOutQuart", function(){
			// Выводим скроллбар
			$(".scrollbar").fadeIn(500);
		});
	}
}

var count = 0;
// Отображение/Скрытие окна формы оформления заказа
$(".poduct_desc .button a, #window .close_win_butt").live("click", function(){
	if (modalWindow_display() == 1){
		// Если окна формы оформления заказа еще нет
		if (!$("div").is("#window.modal_win")){
			// Загружаем изображения
			base='/templates/dannat_1/';
			captcha='index.php?option=com_catalogue&tmpl=component&task=captcha&count='+count++;
			images=new Array(base+'img/win_bg1.png',base+'img/win_bg2.png',base+'img/win_bg3.png',base+'img/win_bg4.png', captcha);
			$("#window_bg").css("cursor","wait");
			$.preloadImages(images, function(){
				// Когда все изображения загружены
				// Генериуем окно формы оформления заказа
				$("#window_bg").append("<div id='window' class='modal_win'><div><div><div><div class='win_content'><h4>Оформление заказа</h4><a class='close_win_butt' href='/' target='_self' title='Закрыть'>&times;</a><form id='order' class='sendmail'><div class='ordered_products_info'><label>Артикул<input type='text' name='articul' value='"+$(".codenum").val()+"' disabled='disabled' /></label><label class='last'>Наименование<input type='text' name='title' value='"+$("h1").text()+"' disabled='disabled' /></label></div><label>Имя<input type='text' name='name' value='' /></label><label class='last'>Телефон<input type='text' name='phone' value='' /></label><label>Примечание<textarea name='subject'></textarea></label><img src='"+captcha+"' alt='' title='' /><label class='last'>Код с картинки<input type='text' name='captcha_input' value='' /></label><div class='cleaner'></div><div class='button'><button type='submit' class='submit' value='sendOrder' name='task'>ОТПРАВИТЬ</button></div></form></div></div></div></div></div>");
				// Устанавливаем позицию окна
				modalWindow_position(".modal_win");
				// Изменяем курсор на "По умолчаню"
				$("#window_bg").css("cursor","default");
				$(".modal_win").fadeIn("normal");
			});
		}
	}else{
		$(".modal_win").fadeOut("normal", function(){
			$("#window_bg").html('');
		});
	}
	return false;
});

// Проверка данных на корректность
function check_form_data(check_name, data){
	result = true;
	switch (check_name){
		// Проверка на "не пустое значение"
		case "isEmpty":
			$.each( data, function(key,value){
				if ( !value.val() ){
					result = false;
				}
			});
			break;

		// Проверяем корректность значение поля "Телефон"
		case "phone":
			mask = /[^0-9\-\(\)\s]/;
			if ( mask.test(data.val()) ){
				result = false;
			}
			break;
	}
	return result;
}

// Отправка формы оформления заказа
$(document).delegate("#window form", "submit", function(){
	// Объявляем массив проверяемых значений
	var checked_data = [
		$(this).find("[name='name']"),
		$(this).find("[name='phone']"),
		$(this).find("[name='captcha_input']"),
		$(this).find("[name='subject']")
	];

	// Проверяем форму на заполнение полей
	if ( check_form_data('isEmpty', checked_data) ) {
		// Проверяем корректность значения поля "Телефон"
		if ( !check_form_data('phone', $(this).find("[name='phone']")) ){
			alert("Контактный телефон некорректен!");
		} else {
			var ajaxFormData = 'title='+$(this).find("[name='title']").val()+'&articul='+$(this).find("[name='articul']").val()+'&name='+$(this).find("[name='name']").val()+'&phone='+$(this).find("[name='phone']").val()+'&subject='+$(this).find("[name='subject']").val()+'&captcha_input='+$(this).find("[name='captcha_input']").val();
			// Отправка данных на сервер и получение результата
			$.ajax({
				type: "POST",
				url: "index.php",
				data: {ajaxSubmitData:ajaxFormData},
				cache: false,
				timeout: 10000,
				dataType: "json",
				success: function(data){
					alert(data['msg']);
					if (data['state'] == 1){
						$.each( checked_data, function(key,value){
							value.val('');
						});
						$("#window form img").attr("src", "/index.php?option=com_catalogue&tmpl=component&task=captcha&count="+count++ );
					}
				},
				error: function(){
					alert("Ошибка! Попробуйте позже!");
				}
			});
		}
	} else {
		alert("Все поля обязательны для заполнения!");
	}
	return false;
});

// Включение/Отключение всплывающего окна
function modalWindow_display(){
	// Генерируем перекрывающий слой, если он не найден
	if(!$("div").is("#window_bg")){
		$("body").append("<div id='window_bg'></div>");
		$("#window_bg").css("height",$("body").height());
	}
	// Деактивируем перекрывающий слой, если он активен
	if(status == 1){
		$("#window_bg").fadeOut("fast", function(){
			// Изменяем курсор на "По умолчаню"
			$("#window_bg").css("cursor","default");
		});
		status=0;
	}
	// Активируем перекрывающий слой, если он не активен
	else{
		// Изменяем курсор на "Ждите"
		$("#window_bg").css("cursor","wait");
		// Если перекрывающий слой неактивен, тогда активируем его
		$("#window_bg").fadeIn("fast");
		status=1;
	}
	return status;
}

// Определение положения всплывающего окна на странице при прокрутке
function modalWindow_position(element){
	left_pos=Math.floor(($(window).width()-$(element).outerWidth())/2);
	top_pos=Math.floor(($(window).height()-$(element).outerHeight())/2);
	$(element).css({marginTop:$(window).scrollTop() + top_pos,marginLeft:left_pos});
	$(window).scroll(function(){
		if($(window).scrollTop() > top_pos){
			$(element).stop().animate({marginTop: $(window).scrollTop() + top_pos});
		}else{
			$(element).stop().animate({marginTop: top_pos});
		}
	});
}

// Предзагрузка изображений
jQuery.preloadImages = function (){
	if(typeof arguments[arguments.length - 1] == 'function'){
		var callback = arguments[arguments.length - 1];
	}else{
		var callback = false;
	}
	if(typeof arguments[0] == 'object'){
		var images = arguments[0];
		var n = images.length;
	}else{
		var images = arguments;
		var n = images.length - 1;
	}
	var not_loaded = n;
	for (var i = 0; i < n; i++) {
		jQuery(new Image()).attr('src', images[i]).load(function() {
			if (--not_loaded < 1 && typeof callback == 'function') {
				callback();
			}
		});
	}
}

// Скроллинг кнопками
function scrolling(to,speed,correct){
	// Шаг прокрутки скроллбара по умолчанию
	scroll_step=$(".scrollbar .c").width()/$(".products_list .cells > .cell").length;
	// Шаг прокрутки панели по умолчанию
	pannel_step=$(".products_list .cells .cell").outerWidth(true);
	// Определение позиции панели и скроллбара
	scrollMarginL=$(".scroll").outerWidth(true)-$(".scroll").outerWidth();
	pannelMarginL=$(".products_list .cells").outerWidth()-$(".products_list .cells").outerWidth(true);
	scrollMarginR=$(".scrollbar .c").width()-$(".scroll").outerWidth(true);
	pannelMarginR=$(".products_list .cells").outerWidth(true)-$(".products_list").outerWidth();
	// Определение количества целых шагов прокрутки панели и скроллбара, и направления корректировки
	if(correct==true){
		full_pannel_steps_count=(pannelMarginL/pannel_step).toFixed(0);
		full_scroll_steps_count=(pannelMarginL/pannel_step).toFixed(0);
		to = full_pannel_steps_count*pannel_step < pannelMarginL ? "prev" : "next" ;
	}
	// Условия прокрутки
	if(to=="prev"){
		animate1="-=";
		animate2="+=";
		if(correct==true){
			scroll_step = scrollMarginL-full_scroll_steps_count*scroll_step;
			pannel_step = pannelMarginL-full_pannel_steps_count*pannel_step;
		}else{
			scroll_step = scrollMarginL - scroll_step <= 0 ? scrollMarginL : scroll_step;
			pannel_step = pannelMarginL - pannel_step <= 0 ? pannelMarginL : pannel_step;
		}
	}else{
		animate1="+=";
		animate2="-=";
		if(correct==true){
			scroll_step = full_scroll_steps_count*scroll_step-scrollMarginL;
			pannel_step = full_pannel_steps_count*pannel_step-pannelMarginL;
		}else{
			scroll_step = scrollMarginR - scroll_step <= 0 ? scrollMarginR : scroll_step;
			pannel_step = pannelMarginR - pannel_step <= 0 ? pannelMarginR : pannel_step;
		}
	}
	// Прокрутка скролла и панели
	$(".scrollbar .scroll").stop().animate({"marginLeft":animate1+scroll_step},speed,"easeOutQuart");
	$(".products_list .cells").stop().animate({"marginLeft":animate2+pannel_step},speed,"easeOutQuart",function(){
		if(correct==false){
			setTimeout(function(){
				scrolling(to,"slow",true);
			}, 500);
		}
	});
}