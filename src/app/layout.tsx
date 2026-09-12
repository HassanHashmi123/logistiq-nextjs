import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Home One || Logistiq || Logistiq Laravel Template",
  description: "Logistiq Laravel Template Next.js Migration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/assets/images/favicons/site.webmanifest" />

        {/* Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap" rel="stylesheet" />

        {/* Stylesheets */}
        <link rel="stylesheet" href="/assets/css/01-bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/02-animate.min.css" />
        <link rel="stylesheet" href="/assets/css/03-custom-animate.css" />
        <link rel="stylesheet" href="/assets/css/05-flaticon.css" />
        <link rel="stylesheet" href="/assets/css/06-font-awesome-all.css" />
        <link rel="stylesheet" href="/assets/css/07-jarallax.css" />
        <link rel="stylesheet" href="/assets/css/08-jquery.magnific-popup.css" />
        <link rel="stylesheet" href="/assets/css/09-nice-select.css" />
        <link rel="stylesheet" href="/assets/css/11-owl.carousel.min.css" />
        <link rel="stylesheet" href="/assets/css/12-owl.theme.default.min.css" />
        <link rel="stylesheet" href="/assets/css/13-jquery-ui.css" />

        {/* Module Styles */}
        <link rel="stylesheet" href="/assets/css/module-css/01-slider.css" />
        <link rel="stylesheet" href="/assets/css/module-css/02-about.css" />
        <link rel="stylesheet" href="/assets/css/module-css/03-services.css" />
        <link rel="stylesheet" href="/assets/css/module-css/04-testimonial.css" />
        <link rel="stylesheet" href="/assets/css/module-css/05-team.css" />
        <link rel="stylesheet" href="/assets/css/module-css/06-blog.css" />
        <link rel="stylesheet" href="/assets/css/module-css/07-brand.css" />
        <link rel="stylesheet" href="/assets/css/module-css/08-contact.css" />
        <link rel="stylesheet" href="/assets/css/module-css/09-counter.css" />
        <link rel="stylesheet" href="/assets/css/module-css/10-error.css" />
        <link rel="stylesheet" href="/assets/css/module-css/11-faq.css" />
        <link rel="stylesheet" href="/assets/css/module-css/12-footer.css" />
        <link rel="stylesheet" href="/assets/css/module-css/13-page-header.css" />
        <link rel="stylesheet" href="/assets/css/module-css/14-shop.css" />
        <link rel="stylesheet" href="/assets/css/module-css/15-video.css" />
        <link rel="stylesheet" href="/assets/css/module-css/awards.css" />
        <link rel="stylesheet" href="/assets/css/module-css/banner.css" />
        <link rel="stylesheet" href="/assets/css/module-css/cta.css" />
        <link rel="stylesheet" href="/assets/css/module-css/design-interior.css" />
        <link rel="stylesheet" href="/assets/css/module-css/feature.css" />
        <link rel="stylesheet" href="/assets/css/module-css/pricing.css" />
        <link rel="stylesheet" href="/assets/css/module-css/projects.css" />
        <link rel="stylesheet" href="/assets/css/module-css/quote.css" />
        <link rel="stylesheet" href="/assets/css/module-css/skill.css" />
        <link rel="stylesheet" href="/assets/css/module-css/sliding-text.css" />
        <link rel="stylesheet" href="/assets/css/module-css/why-choose.css" />
        <link rel="stylesheet" href="/assets/css/module-css/working-process.css" />
        
        <link rel="stylesheet" href="/assets/css/swiper.min.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/responsive.css" />
      </head>
      <body>
        <div className="page-wrapper">
          {children}
        </div>

        {/* Start Preloader */}
        <div className="loader-wrap">
            <div className="preloader">
                <div className="preloader-close">x</div>
                <div id="handle-preloader" className="handle-preloader">
                    <div className="animation-preloader">
                        <div className="spinner"></div>
                        <div className="txt-loading">
                            <span data-text-preloader="l" className="letters-loading"> l </span>
                            <span data-text-preloader="o" className="letters-loading"> o </span>
                            <span data-text-preloader="g" className="letters-loading"> g </span>
                            <span data-text-preloader="i" className="letters-loading"> i </span>
                            <span data-text-preloader="s" className="letters-loading"> s </span>
                            <span data-text-preloader="t" className="letters-loading"> t </span>
                            <span data-text-preloader="i" className="letters-loading"> i </span>
                            <span data-text-preloader="q" className="letters-loading"> q </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* End Preloader */}

        {/* jQuery - MUST load first */}
        <Script src="/assets/js/jquery-3.6.0.min.js" strategy="beforeInteractive" />

        {/* GSAP - needed by script.js immediately */}
        <Script src="/assets/js/gsap/gsap.js" strategy="beforeInteractive" />
        <Script src="/assets/js/gsap/ScrollTrigger.js" strategy="beforeInteractive" />
        <Script src="/assets/js/gsap/SplitText.js" strategy="beforeInteractive" />

        {/* Core plugins - afterInteractive so they load before script.js uses them */}
        <Script src="/assets/js/01-bootstrap.bundle.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/swiper.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/07-owl.carousel.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/12-wow.js" strategy="afterInteractive" />
        <Script src="/assets/js/03-jquery.appear.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/08-jarallax.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/09-odometer.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/13-isotope.js" strategy="afterInteractive" />
        <Script src="/assets/js/11-jquery.magnific-popup.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/04-jquery.nice-select.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/06-marquee.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/10-jquery-ui.js" strategy="afterInteractive" />
        <Script src="/assets/js/02-countdown.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/05-jquery-sidebar-content.js" strategy="afterInteractive" />
        <Script src="/assets/js/wNumb.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/jquery.ajaxchimp.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/jquery.validate.min.js" strategy="afterInteractive" />

        {/* Curved Text Plugins */}
        <Script src="/assets/js/curved-text/jquery.lettering.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/curved-text/jquery.circleType.js" strategy="afterInteractive" />
        <Script src="/assets/js/curved-text/jquery.fittext.js" strategy="afterInteractive" />

        {/* Template Main JS - loads after all plugins */}
        <Script src="/assets/js/script.js" strategy="afterInteractive" />
        <Script src="/assets/js/nextjs-init.js" strategy="afterInteractive" />

        {/* Re-initialization: ensures all animations trigger after everything loads */}
        <Script id="reinit-animations" strategy="afterInteractive">{`
          function initAllAnimations() {
            if (typeof jQuery === 'undefined') return;
            var $ = jQuery;

            // 1. WOW.js scroll animations (fadeInUp, fadeInLeft, etc.)
            if (typeof WOW !== 'undefined') {
              new WOW({
                boxClass: 'wow',
                animateClass: 'animated',
                offset: 0,
                mobile: true,
                live: true,
                scrollContainer: null
              }).init();
            }

            // 2. Preloader hide
            if ($('.loader-wrap').length) {
              $('.loader-wrap').delay(500).fadeOut(500);
            }
            if ($('.preloader-close').length) {
              $('.preloader-close').on('click', function() {
                $('.loader-wrap').delay(200).fadeOut(500);
              });
            }

            // 3. Mobile menu
            if ($('.mobile-nav__toggler').length) {
              $('.mobile-nav__toggler').on('click', function(e) {
                e.preventDefault();
                $('.mobile-nav__wrapper').toggleClass('mobile-nav__wrapper--active');
              });
            }

            // 4. Search popup
            if ($('.search-toggler').length) {
              $('.search-toggler').on('click', function(e) {
                e.preventDefault();
                $('.search-popup').toggleClass('active');
              });
            }

            // 5. Sticky header clone
            if ($('.stricked-menu .sticky-header__content').length) {
              var strickyContent = $('.main-menu').html();
              $('.stricked-menu .sticky-header__content').html(strickyContent);
            }

            // 6. Dropdown menu toggle for mobile
            if ($('.main-menu__list').length) {
              var mobileNavContent = $('.main-menu__list').html();
              var mobileNavContainer = $('.mobile-nav__container');
              if (mobileNavContainer.length && mobileNavContainer.html().trim() === '') {
                mobileNavContainer.html('<ul class="main-menu__list">' + mobileNavContent + '</ul>');
                // Add dropdowns
                mobileNavContainer.find('.dropdown > a').each(function() {
                  var el = $(this);
                  el.after('<button class="expanded"><i class="fa fa-angle-down"></i></button>');
                });
                mobileNavContainer.find('.expanded').on('click', function(e) {
                  e.preventDefault();
                  $(this).toggleClass('open');
                  $(this).next('ul').slideToggle(300);
                });
              }
            }

            // 7. Scroll to top
            if ($('.scroll-to-target').length) {
              $('.scroll-to-target').on('click', function() {
                var target = $(this).attr('data-target');
                $('html, body').animate({ scrollTop: 0 }, 1000);
                return false;
              });
            }

            // 8. Appear counters (odometer)
            if (typeof $.fn.appear !== 'undefined') {
              $('.odometer').appear(function() {
                var odo = $(this);
                var countNumber = odo.attr('data-count');
                if (countNumber) {
                  odo.html(countNumber);
                }
              });
            }

            // 9. Jarallax parallax backgrounds
            if (typeof $.fn.jarallax !== 'undefined') {
              $('.jarallax').jarallax({ speed: 0.3, imgPosition: '50% 0%' });
            }
          }

          // Run after a delay to ensure all afterInteractive scripts have loaded
          if (document.readyState === 'complete') {
            setTimeout(initAllAnimations, 800);
          } else {
            window.addEventListener('load', function() {
              setTimeout(initAllAnimations, 800);
            });
          }
          // Extra fallback
          setTimeout(initAllAnimations, 3000);
        `}</Script>
      </body>
    </html>
  );
}
