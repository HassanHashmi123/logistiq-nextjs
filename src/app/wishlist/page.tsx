import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileMenu from "@/components/layout/MobileMenu";

export default function Wishlist() {
  return (
    <>
      <Header />
      
        

        
        <section className="page-header">
            <div className="page-header__bg" style={{ backgroundImage: "url(/assets/images/backgrounds/page-header-bg.jpg)" }}>
            </div>
            <div className="page-header__pattern"><img src="/assets/images/pattern/page-header-pattern.png" alt="" /></div>
            <div className="container">
                <div className="page-header__inner">
                    <h2>Wishlist</h2>
                    <ul className="thm-breadcrumb">
                        <li><a href="/">Home</a></li>
                        <li><span className="icon-right-arrow21"></span></li>
                        <li>Wishlist</li>
                    </ul>
                </div>
            </div>
        </section>
        

    



        
        <section className="wishlist-page">
            <div className="container">
                <div className="table-responsive-box">
                    <table className="wishlist-table">
                        <tbody>
                            <tr>
                                <td>
                                    <div className="product-box">
                                        <div className="img-box">
                                            <img src="/assets/images/shop/wishlist-page-img-1.jpg" alt="" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="product-name-select-box">
                                        <div className="product-name">
                                            <h4>Classy chair</h4>
                                            <p>$50.00</p>
                                        </div>
                                        <div className="product-select">
                                            <a className="thm-btn wishlist-page__btn" href="/wishlist">Select
                                                Product
                                                <i className="icon-right-arrow21"></i>
                                                <span className="hover-btn hover-bx"></span>
                                                <span className="hover-btn hover-bx2"></span>
                                                <span className="hover-btn hover-bx3"></span>
                                                <span className="hover-btn hover-bx4"></span>
                                            </a>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="cross-icon">
                                        <i className="fas fa-times remove-icon"></i>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="product-box">
                                        <div className="img-box">
                                            <img src="/assets/images/shop/wishlist-page-img-2.jpg" alt="" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="product-name-select-box">
                                        <div className="product-name">
                                            <h4>Comfy chair</h4>
                                            <p>$90.00</p>
                                        </div>
                                        <div className="product-select">
                                            <div className="product-select">
                                                <a className="thm-btn wishlist-page__btn" href="/wishlist">Select
                                                    Product
                                                    <i className="icon-right-arrow21"></i>
                                                    <span className="hover-btn hover-bx"></span>
                                                    <span className="hover-btn hover-bx2"></span>
                                                    <span className="hover-btn hover-bx3"></span>
                                                    <span className="hover-btn hover-bx4"></span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="cross-icon">
                                        <i className="fas fa-times remove-icon"></i>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="product-box">
                                        <div className="img-box">
                                            <img src="/assets/images/shop/wishlist-page-img-3.jpg" alt="" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="product-name-select-box">
                                        <div className="product-name">
                                            <h4>Boss chair</h4>
                                            <p>$60.00</p>
                                        </div>
                                        <div className="product-select">
                                            <div className="product-select">
                                                <a className="thm-btn wishlist-page__btn" href="/wishlist">Select
                                                    Product
                                                    <i className="icon-right-arrow21"></i>
                                                    <span className="hover-btn hover-bx"></span>
                                                    <span className="hover-btn hover-bx2"></span>
                                                    <span className="hover-btn hover-bx3"></span>
                                                    <span className="hover-btn hover-bx4"></span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="cross-icon">
                                        <i className="fas fa-times remove-icon"></i>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="product-box">
                                        <div className="img-box">
                                            <img src="/assets/images/shop/wishlist-page-img-4.jpg" alt="" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="product-name-select-box">
                                        <div className="product-name">
                                            <h4>Sofa chair</h4>
                                            <p>$170.00</p>
                                        </div>
                                        <div className="product-select">
                                            <div className="product-select">
                                                <a className="thm-btn wishlist-page__btn" href="/wishlist">Select
                                                    Product
                                                    <i className="icon-right-arrow21"></i>
                                                    <span className="hover-btn hover-bx"></span>
                                                    <span className="hover-btn hover-bx2"></span>
                                                    <span className="hover-btn hover-bx3"></span>
                                                    <span className="hover-btn hover-bx4"></span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="cross-icon">
                                        <i className="fas fa-times remove-icon"></i>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
        


        
      <Footer />
      <MobileMenu />
    </>
  );
}
