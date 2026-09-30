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

    var isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

    function initEverything() {
      if (window.__animationsInitialized) {
        return;
      }
      window.__animationsInitialized = true;

      // ========== 1. PRELOADER ==========
      if ($('.loader-wrap').length) {
        $('.loader-wrap').stop(true, true).fadeOut(300);
      }
      if ($('.preloader-close').length) {
        $('.preloader-close').off('click').on('click', function() {
          $('.loader-wrap').stop(true, true).fadeOut(200);
        });
      }

      // ========== 2. WOW.js ANIMATIONS (Single managed instance, no heavy MutationObserver) ==========
      if (typeof WOW !== 'undefined') {
        try {
          if (window.__currentWOW && typeof window.__currentWOW.stop === 'function') {
            window.__currentWOW.stop();
          }
          window.__currentWOW = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 20,
            mobile: true,
            live: false
          });
          window.__currentWOW.init();
        } catch (e) {
          console.warn('[WOW] Init warning:', e);
        }
      }

      // ========== 3. MOBILE NAV ==========
      // Managed seamlessly via React state in MobileMenu.tsx

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

      // ========== 6. OWL CAROUSELS (Robust re-initialization) ==========
      function setupCarousel($target, config) {
        if (!$target || !$target.length) return;
        $target.each(function() {
          var $carousel = $(this);
          if ($carousel.hasClass('owl-loaded')) {
            try {
              $carousel.trigger('destroy.owl.carousel');
            } catch (err) {}
            $carousel.removeClass('owl-loaded owl-drag');
          }
          try {
            $carousel.owlCarousel(config);
          } catch (err) {
            console.warn('[Owl] Init warning:', err);
          }
        });
      }

      if (typeof $.fn.owlCarousel !== 'undefined') {
        // Service carousel
        setupCarousel($('.service-one__carousel'), {
          loop: true, margin: 30, nav: false, dots: true,
          smartSpeed: 600, autoplay: true, autoplayTimeout: 7000,
          responsive: { 0:{items:1}, 768:{items:2}, 1200:{items:3} }
        });

        // Brand carousel
        setupCarousel($('.brand-one__carousel'), {
          loop: true, margin: 0, nav: false, dots: false,
          smartSpeed: 600, autoplay: true, autoplayTimeout: 7000,
          responsive: { 0:{items:2}, 768:{items:3}, 992:{items:4}, 1200:{items:5}, 1320:{items:6} }
        });

        // Testimonial One carousel
        setupCarousel($('.testimonial-one__carousel'), {
          loop: true, margin: 0, nav: false, dots: false,
          smartSpeed: 600, autoplay: true, autoplayTimeout: 7000,
          responsive: { 0:{items:1}, 768:{items:1}, 1200:{items:1} }
        });

        // Team carousel
        setupCarousel($('.team-one__carousel'), {
          loop: true, margin: 20, nav: false, dots: true,
          smartSpeed: 600, autoplay: true, autoplayTimeout: 7000,
          responsive: { 0:{items:1}, 768:{items:2}, 1200:{items:3} }
        });

        // Testimonial Two carousel
        setupCarousel($('.testimonial-two__carousel'), {
          loop: true, margin: 20, nav: false, dots: true,
          smartSpeed: 600, autoplay: true, autoplayTimeout: 7000,
          responsive: { 0:{items:1}, 768:{items:1}, 992:{items:2} }
        });

        // Testimonial Three carousel
        setupCarousel($('.testimonial-three__carousel'), {
          loop: true, margin: 20, nav: true, dots: false,
          smartSpeed: 600, autoplay: true, autoplayTimeout: 7000,
          navText: ['<span class="icon-left-arrow"></span>','<span class="icon-right-arrow"></span>'],
          responsive: { 0:{items:1}, 768:{items:2}, 1200:{items:3} }
        });

        // Slider One (main hero slider)
        setupCarousel($('.slider-one__carousel'), {
          loop: true, animateOut: 'fadeOut', animateIn: 'fadeIn',
          margin: 0, nav: true, dots: false,
          smartSpeed: 700, autoplay: true, autoplayTimeout: 7000,
          navText: ['<span class="icon-right-arrow2"></span>','<span class="icon-right-arrow21"></span>'],
          responsive: { 0:{items:1}, 600:{items:1}, 992:{items:1} }
        });

        // Project carousel
        setupCarousel($('.project-one__carousel'), {
          loop: true, margin: 30, nav: false, dots: true,
          smartSpeed: 600, autoplay: true, autoplayTimeout: 7000,
          responsive: { 0:{items:1}, 768:{items:2}, 1200:{items:3} }
        });

        // Blog carousel
        setupCarousel($('.blog-one__carousel'), {
          loop: true, margin: 30, nav: false, dots: true,
          smartSpeed: 600, autoplay: true, autoplayTimeout: 7000,
          responsive: { 0:{items:1}, 768:{items:2}, 1200:{items:3} }
        });
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
      if (typeof $.fn.jarallax !== 'undefined' && !isMobile) {
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
        $('.marquee_mode').each(function() {
          var $m = $(this);
          if ($m.data('marquee-active')) return;
          $m.data('marquee-active', true);
          $m.marquee({
            speed: 30, gap: 0, delayBeforeStart: 0,
            direction: 'left', duplicated: true,
            pauseOnHover: true, startVisible: true
          });
        });
      }

      // ========== 14. GSAP REVEAL ANIMATION ==========
      if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        // Clean dead triggers from previous pages
        try {
          ScrollTrigger.getAll().forEach(function(st) {
            if (!st.trigger || !document.body.contains(st.trigger)) {
              st.kill();
            }
          });
        } catch(e) {}

        // Image reveal (.reveal)
        if ($(".reveal").length) {
          var revealContainers = document.querySelectorAll(".reveal");
          revealContainers.forEach(function(container) {
            if (container.dataset.revealActive || container.dataset.revealInit) return;
            container.dataset.revealActive = "true";
            container.dataset.revealInit = "1";

            var image = container.querySelector("img");
            if (!image) return;

            // Ensure container is always visible
            gsap.set(container, { autoAlpha: 1 });

            var tl = gsap.timeline({
              scrollTrigger: {
                trigger: container,
                start: "top 90%",
                toggleActions: "play none none none",
              },
            });
            tl.from(container, 1.1, { xPercent: -100, ease: "power2.out" });
            tl.from(image, 1.1, { xPercent: 100, scale: 1.2, delay: -1.1, ease: "power2.out" });
          });
        }

        // SplitText title animation
        if (typeof SplitText !== 'undefined') {
          gsap.config({ nullTargetWarn: false, trialWarn: false });
          var quotes = document.querySelectorAll('.tg-heading-subheading .tg-element-title');
          quotes.forEach(function(quote) {
            if (quote.animation) {
              quote.animation.kill();
            }
            if (quote.split) {
              quote.split.revert();
            }
            var getclass = quote.closest('.tg-heading-subheading').className;
            var animation = getclass.split('animation-');
            if (animation[1] == 'style4') return;

            if (isMobile) {
              // Mobile: gentle, lightweight word fade & slide
              quote.split = new SplitText(quote, {
                type: 'lines,words', linesClass: 'split-line'
              });
              gsap.set(quote.split.words, { opacity: 0, x: -25 });
              quote.animation = gsap.to(quote.split.words, {
                scrollTrigger: { trigger: quote, start: 'top 92%' },
                x: 0, opacity: 1,
                duration: 0.7, ease: 'power2.out', stagger: 0.03
              });
            } else {
              // Desktop: elegant character fade & slide from left
              quote.split = new SplitText(quote, {
                type: 'lines,words,chars', linesClass: 'split-line'
              });
              gsap.set(quote.split.chars, { opacity: 0, x: -30 });
              
              quote.animation = gsap.to(quote.split.chars, {
                scrollTrigger: { trigger: quote, start: 'top 88%' },
                x: 0, y: 0, rotateX: 0, opacity: 1,
                duration: 0.8, ease: 'power2.out', stagger: 0.015
              });
            }
          });
        }

        try {
          ScrollTrigger.refresh();
        } catch(e) {}
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

      // ========== 17. ACCORDION (FAQ) ==========
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

      // ========== 18. TABS ==========
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
      setTimeout(initEverything, 300);
    } else {
      $(window).on('load', function() {
        setTimeout(initEverything, 300);
      });
    }

    // Extra fallback in case load event already fired
    setTimeout(initEverything, 1500);

    // Listen for Next.js route changes to re-trigger animations seamlessly without flickers
    var routeTimer = null;
    window.addEventListener('nextjs-route-changed', function() {
      if (routeTimer) {
        clearTimeout(routeTimer);
      }
      routeTimer = setTimeout(function() {
        window.__animationsInitialized = false;
        initEverything();
      }, 20);
    });
  });
})();
