<?php 
/**
 * Описание шаблона вывода секции "Контакты"
 */
?>

<section id="contacts">
	<div class="section-wrapper">
		<!-- Шапка секции - Начало -->
		<header>
			<h2>Приезжайте отдохнуть</h2>
			<div class="separator">
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
							<button>
								<span class="icon -s showMap"></span>
								<span class="title">Посмотреть на карте</span>
								<span class="clr"></span>
							</button>
						</form>
					</div>
					<div class="subsection-phone">
						<div class="separator">
							<div class="separator-wrapper">
								<div class="separator-content">
									<hr>
									<div class="icon -s"></div>
									<hr>
								</div>
							</div>
							<div class="clr"></div>
						</div>
						<p><span class="tel">+7 (963) 122 55 08</span></p>
					</div>
				</div>
				<div class="subsection-sendMail">
					<div class="separator">
						<div class="separator-wrapper">
							<div class="separator-content">
								<hr>
								<div class="icon -s"></div>
								<hr>
							</div>
						</div>
						<div class="clr"></div>
					</div>
					<h2>Хотите забронировать номер?</h2>
					<p>Интересуют дополнительные услуги? &nbsp; Или у Вас к Нам коммерческое предложение?<br>
					Свяжитесь с Нами! &nbsp; Мы открыты и для новых Друзей!</p>
					<form>
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
										<textarea name="userMessage" placeholder="Напишите свой отзыв здесь..." rows="3" required ></textarea>
									</div>
								</div>
								<div class="formElement">
									<div class="element-button disabled">
										<button class="rounded">
											<span class="icon -s plane"></span>
											<span class="clr"></span>
										</button>
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