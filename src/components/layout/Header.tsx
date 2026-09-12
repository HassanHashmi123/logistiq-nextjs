import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="main-header main-header-one">
        <nav className="main-menu">
          <div className="main-menu__wrapper">
            <div className="container">
              <div className="main-header-one__inner">
                <div className="main-header-one__top">
                  <div className="main-header-one__top-inner">
                    <div className="main-header-one__top-left">
                      <div className="header-contact-style1">
                        <ul>
                          <li>
                            <div className="icon">
                              <span className="icon-phone"></span>
                            </div>
                            <div className="text-box">
                              <p><span>Talk to Us</span> <a href="tel:1234567890">[+123 456 789]</a></p>
                            </div>
                          </li>
                          <li>
                            <div className="icon">
                              <span className="icon-email"></span>
                            </div>
                            <div className="text-box">
                              <p><span>Mail Us</span> <a href="mailto:yourmail@email.com">[support@logistra.com]</a></p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="main-header-one__top-right">
                      <div className="header-social-links">
                        <Link href="#"><span className="icon-facebook-f"></span></Link>
                        <Link href="#"><span className="icon-twitter1"></span></Link>
                        <Link href="#"><span className="icon-instagram"></span></Link>
                        <Link href="#"><span className="icon-linkedin"></span></Link>
                      </div>

                      <div className="header-search-box">
                        <Link href="#" className="main-menu__search search-toggler">Search
                          <i className="icon-search"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="main-header-one__bottom">
                  <div className="main-menu__wrapper-inner">
                    <div className="main-header-one__bottom-inner">
                      <div className="main-header-one__bottom-left">
                        <div className="logo-box">
                          <Link href="/"><img src="/assets/images/resources/logo-1.png" alt="Logo" /></Link>
                        </div>

                        <div className="main-header-one__bottom-menu">
                          <div className="main-menu__main-menu-box">
                            <Link href="#" className="mobile-nav__toggler"><i className="fa fa-bars"></i></Link>

                            <ul className="main-menu__list">
                              <li className="dropdown">
                                <Link href="/">Home</Link>
                                <ul>
                                  <li><Link href="/">Home One</Link></li>
                                  <li><Link href="/index2">Home Two</Link></li>
                                  <li><Link href="/index3">Home Three</Link></li>
                                  <li><Link href="/index-dark">Home Dark</Link></li>
                                </ul>
                              </li>

                              <li className=""><Link href="/about">About Us</Link></li>

                              <li className="dropdown">
                                <Link href="#">Services</Link>
                                <ul>
                                  <li><Link href="/service">Services</Link></li>
                                  <li><Link href="/international-transport">International Transport</Link></li>
                                  <li><Link href="/track-transport">Local Track Transport</Link></li>
                                  <li><Link href="/personal-delivery">Fast Personal Delivery</Link></li>
                                  <li><Link href="/ocean-transport">Safe Ocean Transport</Link></li>
                                  <li><Link href="/warehouse-facility">Warehouse Facility</Link></li>
                                  <li><Link href="/emergency-transport">Emergency Transport</Link></li>
                                </ul>
                              </li>

                              <li className="dropdown">
                                <Link href="#">Pages</Link>
                                <ul>
                                  <li><Link href="/team">Team</Link></li>
                                  <li><Link href="/team-details">Team Details</Link></li>
                                  <li><Link href="/project">Projects</Link></li>
                                  <li><Link href="/project-details">Project Details</Link></li>
                                  <li><Link href="/testimonial">Testimonials</Link></li>
                                  <li><Link href="/pricing">Pricing</Link></li>
                                  <li><Link href="/faq">FAQ</Link></li>
                                </ul>
                              </li>

                              <li className="dropdown">
                                <Link href="#">Shop</Link>
                                <ul>
                                  <li><Link href="/products">Products</Link></li>
                                  <li><Link href="/product-details">Product Details</Link></li>
                                  <li><Link href="/cart">Cart</Link></li>
                                  <li><Link href="/checkout">Checkout</Link></li>
                                  <li><Link href="/wishlist">Wishlist</Link></li>
                                  <li><Link href="/sign-up">Sign Up</Link></li>
                                  <li><Link href="/login">Login</Link></li>
                                </ul>
                              </li>

                              <li className="dropdown">
                                <Link href="/blog">Blog</Link>
                                <ul>
                                  <li><Link href="/blog">Blog</Link></li>
                                  <li><Link href="/blog-standard">Blog Standard</Link></li>
                                  <li><Link href="/blog-left-sidebar">Blog Left Sidebar</Link></li>
                                  <li><Link href="/blog-right-sidebar">Blog Right Sidebar</Link></li>
                                  <li><Link href="/blog-details">Blog Details</Link></li>
                                </ul>
                              </li>

                              <li className=""><Link href="/contact">Contact</Link></li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="main-header-one__bottom-right">
                        <div className="main-header-one__bottom-right-btn">
                          <Link href="/contact">Track Order
                            <i className="icon-right-arrow21"></i>
                          </Link>
                        </div>

                        <div className="login-box">
                          <Link href="/login"><i className="fa fa-sign-in"></i> <span>Member <br /> Login</span></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div className="stricky-header stricky-header--style1 stricked-menu main-menu">
        <div className="sticky-header__content"></div>
      </div>
    </>
  );
}
