/*бургер доп*/
	/*let burger = document.querySelector('.burger');
  let menu = document.querySelector('.header__nav');
  let menuLinks = menu.querySelectorAll('.nav__link');


  burger.addEventListener('click',

  function() {

    burger.classList.toggle('burger--active');

    menu.classList.toggle('header__nav--active');

    document.body.classList.toggle('stop-scroll');
  })

  menuLinks.forEach(function(el){
    el.addEventListener('click', function() {

      burger.classList.remove('burger--active');

      menu.classList.remove('header__nav--active');

      document.body.classList.remove('stop-scroll');
    })
  })*/

  let burger = document.querySelector(".burger");
  let menu = document.querySelector(".header__nav");
  let menuLinks = document.querySelectorAll(".nav__link");

  burger.addEventListener("click", function () {
    burger.classList.toggle("burger--active");
    menu.classList.toggle("header__nav--active");
    document.body.classList.toggle("stop-scroll");
  });

  menuLinks.forEach(function (el) {
    el.addEventListener("click", function () {
      burger.classList.remove("burger--active");
      menu.classList.remove("header__nav--active");
      document.body.classList.remove("stop-scroll");
    });
  });


/*табы*/
  let tabsBtn = document.querySelectorAll('.tabs-nav__btn');
  let tabsItem = document.querySelectorAll('.tabs-item');


  tabsBtn.forEach(function(element){
    element.addEventListener('click', function(e){
      const path = e.currentTarget.dataset.path;

      tabsBtn.forEach(function(btn){ btn.classList.remove('tabs-nav__btn--active')});
      e.currentTarget.classList.add('tabs-nav__btn--active');

      tabsItem.forEach(function(element){ element.classList.remove('tabs-item--active')});
      document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
    });
  });

  /*слайдер*/
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
   /* a11y: {
      paginationBulletMessage: 'Тут название слайда {{index}}',
    }
*/

  });

  new Accordion('.accordion-container');

 /* $((".ui-accordion-header") .attr("tabindex","0"))*/


let btnSearh = document.querySelector(".search");
let fieldSearch = document.querySelector(".header__search");
let btnCloseSearch = document.querySelector(".header__close-search");

btnSearh.addEventListener("click", function () {
  fieldSearch.classList.add("header__search--active");
});

btnCloseSearch.addEventListener("click", function () {
  fieldSearch.classList.remove("header__search--active");
});
