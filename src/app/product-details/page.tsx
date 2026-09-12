import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileMenu from "@/components/layout/MobileMenu";

export default function ProductDetails() {
  return (
    <>
      <Header />
      
        

        
        <section className="page-header">
            <div className="page-header__bg" style={{ backgroundImage: "url(/assets/images/backgrounds/page-header-bg.jpg)" }}>
            </div>
            <div className="page-header__pattern"><img src="/assets/images/pattern/page-header-pattern.png" alt="" /></div>
            <div className="container">
                <div className="page-header__inner">
                    <h2>Product Details</h2>
                    <ul className="thm-breadcrumb">
                        <li><a href="/">Home</a></li>
                        <li><span className="icon-right-arrow21"></span></li>
                        <li>Product Details</li>
                    </ul>
                </div>
            </div>
        </section>
        

    



        
        <section className="product-details">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-xl-6">
                        <div className="product-details__img">
                            <img src="/assets/images/shop/product-details-img-1.jpg" alt="" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-xl-6">
                        <div className="product-details__top">
                            <h3 className="product-details__title">
                                Custom T-shirts <span>$46.00</span>
                            </h3>
                        </div>
                        <div className="product-details__reveiw">
                            <i className="icon-star"></i>
                            <i className="icon-star"></i>
                            <i className="icon-star"></i>
                            <i className="icon-star"></i>
                            <i className="icon-star"></i>
                            <span>2 customer reviews</span>
                        </div>
                        <div className="product-details__content">
                            <p className="product-details__content-text1">Aliquam hendrerit a augue insuscipit. Etiam
                                aliquam massa quis des mauris commodo venenatis ligula commodo leez sed blandit
                                convallis dignissim onec vel pellentesque neque. It has survived not only five
                                centuries, but also the leap into electronic typesetting, remaining essentially
                                unchanged.</p>
                            <p className="product-details__content-text2">REF. 4231/406 <br />
                                Available in store</p>
                        </div>

                        <div className="product-details__quantity">
                            <h3 className="product-details__quantity-title">Quantity</h3>
                            <div className="quantity-box">
                                <button type="button" className="sub"><i className="fa fa-minus"></i></button>
                                <input type="number" id="1" defaultValue="1"  />
                                <button type="button" className="add"><i className="fa fa-plus"></i></button>
                            </div>
                        </div>

                        <div className="product-details__buttons">
                            <div className="product-details__buttons-1">
                                <a className="thm-btn" href="#">Add to Wishlist
                                    <span className="hover-btn hover-bx"></span>
                                    <span className="hover-btn hover-bx2"></span>
                                    <span className="hover-btn hover-bx3"></span>
                                    <span className="hover-btn hover-bx4"></span>
                                </a>
                            </div>

                            <div className="product-details__buttons-2">
                                <a className="thm-btn" href="/cart">Add to Cart
                                    <span className="hover-btn hover-bx"></span>
                                    <span className="hover-btn hover-bx2"></span>
                                    <span className="hover-btn hover-bx3"></span>
                                    <span className="hover-btn hover-bx4"></span>
                                </a>
                            </div>
                        </div>

                        <div className="product-details__social">
                            <div className="title">
                                <h3>Share with friends:</h3>
                            </div>
                            <div className="product-details__social-link">
                                <a href="#"><span className="fab fa-twitter"></span></a>
                                <a href="#"><span className="fab fa-facebook"></span></a>
                                <a href="#"><span className="fab fa-pinterest-p"></span></a>
                                <a href="#"><span className="fab fa-instagram"></span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        

        
        <section className="product-description">
            <div className="container">
                <h3 className="product-description__title">Description</h3>
                <p className="product-description__text1">Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci
                    phaedrum. There are many variations of passages of Lorem Ipsum available, but the majority have
                    alteration in some injected or words which don't look even slightly believable. If you are going to
                    use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrang hidden in the
                    middle of text.</p>
                <div className="product-description__list">
                    <ul className="list-unstyled">
                        <li>
                            <p><span className="icon-right-arrow21"></span> Nam at elit nec neque suscipit gravida.</p>
                        </li>
                        <li>
                            <p><span className="icon-right-arrow21"></span> Aenean egestas orci eu maximus tincidunt.</p>
                        </li>
                        <li>
                            <p><span className="icon-right-arrow21"></span> Curabitur vel turpis id tellus cursus laoreet.
                            </p>
                        </li>
                    </ul>
                </div>
                <p className="product-description__tex2">All the Lorem Ipsum generators on the Internet tend to repeat
                    predefined chunks as necessary, making this the first true generator on the Internet. It uses a
                    dictionary of over 200 Latin words, combined with a handful of model sentence structures, to
                    generate Lorem Ipsum which looks reasonable. </p>
            </div>
        </section>
        


        
      <Footer />
      <MobileMenu />
    </>
  );
}
