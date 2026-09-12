/*
 * Next.js Re-initialization Script
 * This runs AFTER all vendor scripts have loaded and re-triggers
 * everything that script.js would have initialized on $(window).load
 */
(function() {
  "use strict";

  function waitForJQuery(callback) {
    if (typeof jQuery !== 'undefined') {
      callback(jQuery);
    } else {
      setTimeout(function() { waitForJQuery(callback); }, 100);
    }
  }

  waitForJQuery(function($) {

    function initEverything() {

      // ========== 1. PRELOADER ==========
      if ($('.loader-wrap').length) {
        $('.loader-wrap').delay(300).fadeOut(500);
      }
      if ($('.preloader-close').length) {
        $('.preloader-close').off('click').on('click', function() {
          $('.loader-wrap').delay(200).fadeOut(500);
        });
      }

      // ========== 2. WOW.js ANIMATIONS ==========
      if (typeof WOW !== 'undefined') {
        new WOW({
          boxClass: 'wow',
          animateClass: 'animated',
          offset: 0,
          mobile: true,
          live: true
        }).init();
      }

      // ========== 3. MOBILE NAV ==========
      if ($('.main-menu__list').length && $('.mobile-nav__container').length) {
        var navHTML = $('.main-menu .main-menu__list').html();
        var mobileContainer = $('.mobile-nav__container');
        if (mobileContainer.html().trim() === '') {
          mobileContainer.html('<ul class="main-menu__list">' + navHTML + '</ul>');
          // Add expander buttons
          mobileContainer.find('li.dropdown > a').each(function() {
            $(this).after('<button class="expanded"><i class="fa fa-angle-down"></i></button>');
          });
          // Bind expander click
          mobileContainer.find('.expanded').off('click').on('click', function(e) {
            e.preventDefault();
            $(this).toggleClass('open');
            $(this).next('ul').slideToggle(300);
          });
        }
      }

      // Mobile nav toggler
      $('.mobile-nav__toggler').off('click').on('click', function(e) {
        e.preventDefault();
        $('.mobile-nav__wrapper').toggleClass('mobile-nav__wrapper--active');
      });

      // ========== 4. SEARCH POPUP ==========
      $('.search-toggler').off('click').on('click', function(e) {
        e.preventDefault();
        $('.search-popup').toggleClass('active');
      });

      // ========== 5. STICKY HEADER ==========
      if ($('.stricked-menu .sticky-header__content').length) {
        var stickyContent = $('.main-header-one__bottom .container').html();
        if (stickyContent) {
          $('.stricked-menu .sticky-header__content').html(
            '<div class="container">' + stickyContent + '</div>'
          );
        }
      }

      // ========== 6. OWL CAROUSELS ==========
      if (typeof $.fn.owlCarousel !== 'undefined') {
        // Service carousel
        if ($('.service-one__carousel').length && !$('.service-one__carousel').hasClass('owl-loaded')) {
          $('.service-one__carousel').owlCarousel({
            loop: true, margin: 30, nav: false, dots: true,
            smartSpeed: 500, autoplay: true, autoplayTimeout: 7000,
            responsive: { 0:{items:1}, 768:{items:2}, 1200:{items:3} }
          });
        }
        // Brand carousel
        if ($('.brand-one__carousel').length && !$('.brand-one__carousel').hasClass('owl-loaded')) {
          $('.brand-one__carousel').owlCarousel({
            loop: true, margin: 0, nav: false, dots: false,
            smartSpeed: 500, autoplay: true, autoplayTimeout: 7000,
            responsive: { 0:{items:2}, 768:{items:3}, 992:{items:4}, 1200:{items:5}, 1320:{items:6} }
          });
        }
        // Testimonial One carousel
        if ($('.testimonial-one__carousel').length && !$('.testimonial-one__carousel').hasClass('owl-loaded')) {
          $('.testimonial-one__carousel').owlCarousel({
            loop: true, margin: 0, nav: false, dots: false,
            smartSpeed: 500, autoplay: true, autoplayTimeout: 7000,
            responsive: { 0:{items:1}, 768:{items:1}, 1200:{items:1} }
          });
        }
        // Team carousel
        if ($('.team-one__carousel').length && !$('.team-one__carousel').hasClass('owl-loaded')) {
          $('.team-one__carousel').owlCarousel({
            loop: true, margin: 20, nav: false, dots: true,
            smartSpeed: 500, autoplay: true, autoplayTimeout: 7000,
            responsive: { 0:{items:1}, 768:{items:2}, 1200:{items:3} }
          });
        }
        // Testimonial Two carousel
        if ($('.testimonial-two__carousel').length && !$('.testimonial-two__carousel').hasClass('owl-loaded')) {
          $('.testimonial-two__carousel').owlCarousel({
            loop: true, margin: 20, nav: false, dots: true,
            smartSpeed: 500, autoplay: true, autoplayTimeout: 7000,
            responsive: { 0:{items:1}, 768:{items:1}, 992:{items:2} }
          });
        }
        // Testimonial Three carousel
        if ($('.testimonial-three__carousel').length && !$('.testimonial-three__carousel').hasClass('owl-loaded')) {
          $('.testimonial-three__carousel').owlCarousel({
            loop: true, margin: 20, nav: true, dots: false,
            smartSpeed: 500, autoplay: true, autoplayTimeout: 7000,
            navText: ['<span class="icon-left-arrow"></span>','<span class="icon-right-arrow"></span>'],
            responsive: { 0:{items:1}, 768:{items:2}, 1200:{items:3} }
          });
        }
        // Slider One (main hero slider)
        if ($('.slider-one__carousel').length && !$('.slider-one__carousel').hasClass('owl-loaded')) {
          $('.slider-one__carousel').owlCarousel({
            loop: true, animateOut: 'fadeOut', animateIn: 'fadeIn',
            margin: 0, nav: true, dots: false,
            smartSpeed: 500, autoplay: true, autoplayTimeout: 7000,
            navText: ['<span class="icon-right-arrow2"></span>','<span class="icon-right-arrow21"></span>'],
            responsive: { 0:{items:1}, 600:{items:1}, 992:{items:1} }
          });
        }
        // Project carousel
        if ($('.project-one__carousel').length && !$('.project-one__carousel').hasClass('owl-loaded')) {
          $('.project-one__carousel').owlCarousel({
            loop: true, margin: 30, nav: false, dots: true,
            smartSpeed: 500, autoplay: true, autoplayTimeout: 7000,
            responsive: { 0:{items:1}, 768:{items:2}, 1200:{items:3} }
          });
        }
        // Blog carousel
        if ($('.blog-one__carousel').length && !$('.blog-one__carousel').hasClass('owl-loaded')) {
          $('.blog-one__carousel').owlCarousel({
            loop: true, margin: 30, nav: false, dots: true,
            smartSpeed: 500, autoplay: true, autoplayTimeout: 7000,
            responsive: { 0:{items:1}, 768:{items:2}, 1200:{items:3} }
          });
        }
      }

      // ========== 7. COUNTERS / ODOMETER ==========
      if (typeof $.fn.appear !== 'undefined') {
        $('.odometer').appear(function() {
          var el = $(this);
          var count = el.attr('data-count');
          if (count) { el.html(count); }
        });
      }

      // ========== 8. JARALLAX ==========
      if (typeof $.fn.jarallax !== 'undefined') {
        $('.jarallax').jarallax({ speed: 0.3, imgPosition: '50% 0%' });
      }

      // ========== 9. MAGNIFIC POPUP ==========
      if (typeof $.fn.magnificPopup !== 'undefined') {
        $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
          disableOn: 700, type: 'iframe', mainClass: 'mfp-fade',
          removalDelay: 160, preloader: true, fixedContentPos: false
        });
        $('.popup-image').magnificPopup({
          type: 'image', gallery: { enabled: true }
        });
      }

      // ========== 10. NICE SELECT ==========
      if (typeof $.fn.niceSelect !== 'undefined') {
        $('select:not(.ignore)').niceSelect();
      }

      // ========== 11. ISOTOPE ==========
      if (typeof $.fn.isotope !== 'undefined') {
        var $grid = $('.masonary-layout').isotope({
          layoutMode: 'masonry', percentPosition: true
        });
        $('.filter-tabs .filter-btn, .project-filter li').off('click').on('click', function() {
          $(this).siblings().removeClass('active-btn');
          $(this).addClass('active-btn');
          var filterValue = $(this).attr('data-filter');
          $grid.isotope({ filter: filterValue });
        });
      }

      // ========== 12. SCROLL TO TOP ==========
      $('.scroll-to-target').off('click').on('click', function() {
        $('html, body').animate({ scrollTop: 0 }, 1000);
        return false;
      });

      // ========== 13. MARQUEE ==========
      if (typeof $.fn.marquee !== 'undefined') {
        if ($('.marquee_mode').length) {
          $('.marquee_mode').marquee({
            speed: 30, gap: 0, delayBeforeStart: 0,
            direction: 'left', duplicated: true,
            pauseOnHover: true, startVisible: true
          });
        }
      }

      // ========== 14. GSAP REVEAL ANIMATION ==========
      if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        // Image reveal (.reveal) — re-run here as a safety net for
        // client-side navigation / late hydration: script.js can execute
        // before React has rendered a given page's .reveal elements
        // (e.g. on /about), which would otherwise leave those images
        // permanently hidden (.reveal defaults to visibility:hidden until
        // its GSAP timeline runs). The data-reveal-init guard makes sure
        // each element's timeline is only ever created once, no matter
        // how many times this runs or whether script.js already handled it
        // — so it can't re-freeze an already-revealed image.
        if ($(".reveal").length) {
          var revealContainers = document.querySelectorAll(".reveal");
          revealContainers.forEach(function(container) {
            if (container.dataset.revealInit) return;
            container.dataset.revealInit = "1";
            var image = container.querySelector("img");
            var tl = gsap.timeline({
              scrollTrigger: {
                trigger: container,
                toggleActions: "play none none none",
              },
            });
            tl.set(container, { autoAlpha: 1 });
            tl.from(container, 1.5, { xPercent: -100, ease: Power2.out });
            tl.from(image, 1.5, { xPercent: 100, scale: 1.3, delay: -1.5, ease: Power2.out });
          });
        }

        // SplitText title animation
        if (typeof SplitText !== 'undefined') {
          gsap.config({ nullTargetWarn: false, trialWarn: false });
          var quotes = document.querySelectorAll('.tg-heading-subheading .tg-element-title');
          quotes.forEach(function(quote) {
            if (quote.animation) {
              quote.animation.progress(1).kill();
              quote.split.revert();
            }
            var getclass = quote.closest('.tg-heading-subheading').className;
            var animation = getclass.split('animation-');
            if (animation[1] == 'style4') return;

            quote.split = new SplitText(quote, {
              type: 'lines,words,chars', linesClass: 'split-line'
            });
            gsap.set(quote, { perspective: 400 });

            if (animation[1] == 'style1') {
              gsap.set(quote.split.chars, { opacity: 0, y: '90%', rotateX: '-40deg' });
            }
            if (animation[1] == 'style2') {
              gsap.set(quote.split.chars, { opacity: 0, x: '50' });
            }
            if (animation[1] == 'style3') {
              gsap.set(quote.split.chars, { opacity: 0 });
            }
            quote.animation = gsap.to(quote.split.chars, {
              scrollTrigger: { trigger: quote, start: 'top 90%' },
              x: '0', y: '0', rotateX: '0', opacity: 1,
              duration: 1, ease: 'back.out', stagger: 0.02
            });
          });
        }
      }

      // ========== 15. CURVED CIRCLE TEXT ==========
      if (typeof $.fn.circleType !== 'undefined') {
        if ($('.about-one__curved-circle').length) {
          $('.about-one__curved-circle').circleType({
            position: 'absolute', dir: 1, radius: 75,
            forceHeight: true, forceWidth: true
          });
        }
        if ($('.curved-circle').length) {
          $('.curved-circle').circleType({
            position: 'absolute', dir: 1, radius: 90,
            forceHeight: true, forceWidth: true
          });
        }
      }

      // ========== 16. DATEPICKER ==========
      if (typeof $.fn.datepicker !== 'undefined') {
        if ($('#datepicker').length) {
          $('#datepicker').datepicker();
        }
      }

      // ========== 17. SCROLL-BASED EVENTS ==========
      $(window).off('scroll.nextjsInit').on('scroll.nextjsInit', function() {
        // Sticky header
        if ($('.stricked-menu').length) {
          var stricky = $('.stricked-menu');
          if ($(window).scrollTop() > 130) {
            stricky.addClass('stricky-fixed');
          } else {
            stricky.removeClass('stricky-fixed');
          }
        }
        // Scroll to top button visibility
        if ($('.scroll-to-top').length) {
          if ($(window).scrollTop() > 500) {
            $('.scroll-to-top').addClass('show');
          } else {
            $('.scroll-to-top').removeClass('show');
          }
        }
      });

      // ========== 18. ACCORDION (FAQ) ==========
      if ($('.accrodion-grp').length) {
        var towns = document.querySelectorAll('.accrodion-grp');
        towns.forEach(function(town) {
          var elements = town.querySelectorAll('.accrodion');
          elements.forEach(function(element) {
            element.addEventListener('click', function() {
              elements.forEach(function(el) {
                el.classList.remove('active');
                el.querySelector('.accrodion-content').style.display = 'none';
              });
              element.classList.add('active');
              element.querySelector('.accrodion-content').style.display = 'block';
            });
          });
        });
      }

      // ========== 19. TABS ==========
      if ($('.tab-btns .tab-btn').length) {
        $('.tab-btns .tab-btn').off('click').on('click', function(e) {
          e.preventDefault();
          var target = $($(this).attr('data-tab'));
          $(this).closest('.tab-btns').find('.tab-btn').removeClass('active-btn');
          $(this).addClass('active-btn');
          $(this).closest('.tabs-content-box, .tab-content-box').find('.tab').removeClass('active-tab');
          target.addClass('active-tab');
        });
      }

      console.log('[Next.js] All animations and plugins initialized.');
    }

    // Run after DOM is ready and all scripts have had time to load
    if (document.readyState === 'complete') {
      setTimeout(initEverything, 500);
    } else {
      $(window).on('load', function() {
        setTimeout(initEverything, 500);
      });
    }

    // Extra fallback in case load event already fired
    setTimeout(initEverything, 2500);
  });
})();
