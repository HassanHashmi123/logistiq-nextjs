import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileMenu from "@/components/layout/MobileMenu";

export default function Checkout() {
  return (
    <>
      <Header />
      
        

        
        <section className="page-header">
            <div className="page-header__bg" style={{ backgroundImage: "url(/assets/images/backgrounds/page-header-bg.jpg)" }}>
            </div>
            <div className="page-header__pattern"><img src="/assets/images/pattern/page-header-pattern.png" alt="" /></div>
            <div className="container">
                <div className="page-header__inner">
                    <h2>Checkout</h2>
                    <ul className="thm-breadcrumb">
                        <li><a href="/">Home</a></li>
                        <li><span className="icon-right-arrow21"></span></li>
                        <li>Checkout</li>
                    </ul>
                </div>
            </div>
        </section>
        

    



        
        <section className="checkout-page">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="billing_details">
                            <div className="billing_title">
                                <p>Returning Customer? <span>Click here to Login</span></p>
                                <h2>Billing details</h2>
                            </div>
                            <form className="billing_details_form">
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="billing_input_box">
                                            <div className="select-box">
                                                <select className="wide">
                                                    <option data-display="Select a country">Select a country</option>
                                                    <option value="1">Canada</option>
                                                    <option value="2">England</option>
                                                    <option value="3">Australia</option>
                                                    <option value="3">USA</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row bs-gutter-x-20">
                                    <div className="col-xl-6">
                                        <div className="billing_input_box">
                                            <input type="text" name="first_name" defaultValue="" placeholder="First name"
                                                required={true}  />
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="billing_input_box">
                                            <input type="text" name="last_name" defaultValue="" placeholder="Last name"
                                                required={true}  />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="billing_input_box">
                                            <input type="text" name="company_name" defaultValue="" placeholder="Company"  />
                                        </div>
                                    </div>
                                    <div className="col-xl-12">
                                        <div className="billing_input_box">
                                            <input type="text" name="Address" defaultValue="" placeholder="Address"  />
                                        </div>
                                    </div>
                                    <div className="col-xl-12">
                                        <div className="billing_input_box">
                                            <input type="text" name="company_name" defaultValue=""
                                                placeholder="Appartment, unit, etc. (optional)"  />
                                        </div>
                                    </div>
                                    <div className="col-xl-12">
                                        <div className="billing_input_box">
                                            <input type="text" name="Town/City" defaultValue="" placeholder="Town / City"
                                                required={true}  />
                                        </div>
                                    </div>
                                </div>
                                <div className="row bs-gutter-x-20">
                                    <div className="col-xl-6">
                                        <div className="billing_input_box">
                                            <input type="text" name="State" defaultValue="" placeholder="State" required={true}  />
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="billing_input_box">
                                            <input name="form_zip" type="text" pattern="[0-9]*" placeholder="Zip code" />
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="billing_input_box">
                                            <input name="email" type="email" placeholder="Email address" />
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="billing_input_box">
                                            <input type="tel" name="form_phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                                required={true} placeholder="Phone" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="checked-box">
                                            <input type="checkbox" name="skipper1" id="skipper" defaultChecked={true} />
                                            <label htmlFor="skipper"><span></span>Create an account?</label>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="col-xl-6 col-lg-6">
                        <div className="billing_details ship_different_address">
                            <div className="billing_title ship_different_address_title">
                                <h2>Ship to a different address <span className="fa fa-check-circle"></span></h2>
                            </div>
                            <form className="billing_details_form ship_different_address_form">
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="billing_input_box">
                                            <div className="select-box">
                                                <select className="wide">
                                                    <option data-display="Select a country">Select a country</option>
                                                    <option value="1">Canada</option>
                                                    <option value="2">England</option>
                                                    <option value="3">Australia</option>
                                                    <option value="3">USA</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row bs-gutter-x-20">
                                    <div className="col-xl-6">
                                        <div className="billing_input_box">
                                            <input type="text" name="first_name" defaultValue="" placeholder="First name"
                                                required={true}  />
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="billing_input_box">
                                            <input type="text" name="last_name" defaultValue="" placeholder="Last name"
                                                required={true}  />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="billing_input_box">
                                            <input type="text" name="company_name" defaultValue="" placeholder="Company"  />
                                        </div>
                                    </div>
                                    <div className="col-xl-12">
                                        <div className="billing_input_box">
                                            <input type="text" name="Address" defaultValue="" placeholder="Address"  />
                                        </div>
                                    </div>
                                    <div className="col-xl-12">
                                        <div className="billing_input_box">
                                            <input type="text" name="company_name" defaultValue=""
                                                placeholder="Appartment, unit, etc. (optional)"  />
                                        </div>
                                    </div>
                                    <div className="col-xl-12">
                                        <div className="billing_input_box">
                                            <input type="text" name="Town/City" defaultValue="" placeholder="Town / City"
                                                required={true}  />
                                        </div>
                                    </div>
                                </div>
                                <div className="row bs-gutter-x-20">
                                    <div className="col-xl-6">
                                        <div className="billing_input_box">
                                            <input type="text" name="State" defaultValue="" placeholder="State" required={true}  />
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="billing_input_box">
                                            <input name="form_zip" type="text" pattern="[0-9]*" placeholder="Zip code" />
                                        </div>
                                    </div>
                                </div>

                                <div className="row bs-gutter-x-20">
                                    <div className="col-xl-6">
                                        <div className="billing_input_box">
                                            <input name="email" type="email" placeholder="Email address" />
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="billing_input_box">
                                            <input type="tel" name="form_phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                                required={true} placeholder="Phone" />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="ship_different_input">
                                            <textarea placeholder="Notes about order"
                                                name="form_order_notes"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="your_order">
                    <h2>Your order</h2>
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <div className="order_table_box">
                                <table className="order_table_detail">
                                    <thead className="order_table_head">
                                        <tr>
                                            <th>Product</th>
                                            <th className="right">Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="pro__title">Product Name</td>
                                            <td className="pro__price">$10.99 USD</td>
                                        </tr>
                                        <tr>
                                            <td className="pro__title">Subtotal</td>
                                            <td className="pro__price">$10.99 USD</td>
                                        </tr>
                                        <tr>
                                            <td className="pro__title">Shipping</td>
                                            <td className="pro__price">$0.00 USD</td>
                                        </tr>
                                        <tr>
                                            <td className="pro__title">Total</td>
                                            <td className="pro__price">$20.98 USD</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="checkout__payment">
                                <div className="checkout__payment__item checkout__payment__item--active">
                                    <h3 className="checkout__payment__title">Direct bank transfer</h3>
                                    <div className="checkout__payment__content">
                                        Make your payment directly into our bank account. Please
                                        use your Order ID as the payment reference. Your order
                                        wont be shipped until the funds have cleared.
                                    </div>
                                </div>
                                <div className="checkout__payment__item">
                                    <h3 className="checkout__payment__title">Paypal payment <img
                                            src="/assets/images/shop/paypal-1.jpg" alt="" /></h3>
                                    <div className="checkout__payment__content">
                                        Make your payment directly into our bank account. Please
                                        use your Order ID as the payment reference. Your order
                                        wont be shipped until the funds have cleared.
                                    </div>
                                </div>
                            </div>
                            <div className="text-right d-flex justify-content-end">
                                <a className="thm-btn" href="/checkout">Place your order
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
        


        
      <Footer />
      <MobileMenu />
    </>
  );
}

