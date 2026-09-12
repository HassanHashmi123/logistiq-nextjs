import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileMenu from "@/components/layout/MobileMenu";

export default function Contact() {
  return (
    <>
      <Header />
      
        

        
        <section className="page-header">
            <div className="page-header__bg" style={{ backgroundImage: "url(/assets/images/backgrounds/page-header-bg.jpg)" }}>
            </div>
            <div className="page-header__pattern"><img src="/assets/images/pattern/page-header-pattern.png" alt="" /></div>
            <div className="container">
                <div className="page-header__inner">
                    <h2>Contact Us</h2>
                    <ul className="thm-breadcrumb">
                        <li><a href="/">Home</a></li>
                        <li><span className="icon-right-arrow21"></span></li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>
        </section>
        

    



        
        <section className="contact-page">
            
            <div className="contact-page__top">
                <div className="contact-page__top-pattern"
                    style={{ backgroundImage: "url(/assets/images/pattern/contact-page-top-pattern.png)" }}></div>
                <div className="container">
                    <div className="row">
                        
                        <div className="col-xl-6">
                            <div className="contact-page__top-content">
                                <div className="sec-title tg-heading-subheading animation-style2">
                                    <div className="sec-title__tagline">
                                        <div className="line"></div>
                                        <div className="text tg-element-title">
                                            <h4>Contact us</h4>
                                        </div>
                                        <div className="icon">
                                            <span className="icon-plane2 float-bob-x3"></span>
                                        </div>
                                    </div>
                                    <h2 className="sec-title__title tg-element-title">Get in Touch And We’ll <br /> Help Your
                                        Business
                                    </h2>
                                </div>

                                <div className="contact-page__top-content-text1">
                                    <p>Our dedicated team of experts is here to guide you through every step of the
                                        insurance journey, ensuring you make informed choices tailored to your uniq
                                        needs choices tailored to your unique needs. </p>
                                </div>

                                <div className="social-links">
                                    <a href="#"><span className="icon-facebook-f"></span></a>
                                    <a href="#"><span className="icon-instagram"></span></a>
                                    <a href="#"><span className="icon-twitter"></span></a>
                                    <a href="#"><span className="icon-linkedin"></span></a>
                                </div>
                            </div>
                        </div>
                        

                        
                        <div className="col-xl-6">
                            <div className="contact-page__top-form">
                                <form className="contact-form-validated why-choose-one__form"
                                    action="https://logistiq-laravel.mnsithub.com/assets/inc/sendemail.php" method="post" noValidate={true}>
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="input-box">
                                                <input type="text" name="name" placeholder="Name" required={true} />
                                                <div className="icon"><span className="icon-user"></span></div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="input-box">
                                                <input type="email" name="email" placeholder="Email" required={true} />
                                                <div className="icon"><span className="icon-email"></span></div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="input-box">
                                                <input type="text" name="Phone" placeholder="Phone" required={true} />
                                                <div className="icon"><span className="icon-phone2"></span></div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="input-box">
                                                <div className="select-box">
                                                    <select className="selectmenu wide">
                                                        <option selected={true}>Subject</option>
                                                        <option>Freight Type 01</option>
                                                        <option>Freight Type 02</option>
                                                        <option>Freight Type 03</option>
                                                        <option>Freight Type 04</option>
                                                        <option>Freight Type 05</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="col-xl-12">
                                            <div className="input-box">
                                                <textarea name="message" placeholder="Message"></textarea>
                                                <div className="icon style2"><span className="icon-pen"></span></div>
                                            </div>
                                        </div>

                                        <div className="col-xl-12">
                                            <div className="why-choose-one__form-btn">
                                                <button type="submit" className="thm-btn">
                                                    Submit Now
                                                    <i className="icon-right-arrow21"></i>
                                                    <span className="hover-btn hover-bx"></span>
                                                    <span className="hover-btn hover-bx2"></span>
                                                    <span className="hover-btn hover-bx3"></span>
                                                    <span className="hover-btn hover-bx4"></span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <div className="result"></div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            

            
            <div className="contact-page__bottom">
                <div className="container">
                    <div className="contact-page__bottom-inner">
                        <ul className="list-unstyled">
                            <li className="contact-page__bottom-single">
                                <div className="icon">
                                    <span className="icon-address"></span>
                                </div>
                                <div className="content">
                                    <h2>Location</h2>
                                    <p>280 Granite Run Drive <br /> SuiteHobert, LA 90010, USA.</p>
                                </div>
                            </li>

                            <li className="contact-page__bottom-single">
                                <div className="icon">
                                    <span className="icon-clock2"></span>
                                </div>
                                <div className="content">
                                    <h2>Working Hours</h2>
                                    <p>Wednesday - Sunday <br /> 7:00 AM - 5:00 PM</p>
                                </div>
                            </li>

                            <li className="contact-page__bottom-single">
                                <div className="icon">
                                    <span className="icon-email"></span>
                                </div>
                                <div className="content">
                                    <h2>Email</h2>
                                    <p>
                                        <a href="mailto:support@logistra.com">support@logistra.com</a> <br />
                                        <a href="mailto:support@logistra.com">support@logistra.com</a>
                                    </p>
                                </div>
                            </li>

                            <li className="contact-page__bottom-single">
                                <div className="icon">
                                    <span className="icon-phone"></span>
                                </div>
                                <div className="content">
                                    <h2>Phones</h2>
                                    <p>
                                        <a href="tel:880123456789">+880 123 456 789</a> <br />
                                        <a href="tel:880123456789">+880 123 456 789</a>
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </section>
        


        
      <Footer />
      <MobileMenu />
    </>
  );
}
