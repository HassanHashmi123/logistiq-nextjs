import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileMenu from "@/components/layout/MobileMenu";

export default function Faq() {
  return (
    <>
      <Header />
      
        

        
        <section className="page-header">
            <div className="page-header__bg" style={{ backgroundImage: "url(/assets/images/backgrounds/page-header-bg.jpg)" }}>
            </div>
            <div className="page-header__pattern"><img src="/assets/images/pattern/page-header-pattern.png" alt="" /></div>
            <div className="container">
                <div className="page-header__inner">
                    <h2>FAQ’s</h2>
                    <ul className="thm-breadcrumb">
                        <li><a href="/">Home</a></li>
                        <li><span className="icon-right-arrow21"></span></li>
                        <li>FAQ</li>
                    </ul>
                </div>
            </div>
        </section>
        

    



        
        <section className="faq-one faq-one--faq">
            <div className="shape1 float-bob-x"><img src="/assets/images/shapes/faq-v1-shape1.png" alt="" /></div>
            <div className="container">
                <div className="row">
                    
                    <div className="col-xl-6">
                        <div className="faq-one__content">
                            <div className="faq-one__content-faq">
                                <div className="sec-title tg-heading-subheading animation-style2">
                                    <div className="sec-title__tagline">
                                        <div className="line"></div>
                                        <div className="text tg-element-title">
                                            <h4>Company's FAQ</h4>
                                        </div>
                                        <div className="icon">
                                            <span className="icon-plane2 "></span>
                                        </div>
                                    </div>
                                    <h2 className="sec-title__title tg-element-title">Frequently Asked Have <br />
                                        Any <span>Question?</span> </h2>
                                </div>

                                <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-1">
                                    <div className="accrodion">
                                        <div className="accrodion-title">
                                            <h4>How do you handle returns or exchanges?</h4>
                                        </div>

                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>We help businesses bring ideas to life in the digital world designing
                                                    & implementing the technology tools that they need to win. We help
                                                    business bring ideas to life in the digital wor</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accrodion active">
                                        <div className="accrodion-title">
                                            <h4>What does business consulting do?</h4>
                                        </div>

                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>We help businesses bring ideas to life in the digital world designing
                                                    & implementing the technology tools that they need to win. We help
                                                    business bring ideas to life in the digital wor</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accrodion">
                                        <div className="accrodion-title">
                                            <h4>Can I cancel a shipment after it's been booked?</h4>
                                        </div>

                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>We help businesses bring ideas to life in the digital world designing
                                                    & implementing the technology tools that they need to win. We help
                                                    business bring ideas to life in the digital wor</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accrodion">
                                        <div className="accrodion-title">
                                            <h4>Can you assist with customs clearance procedures?</h4>
                                        </div>

                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>We help businesses bring ideas to life in the digital world designing
                                                    & implementing the technology tools that they need to win. We help
                                                    business bring ideas to life in the digital wor</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    

                    
                    <div className="col-xl-6">
                        <div className="faq-one__img">
                            <div className="faq-one__img-box">
                                <img src="/assets/images/resources/faq-v1-img1.jpg" alt="" />

                                <div className="faq-one__video-link">
                                    <a href="https://www.youtube.com/watch?v=Get7rqXYrbQ" className="video-popup">
                                        <div className="faq-one__video-icon">
                                            <span className="icon-video"></span>
                                            <i className="ripple"></i>
                                        </div>
                                    </a>
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
