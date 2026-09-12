"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedDropdowns, setExpandedDropdowns] = useState<{ [key: string]: boolean }>({});
  const pathname = usePathname();

  // Close mobile menu automatically on page/route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Listen to mobile-nav__toggler button clicks throughout the page (like hamburger in header)
  useEffect(() => {
    const handleTogglerClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest(".mobile-nav__toggler")) {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };

    document.addEventListener("click", handleTogglerClick);
    return () => document.removeEventListener("click", handleTogglerClick);
  }, []);

  const toggleDropdown = (key: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setExpandedDropdowns((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className={`mobile-nav__wrapper ${isOpen ? "expanded" : ""}`}>
        <div className="mobile-nav__overlay" onClick={closeMenu}></div>
        <div className="mobile-nav__content">
          <span className="mobile-nav__close" onClick={closeMenu}>
            <i className="fa fa-times"></i>
          </span>

          <div className="logo-box">
            <Link href="/" onClick={closeMenu} aria-label="logo image">
              <img src="/assets/images/resources/logo-1.png" width="150" alt="Logo" />
            </Link>
          </div>

          <div className="mobile-nav__container">
            <ul className="main-menu__list">
              {/* Home */}
              <li className="dropdown">
                <Link href="/" onClick={closeMenu}>Home</Link>
                <button
                  type="button"
                  className={`expanded ${expandedDropdowns["home"] ? "open" : ""}`}
                  onClick={(e) => toggleDropdown("home", e)}
                  aria-label="Toggle Home Submenu"
                >
                  <i className="fa fa-angle-down"></i>
                </button>
                <ul style={{ display: expandedDropdowns["home"] ? "block" : "none" }}>
                  <li><Link href="/" onClick={closeMenu}>Home One</Link></li>
                  <li><Link href="/index2" onClick={closeMenu}>Home Two</Link></li>
                  <li><Link href="/index3" onClick={closeMenu}>Home Three</Link></li>
                  <li><Link href="/index-dark" onClick={closeMenu}>Home Dark</Link></li>
                </ul>
              </li>

              {/* About Us */}
              <li>
                <Link href="/about" onClick={closeMenu}>About Us</Link>
              </li>

              {/* Services */}
              <li className="dropdown">
                <Link href="/service" onClick={closeMenu}>Services</Link>
                <button
                  type="button"
                  className={`expanded ${expandedDropdowns["services"] ? "open" : ""}`}
                  onClick={(e) => toggleDropdown("services", e)}
                  aria-label="Toggle Services Submenu"
                >
                  <i className="fa fa-angle-down"></i>
                </button>
                <ul style={{ display: expandedDropdowns["services"] ? "block" : "none" }}>
                  <li><Link href="/service" onClick={closeMenu}>Services</Link></li>
                  <li><Link href="/international-transport" onClick={closeMenu}>International Transport</Link></li>
                  <li><Link href="/track-transport" onClick={closeMenu}>Local Track Transport</Link></li>
                  <li><Link href="/personal-delivery" onClick={closeMenu}>Fast Personal Delivery</Link></li>
                  <li><Link href="/ocean-transport" onClick={closeMenu}>Safe Ocean Transport</Link></li>
                  <li><Link href="/warehouse-facility" onClick={closeMenu}>Warehouse Facility</Link></li>
                  <li><Link href="/emergency-transport" onClick={closeMenu}>Emergency Transport</Link></li>
                </ul>
              </li>

              {/* Pages */}
              <li className="dropdown">
                <Link href="#" onClick={(e) => toggleDropdown("pages", e)}>Pages</Link>
                <button
                  type="button"
                  className={`expanded ${expandedDropdowns["pages"] ? "open" : ""}`}
                  onClick={(e) => toggleDropdown("pages", e)}
                  aria-label="Toggle Pages Submenu"
                >
                  <i className="fa fa-angle-down"></i>
                </button>
                <ul style={{ display: expandedDropdowns["pages"] ? "block" : "none" }}>
                  <li><Link href="/team" onClick={closeMenu}>Team</Link></li>
                  <li><Link href="/team-details" onClick={closeMenu}>Team Details</Link></li>
                  <li><Link href="/project" onClick={closeMenu}>Projects</Link></li>
                  <li><Link href="/project-details" onClick={closeMenu}>Project Details</Link></li>
                  <li><Link href="/testimonial" onClick={closeMenu}>Testimonials</Link></li>
                  <li><Link href="/pricing" onClick={closeMenu}>Pricing</Link></li>
                  <li><Link href="/faq" onClick={closeMenu}>FAQ</Link></li>
                </ul>
              </li>

              {/* Shop */}
              <li className="dropdown">
                <Link href="#" onClick={(e) => toggleDropdown("shop", e)}>Shop</Link>
                <button
                  type="button"
                  className={`expanded ${expandedDropdowns["shop"] ? "open" : ""}`}
                  onClick={(e) => toggleDropdown("shop", e)}
                  aria-label="Toggle Shop Submenu"
                >
                  <i className="fa fa-angle-down"></i>
                </button>
                <ul style={{ display: expandedDropdowns["shop"] ? "block" : "none" }}>
                  <li><Link href="/products" onClick={closeMenu}>Products</Link></li>
                  <li><Link href="/product-details" onClick={closeMenu}>Product Details</Link></li>
                  <li><Link href="/cart" onClick={closeMenu}>Cart</Link></li>
                  <li><Link href="/checkout" onClick={closeMenu}>Checkout</Link></li>
                  <li><Link href="/wishlist" onClick={closeMenu}>Wishlist</Link></li>
                  <li><Link href="/sign-up" onClick={closeMenu}>Sign Up</Link></li>
                  <li><Link href="/login" onClick={closeMenu}>Login</Link></li>
                </ul>
              </li>

              {/* Blog */}
              <li className="dropdown">
                <Link href="/blog" onClick={closeMenu}>Blog</Link>
                <button
                  type="button"
                  className={`expanded ${expandedDropdowns["blog"] ? "open" : ""}`}
                  onClick={(e) => toggleDropdown("blog", e)}
                  aria-label="Toggle Blog Submenu"
                >
                  <i className="fa fa-angle-down"></i>
                </button>
                <ul style={{ display: expandedDropdowns["blog"] ? "block" : "none" }}>
                  <li><Link href="/blog" onClick={closeMenu}>Blog</Link></li>
                  <li><Link href="/blog-standard" onClick={closeMenu}>Blog Standard</Link></li>
                  <li><Link href="/blog-left-sidebar" onClick={closeMenu}>Blog Left Sidebar</Link></li>
                  <li><Link href="/blog-right-sidebar" onClick={closeMenu}>Blog Right Sidebar</Link></li>
                  <li><Link href="/blog-details" onClick={closeMenu}>Blog Details</Link></li>
                </ul>
              </li>

              {/* Contact */}
              <li>
                <Link href="/contact" onClick={closeMenu}>Contact</Link>
              </li>
            </ul>
          </div>

          <ul className="mobile-nav__contact list-unstyled">
            <li>
              <i className="fa fa-envelope"></i>
              <a href="mailto:needhelp@logistiq.com">needhelp@logistiq.com</a>
            </li>
            <li>
              <i className="icon-phone"></i>
              <a href="tel:666-888-0000">666 888 0000</a>
            </li>
          </ul>

          <div className="mobile-nav__top">
            <div className="mobile-nav__social">
              <Link href="#" className="fab fa-twitter"></Link>
              <Link href="#" className="fab fa-facebook-square"></Link>
              <Link href="#" className="fab fa-pinterest-p"></Link>
              <Link href="#" className="fab fa-instagram"></Link>
            </div>
          </div>
        </div>
      </div>

      <div className="search-popup">
        <div className="search-popup__overlay search-toggler"></div>
        <div className="search-popup__content">
          <form action="#">
            <label htmlFor="search" className="sr-only">search here</label>
            <input type="text" id="search" placeholder="Search Here..." />
            <button type="submit" aria-label="search submit" className="thm-btn">
              <i className="fas fa-search"></i>
              <span className="hover-btn hover-bx"></span>
              <span className="hover-btn hover-bx2"></span>
              <span className="hover-btn hover-bx3"></span>
              <span className="hover-btn hover-bx4"></span>
            </button>
          </form>
        </div>
      </div>

      <a href="#" data-target="html" className="scroll-to-target scroll-to-top">
        <span className="scroll-to-top__wrapper"><span className="scroll-to-top__inner"></span></span>
        <span className="scroll-to-top__text"> Go Back Top</span>
      </a>
    </>
  );
}

