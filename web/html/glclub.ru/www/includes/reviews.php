<?php 
/**
 * Описание шаблона вывода секции "Отзывы"
 */
?>

<section id="reviews" class="-beige">
	<a name="reviews"></a>
	<div class="section-wrapper">
		<!-- Шапка секции - Начало -->
		<header>
			<h2>Отзывы гостей о нас</h2>
			<div class="separator -quotes">
				<div class="separator-wrapper">
					<div class="separator-content">
						<hr>
						<div class="icon -s">
						</div>
						<hr>
					</div>
				</div>
				<div class="clr"></div>
			</div>
		</header>
		<!-- Шапка секции - Конец -->

		<!-- Содержимое секции - Начало -->
		<div class="section-content">
			<div class="reviewsItems">
				<div class="reviewsItems-wrapper">
					<!--
					<div class="reviewItem -beforeActiveReview">
						<div class="author">
							<div class="photo" style="background-image:url(media/reviews/review1.jpg);">
								<a href="/index.php?" ></a>
							</div>
						</div>
					</div>
					-->
					<div class="reviewItem -active">
						<div class="author">
							<div class="photo" style="background-image:url(media/reviews/review2.jpg);">
								<a href="/" target="_blank" title="Посетить страницу профиля гостя в соц.сети"></a>
							</div>
							<h4 class="name"><a href="/" target="_blank" title="Посетить страницу профиля гостя в соц.сети">Александр Григоров</a></h4>
						</div>
						<div class="separator">
							<div class="separator-wrapper">
								<div class="separator-content"><hr></div>
							</div>
						</div>
						<div class="reviewContent">
							<p>Отмечал день рождения. Классная сауна для больших компаний. Интерьер - супер!<br> Как будто и не в бане вовсе. Были друзья из Москвы, тоже оценили, сказали, что уровень высокий.<br> Жена тоже будет отмечать в GL. Спасибо за отлично проделанную работу администрации!</p>
							<p class="rooms">Отдыхал в <a href="/" target="_self">Нью-Йорк</a>, <a href="/" target="_self">Япония</a></p>
						</div>
					</div>
					<!--
					<div class="reviewItem -afterActiveReview">
						<div class="author">
							<div class="photo" style="background-image:url(media/reviews/review3.jpg);"></div>
						</div>
					</div>
					-->
					<div class="clr"></div>
				</div>
			</div>
			<div class="switchers">
				<div class="arrows">
					<div class="arrowLeft">
						<a href="/index.php?review=1" target="_self" title="Отзыв от Мария Кривенкова"></a>
					</div>
					<div class="arrowRight">
						<a href="/index.php?review=3" target="_self" title="Отзыв от Виктор Щедрый"></a>
					</div>
				</div>
				<div class="radioButtons">
					<div class="radioButtons-wrapper">
						<div class="radioButtons-content">
							<ul>
								<li class="radioItem -xs -beforeActiveItem">
									<a href="/index.php?review=1" target="_self" title="Отзыв от Мария Кривенкова"></a>
								</li>
								<li class="radioItem -xs -active">
									<a href="/index.php?review=2" target="_self" title="Отзыв от Александр Григоров"></a>
								</li>
								<li class="radioItem -xs -beforeActiveItem">
									<a href="/index.php?review=3" target="_self" title="Отзыв от Виктор Щедрый"></a>
								</li>
								<li class="radioItem -xs">
									<a href="/index.php?review=4" target="_self" title="Отзыв от Антон Симаков"></a>
								</li>
								<li class="radioItem -xs">
									<a href="/index.php?review=5" target="_self" title="Отзыв от Алексей Здоровов"></a>
								</li>
							</ul>
						</div>
					</div>
					<div class="clr"></div>
				</div>
			</div>
		</div>
		<!-- Содержимое секции - Конец -->
	</div>
</section>