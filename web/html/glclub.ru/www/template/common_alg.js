$(document).ready(function(){
	/**
	 * Определение переменных
	 *
	 * lev2Height (тип: integer) - высота подменю второго уровня
	 * animationState (тип: boolean) - состояние анимации ( true - выполняется, false - нет анимации)
	 */
	var lev2Height = null;
	var animationState = false;

	/**
	 * Описание плагинов и виджетов
	 *
	 * Список плагинов и виджетов:
	 * "getUrlVars" - 
	 * "dialogWindow" - генерирует диалоговое окно
	 */
	(function($){
		/**
		 * Плагин "Получение GET-параметров из URL-строки в формате JSON
		 *
		 * Параметры плагина:
		 * varsNames (тип: array) - массив имен запрашиваемых параметров
		 *
		 * Возвращаемое значение:
		 * urlVars (тип: object) - объект параметров и их значений, представленный в формате JSON
		 */
		jQuery.fn.getUrlVars = function() {
			/**
			 * Объявление переменных
			 *
			 * urlParams (тип: object) - объект GET-параметров
			 * elementHref (тип: string) - анрибут "href" объекта, к которому применяется данный плагин
			 */
			var urlVars = {},
				elementHref = $(this).attr("href");

			// Проверка наличия атрибута "href" элемента
			if ( elementHref ) {
				urlParamsSubstr = elementHref
					// Получение части URL-строки начиная со следующего за символом "?" символа
					.slice( elementHref.indexOf('?')+1 )
					// Разбиение строки на массив подстрок "имя параметра = значение параметра"
					.split("&");
				for ( var i in urlParamsSubstr ) {
					// Разбиение строки на массив подстрок "имя параметра" и "Значение параметра"
					param = urlParamsSubstr[i].split("=");
					// Создание свойств объекта URL-параметров
					urlVars[ param[0] ] = param[1];
				}
			}
			// Возврат объекта URL-параметров
			return urlVars;
		};
		/**
		 * Плагин "Получение GET-параметра из URL-строки в формате JSON по имени
		 *
		 * Параметры плагина:
		 * varName (тип: string) - имя запрашиваемого GET-параметра
		 *
		 * Возвращаемое значение:
		 * urlVars[varName] (тип: string) - значение параметра
		 */
		jQuery.fn.getUrlVar = function( varName ) {
			/**
			 * Объявление переменных
			 *
			 * varName (тип: string) - имя GET-параметра
			 */
			var varName;
			// Возврат объекта URL-параметров
			return $(this).getUrlVars()[varName];
		};

		/**
		 * Плагин "dialogWindow"
		 *
		 * Описание:
		 * Плагин генерирует диалоговое окно в соответсвии с указанными свойствами.
		 * 
		 * Возвращаемое значение:
		 * Объект, на котором был вызван плагин
		 */
		$.widget("scorsys.dialogWindow", widgetObj = {
			/**
			 * Объявление переменных
			 *
			 * options (тип: object) - объект свойств плагина
			 */
			options: {
				// Заголовок окна
				title: null,

				// Панель управляющих кнопок окна (свернуть, развернуть, закрыть)
				controls: {
					// Кнопка "Закрыть окно"
					close: {
						cssClass: "window-close", // CSS-класс кнопки
						title: "Закрыть", // Название кнопки
						tooltip: null, // Подсказка
						action: function(event) { // Пользовательская функция при нажатии на кнопку
							return widgetObj.closeWindow(event);
						}
					}
				},

				// Поле вывода системного сообщения
				message: null,
					/* {
					type: "error", // Тип сообщения ("error" - ошибка, "attention" - предупреждение , "success" - успешно)
					text: null // Текст сообщения. Если не задан, сообщение не выводится
					} */

				// Содержимое окна
				content: null,

				// Панель кнопок действий
				buttons: null // Не выводить панель кнопок? ("true" - не выводить, "false" - выводить)
					/* {
					"Имя кнопки": function(){ 
						// Функция обработчик нажатия кнопки
					} */
			},

			/**
			 * Метод "openWindow" отображает диалоговое окно
			 *
			 * Параметры метода:
			 * event (тип: object) - объект, содержащий данные о произошедшем событии
			 */
			openWindow: function(event) {
				/**
				 * Объявление переменных
				 *
				 * eventTarget (тип: object) - Ссылка на DOM-элемент, на котором вызвано событие
				 * dialogWindow (тип: object) - Ссылка на объект диалогового окна
				 */
				var eventTarget = $(event.target),
					dialogWindow = eventTarget.parents(".window-callArea:first").children(".window:first");

				// Проверка открыто лисостояния диалогового окна (открыто/закрыто)
				if ( dialogWindow.hasClass("closed") ) { // Если окно закрыто:
					eventTarget
						// Принудительное установка фокуса на элементе
						.focus()
						// Принудительная потеря фокуса на элементе
						.blur();
					dialogWindow
						// Отображение диалогового окна
						.fadeIn("fast", function(){
							// Изменение значения класса статуса диалогового окна
							$(this).toggleClass("opened closed");
						});
				}
				// Запрет на переход по ссылке
				return false;
			},

			/**
			 * Метод "closeWindow" скрывает диалоговое окно
			 *
			 * Параметры метода:
			 * event (тип: object) - объект, содержащий данные о произошедшем событии
			 */
			closeWindow: function(event) {
				/**
				 * Объявление переменных
				 *
				 * eventTarget (тип: object) - Ссылка на DOM-элемент, на котором вызвано событие
				 * dialogWindow (тип: object) - Ссылка на объект диалогового окна
				 */
				var eventTarget = $(event.target),
					dialogWindow = eventTarget.parents(".window:first");

				// Проверка состояния диалогового окна (открыто/закрыто)
				if ( dialogWindow.hasClass("opened") ) { // Если окно открыто:
					eventTarget
						// Принудительное установка фокуса на элементе
						.focus()
						// Принудительная потеря фокуса на элементе
						.blur();
					dialogWindow
						// Скрытие диалогового окна
						.fadeOut("fast", function(){
							// Изменение значения класса статуса диалогового окна
							$(this).toggleClass("opened closed");
						});
				}
				// Запрет на переход по ссылке
				return false;
			},

			/**
			 * Метод "_buildHTML" генерирует объект диалогового окна
			 *
			 * Возвращаемое значение:
			 * (тип: object) - объект сгенерированного диалогового окна
			 */
			_buildHTML: function() {
				/**
				 * Объявление переменных
				 *
				 * windowControls (тип: object) - объект панели управляющих кнопок окна
				 * title (тип: string) - занчение свойства "title" (заголовка окна) объекта свойств окна
				 * controls (тип: object) - объект управляющих кнопок объекта свойств окна
				 * message (тип: object) - объект системных сообщений
				 * content (тип: mixed) - содержимое окна
				 * buttons (тип: object) - объект кнопок действий
				 */
				var windowControls = null,
					title = this.options.title,
					controls = this.options.controls,
					message = this.options.message,
					content = this.options.content,
					buttons = this.options.buttons;

				// Генерация Заголовка окна
				windowTitle = ( title ) ? $('<div></div>', {'class':'window-title'}).text(title): '';

				// Генерация панели управляющих кнопок окна
				if ( controls ) {
					for ( var property in controls ) {
						if ( controls[property] ) {
							if ( windowControls == null ) {
								windowControls = $('<div></div>', {'class':'window-controls'});
							}
							$('<a></a>', {
									'class':controls[property]["cssClass"],
									'href':'#',
									'title':controls[property]["title"]
								})
								.append('<img src="/tpl_files/img/none.gif" alt="'+controls[property]["title"]+'" />')
								.on('click', controls[property]["action"] )
								.appendTo(windowControls);
						}
					}
				}

				// Генерация Шапки окна
				if ( title || controls ) {
					windowHeader = $('<div></div>', {'class':'window-header'}).append(windowTitle, windowControls);
				}

				// Генерация блока системных сообщений
				windowMessage = ( message ) ? '<div class="window-message"><div class="message'+message["type"].charAt(0).toUpperCase().concat(message["type"].substr(1))+'"><div class="message-wrap"><div class="message-content"><div class="message-title">'+message["text"]+'</div></div></div></div></div>': '';

				// Генерация содержимого диалогового окна
				windowContent = ( content ) ? $('<div></div>', {'class':'window-content'}).append( content ): '';

				// Генерация панели кнопок действий
				windowButtons = ( buttons ) ? $('<div></div>', {'class':'window-buttons'}).append( buttons ): '';

				// Возврат объекта диалогового окна
				return $('<div class="window"></div>')
					// добавление CSS-класса, описывающего состояние "по умолчанию" диалогового окна (открыто/закрыто)
					.addClass("closed")
					// Добавление объектов содержимого окна (заголовка, системных сообщений, основного содержимого, кнопок действий)
					.append(windowHeader, windowMessage, windowContent, windowButtons)
					// Дополнительная обертка содержимого окна
					.wrapInner('<div class="window-container"></div>');
			},

			/**
			 * Метод "_create" вызывается при активации виджета на элементе (конструктор)
			 */
			_create: function () {
				this.element
					// Добавление сгенерированного объекта диалогового окна
					.append( this._buildHTML() )
					// Получение ссылки на дочерний объект элемента вызова диалогового окна
					.children(".window-open:first")
					// Привязка обработчика события при клике по элементу "window-open"
					.on("click", this.openWindow );
			},

			/**
			 * Метод "destroy" вызывается при удалении деактивации виджета на элементе (деструктор)
			 */
			destroy: function() {}
		});

		/**
		 * Плагин "generateTabs"
		 *
		 * Описание:
		 * Плагин генерирует конструкцию вкладок из указанных составных элементов
		 * 
		 * Возвращаемое значение:
		 * Объект, на котором был вызван плагин
		 */
		$.widget("scorsys.generateTabs", {
			/**
			 * Объект свойств плагина
			 *
			 * tabsPos (тип: string) - тип конструкции расположения вкладок отниситено содержимого вкладок ("top" - сверху, "bottom" - снизу, "left" - слева, "right" - справа)
			 * widgetElementCssClass (тип: string) - Дополнительный CSS-класс корневого элемента плагина
			 * tabsTitleUserCssClass (тип: string) - Дополнитенй CSS-класс вкладок (Задается пользователем)
			 * tabsContentUserCssClass (тип: string) - Дополнитенй CSS-класс содержимого вкладок (Задается пользователем)
			 */
			options: {
				widgetElement: this.element,
				tabsPos: "top",
				widgetElementCssClass: null,
				tabsTitleUserCssClass: null,
				tabsContentUserCssClass: null
			},

			/**
			 * Метод "_changeTab" сменяет вкладки
			 *
			 * Параметры метода:
			 * event (тип: object) - объект, содержащий данные о произошедшем событии
			 */
			_changeTab: function(event) {
				/**
				 * Объявление переменных
				 *
				 * eventTarget (тип: object) - Ссылка на DOM-элемент, на котором вызвано событие
				 * tabsContents (тип: object) - Ссылка на родительский эелемент, элемента, на котором вызвано событие
				 * activatedContentsItem (тип: object) - Ссылка на элемент содержимого активируемой вкладки
				 * tabsContentsHeight (тип: integer) - Высота блока содержимых вкладок
				 * contentsItemHeight (тип: integer) - Высота блока содержимого активируемой вкладки
				 */
				var eventTarget = $(event.currentTarget),
					eventTargetParent = eventTarget.parents(".genericContainer-tabs"),
					tabsContents = eventTargetParent.find(".tabs-contents:first"),
					activatedContentsItem = eventTargetParent.find(".contentsItem").eq( eventTarget.index() ),
					tabsContentsHeight = tabsContents.height(),
					activatedContentsItemHeight = activatedContentsItem.height();

				// Получение ссылки на элемент, на котором было вызвано событие
				eventTarget
					// Получение ссылки на элементы, не имеющие класс "active"
					.not(".active")
					// Получение ссылки на дочерние элементы
					.children()
					// Добавление предыдущего набора к текущему
					.andSelf()
					// Добавление CSS-классов "active" активируемой вкладки и содержащемуся в нем дочернему элементу
					.addClass("active")
					// Получение ссылки на родительский элемент с CSS-классом "titlesItem"
					.parents(".titlesItem:first")
					// Получение ссылки на соседний элемент с классом "active"
					.siblings(".active")
					// Получение ссылки на дочерний элемент с CSS-классом "active"
					.children(".active")
					// Добавление предыдущего набора к текущему
					.andSelf()
					// Удаление CSS-класса "active" текущей активной вкладки и содержащемуся в нем дочернему элементу
					.removeClass("active")
					// Получение ссылки на корневой элемент объекта плагина
					.parents(".genericContainer-tabs:first")
					// Получение ссылки на "видимые" элеметы содержимых вкладок
					.find(".contentsItem:visible")
					// Скрытие элементов
					.fadeOut("normal", function(){
						if ( tabsContentsHeight != activatedContentsItemHeight ) {
							// Получение ссылки на первый из родительских элементов "tabs-contents"
							tabsContents
								// Выполнение анимации с заданными параметрами
								.animate(
									{ height: activatedContentsItemHeight },
									"fast",
									function(){
										// Ссылка на блок содержимого активируемой вкладки
										activatedContentsItem
											// Отображение элемента
											.fadeIn("normal");
									}
								);
						} else {
							// Ссылка на блок содержимого активируемой вкладки
							activatedContentsItem
								// Отображение элемента
								.fadeIn("normal");
						}
					});

				// Запрет на переход по ссылке
				return false;
			},

			/**
			 * Метод "_getTabsTitles" генерирует объект вкладок
			 */
			_getTabsTitles: function() {
				/**
				 * Объявление переменных
				 *
				 * tabsPos (тип: string) - значение свойства плагина "tabsPos"
				 * tabsTitleUserCssClass (тип: string) - значение свойства плагина "tabsTitleUserCssClass"
				 */
				var tabsPos = this.options.tabsPos,
					tabsTitleUserCssClass = this.options.tabsTitleUserCssClass;

				// Возврат объекта панели вкладок
				return $('<div></div>', {'class':'tabs-titles'} )
					// Добавление содержимого в панель вкладок
					.append(
						// Получение ссылки на эелемент, на котором был вызван плагин
						this.element
							// Получение ссылки на дочерние элементы с классом "tabsItem-title"
							.find(".tabsItem-title")
							// Копирование выбранных элементов
							.clone(true)
					)
					// Получение ссылки на дочерние элементы
					.children()
					// Обертка каждого из выбранных элементов
					.wrap( $('<div></div>', {'class': (tabsTitleUserCssClass)? tabsTitleUserCssClass+' titlesItem': 'titlesItem'}) )
					// Получение ссылки на предыдущий элемент в цепочке вызова
					.end()
					// Добавление элемента, очищающего поток
					.append( function() {
						if ( tabsPos == "top" || tabsPos == "bottom" ) {
							return '<div style="clear:both;"></div>';
						}
					})
					// Обертка содержимого выбранных элементов
					.wrapInner('<div class="titles-wrap"><div class="titlesItems"></div></div>')
					// Событие при клике по вкладке
					.on( "click", ".titlesItem", this._changeTab )
					// Получение ссылки на последний элемент в наборе дочерних элемент ов с классом "titlesItem"
					.find(".titlesItem:last")
					// Добавление CSS-класса "last"
					.addClass("last")
					// Получение ссылки на первый элемент в наборе соседних элементов с классом "titlesItem"
					.siblings(".titlesItem:first")
					// Добавление CSS-класса "first"
					.addClass("first")
					// Получение ссылки на дочерний элемент
					.children()
					// Добавление предыдущего набора к текущему
					.andSelf()
					// Добавление CSS-класса "active"
					.addClass("active")
					// Получение ссылки на элемент панели вкладок
					.parents(".tabs-titles");
			},

			/**
			 * Метод "_getTabsContents" генерирует объект блока с содержимым вкладок
			 */
			_getTabsContents: function() {
				/**
				 * Объявление переменных
				 *
				 * tabsContentUserCssClass (тип: string) - значение свойства плагина "tabsContentUserCssClass"
				 */
				var tabsContentUserCssClass = this.options.tabsContentUserCssClass;

				// Возврат объекта блока с содержимым вкладок
				return $('<div></div>', {'class':'tabs-contents'} )
					// Добавление содержимого вкладки в блок содержимого вкладок
					.append(
						// Получение ссылки на эелемент, на котором был вызван плагин
						this.element
							// Получение ссылки на дочерний элемент с классом "tabsItem-content"
							.find(".tabsItem-content")
							// Установка значений CSS-свойств высот блоков содержимых вкладок в соответсвии с их фактическими высотами
							.height( function(index, value){
								// Возврат текущего значения высоты элемента
								return value;
							})
							// Копирование выбранных элементов
							.clone(true)
							// Изменение значения атрибута "class" скопированных элементов
							.attr({
								'class': (tabsContentUserCssClass)? tabsContentUserCssClass+' contentsItem':'contentsItem'
							})
					)
					// Обертка содержимого выбранных элементов
					.wrapInner('<div class="contents-wrap"><div class="contentsItems"></div></div>')
					// Получение ссылки на первый элемент в наборе дочерних элементов с классом "contentsItem"
					.find(".contentsItem:first")
					// Добавление CSS-класса "first"
					.addClass("first")
					// Получение ссылки на соседние элементы с классом "contentsItem"
					.siblings(".contentsItem")
					// Скрытие элементов
					.hide()
					// Получение ссылки на последний элемент в наборе
					.last()
					// Добавление CSS-класса "last"
					.addClass("last")
					// Получение ссылки на элемент содержимого вкладок
					.parents(".tabs-contents")
					// Установка значения CSS-свойства высоты
					.height( function(index, value){
						// Возврат высоты блока содержимого первой вкладки
						return $(this)
							// Получение ссылки на блок содержимого первой вкладки
							.find(".contentsItem:first")
							// Получение высоты элемента
							.height();
					});
			},

			/**
			 * Метод "_create" вызывается при активации виджета на элементе (конструктор)
			 */
			_create: function () {
				/**
				 * Объявление переменных
				 *
				 * tabsPos (тип: string) - значение свойства плагина "tabsPos"
				 * widgetElementCssClass (тип: string) - значение свойства плагина "widgetElementCssClass"
				 */
				var tabsPos = this.options.tabsPos,
					widgetElementCssClass = this.options.widgetElementCssClass;

				// Переопределение переменной "widgetElementCssClass"
				widgetElementCssClass = (widgetElementCssClass)? ' '+widgetElementCssClass: '';

				this.element
					// Добавление сгенерированного объекта вкладок перед элементом, на котором был вызван плагин
					.before( $('<div></div>', { 'class': 'genericContainer-tabs tabsPos-'+tabsPos+widgetElementCssClass })
						// Добавление содержимого
						.append(
							// Генерация объекта вкладок
							this._getTabsTitles()
							,
							// Генерация объекта содержимого вкладок
							this._getTabsContents()
						)
					)
					// Удаление элемента, на котором был вызван плагин с возможностью дальнейшего его востановления
					.hide();
			},

			/**
			 * Метод "destroy" вызывается при удалении деактивации виджета на элементе (деструктор)
			 */
			destroy: function() {}
		});

		/**
		 * Плагин "scroll"
		 *
		 * Описание:
		 * Плагин генерирует конструкцию прокручивающегося содержимого с панелью скроллбара из указанных составных элементов
		 *
		 * Возвращаемое значение:
		 * Объект, на котором был вызван плагин
		 */
		$.widget("scorsys.scroll", widgetObjTwo = {

			/**
			 * Объект свойств плагина
			 *
			 * scrollType (тип: string) - Тип прокрутки. Может принимать значения "horizontal" (горизонтальная), "vertical" (вертикальная)
			 * speed (тип: string) - Скорость прокрутки. Может принимать значения "slow", "medium", "normal", "fast".
			 * correct (тип: boolean) - Корректировка положений прокручиваемой панели и бегунка (ScrollBar-а). Может принимать значения "true", "false".
			 * scrollPanContentSize (тип: integer) - Размер прокручиваемого содержимого
			 * showScrollBar (тип: boolean) - Включает/Выключает отображение бегунка (ScrollBar-а). Может принимать значения "true", "false".
			 * scrollbarUserCssClass (тип: string) - Дополнитенй CSS-класс панели прокрутки (Задается пользователем)
			 */
			options: {
				scrollType: "horizontal",
				speed: "normal",
				correct: false,
				scrollPanContentSize: null,
				showScrollBar: true,
				scrollbarUserCssClass: null
			},

			/**
			 * Метод "_scrolling"
			 *
			 * Метод прокручивает прокручиваемую панель и скролл
			 */
			scrolling: function( event, delta ) {
				/**
				 * Объявление переменных:
				 *
				 * scrollType (тип: string) - значение свойства плагина "scrollType"
				 * speed (тип: string) - значение свойства плагина "speed"
				 * correct (тип: boolean) - значение свойства плагина "correct"
				 * scrollbarUserCssClass (тип: string) - значение свойства плагина "scrollbarUserCssClass"
				 * scrollPanContent (тип: object) - ссылка на объект элемента на котором было вызвано событие
				 * to (тип: string) - Направление корректировки пооложения панели и бегунка
				 */
				var scrollType = widgetObjTwo.options.type,
					speed = widgetObjTwo.options.speed,
					correct = widgetObjTwo.options.correct,
					scrollbarUserCssClass = widgetObjTwo.options.scrollbarUserCssClass,
					scrollPanContent = $(event.currentTarget),
					to = delta > 0 ? 'prev' : 'next';

				// Шаг прокрутки скроллбара по умолчанию
				scroll_step = scrollPanContent.parent().find(".scrollBar-thumb").parent().width() / scrollPanContent.children(".modProductsItem").length;

				// Шаг прокрутки панели по умолчанию
				pannel_step = scrollPanContent.children(".modProductsItem").outerWidth(true);

				// Определение позиции панели и скроллбара
				scrollMarginL = scrollPanContent.parent().find(".scrollBar-thumb").outerWidth(true) - scrollPanContent.parent().find(".scrollBar-thumb").outerWidth();
				pannelMarginL = scrollPanContent.outerWidth() - scrollPanContent.outerWidth(true);
				scrollMarginR = scrollPanContent.parent().find(".scrollBar-thumb").parent().width() - scrollPanContent.parent().find(".scrollBar-thumb").outerWidth(true);
				pannelMarginR = scrollPanContent.outerWidth(true) - scrollPanContent.parent().outerWidth();

				// Определение количества целых шагов прокрутки панели и скроллбара, и направления корректировки
				if( correct==true ){
					full_pannel_steps_count = (pannelMarginL/pannel_step).toFixed(0);
					full_scroll_steps_count = (pannelMarginL/pannel_step).toFixed(0);
					to = full_pannel_steps_count*pannel_step < pannelMarginL ? "prev" : "next" ;
				}

				// Условия прокрутки
				if ( to == "prev" ) {
					animate1="-=";
					animate2="+=";
					if(correct==true){
						scroll_step = scrollMarginL-full_scroll_steps_count*scroll_step;
						pannel_step = pannelMarginL-full_pannel_steps_count*pannel_step;
					}else{
						scroll_step = scrollMarginL - scroll_step <= 0 ? scrollMarginL : scroll_step;
						pannel_step = pannelMarginL - pannel_step <= 0 ? pannelMarginL : pannel_step;
					}
				} else {
					animate1="+=";
					animate2="-=";
					if ( correct==true ) {
						scroll_step = full_scroll_steps_count*scroll_step-scrollMarginL;
						pannel_step = full_pannel_steps_count*pannel_step-pannelMarginL;
					} else {
						scroll_step = scrollMarginR - scroll_step <= 0 ? scrollMarginR : scroll_step;
						pannel_step = pannelMarginR - pannel_step <= 0 ? pannelMarginR : pannel_step;
					}
				}

				// Прокрутка скролла и панели
				scrollPanContent.parent().find(".scrollBar-thumb").stop().animate({"marginLeft":animate1+scroll_step},speed,"easeOutQuart");
				scrollPanContent.stop().animate({"marginLeft":animate2+pannel_step},speed,"easeOutQuart",function(){
					if(correct==false){
						setTimeout(function(){
							//this.scrolling(to,"slow",true);
						}, 500);
					}
				});
				return false;
			},

			/**
			 * Метод "_scrollRedefine" (защищенный)
			 *
			 * Метод сбрасывает конструкции скролируемой панели в начальное положение.
			 * В результате выполнения метода положение прокручиваемого содержимого и скроллбара сбрасывается в начальное положение
			 * и генерируется прокручивающая панель (скролл)
			 */
			_scrollRedefine: function() {
				/**
				 * Объявление переменных:
				 *
				 * scrollType (тип: string) - значение свойства плагина "scrollType"
				 * showScrollBar (тип: boolean) - значение свойства плагина "showScrollBar"
				 * scrollbarUserCssClass (тип: string) - значение свойства плагина "scrollbarUserCssClass"
				 * scrollPanContent (тип: object) - ссылка на объект элемента на котором был вызван плагин
				 */
				var scrollType = this.options.scrollType,
					showScrollBar = this.options.showScrollBar,
					scrollbarUserCssClass = this.options.scrollbarUserCssClass,
					scrollPanContent = this.element;

              		//
              		scrollPanContentSize = scrollPanContent.children(".modProductsItem").outerWidth(true) * scrollPanContent.children(".modProductsItem").length;

				if( scrollPanContentSize > scrollPanContent.parent().width() ){

					if( showScrollBar == true ) {
						// Определение ???
						scrollbarUserCssClass = (scrollbarUserCssClass)? ' '+scrollbarUserCssClass: '';

						// Получение ссылки на объект элемента, на котором был вызван метод
						scrollPanContent
							// Получение ссылки на родительский элемент
							.parent()
							// Добавление контента в конец содержимого элемента
							.append('<div class="scrollBar'+scrollbarUserCssClass+'"><div class="scrollBar-content"><div class="scrollBar-track"><div class="scrollBar-thumb"></div></div></div></div>')
							// Возврат к предыдущему набору
							.end()
							// Получение ссылки на элемент прокручивающей панели скроллбара
							.siblings(".scrollBar")
							// Удаление HTML-атрибута "style" элементов
							.removeAttr("style")
							// Возврат к предыдущему набору
							.find(".scrollBar-thumb")
                        	// 
							.width( (scrollPanContent.parent().width()*100)/scrollPanContentSize+"%" );
						
					}
					
					// Получение ссылки на объект элемента, на котором был вызван метод
					scrollPanContent
						// Переопределение ширины прокручиваемой панели
						.width( scrollPanContentSize )
						//
						.on("mousewheel", this.scrolling);

				}
			},

			/**
			 * Метод "_create" (защищенный)
			 *
			 * Метод вызывается при активации виджета на элементе.
			 * В результате выполонения метода конструируется HTML-структура конструкции скролируемой панели.
			 */
			_create: function () {
				// Получение ссылки на объект элемента, на котором был вызван плагин
				this.element
					// Добавление CSS-класса "scrollPan-content"
					.addClass("scrollPan-content")
					// Получение ссылки на родительский элемент
					.parent()
					// Добавление CSS-класса "scrollPan"
					.addClass("scrollPan");

				// Вызов метода (защищенного) инициализации плагина
				this._scrollRedefine();
			},

			/**
			 * Метод "destroy" (открытый)
			 *
			 * Метод вызывается при удалении виджета.
			 * В результате выполнения метода виджет деактивируется.
			 */
			destroy: function() {}
		});

	})(jQuery);

	/**
	 * Привязка плагина "Скролл" к модулям вывода товаров "Аксессуары и комплектующие", "Мы рекомендуем", "Вы смотрели" на странице описания товара
	 */
	$(".modProductsItems")
    	.scroll({
        	correct: true,
        	showScrollBar: true
        })
		.siblings(".scrollBar")
		.addClass("modProducts-scrollBar centered g4 pb-18")
		.find(".scrollBar-track")
		.addClass("round25")
		.find(".scrollBar-thumb")
		.addClass("round26")
		.append('<div class="round26_l"><div class="round26_r"><div class="round26_c"></div></div></div>')
		.wrap('<div class="round25_l"><div class="round25_r"><div class="round25_c"><div class="round25-content"></div></div></div></div>');

	/**
	 * Привязка плагина "Вкладки" к блокам описания товара на странице описания товара
	 */
	$(".productsItem-desc .tabs")
		.generateTabs({
			widgetElementCssClass: "pt-18",
			tabsContentUserCssClass: "descItem-content"
		});

	/**
	 * Привязка плагина "Вкладки" к элементам в позиөии "mod-pos-afterContent" на странице описания товара
	 */
	$(".mod-pos-afterContent .modsProducts .tabs")
		.generateTabs({
			widgetElementCssClass: "modProducts pt-18",
			tabsContentUserCssClass: "modProducts-content cells"
		});

	/**
	 * Привязка плагина "Диалоговое окно" к кнопке "купить" на страницах "выкладка товаров" и "описание товара"
	 */
	$(".productsItem-actions .addToCart .window-callArea")
		.dialogWindow({
			title:"Укажите количество",
			content: '<div class="form1" ><div class="form1-wrap"><div class="form1-content"><div class="form1-elementsGroup first last"><div class="form1Element first float-l g50per"><label class="element-label pos-overField">шт.</label><div class="element-field"><div class="round6_l"><div class="round6_r"><div class="round6_c"><input class="integer" type="text" name="kol" value="" /></div></div></div></div></div><div class="form1Element last float-l g50per"><div class="form1Element-button button7 pl-8"><div class="button7-content"><div class="button7-title"><input type="submit" class="white tt-u" name="sendgood" value="КУПИТЬ"></div><div class="button7-state"><div class="state-default"><div class="round19"><div class="round19_l"><div class="round19_r"><div class="round19_c"></div></div></div></div></div><div class="state-hover"><div class="round20_l"><div class="round20_r"><div class="round20_c"></div></div></div></div></div></div></div></div><div class="clr"></div></div></div></div></div>'
		})
		.children(".window:first")
			.addClass("round3 ff-2 fs-10")
			.wrapInner('<div class="round3_cl_2"><div class="round3_cr_2"></div></div>')
			.append('<div class="round3_t"><div class="round3_tl"><div class="round3_tr"><div class="round3_tc"></div></div></div></div><div class="round3_b"><div class="round3_bl_2"><div class="round3_br_2"><div class="round3_bc_2"></div></div></div></div>')
			.find(".window-container")
			.addClass("round3_cc_2")
			.on("click", "input[name = sendgood]", function(event) {
				var delegateTarget = $(event.delegateTarget),
					setValue = delegateTarget
						.find("input[name = kol]")
						.val();
				if ( setValue == '' ) {
					delegateTarget
						.find(".form1-content")
						.before( $('<div></div>', { 'class': 'form1-message' })
							.append( $('<div></div>', { 'class': 'message-title' })
								.html('Не указано количество!')
							)
							.wrapInner( '<div class="messageError"><div class="message-wrap"><div class="message-content"></div></div></div>' )
						);
					return false;
				}
			});

	/**
	 * Привязка плагина "Диалоговое окно" к кнопке "Купить в 1 клик" на странице "описание товара"
	 */
	$(".productsItem-actions .fastOrder .window-callArea")
		.dialogWindow({
			title:"Покупка в 1 клик",
			content: '<p>Пожалуйста, укажите Ваш контактный номер телефона. Наши менеджеры связутся с вами для обсуждения деталей заказа!</p><div class="form2"><div class="form2-wrap"><div class="form2-content"><div class="form2-elementsGroup first last"><div class="form2Element first float-l g66per" style="margin-top:-2px"><label class="element-label pos-overField">Например, 89061239294</label><div class="element-field"><div class="round8_l"><div class="round8_r"><div class="round8_c"><input class="integer" type="text" name="phone" value="" /></div></div></div></div></div><div class="form2Element last float-r g33per"><div class="form2Element-button button5"><div class="button5-content"><div class="button5-title"><input type="submit" class="white tt-u" name="fastOrder" value="КУПИТЬ"></div><div class="button5-state"><div class="state-default"><div class="round16"><div class="round16_l"><div class="round16_r"><div class="round16_c"></div></div></div></div></div><div class="state-hover"><div class="round15_l"><div class="round15_r"><div class="round15_c"></div></div></div></div></div></div></div></div><div class="clr"></div></div></div></div></div>'
		})
		.children(".window:first")
			.width(288)
			.addClass("round3 ff-2 fs-12")
			.wrapInner('<div class="round3_cl_2"><div class="round3_cr_2"></div></div>')
			.append('<div class="round3_t"><div class="round3_tl"><div class="round3_tr"><div class="round3_tc"></div></div></div></div><div class="round3_b"><div class="round3_bl_2"><div class="round3_br_2"><div class="round3_bc_2"></div></div></div></div>')
			.find(".window-container")
			.addClass("round3_cc_2")
			.on("click", "input[name = fastOrder]", function(event) {
				var delegateTarget = $(event.delegateTarget),
					setValue = delegateTarget
						.find("input[name = customerРhone]")
						.val();
				if ( setValue == '' ) {
					delegateTarget
						.find(".form2-content")
						.before( $('<div></div>', { 'class': 'form2-message' })
							.append( $('<div></div>', { 'class': 'message-title' })
								.html('Не указан номер телефона!')
							)
							.wrapInner( '<div class="messageError"><div class="message-wrap"><div class="message-content"></div></div></div>' )
						);
					return false;
				}
			})
			.find(".window-title")
				.addClass("fs-14");
			
	// Событие при вводе символа в поля диапазона цен
	$('input.integer').keypress( function(event) {
		var key, keyChar;
		if ( !event ) var event = window.event;
		if ( event.keyCode ) key = event.keyCode;
		else if ( event.which ) key = event.which;
		if ( key==null || key==0 || key==8 || key==13 || key==9 || key==46 || key==37 || key==39 ) return true;
		keyChar = String.fromCharCode(key);
		if ( !/\d/.test(keyChar) ) return false;
	});

	/**
	 * Привязка плагина "Диалоговое окно" к ссылке "Войти" на панели пользователя
	 */
	$(".mod-user_menu .window-callArea")
		.dialogWindow({
			title:"Войти в Кабинет",
			content: '<form class="form1" method="post" action="/index.php?option=com_users&task=user.login"><div class="form1-wrap"><div class="form1-message"></div><div class="form1-content"><div class="form1-elementsGroup"><div class="form1Element first"><label class="element-label pos-overField">E-mail</label><div class="element-field"><div class="round6_l"><div class="round6_r"><div class="round6_c"><input type="text" name="email" value="" /></div></div></div></div></div><div class="form1Element"><label class="element-label pos-overField">Пароль</label><div class="element-field"><div class="round6_l"><div class="round6_r"><div class="round6_c"><input type="password" name="password" value="" /></div></div></div></div></div></div><div class="form1-elementsGroup"><div class="form1Element float-l"><div class="element-checkbox float-l"><input id="remember_me" type="checkbox" value="remember"/></div><label class="element-label float-l" for="remember_me">Запомнить меня</label></div><div class="form1Element last float-r"><div class="element-button float-l"><div class="button4 round7 float-r"><div class="round7_l float-l"><div class="round7_r float-l"><div class="button4-content round7_c float-l"><input class="button4-title white tt-u" id="loginSubmit" name="logIn" type="submit" value="Войти" /></div></div></div></div></div></div><div class="clr"></div></div></div></div></form><ul class="lev2 add_links vert_list"><li><a class="lev2 td-u" href="/reset" title="Вспомнить пароль">Вспомнить пароль</a></li><li><a class="lev2 td-u" href="/registration?layout=fiz" title="Регистрация физического лица">Регистрация физического лица</a></li><li><a class="lev2 td-u" href="/registration?layout=yur" title="Регистрация юридического лица">Регистрация юридического лица</a></li></ul>'
		})
		.children(".window:first")
			.addClass("mod-authorization round3 ff-2 fs-10")
			.wrapInner('<div class="round3_cl"><div class="round3_cr"></div></div>')
			.append('<div class="round3_t"><div class="round3_tl"><div class="round3_tr"><div class="round3_tc"></div></div></div></div><div class="round3_b"><div class="round3_bl"><div class="round3_br"><div class="round3_bc"></div></div></div></div>')
			.find(".window-container")
				.addClass("round3_cc");


		var slidesState = true;

		function changeSlides( switcherIndex ) {
				if (slidesState){
			
					switcherIndex = ( switcherIndex >= 2 ) ? 0: switcherIndex+1;

					$(".digitalModule .slider .switchers-slidesChanger .slidesChangerItem")
						.eq(switcherIndex)
						.not(".active")
						.addClass("active")
						.siblings(".active")
						.removeClass("active")
						.parents(".slider")
						.find(".slidesGroup")
						.filter(".active")
						.find(".slidesItem.active")
						.fadeOut("slow", function(){
							$(this)
								.removeClass("active")
								.parent()
								.find(".slidesItem")
								.eq( switcherIndex )
								.fadeIn("slow", function(){
									$(this)
										.addClass("active");
								});
						});
					setTimeout(function(){
						//$(".digitalModule .slider .switchers-slidesChanger .slidesChangerItem").eq(switcherIndex).click();
						changeSlides( switcherIndex );
						//this.scrolling(to,"slow",true);
					}, 5000);
				}
			
		}

		changeSlides(0);

		$(".digitalModule .slider .switchers-slidesChanger").on("click", ".slidesChangerItem", function(){
			slidesState = false;
			var switcherIndex = $(this).index();

			$(this)
				.not(".active")
				.addClass("active")
				.siblings(".active")
				.removeClass("active")
				.parents(".slider")
				.find(".slidesGroup")
				.filter(".active")
				.find(".slidesItem.active")
				.fadeOut("slow", function(){
					$(this)
						.removeClass("active")
						.parent()
						.find(".slidesItem")
						.eq( switcherIndex )
						.fadeIn("slow", function(){
							$(this)
								.addClass("active");
						});
				});
			return false;
		});

		$(".digitalModule .slider .slidesGroupChanger").on("click", ".controlsItem", function(){
			var switchersGroupIndex = $(this).index(".controlsItem");
			
			$(this)
				.not(".active")
				.addClass("active")
				.siblings(".active")
				.removeClass("active")
				.end()
				.siblings(".tumbler-track")
				.find(".tumbler-thumb")
				//.animate()
				.removeClass("val-1 val-2")
				.addClass("val-"+(switchersGroupIndex*1+1) )

				.parents(".slider")
				.find(".slidesGroup")
				.eq( switchersGroupIndex )
				.not(".active")
				.addClass("active")
				.find(".slidesItem:first")
				.addClass("active")
				.end()
				.siblings(".active")
				.removeClass("active")
				
				.parents(".slider")
				.find(".slidesChangerGroup.active")
				.removeClass("active")
				.end()
				.find(".slidesChangerGroup")
				.eq( switchersGroupIndex )
				.addClass("active")

				.find(".slidesChangerItem")
				.removeClass("active")
				.first()
				.addClass("active");

			return false;
		});

	/**
	 * Событие при клике по кнопкам Выбора вида шаблона вывода вынладки товаров
	 */
	$(".tplViewsItem").on("click", "a", function(){
		/**
		 * Объявление переменных
		 *
		 * parent (тип: object) - Ссылка на родительский объект ссылки
		 * currentLayout (тип: string) - Имя текущего шаблона вывода выкладки товаров
		 * newLayout (тип: string) - Имя нового шаблона вывода выкладки товаров
		 */
		var parent = $(this).parent(".tplViewsItem"),
			currentLayout = parent.siblings(".tplViewsItem.active").children("a").getUrlVar("show_layout"),
			newLayout = $(this).getUrlVar("show_layout");

		if ( !$(this).parent(".tplViewsItem").hasClass("active") ) {
			$(this).parents(".products").find(".products-content").toggleClass(currentLayout+" "+newLayout);

			// Изменение классов ссылок списка видов шаблонов вывода
			$(this)
				.parent(".tplViewsItem").toggleClass("active")
				.siblings(".tplViewsItem.active").toggleClass("active");
		}
		
		//код добавленный мною
		//выполняем ajax запрос на изменение
		url=$(this).attr('href');
		$.ajax({
			type: "GET",
			cache:false,
			url: url+"&ajax=1",
			async: false,
			dataType:"json",
		});
		//----------------------------------
		
		// Запрет на переход по ссылке
		return false;
	});

	/**
	 * Плаггин "Замены стандартных элементов форм альтернативными"
	 */
	(function($){
		jQuery.fn.replaceFormElement = function() {
			// здесь будет реализация метода
			return this.each(function() {
				// Проверка имени тега элемента
				switch ($(this).get(0).tagName.toLowerCase()) {
					// Если имя тега элемента - INPUT
					case 'input':
						// Проверка атрибута "TYPE" элемента
						switch ($(this).attr("type").toLowerCase()) {
							case 'checkbox':
								// Определение значения атрибута "checked"
								var inputChecked = ($(this).attr("checked"))? ' checked': '';
								// Определение значения атрибута "TITLE" замещающего эелемента
								var inputTitle = $(this)
									.parents(".form2Element")
									.find("[class *= 'Element-label']")
									.text();
								// Добавление альтернативного элемента
								$(this)
									// Скрытие элемента
									.css("display","none")
									// Замена стандартного элемента формы на альтернативный 
									.after('<a href="#" class="checkbox'+inputChecked+'" title="'+inputTitle+'"></a>');
								break;
						}
						break;
				}
			});
		};
	})(jQuery);

	/**
	 * Событие при загрузке ГЛАВНОЙ СТРАНИЦЫ
	 */
	$("#promo .slider").css( "background-color", $(".slider-item[class *= 'active']").css("background-color") );

	/**
	 * Сброс стиля оформления заголовка H3
	 */
	$("h3").css("font-weight","normal");

	/**
	 * Сброс класса "noScript"
	 */
	$(".noScript").removeClass("noScript");

	/**
	 * Генерация шрифтов заголовков
	 */
	Cufon.replace('h1, h2:not(.noCufon), h3, .cufon, #m_menu a.lev1 span, #m_menu a.lev1 .round2_c, #m_menu span.lev1 span, #m_menu span.lev1 .round2_c', { hover: true });

	/**
	 * Генерация шрифтов номеров телефонов
	 */
	Cufon.replace('#phones .city_phone_code, #phones .tel', { fontFamily: 'Calibri' });

	/**
	 * Замена стандартных элементов формы альтернативным представлением
	 */
	// Замена SELECT-а выбора города
	$("#cityChanger form")
		// Скрытие элемента
		.css("display","none")
		// Добавление содержимого после текущего элемента
		.after( function() {
			/**
			 * Объявление переменных:
			 *
			 * currentCity (тип: string) - Наименование текущего города,
			 * citiesList (тип: string) - HTML-конструкция генерируемого списка городов
			 */
			var currentCity = $(this).find("option:selected").text(),
				citiesList = '<ul class="lev2 vert_list">';
			// Получение ссылки на текущий элемент
			$(this)
				// Получение ссылки на доверние элементы с "<option>"
				.find("option")
				// Выполнение операций над каждым элементом набора
				.each( function(index, element){
					/**
					 * Объявление переменных:
					 *
					 * cityId (тип: string) - ID города,
					 * cityName (тип: string) - Наименование города
					 */
					var cityId = $(element).attr("value"),
						cityName = $(element).text();
					citiesList += '<li class="'+cityId+'"><span>'+cityName+'</span><div class="button4 round7"><div class="round7_l"><div class="round7_r"><div class="button4-content round7_c"><div class="button4-title white">'+cityName+'</div></div></div></div></div></li>';
				});
			citiesList += '</ul>';
			// Добавление альтернативного элемента
			return '<a class="lev1 td-n fw-b" href="#" target="_self" title="'+currentCity+'"><span>'+currentCity+'</span><div class="tab"><div class="round2_l_2"><div class="round2_r_2"><div class="tab-title round2_c_2"><span>'+currentCity+'</span></div></div></div></div></a><div class="cityList sublev lev2 round3"><div class="round3_cl"><div class="round3_cr"><div class="round3_cc">'+citiesList+'</div></div></div><div class="round3_t"><div class="round3_tl"><div class="round3_tr"><div class="round3_tc"></div></div></div></div><div class="round3_b"><div class="round3_bl"><div class="round3_br"><div class="round3_bc"></div></div></div></div></div>';
		});
	// Событие при клике по пункту списка города
	$("#cityChanger").on("click", "li", function(){
		var cityId = $(this).attr("class");
		$("#cityChanger form")
			.find("option:selected")
			.removeAttr("selected")
			.siblings("option[value = '"+cityId+"']")
			.attr("selected", "selected")
			.parents("form")
			.submit();
	});

	// Замена CHECKBOX-ов
	$("input[type = 'checkbox']").replaceFormElement();

	// Событие при Активации/Деактивации CHECKBOX-ов
	$(document).on("click", ".checkbox", function(){
		var input = $(this).siblings("input[type = checkbox]");
		var inputChecked = input.attr("checked");
		$(this).toggleClass("checked");
		(inputChecked) ? input.removeAttr("checked") : input.attr("checked", "checked");

		// Запрет на переход по ссылке
		return false;
	});

	/**
	 * События при наведении на пункты главного меню
	 */
	$("#m_menu li.parent").hover(
		function() {
			lev2Height = null;

			// Добавление классов "hover"
			$(this).addClass("hover");

			// Определение высоты подменю второго уровня
			if ( lev2Height == null ){
				lev2Height = $(this)
					.find("ul.lev2:first")
					.height();
			}
			// Определение оптимальной высоты раскрывающихся панелей главного меню
			parentHeight = $(this)
				.parent("ul:not(.lev1)")
				.height();

			childHeight = $(this)
				.find("ul:first")
				.height();

			optimalHeight = ( parentHeight > childHeight )? parentHeight : childHeight;

			// Установка оптимальной высоты раскрывающимся панелям главного меню
			$(this)
				.find("ul:first")
				.height( optimalHeight )
				.parents("li:first")
				.find(".sublev:first, .sublev:first div.round3_cl_2, .sublev:first div.round3_cr_2, .sublev:first div.round3_cc_2")
				.height( optimalHeight+6 );

			// Установка оптимальной высоты раскрывающейся панели второго уровня главного меню
			$(this)
				.find("ul.lev2:first")
				.height( optimalHeight )
				.parents("li:first")
				.find(".sublev.lev2, .sublev.lev2 div.round3_cl, .sublev.lev2 div.round3_cr, .sublev.lev2 div.round3_cc")
				.height( optimalHeight+6 );

			// Запрет на переход по ссылке
			return false;
		},
		function() {
			// Удаление классов "hover"
			$(this).removeClass("hover");

			// Установка высоты "auto" раскрывающейся панели второго уровня главного меню
			$(this)
				.find("ul.lev2:first")
				.height( lev2Height )
				.parents("li:first")
				.find(".sublev.lev2, .sublev.lev2 div.round3_cl, .sublev.lev2 div.round3_cr, .sublev.lev2 div.round3_cc")
				.height( lev2Height+6 );

			// Запрет на переход по ссылке
			return false;
		}
	);
	// Удаление классов "hover", когда указатель мыши покдает область главного меню
	$("#m_menu .sublev").on("mouseleave", function(){
		$("#m_menu li.hover, #m_menu a.hover").removeClass("hover");
	});

	/**
	 * Позиционирование подписей полей форм над input-ами
	 */
	$(".pos-overField")
		.parent()
		.addClass("labelPos-overField");

	/**
	 * Событие при заполнении полей формы
	 */
	$(".labelPos-overField")
		.on("focusin focusout", ".element-field input, .element-field textarea", function(event) {
			/**
			 * Объявление переменных:
			 *
			 * currentLabel (тип: object) - Cсылка на объект подписи текущего поля
			 * lastLabel (тип: object) - Ссылка на объект подписи предыдущего поля
			 */
			var currentLabel = $(event.delegateTarget).children(".pos-overField"),
				lastLabel = $(event.delegateTarget).parent().find(".pos-overField:hidden");

			// Эффекты скрытия/отображения подписей полей формы
			switch(event.type){
				case "focusin":
					if ( !lastLabel.parent().find(".element-field input, .element-field textarea").val() ) {
						// Отображение подписи поля при потере фокуса на поле
						lastLabel.show();
					}
					// Скрытие подписи поля при установлении фокуса на поле
					currentLabel.hide();
					break;
				case "focusout":
					if ( !$(this).val() ) {
						// Отображение подписи поля при потере фокуса на поле
						currentLabel.show();
					}
					break;
			}
		})
		.on("click", ".pos-overField", function(event){
			$(event.delegateTarget).find(".element-field input, .element-field textarea").focus();
		});

	/**
	 * Событие при наведении на панель новости модуля "Последние новости"
	 */
	$("#lastnews .round3")
		.has(".articlesItem-introDesc")
		.on("mouseenter mouseleave", function() {
			$(this).toggleClass("hover");
		});

	/**
	 * Добавление к имени изображения превью фотографий суффивса "_big"
	 */
	$(".productsItem-photoGallery .previewsItem a")
		// Переопределение значения атрибута "HREF"
		.attr({
			"href": function() {
				// Возврат нового значения для атрибута "HREF" превью фотогалереи
				return $(this)
					// Получение значения атрибута "HREF"
					.attr("href")
					// Сопоставляет строку с регулярным выражением и заменяет найденную подстроку новой подстрокой
					.replace(/\./, "_big.");
			}
		});

	/**
	 * Событие при клике по переключателю фотографии в фотогалерее товара на странице описания товара
	 */
	$(".photoGallery-wrap:not(.animated)").on("click", ".previewsItem a", function(){
		/**
		 * Объявление переменных
		 *
		 * activePreview (тип: object) - ссылка на объект превью-переключателя фото, накоторомы было вызвано событие
		 * productSrc (тип: strung) - значения атрибута "HREF" превью-переключателя фото
		 * poductTitle (тип: strung) - значения атрибута "TITLE" превью-переключателя фото
		 */
		var activePreview = $(this),
			productSrc = activePreview.attr("href"),
			poductTitle = activePreview.attr("title");

		//if ( activePreview.parents(".photoGallery-wrap").is(".animated") == false ) {
			activePreview
				// Получение ссылки на родительский элемент "previewsItem"
				.parents(".previewsItem:not(.active)")
				// Добавление CSS-класса "active"
				.addClass("active")
				// Получение ссылки на соседний элемент "previewsItem" превью активного фото
				.siblings(".previewsItem.active")
				// Удаление CSS-класса "active"
				.removeClass("active")
				// Получение ссылки на родительский контейнер "Обертка фотогалереи"
				.parents(".photoGallery-wrap")
				// Добавление CSS-класса "animated"
				.addClass("animated")
				// Получение ссылки на элемент контейнера изображения элемента "Основное фото"
				.find(".photoGallery-photo .photo-img")
				// Получение ссылки на изображение
				.children("img")
				// Скрытие текущего изображения
				.fadeOut("slow", function(){
					$(this)
						// Получение ссылки на родителя контейнера изображения
						.parent()
						// Скрытие элемента контейнера изображения
						.fadeOut("fast", function(){
							$(this)
								// Заменяем содержимое элемента контейнера изображения
								.html( "<img src='"+productSrc+"' alt='Фото недоступно' title='"+poductTitle+"' style='display:none' />" )
								// Получение ссылки на вновь созданное изображение
								.children("img")
								// Установка обработчика завершения загрузки изображения
								.load( function(){
									$(this)
										// Получение ссылки на родителя контейнера изображения
										.parent()
										// Отображение элемента контейнера изображения
										.fadeIn("fast", function(){
											$(this)
												// Получение ссылки на вновь созданное изображение
												.children("img")
												// Отображение загруженного изображения
												.fadeIn("slow", function () {
													$(this)
														// Получение ссылки на родительский контейнер "Обертка фотогалереи"
														.parents(".photoGallery-wrap")
														// Удаление CSS-класса "animated"
														.removeClass("animated")
												});
										});
								});
						});
				});
		//}
		// Запрет на переход по ссылке
		return false;
	});

	//авторизация пользователя
	$("#loginSubmit").on("click",function(){
		var form=$(this).parents("form :first form");
		form.find(".form1-message").empty();
		$.ajax({
			url: form.attr('action'),
			type: "POST",
			cache:false,
			async: false,
			dataType:"json",
			data: "ajax=1&"+form.serialize(),
			success: function(response) {
				if(response['err']==0){
					//загружаем меню пользователя
					$.ajax({
						url:"/index.php",
						type: "GET",
						cache:false,
						async: false,
						data: "tmpl=mymod&moduleposition=userPanel1",
						success: function(response) {
							$("#uMenu").html(response);
						}
					});					
					
				}
				else {
					form.find(".form1-message").css('display','block');
					form.find(".form1-message").html('<div class="messageError"><div class="message-wrap"><div class="message-content"><div class="message-title">'+response['err']+'</div></div></div></div>');
				}

			}
		});
		return false;
	});
	
});