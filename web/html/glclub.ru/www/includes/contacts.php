<?php 
/**
 * Описание шаблона вывода секции "Контакты"
 */
?>

<section id="contacts">
	<a name="contacts"></a>
	<div class="section-wrapper">
		<!-- Шапка секции - Начало -->
		<header>
			<h2>Приезжайте отдохнуть</h2>
			<div class="separator -mapPoint">
				<div class="separator-wrapper">
					<div class="separator-content">
						<hr>
						<div class="icon -s"></div>
						<hr>
					</div>
				</div>
				<div class="clr"></div>
			</div>
		</header>
		<!-- Шапка секции - Конец -->
		
		<!-- Содержимое секции - Начало -->
		<div class="section-content">
			<div class="content-wrapper">
				<div class="vCard">
					<div>
						<span class="category"><span class="value-title" title="Сауна"></span></span><span class="category"><span class="value-title" title="Баня"></span></span><span class="fn org"><span class="value-title" title="GL"></span></span>
					</div>
					<div class="subsection-address adr">
						<p><span class="country-name"><span class="value-title" title="Россия"></span></span> <span class="region"><span class="value-title" title="Республика Татарстан"></span></span> <span class="locality">Набережные Челны</span>, <span class="street-address">пр. Чулман, 37/04</span>, <span class="extended-address">цокольный этаж</span>.</p>
						<form>
							<div class="element-button centered">
								<div class="button-wrapper">
									<button id="showMap">
										<span class="icon -s showMap"></span>
										<span class="title">Посмотреть на карте</span>
										<span class="clr"></span>
									</button>
								</div>
								<div class="clr"></div>
							</div>
						</form>
					</div>
					<h2>Хотите забронировать номер?</h2>
					<div class="separator -phone">
						<div class="separator-wrapper">
							<div class="separator-content">
								<hr>
								<div class="icon -s"></div>
								<hr>
							</div>
						</div>
						<div class="clr"></div>
					</div>
					<p>Интересуют дополнительные услуги? &nbsp; Или у вас к нам коммерческое предложение?<br>
					Свяжитесь с нами! &nbsp; Мы открыты и для новых друзей!</p>
					<div class="subsection-phone">
						<p><span class="tel">+7 (963) 122 55 08</span></p>
					</div>
				</div>
				<div class="subsection-sendMail">
					<form id="sendMail" name="sendMail" action="/" method="post" accept-charset="utf-8" autocomplete="on" novalidate>
						<div class="form-wrapper">
							<div class="form-content">
								<div class="formElement">
									<div class="element-field">
										<input name="userName" placeholder="Имя" type="text" required >
									</div>
								</div>
								<div class="formElement">
									<div class="element-field">
										<input name="userEmail" placeholder="E-mail" type="text" required >
									</div>
								</div>
								<div class="formElement">
									<div class="element-field">
										<textarea name="userMessage" placeholder="Напишите сообщение здесь..." rows="3" required ></textarea>
									</div>
								</div>
								<div class="formElement">
									<div class="element-button centered">
										<div class="button-wrapper">
											<button class="rounded">
												<span class="icon -s plane"></span>
												<span class="clr"></span>
											</button>
										</div>
										<div class="clr"></div>
									</div>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
		<!-- Содержимое секции - Конец -->
	</div>
</section>