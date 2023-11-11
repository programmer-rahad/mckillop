// Javascript
!(function () {
  "use strict";
  const $ = (selector, areAll) => {
    const all = document.querySelectorAll(selector);
    const single = document.querySelector(selector);
    return areAll ? all : single;
  };
  // Banner Slides
  !(function () {
    var slideItems = $(".b-slide-active .b-slide-item", true);
    if (!slideItems.length) return;
    var i = 0;
    setInterval(function () {
      slideItems.forEach(function (item) {
        item.classList.remove("slide-active");
      });
      i++;
      if (i === slideItems.length) i = 0;
      slideItems[i].classList.add("slide-active");
    }, 3000);
  })();

  // Bylaws Accordion
  !(function () {
    var accordion = $(".bmcr-content-accordion");
    var mainFolderLink = $(".bmcr-content-title-bar a:first-child");

    var accordionTitle = $(".bmcr-content-accordion .bmcr-content-title-bar");
    var liItems = $(".bmcr-content-accordion > ul > li", true);
    if (!liItems.length) return;
    liItems.forEach(function (li) {
      li.addEventListener("click", function () {
        accordion.classList.add("accordion-open");
        var link = document.createElement("a");
        const spanText = this.children[1].textContent;
        link.innerHTML = spanText;
        if (accordionTitle.children[1]) {
          accordionTitle.children[1].remove();
        }
        accordionTitle.appendChild(link);
        var ul = this.lastElementChild.cloneNode(true);
        accordion.appendChild(ul);
      });
    });
    mainFolderLink.addEventListener("click", function (e) {
      this.parentElement.parentElement.classList.remove("accordion-open");
      e.preventDefault();
      var ul = Array.from(accordion.children).slice(2);
      for (var i = 0; i < ul.length; i++) {
        ul[i].remove();
      }
    });
  })();

  // Bylaws Content Size
  !(function () {
    var buttons = $(".bmcr-title > div span:not(:first-child)", true);
    var bmcRight = $(".bmc-right");
    if (!bmcRight) return;
    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        bmcRight.className = "bmc-right " + this.className;
      });
    });
  })();
})();

// Jquery
$(document).ready(function () {
  "use strict";

  // Side Navigation
  $(".menuIcon").on("click", function () {
    $(".side-navigation").addClass("active-side-nav");
  });
  $(".side-navigation > span").on("click", function () {
    $(".side-navigation").removeClass("active-side-nav");
  });

  $(".side-navigation a").on("click", function () {
    $(this).toggleClass("open-dropdown");
    $(this).next().slideToggle();
  });

  //Event Calendar
  $("#home-calendar").monthly({
    mode: "event",
    calendars:
      "8c541d7f-95a9-43ee-b233-17157912e8c1,327cef9b-4dff-4a0f-a0e0-41f8d0ea37c0",
    isEnglish: true,
    jsonUrl: "/Home/GetEvents",
    dataType: "json",
    eventAction: "/Home/GetEventDetails?isEnglish=True",
  });
  $(".list-calendar > li > a").click(function (e) {
    e.preventDefault();
  });

  // Bylaws Left Navigation Dropdown
  var navItems = $(".bmc-left-nav > ul > li a");
  navItems.on("click", function (e) {
    e.preventDefault();
    $(this).next().slideToggle();
    $(this).toggleClass("dropdown-open");
  });

  // Bylaws Left Navigation Responsive Dropdown
  var menuButton = $('.bmc-left-dropdown-bar');
  var bmcLeftNav = $('.bmc-left-nav');
  menuButton.on('click',function() {
    bmcLeftNav.slideToggle();
  });

  $('.bmc-right .bmcr-title i.fa-print').on('click',function() {
    window.print();
  })

      // SCROLL UP
      $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.btnScrollup').fadeIn();
        } else {
            $('.btnScrollup').fadeOut();
        }
    });
    $('.btnScrollup').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });



});
