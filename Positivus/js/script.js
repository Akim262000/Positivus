document.querySelectorAll(".collapse").forEach((collapse) => {

    collapse.addEventListener("show.bs.collapse", function () {
        const card = this.closest(".working-process-card");
        const icon = card.querySelector(".pm-icon");

        card.classList.remove("bg-grey");
        card.classList.add("bg-lime");

        icon.classList.add("rotate");

        setTimeout(() => {
            icon.src = "/images/minus.png";
        }, 150);
    });

    collapse.addEventListener("hide.bs.collapse", function () {
        const card = this.closest(".working-process-card");
        const icon = card.querySelector(".pm-icon");

        card.classList.remove("bg-lime");
        card.classList.add("bg-grey");

        icon.classList.remove("rotate");

        setTimeout(() => {
            icon.src = "/images/plus.png";
        }, 150);
    });

});

$(".testimonials-slider").slick({
  slidesToShow: 1,
  variableWidth: true,
  centerMode: true,
  arrows: true,
  dots: true,
  appendDots: $(".custom-dots"),

  prevArrow: $(".prev-arrow"),
  nextArrow: $(".next-arrow"),
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
      },
    },
  ],
});
