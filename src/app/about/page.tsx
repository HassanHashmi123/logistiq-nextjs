import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileMenu from "@/components/layout/MobileMenu";

export default function About() {
  return (
    <>
      <Header />
      
        

        
        <section className="page-header">
            <div className="page-header__bg" style={{ backgroundImage: "url(/assets/images/backgrounds/page-header-bg.jpg)" }}>
            </div>
            <div className="page-header__pattern"><img src="/assets/images/pattern/page-header-pattern.png" alt="" /></div>
            <div className="container">
                <div className="page-header__inner">
                    <h2>About Us</h2>
                    <ul className="thm-breadcrumb">
                        <li><a href="/">Home</a></li>
                        <li><span className="icon-right-arrow21"></span></li>
                        <li>About Us</li>
                    </ul>
                </div>
            </div>
        </section>
        

    



        
        <section className="about-one">
            <div className="container">
                <div className="row">
                    
                    <div className="col-xl-7">
                        <div className="about-one__content">
                            <div className="sec-title tg-heading-subheading animation-style2">
                                <div className="sec-title__tagline">
                                    <div className="line"></div>
                                    <div className="text tg-element-title">
                                        <h4>Our Company</h4>
                                    </div>
                                    <div className="icon">
                                        <span className="icon-plane2 float-bob-x3"></span>
                                    </div>
                                </div>
                                <h2 className="sec-title__title tg-element-title">Our Expertise Stands in <br />
                                    <span>Logistics
                                        Solutions</span>
                                </h2>
                            </div>

                            <div className="about-one__content-text1">
                                <p>Logistic service provider company plays a pivotal role in the global supply
                                    chain ecosystem by efficiently managing the movement of goods from origin to final
                                    destination. These companies offer a diverse.</p>
                            </div>

                            <div className="about-one__content-text2">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="about-one__content-text2-single">
                                            <div className="about-one__content-text2-single-top">
                                                <div className="icon">
                                                    <span className="icon-worldwide-shipping-1"></span>
                                                </div>

                                                <div className="title-box">
                                                    <h3>Worldwide Service</h3>
                                                </div>
                                            </div>

                                            <p>Logistic service provider company plays a pivotal role in the global</p>
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="about-one__content-text2-single">
                                            <div className="about-one__content-text2-single-top">
                                                <div className="icon">
                                                    <span className="icon-24-hours-service"></span>
                                                </div>

                                                <div className="title-box">
                                                    <h3>24/7 Online Support</h3>
                                                </div>
                                            </div>

                                            <p>Logistic service provider company plays a pivotal role in the global</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="about-one__content-bottom">
                                <div className="btn-box">
                                    <a className="thm-btn" href="/about">More About Us
                                        <i className="icon-right-arrow21"></i>
                                        <span className="hover-btn hover-bx"></span>
                                        <span className="hover-btn hover-bx2"></span>
                                        <span className="hover-btn hover-bx3"></span>
                                        <span className="hover-btn hover-bx4"></span>
                                    </a>
                                </div>

                                <div className="contact-box">
                                    <div className="icon">
                                        <span className="icon-phone2"></span>
                                    </div>

                                    <div className="text-box">
                                        <p>Make A Phone Call</p>
                                        <h4><a href="tel:1234567890">+880 123 456 789 </a></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    

                    
                    <div className="col-xl-5">
                        <div className="about-one__img">
                            <div className="shape1 float-bob-y"><img src="/assets/images/shapes/about-v1-shape1.png" alt="" />
                            </div>
                            <div className="shape2 float-bob-y"><img src="/assets/images/shapes/about-v1-shape2.png" alt="" />
                            </div>
                            <div className="about-one__img1 reveal">
                                <img src="/assets/images/about/about-v1-img1.jpg" alt="" />
                            </div>

                            <div className="about-one__img2">
                                <div className="about-one__img2-inner reveal">
                                    <img src="/assets/images/about/about-v1-img2.jpg" alt="" />
                                </div>

                                <div className="about-one__circle-text">
                                    <div className="about-one__round-text-box">
                                        <div className="inner">
                                            <div className="about-one__curved-circle rotate-me">
                                                WELCOME TO OUR COMPANY SINCE 2002
                                            </div>
                                        </div>
                                        <div className="overlay-icon-box">
                                            <a href="#"><i className="icon-location1"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="shape3 float-bob-y">
                                    <img src="/assets/images/shapes/about-v1-shape3.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
        

        
        <section className="service-one">
            <div className="service-one__pattern"
                style={{ backgroundImage: "url(/assets/images/pattern/service-v1-pattern.jpg)" }}></div>
            <div className="container">
                <div className="sec-title center text-center tg-heading-subheading animation-style2">
                    <div className="sec-title__tagline">
                        <div className="line"></div>
                        <div className="text tg-element-title">
                            <h4>Our Service</h4>
                        </div>
                        <div className="icon">
                            <span className="icon-plane2 float-bob-x3"></span>
                        </div>
                    </div>
                    <h2 className="sec-title__title tg-element-title">Provide Efficient Logistics
                        <br /> Solutions <span>Business</span></h2>
                </div>

                <div className="row">
                    <div className="service-one__carousel owl-carousel owl-theme owl-dot-style1">
                        
                        <div className="service-one__single">
                            <div className="service-one__single-inner">
                                <div className="service-one__single-img">
                                    <img src="/assets/images/services/services-v1-img1.jpg" alt="#" />
                                </div>

                                <div className="service-one__single-content">
                                    <h2><a href="/international-transport">Fast Personal Delivery </a></h2>
                                    <p>A logistic service provider company plays
                                        a pivotal role in the global supply chain logistic service.</p>
                                    <div className="btn-box">
                                        <a href="/international-transport">Read More <span
                                                className="icon-right-arrow21"></span></a>
                                    </div>
                                </div>
                            </div>

                            <div className="icon">
                                <span className="icon-delivery-man"></span>
                            </div>
                        </div>
                        

                        
                        <div className="service-one__single">
                            <div className="service-one__single-inner">
                                <div className="service-one__single-img">
                                    <img src="/assets/images/services/services-v1-img2.jpg" alt="#" />
                                </div>

                                <div className="service-one__single-content">
                                    <h2><a href="/international-transport">Local Truck Transport</a></h2>
                                    <p>A logistic service provider company plays
                                        a pivotal role in the global supply chain logistic service.</p>
                                    <div className="btn-box">
                                        <a href="/international-transport">Read More <span
                                                className="icon-right-arrow21"></span></a>
                                    </div>
                                </div>
                            </div>

                            <div className="icon">
                                <span className="icon-shipment"></span>
                            </div>
                        </div>
                        

                        
                        <div className="service-one__single">
                            <div className="service-one__single-inner">
                                <div className="service-one__single-img">
                                    <img src="/assets/images/services/services-v1-img3.jpg" alt="#" />
                                </div>

                                <div className="service-one__single-content">
                                    <h2><a href="/international-transport">International Transport</a></h2>
                                    <p>A logistic service provider company plays
                                        a pivotal role in the global supply chain logistic service.</p>
                                    <div className="btn-box">
                                        <a href="/international-transport">Read More <span
                                                className="icon-right-arrow21"></span></a>
                                    </div>
                                </div>
                            </div>

                            <div className="icon">
                                <span className="icon-international-shipping"></span>
                            </div>
                        </div>
                        

                        
                        <div className="service-one__single">
                            <div className="service-one__single-inner">
                                <div className="service-one__single-img">
                                    <img src="/assets/images/services/services-v1-img1.jpg" alt="#" />
                                </div>

                                <div className="service-one__single-content">
                                    <h2><a href="/international-transport">Fast Personal Delivery </a></h2>
                                    <p>A logistic service provider company plays
                                        a pivotal role in the global supply chain logistic service.</p>
                                    <div className="btn-box">
                                        <a href="/international-transport">Read More <span
                                                className="icon-right-arrow21"></span></a>
                                    </div>
                                </div>
                            </div>

                            <div className="icon">
                                <span className="icon-delivery-man"></span>
                            </div>
                        </div>
                        

                        
                        <div className="service-one__single">
                            <div className="service-one__single-inner">
                                <div className="service-one__single-img">
                                    <img src="/assets/images/services/services-v1-img2.jpg" alt="#" />
                                </div>

                                <div className="service-one__single-content">
                                    <h2><a href="/international-transport">Local Truck Transport</a></h2>
                                    <p>A logistic service provider company plays
                                        a pivotal role in the global supply chain logistic service.</p>
                                    <div className="btn-box">
                                        <a href="/international-transport">Read More <span
                                                className="icon-right-arrow21"></span></a>
                                    </div>
                                </div>
                            </div>

                            <div className="icon">
                                <span className="icon-shipment"></span>
                            </div>
                        </div>
                        

                        
                        <div className="service-one__single">
                            <div className="service-one__single-inner">
                                <div className="service-one__single-img">
                                    <img src="/assets/images/services/services-v1-img3.jpg" alt="#" />
                                </div>

                                <div className="service-one__single-content">
                                    <h2><a href="/international-transport">International Transport</a></h2>
                                    <p>A logistic service provider company plays
                                        a pivotal role in the global supply chain logistic service.</p>
                                    <div className="btn-box">
                                        <a href="/international-transport">Read More <span
                                                className="icon-right-arrow21"></span></a>
                                    </div>
                                </div>
                            </div>

                            <div className="icon">
                                <span className="icon-international-shipping"></span>
                            </div>
                        </div>
                        

                        
                        <div className="service-one__single">
                            <div className="service-one__single-inner">
                                <div className="service-one__single-img">
                                    <img src="/assets/images/services/services-v1-img1.jpg" alt="#" />
                                </div>

                                <div className="service-one__single-content">
                                    <h2><a href="/international-transport">Fast Personal Delivery </a></h2>
                                    <p>A logistic service provider company plays
                                        a pivotal role in the global supply chain logistic service.</p>
                                    <div className="btn-box">
                                        <a href="/international-transport">Read More <span
                                                className="icon-right-arrow21"></span></a>
                                    </div>
                                </div>
                            </div>

                            <div className="icon">
                                <span className="icon-delivery-man"></span>
                            </div>
                        </div>
                        

                        
                        <div className="service-one__single">
                            <div className="service-one__single-inner">
                                <div className="service-one__single-img">
                                    <img src="/assets/images/services/services-v1-img2.jpg" alt="#" />
                                </div>

                                <div className="service-one__single-content">
                                    <h2><a href="/international-transport">Local Truck Transport</a></h2>
                                    <p>A logistic service provider company plays
                                        a pivotal role in the global supply chain logistic service.</p>
                                    <div className="btn-box">
                                        <a href="/international-transport">Read More <span
                                                className="icon-right-arrow21"></span></a>
                                    </div>
                                </div>
                            </div>

                            <div className="icon">
                                <span className="icon-shipment"></span>
                            </div>
                        </div>
                        

                        
                        <div className="service-one__single">
                            <div className="service-one__single-inner">
                                <div className="service-one__single-img">
                                    <img src="/assets/images/services/services-v1-img3.jpg" alt="#" />
                                </div>

                                <div className="service-one__single-content">
                                    <h2><a href="/international-transport">International Transport</a></h2>
                                    <p>A logistic service provider company plays
                                        a pivotal role in the global supply chain logistic service.</p>
                                    <div className="btn-box">
                                        <a href="/international-transport">Read More <span
                                                className="icon-right-arrow21"></span></a>
                                    </div>
                                </div>
                            </div>

                            <div className="icon">
                                <span className="icon-international-shipping"></span>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
        

        
        <section className="project-one">
            <div className="container">
                <div className="row">
                    
                    <div className="col-xl-5 col-lg-5 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="project-one__title">
                            <div className="sec-title tg-heading-subheading animation-style2">
                                <div className="sec-title__tagline">
                                    <div className="line"></div>
                                    <div className="text tg-element-title">
                                        <h4>Latest Project</h4>
                                    </div>
                                    <div className="icon">
                                        <span className="icon-plane2 float-bob-x3"></span>
                                    </div>
                                </div>
                                <h2 className="sec-title__title tg-element-title">The Achievement <br />
                                    of Our <span>Project</span></h2>
                            </div>

                            <div className="btn-box">
                                <a className="thm-btn" href="/project">See All Project
                                    <i className="icon-right-arrow21"></i>
                                    <span className="hover-btn hover-bx"></span>
                                    <span className="hover-btn hover-bx2"></span>
                                    <span className="hover-btn hover-bx3"></span>
                                    <span className="hover-btn hover-bx4"></span>
                                </a>
                            </div>

                        </div>
                    </div>
                    

                    
                    <div className="col-xl-7 col-lg-7 wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="project-one__single">
                            <div className="project-one__single-img">
                                <div className="inner">
                                    <img src="/assets/images/project/project-v1-img1.jpg" alt="#" />
                                    <div className="project-one__overlay-content">
                                        <div className="text-box">
                                            <p>Logistic</p>
                                            <h2><a href="/project-details">Warehouse Inventory </a></h2>
                                        </div>

                                        <div className="icon">
                                            <a href="/project-details"><span className="icon-right-arrow21"></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    

                    
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="project-one__single">
                            <div className="project-one__single-img">
                                <div className="inner">
                                    <img src="/assets/images/project/project-v1-img2.jpg" alt="#" />
                                    <div className="project-one__overlay-content">
                                        <div className="text-box">
                                            <p>Logistic</p>
                                            <h2><a href="/project-details">Warehouse Inventory </a></h2>
                                        </div>

                                        <div className="icon">
                                            <a href="/project-details"><span className="icon-right-arrow21"></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    

                    
                    <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="project-one__single">
                            <div className="project-one__single-img">
                                <div className="inner">
                                    <img src="/assets/images/project/project-v1-img3.jpg" alt="#" />
                                    <div className="project-one__overlay-content">
                                        <div className="text-box">
                                            <p>Logistic</p>
                                            <h2><a href="/project-details">Warehouse Inventory </a></h2>
                                        </div>

                                        <div className="icon">
                                            <a href="/project-details"><span className="icon-right-arrow21"></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    

                    
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="project-one__single">
                            <div className="project-one__single-img">
                                <div className="inner">
                                    <img src="/assets/images/project/project-v1-img4.jpg" alt="#" />
                                    <div className="project-one__overlay-content">
                                        <div className="text-box">
                                            <p>Logistic</p>
                                            <h2><a href="/project-details">Warehouse Inventory </a></h2>
                                        </div>

                                        <div className="icon">
                                            <a href="/project-details"><span className="icon-right-arrow21"></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
        

        
        <section className="why-choose-one">
            <div className="why-choose-one__pattern">
                <img src="/assets/images/pattern/why-choose-v1-pattern.png" alt="" />
            </div>
            <div className="shape1 float-bob-y"><img src="/assets/images/shapes/why-choose-v1-shape1.png" alt="" /></div>
            <div className="container">
                <div className="row">
                    
                    <div className="col-xl-6">
                        <div className="why-choose-one__content">
                            <div className="sec-title tg-heading-subheading animation-style2">
                                <div className="sec-title__tagline">
                                    <div className="line"></div>
                                    <div className="text tg-element-title">
                                        <h4>Why Choose us</h4>
                                    </div>
                                    <div className="icon">
                                        <span className="icon-plane2 float-bob-x3"></span>
                                    </div>
                                </div>
                                <h2 className="sec-title__title tg-element-title">Efficient, Safe, & Swift <br /> Logistics
                                    <span>Solution!</span></h2>
                            </div>

                            <div className="why-choose-one__content-list">
                                <ul>
                                    <li>
                                        <p><span className="icon-plane2"></span> Make long term business decisions</p>
                                    </li>
                                    <li>
                                        <p><span className="icon-plane2"></span> Transparent career journey and support.</p>
                                    </li>
                                    <li>
                                        <p><span className="icon-plane2"></span> Be a responsible member of the community
                                        </p>
                                    </li>
                                    <li>
                                        <p><span className="icon-plane2"></span> Provide a service we are proud of</p>
                                    </li>
                                </ul>
                            </div>

                            <div className="btn-box">
                                <a className="thm-btn" href="/contact">Contact Us
                                    <i className="icon-right-arrow21"></i>
                                    <span className="hover-btn hover-bx"></span>
                                    <span className="hover-btn hover-bx2"></span>
                                    <span className="hover-btn hover-bx3"></span>
                                    <span className="hover-btn hover-bx4"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                    

                    
                    <div className="col-xl-6">
                        <div className="why-choose-one__form-box wow fadeInRight" data-wow-delay="0ms"
                            data-wow-duration="1500ms">
                            <div className="title-box">
                                <h2>Request a Quote</h2>
                            </div>

                            <form className="contact-form-validated why-choose-one__form" action="https://logistiq-laravel.mnsithub.com/assets/inc/sendemail.php"
                                method="post" noValidate={true}>
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
                                            <input type="text" name="date" defaultValue="" placeholder="Date" id="datepicker"  />
                                            <div className="icon"><span className="icon-calendar"></span></div>
                                        </div>
                                    </div>


                                    <div className="col-xl-12">
                                        <div className="why-choose-one__form-distance">
                                            <div className="title">
                                                <p>distance(Kilo):</p>
                                            </div>
                                            <div className="why-choose-one__form-distance-inner">
                                                <div className="price-ranger">
                                                    <div id="slider-range"></div>
                                                    <div className="ranger-min-max-block">
                                                        <input type="text" readOnly={true} className="min" />
                                                        <span>-</span>
                                                        <input type="text" readOnly={true} className="max" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="input-box">
                                            <div className="select-box">
                                                <select className="selectmenu wide">
                                                    <option selected={true}>Freight Type</option>
                                                    <option>Freight Type 01</option>
                                                    <option>Freight Type 02</option>
                                                    <option>Freight Type 03</option>
                                                    <option>Freight Type 04</option>
                                                    <option>Freight Type 05</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="input-box">
                                            <div className="select-box">
                                                <select className="selectmenu wide">
                                                    <option selected={true}>Load</option>
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
                                        <div className="why-choose-one__form-btn">
                                            <button type="submit" className="thm-btn">
                                                Contact Us
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
        </section>
        

        
        <section className="testimonial-one">
            <div className="testimonial-one__pattern"
                style={{ backgroundImage: "url(/assets/images/pattern/testimonial-v1-pattern.png)" }}></div>
            <div className="container">
                <div className="row">
                    
                    <div className="col-xl-6">
                        <div className="testimonial-one__content">
                            <div className="big-title">
                                <h2>TESTIMONIALS</h2>
                            </div>
                            <div className="sec-title tg-heading-subheading animation-style2">
                                <div className="sec-title__tagline">
                                    <div className="line"></div>
                                    <div className="text tg-element-title">
                                        <h4>Client Testimonial</h4>
                                    </div>
                                    <div className="icon">
                                        <span className="icon-plane2 float-bob-x3"></span>
                                    </div>
                                </div>
                                <h2 className="sec-title__title tg-element-title">What Our Customers <br />
                                    Say <span>About Us</span> </h2>
                            </div>

                            <div className="testimonial-one__carousel owl-carousel owl-theme">
                                
                                <div className="testimonial-one__single">
                                    <div className="icon">
                                        <span className="icon-quote1"></span>
                                    </div>
                                    <div className="testimonial-one__single-inner">
                                        <div className="shape1"><img src="/assets/images/shapes/testimonial-v1-shape1.png"
                                                alt="" /></div>
                                        <div className="author-box">
                                            <div className="img-box">
                                                <img src="/assets/images/testimonial/testimonial-v1-img1.png" alt="" />
                                            </div>
                                            <div className="author-info">
                                                <h2>Ronald Richards</h2>
                                                <div className="bottom-text">
                                                    <p>MANAGER</p>
                                                    <div className="rating-box">
                                                        <i className="icon-star"></i>
                                                        <i className="icon-star"></i>
                                                        <i className="icon-star"></i>
                                                        <i className="icon-star"></i>
                                                        <i className="icon-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="text-box">
                                            <p>A logistic service provider company plays a pivotal role in the global
                                                supply chain A logistic service provider companyA logistic service
                                                provider company plays a pivotal role in the global supply chain A
                                                logistic service provider company</p>
                                        </div>
                                    </div>
                                </div>
                                

                                
                                <div className="testimonial-one__single">
                                    <div className="icon">
                                        <span className="icon-quote1"></span>
                                    </div>
                                    <div className="testimonial-one__single-inner">
                                        <div className="shape1"><img src="/assets/images/shapes/testimonial-v1-shape1.png"
                                                alt="" /></div>
                                        <div className="author-box">
                                            <div className="img-box">
                                                <img src="/assets/images/testimonial/testimonial-v1-img1.png" alt="" />
                                            </div>
                                            <div className="author-info">
                                                <h2>Ronald Richards</h2>
                                                <div className="bottom-text">
                                                    <p>MANAGER</p>
                                                    <div className="rating-box">
                                                        <i className="icon-star"></i>
                                                        <i className="icon-star"></i>
                                                        <i className="icon-star"></i>
                                                        <i className="icon-star"></i>
                                                        <i className="icon-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="text-box">
                                            <p>A logistic service provider company plays a pivotal role in the global
                                                supply chain A logistic service provider companyA logistic service
                                                provider company plays a pivotal role in the global supply chain A
                                                logistic service provider company</p>
                                        </div>
                                    </div>
                                </div>
                                

                                
                                <div className="testimonial-one__single">
                                    <div className="icon">
                                        <span className="icon-quote1"></span>
                                    </div>
                                    <div className="testimonial-one__single-inner">
                                        <div className="shape1"><img src="/assets/images/shapes/testimonial-v1-shape1.png"
                                                alt="" /></div>
                                        <div className="author-box">
                                            <div className="img-box">
                                                <img src="/assets/images/testimonial/testimonial-v1-img1.png" alt="" />
                                            </div>
                                            <div className="author-info">
                                                <h2>Ronald Richards</h2>
                                                <div className="bottom-text">
                                                    <p>MANAGER</p>
                                                    <div className="rating-box">
                                                        <i className="icon-star"></i>
                                                        <i className="icon-star"></i>
                                                        <i className="icon-star"></i>
                                                        <i className="icon-star"></i>
                                                        <i className="icon-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="text-box">
                                            <p>A logistic service provider company plays a pivotal role in the global
                                                supply chain A logistic service provider companyA logistic service
                                                provider company plays a pivotal role in the global supply chain A
                                                logistic service provider company</p>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    


                    
                    <div className="col-xl-6">
                        <div className="testimonial-one__img">
                            <div className="testimonial-one__img1 reveal">
                                <img src="/assets/images/testimonial/testimonial-v1-img2.jpg" alt="" />
                            </div>

                            <div className="testimonial-one__img-author">
                                <ul>
                                    <li>
                                        <div className="img-box"><img src="/assets/images/banner/banner-v1-img2.jpg" alt="#" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="img-box"><img src="/assets/images/banner/banner-v1-img3.jpg" alt="#" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="img-box"><img src="/assets/images/banner/banner-v1-img4.jpg" alt="#" />
                                        </div>
                                    </li>
                                </ul>

                                <div className="text-box">
                                    <h2>Customer Satisfied</h2>
                                    <p>4.8 (15k Reviews)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
        


        
      <Footer />
      <MobileMenu />
    </>
  );
}
