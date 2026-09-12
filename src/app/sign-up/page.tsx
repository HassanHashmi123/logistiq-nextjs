import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileMenu from "@/components/layout/MobileMenu";

export default function SignUp() {
  return (
    <>
      <Header />
      
        

        
        <section className="page-header">
            <div className="page-header__bg" style={{ backgroundImage: "url(/assets/images/backgrounds/page-header-bg.jpg)" }}>
            </div>
            <div className="page-header__pattern"><img src="/assets/images/pattern/page-header-pattern.png" alt="" /></div>
            <div className="container">
                <div className="page-header__inner">
                    <h2>Sign Up</h2>
                    <ul className="thm-breadcrumb">
                        <li><a href="/">Home</a></li>
                        <li><span className="icon-right-arrow21"></span></li>
                        <li>Sign Up</li>
                    </ul>
                </div>
            </div>
        </section>
        

    



        
        <section className="sign-up-one">
            <div className="container">
                <div className="sign-up-one__form">
                    <div className="inner-title text-center">
                        <h2>Sing Up</h2>
                    </div>
                    <form id="sign-up-one__form" name="sign-up-one_form" action="#" method="post">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="form-group">
                                    <div className="input-box">
                                        <input type="text" name="form_name" id="formName" placeholder="Name..."
                                            required={true} defaultValue=""  />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-12">
                                <div className="form-group">
                                    <div className="input-box">
                                        <input type="email" name="form_email" id="formEmail" placeholder="Email..."
                                            required={true} defaultValue=""  />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-12">
                                <div className="form-group">
                                    <div className="input-box">
                                        <input type="text" name="form_phone" id="formPhone" placeholder="Phone..."
                                            required={true} defaultValue=""  />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-12">
                                <div className="form-group">
                                    <div className="input-box">
                                        <input type="text" name="form_password" id="formPassword"
                                            placeholder="Password..." required={true} defaultValue=""  />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-12">
                                <div className="form-group">
                                    <button className="thm-btn" type="submit" data-loading-text="Please wait...">
                                        Sing Up
                                        <span className="hover-btn hover-bx"></span>
                                        <span className="hover-btn hover-bx2"></span>
                                        <span className="hover-btn hover-bx3"></span>
                                        <span className="hover-btn hover-bx4"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="google-facebook">
                            <a href="https://www.google.com/">
                                <div className="icon">
                                    <img src="/assets/images/icon/icon-google-2.png" alt="Google" />
                                </div>
                                Continue with Google
                            </a>
                            <a href="https://www.facebook.com/">
                                <div className="icon">
                                    <img src="/assets/images/icon/icon-facebook.png" alt="Google" />
                                </div>
                                Continue with Facebook
                            </a>
                        </div>
                        <div className="create-account text-center">
                            <p>Already have an account? <a href="/login">Login Here</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        


        
      <Footer />
      <MobileMenu />
    </>
  );
}
