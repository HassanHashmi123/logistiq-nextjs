import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileMenu from "@/components/layout/MobileMenu";

export default function Index2() {
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
        




 
 <section className="banner-two">
    <div className="banner-two__img1 float-bob-y">
        <div className="inner">
            <img src="/assets/images/banner/banner-v2-img1.jpg" alt="" />
        </div>
    </div>
    <div className="banner-two__img2 float-bob-x"><img src="/assets/images/banner/banner-v2-img2.png" alt="" /></div>
    <div className="shape1 float-bob-y"><img src="/assets/images/shapes/banner-v2-shape1.png" alt="" /></div>
    <div className="shape2"><img src="/assets/images/shapes/banner-v2-shape2.png" alt="" /></div>
    <div className="container clearfix">
        <div className="banner-two__content">
            <div className="banner-two__content-top wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div className="title-box">
                    <h2>EXPERT TRANSPORTATION <br /> <span>SALUTATION</span></h2>
                </div>
            </div>

            <div className="banner-two__content-bottom wow fadeInRight" data-wow-delay="0ms"
                data-wow-duration="1500ms">
                <div className="text-box">
                    <p>If you have a parcel and want to know its latest update, then check the latest update
                        with your parcel ID in the form below. Don't forget to select the correct category to
                        search. Thank You.</p>
                </div>

                <div className="banner-two__tab-box tabs-box">
                    <ul className="tab-buttons clearfix list-unstyled">
                        <li data-tab="#air" className="tab-btn">
                            <p>Air Freight</p>
                        </li>
                        <li data-tab="#road" className="tab-btn active-btn">
                            <p>Road Freight</p>
                        </li>
                        <li data-tab="#ocean" className="tab-btn">
                            <p>Ocean Freight</p>
                        </li>
                    </ul>

                    <div className="tabs-content">

                        
                        <div className="tab" id="air">
                            <div className="banner-two__tab-form-box">
                                <form className="banner-two__tab-form mc-form" data-url="MC_FORM_URL"
                                    noValidate={true}>
                                    <div className="banner-two__tab-form-input-box">
                                        <input type="email" placeholder="Enter Transport Id" name="EMAIL" />
                                        <button type="submit" className="banner-two__tab-form-btn"><span
                                                className="icon-search"></span></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        

                        
                        <div className="tab active-tab" id="road">
                            <div className="banner-two__tab-form-box">
                                <form className="banner-two__tab-form mc-form" data-url="MC_FORM_URL"
                                    noValidate={true}>
                                    <div className="banner-two__tab-form-input-box">
                                        <input type="email" placeholder="Enter Transport Id" name="EMAIL" />
                                        <button type="submit" className="banner-two__tab-form-btn"><span
                                                className="icon-search"></span></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        

                        
                        <div className="tab" id="ocean">
                            <div className="banner-two__tab-form-box">
                                <form className="banner-two__tab-form mc-form" data-url="MC_FORM_URL"
                                    noValidate={true}>
                                    <div className="banner-two__tab-form-input-box">
                                        <input type="email" placeholder="Enter Transport Id" name="EMAIL" />
                                        <button type="submit" className="banner-two__tab-form-btn"><span
                                                className="icon-search"></span></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>



<section className="counter-one counter-one--two">
    <div className="big-title wow slideInRight" data-wow-delay="100ms" data-wow-duration="2500ms">
        <h2>ROAD FRIGHT</h2>
    </div>
    <div className="container clearfix">
        <div className="counter-one--two__inner">
            <ul>
                
                <li className="counter-one__single wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                    <div className="counter-one__single-inner">
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
                </li>
                

                
                <li className="counter-one__single wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                    <div className="counter-one__single-inner">
                        <div className="content-box">
                            <div className="count-text-box count-box">
                                <h3 className="count-text" data-stop="54" data-speed="1500">00</h3>
                                <span className="plus">+</span>
                            </div>
                            <div className="text-box">
                                <p>Years Of Experience</p>
                            </div>
                        </div>
                    </div>
                </li>
                

                
                <li className="counter-one__single wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                    <div className="counter-one__single-inner">
                        <div className="content-box">
                            <div className="count-text-box count-box">
                                <h3 className="count-text" data-stop="50" data-speed="1500">00</h3>
                                <span className="plus">+</span>
                            </div>
                            <div className="text-box">
                                <p>Countries & Regions</p>
                            </div>
                        </div>
                    </div>
                </li>
                
            </ul>
        </div>
    </div>
</section>



<section className="about-two">
    <div className="shape5"><img src="/assets/images/shapes/about-v2-shape5.png" alt="" /></div>
    <div className="container">
        <div className="row">
            
            <div className="col-xl-6">
                <div className="about-two__img">
                    <div className="shape2 float-bob-x"><img src="/assets/images/shapes/about-v2-shape2.png" alt="" />
                    </div>
                    <div className="shape3 float-bob-y"><img src="/assets/images/shapes/about-v2-shape3.png" alt="" />
                    </div>
                    <div className="shape4 float-bob-y"><img src="/assets/images/shapes/about-v2-shape4.png" alt="" />
                    </div>
                    <div className="about-two__img1">
                        <div className="inner reveal">
                            <img src="/assets/images/about/about-v2-img1.jpg" alt="" />
                        </div>
                        <div className="about-two__counter">
                            <div className="shape1"><img src="/assets/images/shapes/about-v2-shape1.png" alt="" />
                            </div>
                            <div className="count-text-box count-box">
                                <h2 className="count-text" data-stop="25" data-speed="1500">00</h2>
                                <span className="plus">+</span>
                            </div>

                            <p>Years Of <br />
                                Experience</p>
                        </div>
                    </div>

                    <div className="about-two__img2 reveal">
                        <img src="/assets/images/about/about-v2-img2.jpg" alt="" />
                    </div>
                </div>
            </div>
            

            
            <div className="col-xl-6">
                <div className="about-two__content">
                    <div className="sec-title tg-heading-subheading animation-style2">
                        <div className="sec-title__tagline">
                            <div className="line"></div>
                            <div className="text tg-element-title">
                                <h4>About Us</h4>
                            </div>
                            <div className="icon">
                                <span className="icon-plane2 float-bob-x3"></span>
                            </div>
                        </div>
                        <h2 className="sec-title__title tg-element-title">The Transportation and <br /> Logistics
                            <span>Industry</span>
                        </h2>
                    </div>

                    <div className="about-two__content-text1">
                        <p>Logistic service provider company plays a pivotal role in the global supply chain of
                            ecosystem by efficiently managing the movement of goods from point
                            of origin to final destination. </p>
                    </div>

                    <div className="about-two__content-text2">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <ul className="about-two__content-text2-list">
                                    <li>
                                        <p><span className="icon-check1"></span> Safety And Reliability</p>
                                    </li>
                                    <li>
                                        <p><span className="icon-check1"></span> End-to-End Transportation</p>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <ul className="about-two__content-text2-list">
                                    <li>
                                        <p><span className="icon-check1"></span> Warehousing & Distribution</p>
                                    </li>
                                    <li>
                                        <p><span className="icon-check1"></span> Fast Transportation</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="about-two__content-bottom">
                        <div className="btn-box">
                            <a className="thm-btn" href="/about">Discover More
                                <i className="icon-right-arrow21"></i>
                                <span className="hover-btn hover-bx"></span>
                                <span className="hover-btn hover-bx2"></span>
                                <span className="hover-btn hover-bx3"></span>
                                <span className="hover-btn hover-bx4"></span>
                            </a>
                        </div>

                        <div className="author-info">
                            <div className="img-box">
                                <img src="/assets/images/about/about-v2-img3.png" alt="" />
                            </div>
                            <div className="text-box">
                                <h3>Marks Daniel</h3>
                                <p>MANAGER</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</section>



<section className="service-two">
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
            <h2 className="sec-title__title tg-element-title">Efficient Logistics Services <br />
                for Your <span>Business</span></h2>
        </div>

        <div className="service-two__carousel owl-carousel owl-theme owl-dot-style1">

            
            <div className="service-two__single">
                <div className="service-two__single-img">
                    <div className="inner">
                        <img src="/assets/images/services/services-v2-img1.jpg" alt="" />
                    </div>
                </div>

                <div className="service-two__single-content">
                    <div className="icon">
                        <span className="icon-worldwide-shipping"></span>
                    </div>
                    <div className="service-two__single-content-inner text-center">
                        <h2><a href="/international-transport">International <br />
                                Transport</a></h2>
                        <p>A logistic service provider company plays a pivotal role in the global supply
                            chain logistic service.</p>
                        <div className="btn-box">
                            <a href="/international-transport">Read More <span
                                    className="icon-right-arrow21"></span></a>
                        </div>
                    </div>
                </div>
            </div>
            

            
            <div className="service-two__single">
                <div className="service-two__single-img">
                    <div className="inner">
                        <img src="/assets/images/services/services-v2-img2.jpg" alt="" />
                    </div>
                </div>

                <div className="service-two__single-content">
                    <div className="icon">
                        <span className="icon-shipment"></span>
                    </div>
                    <div className="service-two__single-content-inner text-center">
                        <h2><a href="/international-transport">Local Truck <br />
                                Transport</a></h2>
                        <p>A logistic service provider company plays a pivotal role in the global supply
                            chain logistic service.</p>
                        <div className="btn-box">
                            <a href="/international-transport">Read More <span
                                    className="icon-right-arrow21"></span></a>
                        </div>
                    </div>
                </div>
            </div>
            

            
            <div className="service-two__single">
                <div className="service-two__single-img">
                    <div className="inner">
                        <img src="/assets/images/services/services-v2-img3.jpg" alt="" />
                    </div>
                </div>

                <div className="service-two__single-content">
                    <div className="icon">
                        <span className="icon-courier-services"></span>
                    </div>
                    <div className="service-two__single-content-inner text-center">
                        <h2><a href="/international-transport">Fast Personal <br />
                                Delivery </a></h2>
                        <p>A logistic service provider company plays a pivotal role in the global supply
                            chain logistic service.</p>
                        <div className="btn-box">
                            <a href="/international-transport">Read More <span
                                    className="icon-right-arrow21"></span></a>
                        </div>
                    </div>
                </div>
            </div>
            

            
            <div className="service-two__single">
                <div className="service-two__single-img">
                    <div className="inner">
                        <img src="/assets/images/services/services-v2-img1.jpg" alt="" />
                    </div>
                </div>

                <div className="service-two__single-content">
                    <div className="icon">
                        <span className="icon-worldwide-shipping"></span>
                    </div>
                    <div className="service-two__single-content-inner text-center">
                        <h2><a href="/international-transport">International <br />
                                Transport</a></h2>
                        <p>A logistic service provider company plays a pivotal role in the global supply
                            chain logistic service.</p>
                        <div className="btn-box">
                            <a href="/international-transport">Read More <span
                                    className="icon-right-arrow21"></span></a>
                        </div>
                    </div>
                </div>
            </div>
            

            
            <div className="service-two__single">
                <div className="service-two__single-img">
                    <div className="inner">
                        <img src="/assets/images/services/services-v2-img2.jpg" alt="" />
                    </div>
                </div>

                <div className="service-two__single-content">
                    <div className="icon">
                        <span className="icon-shipment"></span>
                    </div>
                    <div className="service-two__single-content-inner text-center">
                        <h2><a href="/international-transport">Local Truck <br />
                                Transport</a></h2>
                        <p>A logistic service provider company plays a pivotal role in the global supply
                            chain logistic service.</p>
                        <div className="btn-box">
                            <a href="/international-transport">Read More <span
                                    className="icon-right-arrow21"></span></a>
                        </div>
                    </div>
                </div>
            </div>
            

            
            <div className="service-two__single">
                <div className="service-two__single-img">
                    <div className="inner">
                        <img src="/assets/images/services/services-v2-img3.jpg" alt="" />
                    </div>
                </div>

                <div className="service-two__single-content">
                    <div className="icon">
                        <span className="icon-courier-services"></span>
                    </div>
                    <div className="service-two__single-content-inner text-center">
                        <h2><a href="/international-transport">Fast Personal <br />
                                Delivery </a></h2>
                        <p>A logistic service provider company plays a pivotal role in the global supply
                            chain logistic service.</p>
                        <div className="btn-box">
                            <a href="/international-transport">Read More <span
                                    className="icon-right-arrow21"></span></a>
                        </div>
                    </div>
                </div>
            </div>
            

            
            <div className="service-two__single">
                <div className="service-two__single-img">
                    <div className="inner">
                        <img src="/assets/images/services/services-v2-img1.jpg" alt="" />
                    </div>
                </div>

                <div className="service-two__single-content">
                    <div className="icon">
                        <span className="icon-worldwide-shipping"></span>
                    </div>
                    <div className="service-two__single-content-inner text-center">
                        <h2><a href="/international-transport">International <br />
                                Transport</a></h2>
                        <p>A logistic service provider company plays a pivotal role in the global supply
                            chain logistic service.</p>
                        <div className="btn-box">
                            <a href="/international-transport">Read More <span
                                    className="icon-right-arrow21"></span></a>
                        </div>
                    </div>
                </div>
            </div>
            

            
            <div className="service-two__single">
                <div className="service-two__single-img">
                    <div className="inner">
                        <img src="/assets/images/services/services-v2-img2.jpg" alt="" />
                    </div>
                </div>

                <div className="service-two__single-content">
                    <div className="icon">
                        <span className="icon-shipment"></span>
                    </div>
                    <div className="service-two__single-content-inner text-center">
                        <h2><a href="/international-transport">Local Truck <br />
                                Transport</a></h2>
                        <p>A logistic service provider company plays a pivotal role in the global supply
                            chain logistic service.</p>
                        <div className="btn-box">
                            <a href="/international-transport">Read More <span
                                    className="icon-right-arrow21"></span></a>
                        </div>
                    </div>
                </div>
            </div>
            

            
            <div className="service-two__single">
                <div className="service-two__single-img">
                    <div className="inner">
                        <img src="/assets/images/services/services-v2-img3.jpg" alt="" />
                    </div>
                </div>

                <div className="service-two__single-content">
                    <div className="icon">
                        <span className="icon-courier-services"></span>
                    </div>
                    <div className="service-two__single-content-inner text-center">
                        <h2><a href="/international-transport">Fast Personal <br />
                                Delivery </a></h2>
                        <p>A logistic service provider company plays a pivotal role in the global supply
                            chain logistic service.</p>
                        <div className="btn-box">
                            <a href="/international-transport">Read More <span
                                    className="icon-right-arrow21"></span></a>
                        </div>
                    </div>
                </div>
            </div>
            

        </div>
    </div>
</section>



<section className="project-one project-one--two">
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



<section className="cta-one">
    <div className="container">
        <div className="cta-one__inner">
            <div className="cta-one__img wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms"><img
                    src="/assets/images/resources/cta-v1-img1.png" alt="" /></div>
            <div className="cta-one__pattern"><img src="/assets/images/pattern/cta-v1-pattern.png" alt="" /></div>
            <div className="shape1 float-bob-x"><img src="/assets/images/shapes/cta-v1-shape1.png" alt="" /></div>
            <div className="shape2"><img src="/assets/images/shapes/cta-v1-shape2.png" alt="" /></div>
            <div className="shape3"><img src="/assets/images/shapes/cta-v1-shape3.png" alt="" /></div>
            <div className="cta-one__content">
                <h2>Recognized as One of The <br /> Leading <span>Company!</span></h2>
                <p>Logistic service provider company plays a pivotal <br />
                    role in the global supply chain ecosystem.</p>
                <div className="btn-box">
                    <a className="thm-btn" href="#">Book Your Parcel
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
</section>



<section className="team-one team-one--two">
    <div className="team-one--two__pattern">
        <img src="/assets/images/pattern/team-v2-pattern.png" alt="" />
    </div>
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
                    <h2><a href="/contact">Courtney Henry</a></h2>
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



<section className="testimonial-two">
    <div className="container clearfix">
        <div className="row">
            
            <div className="col-xl-4">
                <div className="testimonial-two__content">
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
                        <h2 className="sec-title__title tg-element-title">Our Customers <br /> <span>Reviews</span>
                        </h2>
                    </div>

                    <div className="testimonial-two__content-text">
                        <p>A logistic service provider company plays a pivotal role in the global supply chain A
                            logistic service provider company.</p>
                    </div>

                    <div className="testimonial-two__content-btn">
                        <a className="thm-btn" href="#">See All Reviews
                            <i className="icon-right-arrow21"></i>
                            <span className="hover-btn hover-bx"></span>
                            <span className="hover-btn hover-bx2"></span>
                            <span className="hover-btn hover-bx3"></span>
                            <span className="hover-btn hover-bx4"></span>
                        </a>
                    </div>
                </div>
            </div>
            


            
            <div className="col-xl-8">
                <div className="testimonial-two__right">
                    <div className="testimonial-two__carousel owl-carousel owl-theme owl-dot-style1">
                        
                        <div className="testimonial-two__single">
                            <div className="testimonial-two__single-inner">
                                <div className="testimonial-two__single-top">
                                    <div className="img-box">
                                        <img src="/assets/images/testimonial/testimonial-v2-img1.png" alt="" />
                                    </div>

                                    <div className="title-box">
                                        <h2>Leslie Alexander</h2>
                                        <span>MANAGER</span>
                                    </div>
                                </div>

                                <div className="testimonial-two__single-text">
                                    <p>A logistic service provider company plays a pivotal role in the
                                        global
                                        supply chain A logistic service provider companyA logistic service
                                        provider.</p>
                                </div>

                                <div className="rating-box">
                                    <i className="icon-star"></i>
                                    <i className="icon-star"></i>
                                    <i className="icon-star"></i>
                                    <i className="icon-star"></i>
                                    <i className="icon-star"></i>
                                </div>
                            </div>
                        </div>
                        

                        
                        <div className="testimonial-two__single">
                            <div className="testimonial-two__single-inner">
                                <div className="testimonial-two__single-top">
                                    <div className="img-box">
                                        <img src="/assets/images/testimonial/testimonial-v2-img2.png" alt="" />
                                    </div>
                                    <div className="title-box">
                                        <h2>Ronald Richards</h2>
                                        <span>MANAGER</span>
                                    </div>
                                </div>

                                <div className="testimonial-two__single-text">
                                    <p>A logistic service provider company plays a pivotal role in the
                                        global
                                        supply chain A logistic service provider companyA logistic service
                                        provider.</p>
                                </div>

                                <div className="rating-box">
                                    <i className="icon-star"></i>
                                    <i className="icon-star"></i>
                                    <i className="icon-star"></i>
                                    <i className="icon-star"></i>
                                    <i className="icon-star"></i>
                                </div>
                            </div>
                        </div>
                        

                        
                        <div className="testimonial-two__single">
                            <div className="testimonial-two__single-inner">
                                <div className="testimonial-two__single-top">
                                    <div className="img-box">
                                        <img src="/assets/images/testimonial/testimonial-v2-img1.png" alt="" />
                                    </div>

                                    <div className="title-box">
                                        <h2>Leslie Alexander</h2>
                                        <span>MANAGER</span>
                                    </div>
                                </div>

                                <div className="testimonial-two__single-text">
                                    <p>A logistic service provider company plays a pivotal role in the
                                        global
                                        supply chain A logistic service provider companyA logistic service
                                        provider.</p>
                                </div>

                                <div className="rating-box">
                                    <i className="icon-star"></i>
                                    <i className="icon-star"></i>
                                    <i className="icon-star"></i>
                                    <i className="icon-star"></i>
                                    <i className="icon-star"></i>
                                </div>
                            </div>
                        </div>
                        

                        
                        <div className="testimonial-two__single">
                            <div className="testimonial-two__single-inner">
                                <div className="testimonial-two__single-top">
                                    <div className="img-box">
                                        <img src="/assets/images/testimonial/testimonial-v2-img2.png" alt="" />
                                    </div>
                                    <div className="title-box">
                                        <h2>Ronald Richards</h2>
                                        <span>MANAGER</span>
                                    </div>
                                </div>

                                <div className="testimonial-two__single-text">
                                    <p>A logistic service provider company plays a pivotal role in the
                                        global
                                        supply chain A logistic service provider companyA logistic service
                                        provider.</p>
                                </div>

                                <div className="rating-box">
                                    <i className="icon-star"></i>
                                    <i className="icon-star"></i>
                                    <i className="icon-star"></i>
                                    <i className="icon-star"></i>
                                    <i className="icon-star"></i>
                                </div>
                            </div>
                        </div>
                        

                        
                        <div className="testimonial-two__single">
                            <div className="testimonial-two__single-inner">
                                <div className="testimonial-two__single-top">
                                    <div className="img-box">
                                        <img src="/assets/images/testimonial/testimonial-v2-img1.png" alt="" />
                                    </div>

                                    <div className="title-box">
                                        <h2>Leslie Alexander</h2>
                                        <span>MANAGER</span>
                                    </div>
                                </div>

                                <div className="testimonial-two__single-text">
                                    <p>A logistic service provider company plays a pivotal role in the
                                        global
                                        supply chain A logistic service provider companyA logistic service
                                        provider.</p>
                                </div>

                                <div className="rating-box">
                                    <i className="icon-star"></i>
                                    <i className="icon-star"></i>
                                    <i className="icon-star"></i>
                                    <i className="icon-star"></i>
                                    <i className="icon-star"></i>
                                </div>
                            </div>
                        </div>
                        

                        
                        <div className="testimonial-two__single">
                            <div className="testimonial-two__single-inner">
                                <div className="testimonial-two__single-top">
                                    <div className="img-box">
                                        <img src="/assets/images/testimonial/testimonial-v2-img2.png" alt="" />
                                    </div>
                                    <div className="title-box">
                                        <h2>Ronald Richards</h2>
                                        <span>MANAGER</span>
                                    </div>
                                </div>

                                <div className="testimonial-two__single-text">
                                    <p>A logistic service provider company plays a pivotal role in the
                                        global
                                        supply chain A logistic service provider companyA logistic service
                                        provider.</p>
                                </div>

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



<section className="why-choose-two">
    <div className="why-choose-two__bg"
        style={{ backgroundImage: "url(/assets/images/backgrounds/why-choose-v2-bg.jpg)" }}>
        <div className="shape3 float-bob-x"><img src="/assets/images/shapes/why-choose-v2-shape3.png" alt="" /></div>
        <div className="why-choose-two__video-box">
            <a href="https://www.youtube.com/watch?v=Get7rqXYrbQ" className="video-popup">
                <div className="why-choose-two__video-box-icon">
                    <span className="icon-video"></span>
                    <i className="ripple"></i>
                </div>
            </a>
        </div>
    </div>
    <div className="shape1"><img src="/assets/images/shapes/why-choose-v2-shape1.png" alt="" /></div>
    <div className="container">
        <div className="why-choose-two__content">
            <div className="sec-title tg-heading-subheading animation-style2">
                <div className="sec-title__tagline">
                    <div className="line"></div>
                    <div className="text tg-element-title">
                        <h4>WHy choose us</h4>
                    </div>
                    <div className="icon">
                        <span className="icon-plane2 float-bob-x3"></span>
                    </div>
                </div>
                <h2 className="sec-title__title tg-element-title">Transportation Services We <br /> Are Often
                    <span>Considered</span>
                </h2>
            </div>

            <div className="why-choose-two__content-text">
                <p>Logistic service provider company plays a pivotal role in the global supply
                    chain ecosystem by efficiently managing the movement of goods from origin to final
                    destination. These companies offer a diverse.</p>
            </div>

            <div className="why-choose-two__content-bottom">
                <div className="shape2 float-bob-x"><img src="/assets/images/shapes/why-choose-v2-shape2.png" alt="" />
                </div>
                <div className="client-box">
                    <ul>
                        <li>
                            <div className="img-box">
                                <img src="/assets/images/resources/why-choose-v2-img1.png" alt="" />
                            </div>
                        </li>

                        <li>
                            <div className="img-box">
                                <img src="/assets/images/resources/why-choose-v2-img2.png" alt="" />
                            </div>
                        </li>

                        <li>
                            <div className="img-box">
                                <img src="/assets/images/resources/why-choose-v2-img3.png" alt="" />
                            </div>
                        </li>

                        <li>
                            <div className="img-box">
                                <img src="/assets/images/resources/why-choose-v2-img4.png" alt="" />
                            </div>
                        </li>
                    </ul>

                    <div className="count-text-box count-box">
                        <h2 className="count-text" data-stop="1500" data-speed="1500">00</h2>
                        <span className="plus">+</span>
                    </div>
                    <h3>Happy Clients</h3>
                </div>

                <div className="why-choose-two__content-bottom-content wow fadeInRight" data-wow-delay="0ms"
                    data-wow-duration="1500ms">
                    <div className="why-choose-two__pattern2"
                        style={{ backgroundImage: "url(/assets/images/pattern/why-choose-v2-pattern2.png)" }}></div>
                    <ul>
                        <li className="why-choose-two__single">
                            <div className="why-choose-two__single-top">
                                <div className="icon">
                                    <span className="icon-international-shipping"></span>
                                </div>

                                <div className="title">
                                    <h4>Global Logistics <br />
                                        Operation</h4>
                                </div>
                            </div>
                            <div className="text-box">
                                <p>A logistic service provider company <br /> plays a role in the global chain
                                </p>
                            </div>
                        </li>

                        <li className="why-choose-two__single">
                            <div className="why-choose-two__single-top">
                                <div className="icon">
                                    <span className="icon-protection"></span>
                                </div>

                                <div className="title">
                                    <h4>Safety & Security <br />
                                        Delivery</h4>
                                </div>
                            </div>
                            <div className="text-box">
                                <p>A logistic service provider company <br /> plays a role in the global chain
                                </p>
                            </div>
                        </li>
                    </ul>

                    <ul>
                        <li className="why-choose-two__single">
                            <div className="why-choose-two__single-top">
                                <div className="icon">
                                    <span className="icon-professional-services"></span>
                                </div>

                                <div className="title">
                                    <h4>Professional Logistics <br /> Management</h4>
                                </div>
                            </div>
                            <div className="text-box">
                                <p>A logistic service provider company <br /> plays a role in the global chain
                                </p>
                            </div>
                        </li>

                        <li className="why-choose-two__single">
                            <div className="why-choose-two__single-top">
                                <div className="icon">
                                    <span className="icon-tracking"></span>
                                </div>

                                <div className="title">
                                    <h4>Real Time location <br />
                                        Tracking </h4>
                                </div>
                            </div>
                            <div className="text-box">
                                <p>A logistic service provider company <br /> plays a role in the global chain
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>



<section className="working-process-one">
    <div className="working-process-one__pattern"
        style={{ backgroundImage: "url(/assets/images/pattern/working-process-v1-pattern.jpg)" }}></div>
    <div className="container">
        <div className="shape1"><img src="/assets/images/shapes/working-process-v1-shape1.png" alt="" /></div>
        <div className="sec-title center text-center tg-heading-subheading animation-style2">
            <div className="sec-title__tagline">
                <div className="line"></div>
                <div className="text tg-element-title">
                    <h4>Working Process</h4>
                </div>
                <div className="icon">
                    <span className="icon-plane2 float-bob-x3"></span>
                </div>
            </div>
            <h2 className="sec-title__title tg-element-title">How We Deliver <br />
                Your <span>Parcel</span></h2>
        </div>

        <div className="row">
            
            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="0ms"
                data-wow-duration="1500ms">
                <div className="working-process-one__single">
                    <div className="icon">
                        <div className="count-box">01</div>
                        <span className="icon-quote"></span>
                    </div>

                    <div className="content-box">
                        <h2><a href="#">Request A Quote</a></h2>
                        <p>Logistic service provider company <br />
                            plays a role global chain </p>
                    </div>
                    <div className="plane-icon">
                        <span className="icon-plane"></span>
                    </div>
                </div>
            </div>
            

            
            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="0ms"
                data-wow-duration="1500ms">
                <div className="working-process-one__single">
                    <div className="icon">
                        <div className="count-box">02</div>
                        <span className="icon-protection"></span>
                    </div>

                    <div className="content-box">
                        <h2><a href="#">Product Receiving </a></h2>
                        <p>Logistic service provider company <br />
                            plays a role global chain </p>
                    </div>
                    <div className="plane-icon">
                        <span className="icon-plane"></span>
                    </div>
                </div>
            </div>
            

            
            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="0ms"
                data-wow-duration="1500ms">
                <div className="working-process-one__single">
                    <div className="icon">
                        <div className="count-box">03</div>
                        <span className="icon-service"></span>
                    </div>

                    <div className="content-box">
                        <h2><a href="#">Send The Parcel</a></h2>
                        <p>Logistic service provider company <br />
                            plays a role global chain </p>
                    </div>
                    <div className="plane-icon">
                        <span className="icon-plane"></span>
                    </div>
                </div>
            </div>
            

            
            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="0ms"
                data-wow-duration="1500ms">
                <div className="working-process-one__single">
                    <div className="icon">
                        <div className="count-box">04</div>
                        <span className="icon-new-product"></span>
                    </div>

                    <div className="content-box">
                        <h2><a href="#">Deliver Packages</a></h2>
                        <p>Logistic service provider company <br />
                            plays a role global chain </p>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</section>



<section className="blog-one blog-one--two">
    <div className="container">
        <div className="sec-title center text-center tg-heading-subheading animation-style2">
            <div className="sec-title__tagline">
                <div className="line"></div>
                <div className="text tg-element-title">
                    <h4>Blog & News</h4>
                </div>
                <div className="icon">
                    <span className="icon-plane2 float-bob-x3"></span>
                </div>
            </div>
            <h2 className="sec-title__title tg-element-title">Latest News Directly <br /> From Our <span>Blog</span>
            </h2>
        </div>
        <div className="row">
            
            <div className="col-xl-4 col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                <div className="blog-one__single">
                    <div className="blog-one__single-img">
                        <img src="/assets/images/blog/blog-v1-img1.jpg" alt="" />
                    </div>

                    <div className="blog-one__single-content">
                        <div className="date-box">
                            <h2>05</h2>
                            <p>FEB</p>
                        </div>
                        <div className="blog-one__single-content-inner">
                            <ul className="meta-box">
                                <li>
                                    <div className="icon">
                                        <span className="icon-user"></span>
                                    </div>

                                    <div className="text-box">
                                        <p><a href="#">Robert Fox</a></p>
                                    </div>
                                </li>

                                <li>
                                    <div className="icon">
                                        <span className="icon-chat"></span>
                                    </div>

                                    <div className="text-box">
                                        <p><a href="#">2 Comment</a></p>
                                    </div>
                                </li>
                            </ul>

                            <h2><a href="/blog-details">How Will You Know Success <br /> When it Show Up?</a>
                            </h2>
                            <p>Logistic service provider company plays a pivotal role in the global supply chain
                                ecosystem by efficiently... </p>

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
            

            
            <div className="col-xl-4 col-lg-6 wow fadeInDown" data-wow-delay=".3s">
                <div className="blog-one__single">
                    <div className="blog-one__single-img">
                        <img src="/assets/images/blog/blog-v1-img2.jpg" alt="" />
                    </div>

                    <div className="blog-one__single-content">
                        <div className="date-box">
                            <h2>05</h2>
                            <p>FEB</p>
                        </div>
                        <div className="blog-one__single-content-inner">
                            <ul className="meta-box">
                                <li>
                                    <div className="icon">
                                        <span className="icon-user"></span>
                                    </div>

                                    <div className="text-box">
                                        <p><a href="#">Robert Fox</a></p>
                                    </div>
                                </li>

                                <li>
                                    <div className="icon">
                                        <span className="icon-chat"></span>
                                    </div>

                                    <div className="text-box">
                                        <p><a href="#">2 Comment</a></p>
                                    </div>
                                </li>
                            </ul>

                            <h2><a href="/blog-details">Mastering Last Mile Delivery <br /> Strategies for
                                    Success</a></h2>
                            <p>Logistic service provider company plays a pivotal role in the global supply chain
                                ecosystem by efficiently... </p>

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
            

            
            <div className="col-xl-4 col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                <div className="blog-one__single">
                    <div className="blog-one__single-img">
                        <img src="/assets/images/blog/blog-v1-img3.jpg" alt="" />
                    </div>

                    <div className="blog-one__single-content">
                        <div className="date-box">
                            <h2>05</h2>
                            <p>FEB</p>
                        </div>
                        <div className="blog-one__single-content-inner">
                            <ul className="meta-box">
                                <li>
                                    <div className="icon">
                                        <span className="icon-user"></span>
                                    </div>

                                    <div className="text-box">
                                        <p><a href="#">Robert Fox</a></p>
                                    </div>
                                </li>

                                <li>
                                    <div className="icon">
                                        <span className="icon-chat"></span>
                                    </div>

                                    <div className="text-box">
                                        <p><a href="#">2 Comment</a></p>
                                    </div>
                                </li>
                            </ul>

                            <h2><a href="/blog-details">Logistics Announces Launch <br /> of Greenhouse
                                    Gas</a></h2>
                            <p>Logistic service provider company plays a pivotal role in the global supply chain
                                ecosystem by efficiently... </p>

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
    </div>
</section>



        
      <Footer />
      <MobileMenu />
    </>
  );
}
