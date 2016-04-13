<?php 
/**
 * Описание шаблона вывода секции "Отзывы"
 */
?>

<section id="reviews" class="section_reviews section_color-theme_beige">
	<a name="reviews"></a>
	<div class="section__wrapper">
		<!-- Шапка секции - Начало -->
		<header class="section__header">
            <div class="header__wrapper">
                <h2 class="h h_lev_2">Отзывы гостей о нас</h2>
                <div class="separator element_align_center header__separator">
                    <div class="separator__wrapper element__wrapper">
                        <div class="separator__content element__content">
                            <hr class="separator__line">
                            <div class="separator__icon icon icon_size_x24 icon_quotes"></div>
                            <hr class="separator__line">
                        </div>
                    </div>
                </div>
            </div>
		</header>
		<!-- Шапка секции - Конец -->

		<!-- Содержимое секции - Начало -->
		<div class="section__content">
			<div class="reviews">
				<div class="reviews__wrapper">
					<!--
					<div class="reviews__item reviews__item_prev">
						<div class="review__author user">
							<div class="user__photo" style="background-image:url(media/reviews/review1.jpg);">
								<a href="/index.php?" ></a>
							</div>
						</div>
					</div>
					-->
					<div class="reviews__item reviews__item_active review">
						<div class="review__author user">
							<div class="user__photo user__photo_size_x240" style="background-image:url(media/reviews/review2.jpg);">
								<a href="/" target="_blank" title="Посетить страницу профиля гостя в соц.сети"></a>
							</div>
							<h4 class="user__name h h_lev_4"><a class="link_inverted" href="/" target="_blank" title="Посетить страницу профиля гостя в соц.сети">Александр Григоров</a></h4>
						</div>
						<div class="review__content">
							<p>Отмечал день рождения. Классная сауна для больших компаний. Интерьер - супер!<br> Как будто и не в бане вовсе. Были друзья из Москвы, тоже оценили, сказали, что уровень высокий.<br> Жена тоже будет отмечать в GL. Спасибо за отлично проделанную работу администрации!</p>
							<p>Отдыхал в <a class="link p__link" href="/" target="_self">Нью-Йорк</a>, <a class="link p__link" href="/" target="_self">Токио</a></p>
						</div>
					</div>
					<!--
					<div class="reviews__item reviews__item_next">
						<div class="author">
							<div class="photo" style="background-image:url(media/reviews/review3.jpg);"></div>
						</div>
					</div>
					-->
				</div>
			</div>
            <div class="switchers switchers_arrows">
                <div class="arrow arrow_left">
                    <a class="link link_block icon icon_arrow-left icon_size_x64" href="/index.php?review=1" target="_self" title="Отзыв от Мария Кривенкова"></a>
                </div>
                <div class="arrow arrow_right">
                    <a class="link link_block icon icon_arrow-right icon_size_x64" href="/index.php?review=3" target="_self" title="Отзыв от Виктор Щедрый"></a>
                </div>
            </div>
            <div class="switchers switchers_radio-buttons element_align_center">
                <div class="switchers__wrapper element__wrapper">
                    <div class="switchers__content element__content">
                        <ul class="radio-buttons_horiz">
                            <li class="radio-buttons__item">
                                <a class="link link_block" href="/index.php?review=1" target="_self" title="Отзыв от Мария Кривенкова"></a>
                            </li>
                            <li class="radio-buttons__item radio-buttons__item_active">
                                <a class="link link_block" href="/index.php?review=2" target="_self" title="Отзыв от Александр Григоров"></a>
                            </li>
                            <li class="radio-buttons__item">
                                <a class="link link_block" href="/index.php?review=3" target="_self" title="Отзыв от Виктор Щедрый"></a>
                            </li>
                            <li class="radio-buttons__item">
                                <a class="link link_block" href="/index.php?review=4" target="_self" title="Отзыв от Антон Симаков"></a>
                            </li>
                            <li class="radio-buttons__item">
                                <a class="link link_block" href="/index.php?review=5" target="_self" title="Отзыв от Алексей Здоровов"></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
		</div>
		<!-- Содержимое секции - Конец -->
	</div>
</section>