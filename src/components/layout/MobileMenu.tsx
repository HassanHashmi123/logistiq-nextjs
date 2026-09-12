import Link from "next/link";

export default function MobileMenu() {
  return (
    <>
      <div className="mobile-nav__wrapper">
        <div className="mobile-nav__overlay mobile-nav__toggler"></div>
        <div className="mobile-nav__content">
          <span className="mobile-nav__close mobile-nav__toggler"><i className="fa fa-times"></i></span>

          <div className="logo-box">
            <Link href="/" aria-label="logo image"><img src="/assets/images/resources/logo-1.png" width="150" alt="" /></Link>
          </div>
          <div className="mobile-nav__container"></div>

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
