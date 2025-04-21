const badgeEl = document.querySelector("header .badges");
const toTopEl = document.querySelector("#to-top");
window.addEventListener(
  "scroll",
  _.throttle(() => {
    if (window.scrollY > 500) {
      // gsap.to(요소, 지속시간, 옵션);
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: "none",
      });
      /* 버튼 보이기 */
      gsap.to("#to-top", 0.2, {
        x: 0,
      });
    } else {
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: "block",
      });
      /* 버튼 숨기기 */
      gsap.to("#to-top", 0.2, {
        x: 100,
      });
    }
  }, 300)
  /* 버튼 숨기기 */
);
//_.throttle(함수, 시간(ms))

toTopEl.addEventListener("click", () => {
  gsap.to(window, 0.7, {
    scrollTo: 0,
  });
});

const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach((fadeEl, index) => {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7,
    opacity: 1,
  });
});

//Notice Swiper
new Swiper(".notice-line .swiper", {
  direction: "vertical",
  autoplay: true,
  loop: true,
});

new Swiper(".promotion .swiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  // autoplay: {
  //   delay: 5000,
  // },
  pagination: {
    el: ".promotion .swiper-pagination",
    clickable: true,
  },
  navigation: {
    prevEl: ".promotion .swiper-prev",
    nextEl: ".promotion .swiper-next",
  },
});

new Swiper(".awards .swiper", {
  slidesPerView: 4,
  autoplay: true,
  spaceBetween: 30,
  loop: true,
  navigation: {
    prevEl: ".awards .swiper-prev",
    nextEl: ".awards .swiper-next",
  },
});

//Promotion Button
const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");
let isHidePromotion = false;
promotionToggleBtn.addEventListener("click", () => {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    //숨김처리
    promotionEl.classList.add("hide");
  } else {
    //표시처리
    promotionEl.classList.remove("hide");
  }
});

function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

function floatingObject(selector, delay, size) {
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true,
    delay: random(0, delay),
  });
}
floatingObject(".floating1", 1, 15);
floatingObject(".floating2", 0.5, 15);
floatingObject(".floating3", 1.5, 20);

// scrollMagic
const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach((spyEl) => {
  new ScrollMagic.Scene({
    triggerElement: spyEl, //보여짐의 여부를 감시할 요소를 지정
    triggerHook: 0.8,
  })
    .setClassToggle(spyEl, "show")
    .addTo(new ScrollMagic.Controller());
});
