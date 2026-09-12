import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileMenu from "@/components/layout/MobileMenu";

export default function Cart() {
  return (
    <>
      <Header />
      
        

        
        <section className="page-header">
            <div className="page-header__bg" style={{ backgroundImage: "url(/assets/images/backgrounds/page-header-bg.jpg)" }}>
            </div>
            <div className="page-header__pattern"><img src="/assets/images/pattern/page-header-pattern.png" alt="" /></div>
            <div className="container">
                <div className="page-header__inner">
                    <h2>Cart</h2>
                    <ul className="thm-breadcrumb">
                        <li><a href="/">Home</a></li>
                        <li><span className="icon-right-arrow21"></span></li>
                        <li>Cart</li>
                    </ul>
                </div>
            </div>
        </section>
        

    



        
        <section className="cart-page">
            <div className="container">
                <div className="table-responsive">
                    <table className="table cart-table">
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <td>
                                    <div className="product-box">
                                        <div className="img-box">
                                            <img src="/assets/images/shop/cart-page-img-1.jpg" alt="" />
                                        </div>
                                        <h3><a href="/product-details">Comfy chair</a></h3>
                                    </div>
                                </td>
                                <td>$10.99</td>
                                <td>
                                    <div className="quantity-box">
                                        <button type="button" className="sub"><i className="fa fa-minus"></i></button>
                                        <input type="number" id="product-1" defaultValue="1"  />
                                        <button type="button" className="add"><i className="fa fa-plus"></i></button>
                                    </div>
                                </td>
                                <td>
                                    $10.99
                                </td>
                                <td>
                                    <div className="cross-icon">
                                        <i className="fas fa-times"></i>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <div className="product-box">
                                        <div className="img-box">
                                            <img src="/assets/images/shop/cart-page-img-2.jpg" alt="" />
                                        </div>
                                        <h3><a href="/product-details">Classic chair</a></h3>
                                    </div>
                                </td>
                                <td>$10.99</td>
                                <td>
                                    <div className="quantity-box">
                                        <button type="button" className="sub"><i className="fa fa-minus"></i></button>
                                        <input type="number" id="product-2" defaultValue="1"  />
                                        <button type="button" className="add"><i className="fa fa-plus"></i></button>
                                    </div>
                                </td>
                                <td>
                                    $10.99
                                </td>
                                <td>
                                    <div className="cross-icon">
                                        <i className="fas fa-times"></i>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="row">
                    <div className="col-xl-8 col-lg-7">
                        <form action="#" className="default-form cart-cupon__form">
                            <input type="text" placeholder="Enter Coupon Code" className="cart-cupon__input" />
                            <button className="thm-btn" type="submit">
                                Apply Coupon
                                <span className="hover-btn hover-bx"></span>
                                <span className="hover-btn hover-bx2"></span>
                                <span className="hover-btn hover-bx3"></span>
                                <span className="hover-btn hover-bx4"></span>
                            </button>
                        </form>
                    </div>
                    <div className="col-xl-4 col-lg-5">
                        <ul className="cart-total list-unstyled">
                            <li>
                                <span>Subtotal</span>
                                <span>$20.98 USD </span>
                            </li>
                            <li>
                                <span>Shipping Cost</span>
                                <span>$0.00 USD</span>
                            </li>
                            <li>
                                <span>Total</span>
                                <span className="cart-total-amount">$20.98 USD</span>
                            </li>
                        </ul>
                        <div className="cart-page__buttons">
                            <div className="cart-page__buttons-1">
                                <a className="thm-btn" href="#">Update
                                    <span className="hover-btn hover-bx"></span>
                                    <span className="hover-btn hover-bx2"></span>
                                    <span className="hover-btn hover-bx3"></span>
                                    <span className="hover-btn hover-bx4"></span>
                                </a>
                            </div>
                            <div className="cart-page__buttons-2">
                                <a href="/checkout" className="thm-btn">Checkout
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
        


        
      <Footer />
      <MobileMenu />
    </>
  );
}
