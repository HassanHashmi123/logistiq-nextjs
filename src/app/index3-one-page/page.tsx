import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileMenu from "@/components/layout/MobileMenu";

export default function Index3OnePage() {
  return (
    <>
      <Header />
      
        


    
        <div className="xs-sidebar-group info-group info-sidebar">
            <div className="xs-overlay xs-bg-black"></div>
            <div className="xs-sidebar-widget">
                <div className="sidebar-widget-container">
                    <div className="widget-heading">
                        <a href="#" className="close-side-widget">X</a>
                    </div>
                    <div className="sidebar-textwidget">
                        <div className="sidebar-info-contents">
                            <div className="content-inner">
                                <div className="logo">
                                    <a href="/"><img src="/assets/images/resources/sidebar-logo.png"
                                            alt="" /></a>
                                </div>
                                <div className="content-box">
                                    <h4>About Us</h4>
                                    <div className="inner-text">
                                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has
                                            roots in a piece of classical Latin literature from 45 BC, making it over
                                            2000 years old.
                                        </p>
                                    </div>
                                </div>

                                <div className="form-inner">
                                    <h4>Get a free quote</h4>
                                    <form action="https://logistiq-laravel.mnsithub.com/" method="post">
                                        <div className="form-group">
                                            <input type="text" name="name" placeholder="Name" required={true} />
                                        </div>
                                        <div className="form-group">
                                            <input type="email" name="email" placeholder="Email" required={true} />
                                        </div>
                                        <div className="form-group">
                                            <textarea name="message" placeholder="Message..."></textarea>
                                        </div>
                                        <div className="form-group message-btn">
                                            <button className="thm-btn" type="submit" data-loading-text="Please wait...">
                                                Submit Now
                                                <i className="icon-right-arrow21"></i>
                                                <span className="hover-btn hover-bx"></span>
                                                <span className="hover-btn hover-bx2"></span>
                                                <span className="hover-btn hover-bx3"></span>
                                                <span className="hover-btn hover-bx4"></span>
                                            </button>
                                        </div>
                                    </form>
                                </div>

                                <div className="sidebar-contact-info">
                                    <h4>Contact Info</h4>
                                    <ul>
                                        <li>
                                            <span className="icon-location1"></span> 88 broklyn street, New York
                                        </li>
                                        <li>
                                            <span className="icon-phone"></span>
                                            <a href="tel:123456789">+1 555-9990-153</a>
                                        </li>
                                        <li>
                                            <span className="fa fa-envelope"></span>
                                            <a href="mailto:info@example.com">info@example.com</a>
                                        </li>
                                    </ul>
                                </div>


                                <div className="thm-social-link1">
                                    <ul className="social-box">
                                        <li className="facebook">
                                            <a href="#"><i className="icon-facebook-f" aria-hidden="true"></i></a>
                                        </li>
                                        <li className="twitter">
                                            <a href="#"><i className="icon-twitter" aria-hidden="true"></i></a>
                                        </li>
                                        <li className="linkedin">
                                            <a href="#"><i className="icon-instagram" aria-hidden="true"></i></a>
                                        </li>
                                        <li className="gplus">
                                            <a href="#"><i className="icon-linkedin" aria-hidden="true"></i></a>
                                        </li>
                                    </ul>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        




        
        <section className="slider-one" id="home">
            <div className="slider-one__carousel owl-carousel owl-theme">
                
                <div className="slider-one__single">
                    <div className="slider-one__single-bg"
                        style={{ backgroundImage: "url(/assets/images/banner/slider-v1-img1.jpg)" }}></div>
                    <div className="shape1"></div>
                    <div className="shape2"></div>
                    <div className="shape3"></div>
                    <div className="shape4"></div>
                    <div className="container">
                        <div className="slider-one__single-inner">
                            <div className="slider-one__single-content">
                                <div className="tagline">
                                    <div className="round"></div>
                                    <div className="text"><span>Welcome to Logistiq</span></div>
                                </div>

                                <div className="title-box">
                                    <h2>We Provide Global <br /> <span>Logistic</span></h2>
                                </div>

                                <div className="text-box">
                                    <p>Take your business to the next level with Loraic new business management tools.
                                        Loraic will open a new horizon for us. </p>
                                </div>

                                <div className="btn-box">
                                    <a className="thm-btn" href="/about">Explore More
                                        <i className="icon-right-arrow21"></i>
                                        <span className="hover-btn hover-bx"></span>
                                        <span className="hover-btn hover-bx2"></span>
                                        <span className="hover-btn hover-bx3"></span>
                                        <span className="hover-btn hover-bx4"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                

                
                <div className="slider-one__single">
                    <div className="slider-one__single-bg"
                        style={{ backgroundImage: "url(/assets/images/banner/slider-v1-img2.jpg)" }}></div>
                    <div className="shape1"></div>
                    <div className="shape2"></div>
                    <div className="shape3"></div>
                    <div className="shape4"></div>
                    <div className="container">
                        <div className="slider-one__single-inner">
                            <div className="slider-one__single-content">
                                <div className="tagline">
                                    <div className="round"></div>
                                    <div className="text"><span>Welcome to Logistiq</span></div>
                                </div>

                                <div className="title-box">
                                    <h2>We Provide Global <br /> <span>Logistic</span></h2>
                                </div>

                                <div className="text-box">
                                    <p>Take your business to the next level with Loraic new business management tools.
                                        Loraic will open a new horizon for us. </p>
                                </div>

                                <div className="btn-box">
                                    <a className="thm-btn" href="/about">Explore More
                                        <i className="icon-right-arrow21"></i>
                                        <span className="hover-btn hover-bx"></span>
                                        <span className="hover-btn hover-bx2"></span>
                                        <span className="hover-btn hover-bx3"></span>
                                        <span className="hover-btn hover-bx4"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                

                
                <div className="slider-one__single">
                    <div className="slider-one__single-bg"
                        style={{ backgroundImage: "url(/assets/images/banner/slider-v1-img3.jpg)" }}></div>
                    <div className="shape1"></div>
                    <div className="shape2"></div>
                    <div className="shape3"></div>
                    <div className="shape4"></div>
                    <div className="container">
                        <div className="slider-one__single-inner">
                            <div className="slider-one__single-content">
                                <div className="tagline">
                                    <div className="round"></div>
                                    <div className="text"><span>Welcome to Logistiq</span></div>
                                </div>

                                <div className="title-box">
                                    <h2>We Provide Global <br /> <span>Logistic</span></h2>
                                </div>

                                <div className="text-box">
                                    <p>Take your business to the next level with Loraic new business management tools.
                                        Loraic will open a new horizon for us. </p>
                                </div>

                                <div className="btn-box">
                                    <a className="thm-btn" href="/about">Explore More
                                        <i className="icon-right-arrow21"></i>
                                        <span className="hover-btn hover-bx"></span>
                                        <span className="hover-btn hover-bx2"></span>
                                        <span className="hover-btn hover-bx3"></span>
                                        <span className="hover-btn hover-bx4"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>

            <div className="slider-one__form-box">
                <form className="contact-form-validated slider-one__form" action="https://logistiq-laravel.mnsithub.com/assets/inc/sendemail.php" method="post"
                    noValidate={true}>
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="input-box">
                                <input type="text" name="name" placeholder="Name" required={true} />
                                <div className="icon"><span className="icon-user"></span></div>
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
                                        <option>Rail</option>
                                        <option>Ocean Freight</option>
                                        <option>Ocean</option>
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
                            <div className="slider-one__form-btn">
                                <button type="submit" className="thm-btn">
                                    Submit Request
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
        </section>
        

        
        <section className="features-one">
            <div className="container">
                <div className="row">
                    
                    <div className="col-xl-4 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="features-one__single">
                            <div className="features-one__single-icon text-center">
                                <div className="icon">
                                    <span className="icon-customer-loyalty"></span>
                                </div>
                                <div className="text-box">
                                    <h2>01</h2>
                                </div>
                            </div>

                            <div className="features-one__single-content">
                                <h2><a href="#">Premium Quality</a></h2>
                                <p>It is a long established fact that a reader be distracted by the readable
                                    content.</p>
                            </div>
                        </div>
                    </div>
                    

                    
                    <div className="col-xl-4 wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="features-one__single">
                            <div className="features-one__single-icon text-center">
                                <div className="icon">
                                    <span className="icon-quote"></span>
                                </div>
                                <div className="text-box">
                                    <h2>02</h2>
                                </div>
                            </div>

                            <div className="features-one__single-content">
                                <h2><a href="#">License & Insurance</a></h2>
                                <p>It is a long established fact that a reader be distracted by the readable
                                    content.</p>
                            </div>
                        </div>
                    </div>
                    

                    
                    <div className="col-xl-4 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="features-one__single">
                            <div className="features-one__single-icon text-center">
                                <div className="icon">
                                    <span className="icon-professional-services"></span>
                                </div>
                                <div className="text-box">
                                    <h2>03</h2>
                                </div>
                            </div>

                            <div className="features-one__single-content">
                                <h2><a href="#">Certified Expert</a></h2>
                                <p>It is a long established fact that a reader be distracted by the readable
                                    content.</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
        

        
        <section className="about-three" id="about">
            <div className="container">
                <div className="row">
                    
                    <div className="col-xl-6">
                        <div className="about-three__img">
                            <div className="shape1 float-bob-x"><img src="/assets/images/shapes/about-v2-shape2.png" alt="" />
                            </div>
                            <div className="about-three__img-box">
                                <ul>
                                    <li>
                                        <div className="img-box reveal">
                                            <img src="/assets/images/about/about-v3-img1.jpg" alt="" />
                                        </div>
                                    </li>

                                    <li>
                                        <div className="about-three__experience-box">
                                            <div className="count-text-box count-box">
                                                <div className="count-number">
                                                    <h3 className="count-text" data-stop="25" data-speed="1500">00</h3>
                                                    <span className="plus">+</span>
                                                </div>
                                                <h4>Years of experience</h4>
                                            </div>
                                        </div>
                                        <div className="img-box reveal">
                                            <img src="/assets/images/about/about-v3-img2.jpg" alt="" />
                                        </div>


                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    

                    
                    <div className="col-xl-6">
                        <div className="about-three__content">
                            <div className="sec-title tg-heading-subheading animation-style2">
                                <div className="sec-title__tagline">
                                    <div className="line"></div>
                                    <div className="text tg-element-title">
                                        <h4>Who we are</h4>
                                    </div>
                                    <div className="icon">
                                        <span className="icon-plane2 float-bob-x3"></span>
                                    </div>
                                </div>
                                <h2 className="sec-title__title tg-element-title">Leading Global Logistic <br />
                                    And Transport <span>Agency</span>
                                </h2>
                            </div>

                            <div className="about-three__content-text">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and scrambled.
                                </p>
                            </div>

                            <div className="about-three__content-list">
                                <ul>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-global-services"></span>
                                        </div>

                                        <div className="content-box">
                                            <h2>Global Service</h2>
                                            <p>We always provide people a complete solution focused of <br /> any
                                                business.</p>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="icon">
                                            <span className="icon-man"></span>
                                        </div>

                                        <div className="content-box">
                                            <h2>Local Service</h2>
                                            <p>We always provide people a complete solution focused of <br /> any
                                                business.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="about-three__content-btn">
                                <a className="thm-btn" href="#">More About Us
                                    <i className="icon-right-arrow21"></i>
                                    <span className="hover-btn hover-bx"></span>
                                    <span className="hover-btn hover-bx2"></span>
                                    <span className="hover-btn hover-bx3"></span>
                                    <span className="hover-btn hover-bx4"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
        

        
        <section className="service-one" id="services">
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
        

        
        <section className="team-one" id="team">
            <div className="container">
                <div className="sec-title center text-center tg-heading-subheading animation-style2">
                    <div className="sec-title__tagline">
                        <div className="line"></div>
                        <div className="text tg-element-title">
                            <h4>Team member</h4>
                        </div>
                        <div className="icon">
                            <span className="icon-plane2 float-bob-x3"></span>
                        </div>
                    </div>
                    <h2 className="sec-title__title tg-element-title">Introduce Our Expert <br />
                        Logistic <span>Teams</span></h2>
                </div>

                <div className="team-one__carousel owl-carousel owl-theme owl-dot-style1">
                    
                    <div className="team-one__single">
                        <div className="team-one__single-img">
                            <div className="inner">
                                <img src="/assets/images/team/team-v1-img1.jpg" alt="" />
                            </div>
                        </div>

                        <div className="team-one__single-content">
                            <ul className="social-links">
                                <li><a href="#"><span className="icon-linkedin"></span></a></li>
                                <li><a href="#"><span className="icon-twitter1"></span></a></li>
                                <li><a href="#"><span className="icon-instagram"></span></a></li>
                                <li><a href="#"><span className="icon-facebook-f"></span></a></li>
                            </ul>
                            <span>FOUNDER</span>
                            <h2><a href="/team-details">Courtney Henry</a></h2>
                            <p>Logistic service provider company plays a pivotal role in the global supply chain
                            </p>
                            <div className="btn-box">
                                <a href="/contact">Contact Me <i className="icon-right-arrow21"></i></a>
                            </div>
                        </div>
                    </div>
                    

                    
                    <div className="team-one__single">
                        <div className="team-one__single-img">
                            <div className="inner">
                                <img src="/assets/images/team/team-v1-img2.jpg" alt="" />
                            </div>
                        </div>

                        <div className="team-one__single-content">
                            <ul className="social-links">
                                <li><a href="#"><span className="icon-linkedin"></span></a></li>
                                <li><a href="#"><span className="icon-twitter1"></span></a></li>
                                <li><a href="#"><span className="icon-instagram"></span></a></li>
                                <li><a href="#"><span className="icon-facebook-f"></span></a></li>
                            </ul>
                            <span>FOUNDER</span>
                            <h2><a href="/team-details">Jane Cooper</a></h2>
                            <p>Logistic service provider company plays a pivotal role in the global supply chain
                            </p>
                            <div className="btn-box">
                                <a href="/contact">Contact Me <i className="icon-right-arrow21"></i></a>
                            </div>
                        </div>
                    </div>
                    

                    
                    <div className="team-one__single">
                        <div className="team-one__single-img">
                            <div className="inner">
                                <img src="/assets/images/team/team-v1-img3.jpg" alt="" />
                            </div>
                        </div>

                        <div className="team-one__single-content">
                            <ul className="social-links">
                                <li><a href="#"><span className="icon-linkedin"></span></a></li>
                                <li><a href="#"><span className="icon-twitter1"></span></a></li>
                                <li><a href="#"><span className="icon-instagram"></span></a></li>
                                <li><a href="#"><span className="icon-facebook-f"></span></a></li>
                            </ul>
                            <span>FOUNDER</span>
                            <h2><a href="/team-details">Marvin McKinney</a></h2>
                            <p>Logistic service provider company plays a pivotal role in the global supply chain
                            </p>
                            <div className="btn-box">
                                <a href="/contact">Contact Me <i className="icon-right-arrow21"></i></a>
                            </div>
                        </div>
                    </div>
                    

                    
                    <div className="team-one__single">
                        <div className="team-one__single-img">
                            <div className="inner">
                                <img src="/assets/images/team/team-v1-img1.jpg" alt="" />
                            </div>
                        </div>

                        <div className="team-one__single-content">
                            <ul className="social-links">
                                <li><a href="#"><span className="icon-linkedin"></span></a></li>
                                <li><a href="#"><span className="icon-twitter1"></span></a></li>
                                <li><a href="#"><span className="icon-instagram"></span></a></li>
                                <li><a href="#"><span className="icon-facebook-f"></span></a></li>
                            </ul>
                            <span>FOUNDER</span>
                            <h2><a href="/team-details">Courtney Henry</a></h2>
                            <p>Logistic service provider company plays a pivotal role in the global supply chain
                            </p>
                            <div className="btn-box">
                                <a href="/contact">Contact Me <i className="icon-right-arrow21"></i></a>
                            </div>
                        </div>
                    </div>
                    

                    
                    <div className="team-one__single">
                        <div className="team-one__single-img">
                            <div className="inner">
                                <img src="/assets/images/team/team-v1-img2.jpg" alt="" />
                            </div>
                        </div>

                        <div className="team-one__single-content">
                            <ul className="social-links">
                                <li><a href="#"><span className="icon-linkedin"></span></a></li>
                                <li><a href="#"><span className="icon-twitter1"></span></a></li>
                                <li><a href="#"><span className="icon-instagram"></span></a></li>
                                <li><a href="#"><span className="icon-facebook-f"></span></a></li>
                            </ul>
                            <span>FOUNDER</span>
                            <h2><a href="/team-details">Jane Cooper</a></h2>
                            <p>Logistic service provider company plays a pivotal role in the global supply chain
                            </p>
                            <div className="btn-box">
                                <a href="/contact">Contact Me <i className="icon-right-arrow21"></i></a>
                            </div>
                        </div>
                    </div>
                    

                    
                    <div className="team-one__single">
                        <div className="team-one__single-img">
                            <div className="inner">
                                <img src="/assets/images/team/team-v1-img3.jpg" alt="" />
                            </div>
                        </div>

                        <div className="team-one__single-content">
                            <ul className="social-links">
                                <li><a href="#"><span className="icon-linkedin"></span></a></li>
                                <li><a href="#"><span className="icon-twitter1"></span></a></li>
                                <li><a href="#"><span className="icon-instagram"></span></a></li>
                                <li><a href="#"><span className="icon-facebook-f"></span></a></li>
                            </ul>
                            <span>FOUNDER</span>
                            <h2><a href="/team-details">Marvin McKinney</a></h2>
                            <p>Logistic service provider company plays a pivotal role in the global supply chain
                            </p>
                            <div className="btn-box">
                                <a href="/contact">Contact Me <i className="icon-right-arrow21"></i></a>
                            </div>
                        </div>
                    </div>
                    

                    
                    <div className="team-one__single">
                        <div className="team-one__single-img">
                            <div className="inner">
                                <img src="/assets/images/team/team-v1-img1.jpg" alt="" />
                            </div>
                        </div>

                        <div className="team-one__single-content">
                            <ul className="social-links">
                                <li><a href="#"><span className="icon-linkedin"></span></a></li>
                                <li><a href="#"><span className="icon-twitter1"></span></a></li>
                                <li><a href="#"><span className="icon-instagram"></span></a></li>
                                <li><a href="#"><span className="icon-facebook-f"></span></a></li>
                            </ul>
                            <span>FOUNDER</span>
                            <h2><a href="/team-details">Courtney Henry</a></h2>
                            <p>Logistic service provider company plays a pivotal role in the global supply chain
                            </p>
                            <div className="btn-box">
                                <a href="/contact">Contact Me <i className="icon-right-arrow21"></i></a>
                            </div>
                        </div>
                    </div>
                    

                    
                    <div className="team-one__single">
                        <div className="team-one__single-img">
                            <div className="inner">
                                <img src="/assets/images/team/team-v1-img2.jpg" alt="" />
                            </div>
                        </div>

                        <div className="team-one__single-content">
                            <ul className="social-links">
                                <li><a href="#"><span className="icon-linkedin"></span></a></li>
                                <li><a href="#"><span className="icon-twitter1"></span></a></li>
                                <li><a href="#"><span className="icon-instagram"></span></a></li>
                                <li><a href="#"><span className="icon-facebook-f"></span></a></li>
                            </ul>
                            <span>FOUNDER</span>
                            <h2><a href="/team-details">Jane Cooper</a></h2>
                            <p>Logistic service provider company plays a pivotal role in the global supply chain
                            </p>
                            <div className="btn-box">
                                <a href="/contact">Contact Me <i className="icon-right-arrow21"></i></a>
                            </div>
                        </div>
                    </div>
                    

                    
                    <div className="team-one__single">
                        <div className="team-one__single-img">
                            <div className="inner">
                                <img src="/assets/images/team/team-v1-img3.jpg" alt="" />
                            </div>
                        </div>

                        <div className="team-one__single-content">
                            <ul className="social-links">
                                <li><a href="#"><span className="icon-linkedin"></span></a></li>
                                <li><a href="#"><span className="icon-twitter1"></span></a></li>
                                <li><a href="#"><span className="icon-instagram"></span></a></li>
                                <li><a href="#"><span className="icon-facebook-f"></span></a></li>
                            </ul>
                            <span>FOUNDER</span>
                            <h2><a href="/team-details">Marvin McKinney</a></h2>
                            <p>Logistic service provider company plays a pivotal role in the global supply chain
                            </p>
                            <div className="btn-box">
                                <a href="/contact">Contact Me <i className="icon-right-arrow21"></i></a>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
        


        
        <section className="quote-one" id="contact">
            <div className="quote-one__bg" data-jarallax data-speed="0.2" data-imgPosition="50% 0%"
                style={{ backgroundImage: "url(/assets/images/backgrounds/quote-v1-bg4.jpg)" }}></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="sec-title center text-center tg-heading-subheading animation-style2">
                            <div className="sec-title__tagline">
                                <div className="line"></div>
                                <div className="text tg-element-title">
                                    <h4>Shipping</h4>
                                </div>
                                <div className="icon">
                                    <span className="icon-plane2 float-bob-x3"></span>
                                </div>
                            </div>
                            <h2 className="sec-title__title tg-element-title">Request For A <span>Qoute</span></h2>
                        </div>

                        <div className="quote-tab wow fadeInUp" data-wow-delay="100ms">

                            <div className="quote-tab__button">
                                <ul className="tabs-button-box clearfix">
                                    <li data-tab="#tab-btn1" className="tab-btn-item active-btn-item">
                                        <div className="quote-tab__button-inner">
                                            <h3>Request A Quote</h3>
                                        </div>
                                    </li>
                                    <li data-tab="#tab-btn2" className="tab-btn-item">
                                        <div className="quote-tab__button-inner">
                                            <h3>Track & Trace</h3>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            
                            <div className="tabs-content-box">
                                
                                <div className="tab-content-box-item" id="tab-btn1">
                                    <div className="quote-tab-content-box-item">
                                        <div className="tab-content-box-item-img"
                                            style={{ backgroundImage: "url(/assets/images/backgrounds/quote-v1-bg2.jpg)" }}>
                                        </div>
                                        <div className="quotes-wrapper">
                                            <div className="quotes-wrapper-inner">
                                                <div className="title-box">
                                                    <h2>Shipment Point</h2>
                                                </div>

                                                <div className="quotes-weight">
                                                    <form className="contact-form-validated quote-one__form"
                                                        action="https://logistiq-laravel.mnsithub.com/assets/inc/sendemail.php" method="post"
                                                        noValidate={true}>

                                                        <div className="row">
                                                            <div className="col-xl-4 col-lg-4 col-md-4">
                                                                <div className="input-box">
                                                                    <label>Name</label>
                                                                    <input type="text" name="name"
                                                                        placeholder="Enter Name" />
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-4 col-lg-4 col-md-4">
                                                                <div className="input-box">
                                                                    <label>Email Name</label>
                                                                    <input type="email" name="email"
                                                                        placeholder="Email Address" /></div>
                                                            </div>
                                                            <div className="col-xl-4 col-lg-4 col-md-4">
                                                                <div className="input-box">
                                                                    <label>Phone Number</label>
                                                                    <input type="text" name="phone"
                                                                        placeholder="Mobile Num" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="row">
                                                            <div className="col-xl-4 col-lg-4 col-md-4">
                                                                <div className="input-box">
                                                                    <label>Freight</label>
                                                                    <div className="select-box">
                                                                        <select className="selectmenu wide">
                                                                            <option selected={true}>Freight Type
                                                                            </option>
                                                                            <option>Freight Type 01</option>
                                                                            <option>Freight Type 02</option>
                                                                            <option>Freight Type 03</option>
                                                                            <option>Freight Type 04</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="col-xl-4 col-lg-4 col-md-4">
                                                                <div className="input-box">
                                                                    <label>Weight</label>
                                                                    <input type="text" name="weight"
                                                                        placeholder="Weight" />
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-4 col-lg-4 col-md-4">
                                                                <div className="input-box">
                                                                    <label>Lenght</label>
                                                                    <input type="number" name="lenght"
                                                                        placeholder="Lenght" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="row">
                                                            <div className="col-xl-12">
                                                                <div className="quote-redio-box">
                                                                    <div className="quote-redio">
                                                                        <label className="custom-rario">
                                                                            <input type="radio" name="myRadios"
                                                                                defaultValue="1" checked  />
                                                                            <span className="radio-dot"></span>
                                                                            <span className="radio-text">Express
                                                                                Delivery</span>
                                                                        </label>
                                                                        <label className="custom-rario">
                                                                            <input type="radio" name="myRadios"
                                                                                defaultValue="2"  />
                                                                            <span className="radio-dot"></span>
                                                                            <span className="radio-text">Insurance</span>
                                                                        </label>
                                                                        <label className="custom-rario">
                                                                            <input type="radio" name="myRadios"
                                                                                defaultValue="3"  />
                                                                            <span className="radio-dot"></span>
                                                                            <span className="radio-text">Packaging</span>
                                                                        </label>
                                                                        <label className="custom-rario">
                                                                            <input type="radio" name="myRadios"
                                                                                defaultValue="4"  />
                                                                            <span className="radio-dot"></span>
                                                                            <span className="radio-text">Incoterms</span>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="row">
                                                            <div className="col-xl-12">
                                                                <div className="quote-two__btn">
                                                                    <button type="submit" className="thm-btn">
                                                                        Request For A Quote
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
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                

                                
                                <div className="tab-content-box-item tab-content-box-item-active" id="tab-btn2">
                                    <div className="quote-tab-content-box-item">
                                        <div className="tab-content-box-item-img"
                                            style={{ backgroundImage: "url(/assets/images/backgrounds/quote-v1-bg.jpg)" }}>
                                        </div>
                                        <div className="quotes-wrapper">
                                            <div className="quotes-wrapper-inner">
                                                <div className="title-box">
                                                    <h2>Shipment Point</h2>
                                                </div>

                                                <div className="quotes-weight">
                                                    <form className="contact-form-validated quote-one__form"
                                                        action="https://logistiq-laravel.mnsithub.com/assets/inc/sendemail.php" method="post"
                                                        noValidate={true}>

                                                        <div className="row">
                                                            <div className="col-xl-4 col-lg-4 col-md-4">
                                                                <div className="input-box">
                                                                    <label>Name</label>
                                                                    <input type="text" name="name"
                                                                        placeholder="Enter Name" />
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-4 col-lg-4 col-md-4">
                                                                <div className="input-box">
                                                                    <label>Email Name</label>
                                                                    <input type="email" name="email"
                                                                        placeholder="Email Address" /></div>
                                                            </div>
                                                            <div className="col-xl-4 col-lg-4 col-md-4">
                                                                <div className="input-box">
                                                                    <label>Phone Number</label>
                                                                    <input type="text" name="phone"
                                                                        placeholder="Mobile Num" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="row">
                                                            <div className="col-xl-4 col-lg-4 col-md-4">
                                                                <div className="input-box">
                                                                    <label>Freight</label>
                                                                    <div className="select-box">
                                                                        <select className="selectmenu wide">
                                                                            <option selected={true}>Freight Type
                                                                            </option>
                                                                            <option>Freight Type 01</option>
                                                                            <option>Freight Type 02</option>
                                                                            <option>Freight Type 03</option>
                                                                            <option>Freight Type 04</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="col-xl-4 col-lg-4 col-md-4">
                                                                <div className="input-box">
                                                                    <label>Weight</label>
                                                                    <input type="text" name="weight"
                                                                        placeholder="Weight" />
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-4 col-lg-4 col-md-4">
                                                                <div className="input-box">
                                                                    <label>Lenght</label>
                                                                    <input type="number" name="lenght"
                                                                        placeholder="Lenght" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="row">
                                                            <div className="col-xl-12">
                                                                <div className="quote-redio-box">
                                                                    <div className="quote-redio">
                                                                        <label className="custom-rario">
                                                                            <input type="radio" name="myRadios"
                                                                                defaultValue="1" checked  />
                                                                            <span className="radio-dot"></span>
                                                                            <span className="radio-text">Express
                                                                                Delivery</span>
                                                                        </label>
                                                                        <label className="custom-rario">
                                                                            <input type="radio" name="myRadios"
                                                                                defaultValue="2"  />
                                                                            <span className="radio-dot"></span>
                                                                            <span className="radio-text">Insurance</span>
                                                                        </label>
                                                                        <label className="custom-rario">
                                                                            <input type="radio" name="myRadios"
                                                                                defaultValue="3"  />
                                                                            <span className="radio-dot"></span>
                                                                            <span className="radio-text">Packaging</span>
                                                                        </label>
                                                                        <label className="custom-rario">
                                                                            <input type="radio" name="myRadios"
                                                                                defaultValue="4"  />
                                                                            <span className="radio-dot"></span>
                                                                            <span className="radio-text">Incoterms</span>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="row">
                                                            <div className="col-xl-12">
                                                                <div className="quote-two__btn">
                                                                    <button type="submit" className="thm-btn">
                                                                        Request For A Quote
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
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
        

        
        <section className="testimonial-three">
            <div className="shape1 float-bob-x3"><img src="/assets/images/shapes/quote-v1-shape1.png" alt="" /></div>
            <div className="container">
                <div className="sec-title center text-center tg-heading-subheading animation-style2">
                    <div className="sec-title__tagline">
                        <div className="line"></div>
                        <div className="text tg-element-title">
                            <h4>testimonials</h4>
                        </div>
                        <div className="icon">
                            <span className="icon-plane2 float-bob-x3"></span>
                        </div>
                    </div>
                    <h2 className="sec-title__title tg-element-title">What Client’s say about <br />
                        Our <span>Services</span></h2>
                </div>

                <div className="testimonial-three__inner">
                    <div className="testimonial-three__img1 float-bob-y3">
                        <img src="/assets/images/testimonial/testimonial-v3-img5.jpg" alt="" />
                    </div>

                    <div className="testimonial-three__img2 float-bob-y3">
                        <img src="/assets/images/testimonial/testimonial-v3-img7.jpg" alt="" />
                    </div>

                    <div className="testimonial-three__img3  float-bob-x3">
                        <img src="/assets/images/testimonial/testimonial-v3-img8.jpg" alt="" />
                    </div>

                    <div className="testimonial-three__img4  float-bob-y3">
                        <img src="/assets/images/testimonial/testimonial-v3-img9.jpg" alt="" />
                    </div>

                    <div className="testimonial-three__img5  float-bob-y3">
                        <img src="/assets/images/testimonial/testimonial-v3-img6.jpg" alt="" />
                    </div>

                    <div className="testimonial-three__img6  float-bob-x3">
                        <img src="/assets/images/testimonial/testimonial-v3-img4.jpg" alt="" />
                    </div>

                    <div className="testimonial-three__carousel owl-carousel owl-theme">
                        
                        <div className="testimonial-three__single">
                            <div className="testimonial-three__single-img">
                                <img src="/assets/images/testimonial/testimonial-v3-img1.jpg" alt="" />
                            </div>

                            <div className="testimonial-three__single-title text-center">
                                <h2>A logistic service provider company plays a pivotal role in the
                                    global supply chain A logistic service provider companyA logistic service
                                    provider.</h2>
                            </div>

                            <div className="testimonial-three__single-author text-center">
                                <h2>Leslie Alexander</h2>
                                <p>Military Man, Member for 5 Years.</p>
                            </div>

                            <div className="testimonial-three__single-rating">
                                <div className="icon">
                                    <span className="icon-star"></span>
                                </div>
                                <h4>5 out of 5</h4>
                            </div>

                        </div>
                        

                        
                        <div className="testimonial-three__single">
                            <div className="testimonial-three__single-img">
                                <img src="/assets/images/testimonial/testimonial-v3-img2.jpg" alt="" />
                            </div>

                            <div className="testimonial-three__single-title text-center">
                                <h2>A logistic service provider company plays a pivotal role in the
                                    global supply chain A logistic service provider companyA logistic service
                                    provider.</h2>
                            </div>

                            <div className="testimonial-three__single-author text-center">
                                <h2>Leslie Alexander</h2>
                                <p>Military Man, Member for 5 Years.</p>
                            </div>

                            <div className="testimonial-three__single-rating">
                                <div className="icon">
                                    <span className="icon-star"></span>
                                </div>
                                <h4>5 out of 5</h4>
                            </div>

                        </div>
                        

                        
                        <div className="testimonial-three__single">
                            <div className="testimonial-three__single-img">
                                <img src="/assets/images/testimonial/testimonial-v3-img3.jpg" alt="" />
                            </div>

                            <div className="testimonial-three__single-title text-center">
                                <h2>A logistic service provider company plays a pivotal role in the
                                    global supply chain A logistic service provider companyA logistic service
                                    provider.</h2>
                            </div>

                            <div className="testimonial-three__single-author text-center">
                                <h2>Leslie Alexander</h2>
                                <p>Military Man, Member for 5 Years.</p>
                            </div>

                            <div className="testimonial-three__single-rating">
                                <div className="icon">
                                    <span className="icon-star"></span>
                                </div>
                                <h4>5 out of 5</h4>
                            </div>

                        </div>
                        
                    </div>


                </div>
            </div>
        </section>
        

        
        <section className="pricing-one" id="pricing">
            <div className="pricing-one__pattern"
                style={{ backgroundImage: "url(/assets/images/pattern/pricing-v1-pattern.png)" }}></div>
            <div className="container">
                <div className="sec-title center text-center tg-heading-subheading animation-style2">
                    <div className="sec-title__tagline">
                        <div className="line"></div>
                        <div className="text tg-element-title">
                            <h4>OUR PRICING PLAN</h4>
                        </div>
                        <div className="icon">
                            <span className="icon-plane2 float-bob-x3"></span>
                        </div>
                    </div>
                    <h2 className="sec-title__title tg-element-title">Our Effective and Affordable <br />
                        Pricing <span>Plans</span></h2>
                </div>

                <div className="row">

                    
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay=".3s">
                        <div className="pricing-one__single">
                            <div className="pricing-one__single-inner">
                                <div className="table-header">
                                    <div className="img-box">
                                        <img src="/assets/images/resources/pricing-v1-img1.jpg" alt="" />
                                    </div>
                                    <div className="title-box">
                                        <h2>Road Cargo</h2>
                                        <h3>$99 <span>/50kg</span></h3>
                                    </div>
                                </div>

                                <div className="table-content">
                                    <ul>
                                        <li>
                                            <div className="icon">
                                                <span className="fa fa-check-circle"></span>
                                            </div>

                                            <div className="text-box">
                                                <p>Pickup and delivery</p>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="icon">
                                                <span className="fa fa-check-circle"></span>
                                            </div>

                                            <div className="text-box">
                                                <p>Custom coverage</p>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="icon">
                                                <span className="fa fa-check-circle"></span>
                                            </div>

                                            <div className="text-box">
                                                <p>Customer Management</p>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="icon">
                                                <span className="fa fa-check-circle"></span>
                                            </div>

                                            <div className="text-box">
                                                <p>Deliver in 2-3 days</p>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="icon">
                                                <span className="fa fa-check-circle"></span>
                                            </div>

                                            <div className="text-box">
                                                <p>24 Hours Support</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div className="table-footer">
                                    <div className="btn-box">
                                        <a className="thm-btn" href="#">Choose Plan
                                            <i className="icon-right-arrow21"></i>
                                            <span className="hover-btn hover-bx"></span>
                                            <span className="hover-btn hover-bx2"></span>
                                            <span className="hover-btn hover-bx3"></span>
                                            <span className="hover-btn hover-bx4"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    

                    
                    <div className="col-xl-4 col-lg-4 wow fadeInDown" data-wow-delay=".3s">
                        <div className="pricing-one__single">
                            <div className="pricing-one__single-inner">
                                <div className="table-header">
                                    <div className="img-box">
                                        <img src="/assets/images/resources/pricing-v1-img2.jpg" alt="" />
                                    </div>
                                    <div className="title-box">
                                        <h2>Sea Freight</h2>
                                        <h3>$199 <span>/50kg</span></h3>
                                    </div>
                                </div>

                                <div className="table-content">
                                    <ul>
                                        <li>
                                            <div className="icon">
                                                <span className="fa fa-check-circle"></span>
                                            </div>

                                            <div className="text-box">
                                                <p>Pickup and delivery</p>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="icon">
                                                <span className="fa fa-check-circle"></span>
                                            </div>

                                            <div className="text-box">
                                                <p>Custom coverage</p>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="icon">
                                                <span className="fa fa-check-circle"></span>
                                            </div>

                                            <div className="text-box">
                                                <p>Customer Management</p>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="icon">
                                                <span className="fa fa-check-circle"></span>
                                            </div>

                                            <div className="text-box">
                                                <p>Deliver in 2-3 days</p>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="icon">
                                                <span className="fa fa-check-circle"></span>
                                            </div>

                                            <div className="text-box">
                                                <p>24 Hours Support</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div className="table-footer">
                                    <div className="btn-box">
                                        <a className="thm-btn" href="#">Choose Plan
                                            <i className="icon-right-arrow21"></i>
                                            <span className="hover-btn hover-bx"></span>
                                            <span className="hover-btn hover-bx2"></span>
                                            <span className="hover-btn hover-bx3"></span>
                                            <span className="hover-btn hover-bx4"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    

                    
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay=".3s">
                        <div className="pricing-one__single">
                            <div className="pricing-one__single-inner">
                                <div className="table-header">
                                    <div className="img-box">
                                        <img src="/assets/images/resources/pricing-v1-img3.jpg" alt="" />
                                    </div>
                                    <div className="title-box">
                                        <h2>Ship Cargo</h2>
                                        <h3>$250 <span>/100kg</span></h3>
                                    </div>
                                </div>

                                <div className="table-content">
                                    <ul>
                                        <li>
                                            <div className="icon">
                                                <span className="fa fa-check-circle"></span>
                                            </div>

                                            <div className="text-box">
                                                <p>Pickup and delivery</p>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="icon">
                                                <span className="fa fa-check-circle"></span>
                                            </div>

                                            <div className="text-box">
                                                <p>Custom coverage</p>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="icon">
                                                <span className="fa fa-check-circle"></span>
                                            </div>

                                            <div className="text-box">
                                                <p>Customer Management</p>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="icon">
                                                <span className="fa fa-check-circle"></span>
                                            </div>

                                            <div className="text-box">
                                                <p>Deliver in 2-3 days</p>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="icon">
                                                <span className="fa fa-check-circle"></span>
                                            </div>

                                            <div className="text-box">
                                                <p>24 Hours Support</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div className="table-footer">
                                    <div className="btn-box">
                                        <a className="thm-btn" href="#">Choose Plan
                                            <i className="icon-right-arrow21"></i>
                                            <span className="hover-btn hover-bx"></span>
                                            <span className="hover-btn hover-bx2"></span>
                                            <span className="hover-btn hover-bx3"></span>
                                            <span className="hover-btn hover-bx4"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
        

        
        <section className="counter-one counter-one--three">
            <div className="counter-one--three__pattern"
                style={{ backgroundImage: "url(/assets/images/pattern/counter-v3-pattern.png)" }}></div>
            <div className="container">
                <div className="row">
                    
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="counter-one__single">
                            <div className="counter-one__single-inner">
                                <div className="icon">
                                    <span className="icon-box"></span>
                                </div>

                                <div className="content-box">
                                    <div className="count-text-box count-box">
                                        <h3 className="count-text" data-stop="541" data-speed="1500">00</h3>
                                        <span className="plus">+</span>
                                    </div>
                                    <div className="text-box">
                                        <p>Distribution Center</p>
                                    </div>
                                </div>
                            </div>
                            <div className="shape1"></div>
                        </div>
                    </div>
                    

                    
                    <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="counter-one__single">
                            <div className="counter-one__single-inner">
                                <div className="icon">
                                    <span className="icon-location"></span>
                                </div>

                                <div className="content-box">
                                    <div className="count-text-box count-box">
                                        <h3 className="count-text" data-stop="766" data-speed="1500">00</h3>
                                        <span className="plus">+</span>
                                    </div>
                                    <div className="text-box">
                                        <p>Countries & Regions</p>
                                    </div>
                                </div>
                            </div>
                            <div className="shape1"></div>
                        </div>
                    </div>
                    

                    
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="counter-one__single">
                            <div className="counter-one__single-inner">
                                <div className="icon">
                                    <span className="icon-customer-loyalty"></span>
                                </div>

                                <div className="content-box">
                                    <div className="count-text-box count-box">
                                        <h3 className="count-text" data-stop="25" data-speed="1500">00</h3>
                                        <span className="plus">+</span>
                                    </div>
                                    <div className="text-box">
                                        <p>Years Of Expirence</p>
                                    </div>
                                </div>
                            </div>
                            <div className="shape1"></div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
        

        
        <section className="blog-three" id="blog">
            <div className="container">
                <div className="sec-title center text-center tg-heading-subheading animation-style2">
                    <div className="sec-title__tagline">
                        <div className="line"></div>
                        <div className="text tg-element-title">
                            <h4>Latest Blogs</h4>
                        </div>
                        <div className="icon">
                            <span className="icon-plane2 float-bob-x3"></span>
                        </div>
                    </div>
                    <h2 className="sec-title__title tg-element-title">Latest Blogs & <span>News</span></h2>
                </div>

                <div className="row">
                    
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="00ms">
                        <div className="blog-three__single">
                            <div className="blog-three__single-img">
                                <div className="inner">
                                    <img src="/assets/images/blog/blog-v3-img1.jpg" alt="" />
                                    <img src="/assets/images/blog/blog-v3-img1.jpg" alt="" />
                                </div>
                            </div>

                            <div className="blog-three__single-content">
                                <ul className="meta-box">
                                    <li><i className="icon-user"></i> Admin</li>
                                    <li className="bg2"><i className="icon-clock"></i> 20 Jan 2025
                                    </li>
                                </ul>

                                <h2><a href="/blog-details">What is the Future of Truckload <br /> Transportation?</a>
                                </h2>
                                <p>Phosfluorecent synergize holistic leadership skills before effective technology.</p>

                                <div className="btn-box">
                                    <a className="thm-btn" href="/blog-details">Read More
                                        <i className="icon-right-arrow21"></i>
                                        <span className="hover-btn hover-bx"></span>
                                        <span className="hover-btn hover-bx2"></span>
                                        <span className="hover-btn hover-bx3"></span>
                                        <span className="hover-btn hover-bx4"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    

                    
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
                        <div className="blog-three__single">
                            <div className="blog-three__single-img">
                                <div className="inner">
                                    <img src="/assets/images/blog/blog-v3-img2.jpg" alt="" />
                                    <img src="/assets/images/blog/blog-v3-img2.jpg" alt="" />
                                </div>
                            </div>

                            <div className="blog-three__single-content">
                                <ul className="meta-box">
                                    <li><i className="icon-user"></i> Admin</li>
                                    <li className="bg2"><i className="icon-clock"></i> 20 Jan 2025
                                    </li>
                                </ul>

                                <h2><a href="/blog-details">Cargo Follow Through the <br /> Best Supply Your Metal</a>
                                </h2>
                                <p>Phosfluorecent synergize holistic leadership skills before effective technology.</p>

                                <div className="btn-box">
                                    <a className="thm-btn" href="/blog-details">Read More
                                        <i className="icon-right-arrow21"></i>
                                        <span className="hover-btn hover-bx"></span>
                                        <span className="hover-btn hover-bx2"></span>
                                        <span className="hover-btn hover-bx3"></span>
                                        <span className="hover-btn hover-bx4"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    

                    
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="400ms">
                        <div className="blog-three__single">
                            <div className="blog-three__single-img">
                                <div className="inner">
                                    <img src="/assets/images/blog/blog-v3-img3.jpg" alt="" />
                                    <img src="/assets/images/blog/blog-v3-img3.jpg" alt="" />
                                </div>
                            </div>

                            <div className="blog-three__single-content">
                                <ul className="meta-box">
                                    <li><i className="icon-user"></i> Admin</li>
                                    <li className="bg2"><i className="icon-clock"></i> 20 Jan 2025
                                    </li>
                                </ul>

                                <h2><a href="/blog-details">Fast and Reliable Shipping <br /> Guaranteey Trusted</a>
                                </h2>
                                <p>Phosfluorecent synergize holistic leadership skills before effective technology.</p>

                                <div className="btn-box">
                                    <a className="thm-btn" href="/blog-details">Read More
                                        <i className="icon-right-arrow21"></i>
                                        <span className="hover-btn hover-bx"></span>
                                        <span className="hover-btn hover-bx2"></span>
                                        <span className="hover-btn hover-bx3"></span>
                                        <span className="hover-btn hover-bx4"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
        

        
        <section className="brand-one">
            <div className="container">
                <div className="brand-one__carousel owl-carousel owl-theme">
                    
                    <div className="brand-one__single">
                        <div className="brand-one__single-inner">
                            <a href="#"><img src="/assets/images/brand/brand-v1-img1.png" alt="" /></a>
                        </div>
                    </div>
                    

                    
                    <div className="brand-one__single">
                        <div className="brand-one__single-inner">
                            <a href="#"><img src="/assets/images/brand/brand-v1-img2.png" alt="" /></a>
                        </div>
                    </div>
                    

                    
                    <div className="brand-one__single">
                        <div className="brand-one__single-inner">
                            <a href="#"><img src="/assets/images/brand/brand-v1-img3.png" alt="" /></a>
                        </div>
                    </div>
                    

                    
                    <div className="brand-one__single">
                        <div className="brand-one__single-inner">
                            <a href="#"><img src="/assets/images/brand/brand-v1-img4.png" alt="" /></a>
                        </div>
                    </div>
                    

                    
                    <div className="brand-one__single">
                        <div className="brand-one__single-inner">
                            <a href="#"><img src="/assets/images/brand/brand-v1-img5.png" alt="" /></a>
                        </div>
                    </div>
                    

                    
                    <div className="brand-one__single">
                        <div className="brand-one__single-inner">
                            <a href="#"><img src="/assets/images/brand/brand-v1-img6.png" alt="" /></a>
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
