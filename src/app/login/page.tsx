import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileMenu from "@/components/layout/MobileMenu";

export default function Login() {
  return (
    <>
      <Header />
      
        

        
        <section className="page-header">
            <div className="page-header__bg" style={{ backgroundImage: "url(/assets/images/backgrounds/page-header-bg.jpg)" }}>
            </div>
            <div className="page-header__pattern"><img src="/assets/images/pattern/page-header-pattern.png" alt="" /></div>
            <div className="container">
                <div className="page-header__inner">
                    <h2>Login Here</h2>
                    <ul className="thm-breadcrumb">
                        <li><a href="/">Home</a></li>
                        <li><span className="icon-right-arrow21"></span></li>
                        <li>Login Here</li>
                    </ul>
                </div>
            </div>
        </section>
        

    




        
        <section className="login-one">
            <div className="container">
                <div className="login-one__form">
                    <div className="inner-title text-center">
                        <h2>Login Here</h2>
                    </div>
                    <form id="login-one__form" name="Login-one_form" action="#" method="post">
                        <div className="row">
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
                                        <input type="text" name="form_password" id="formPassword"
                                            placeholder="Password..." required={true} defaultValue=""  />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-12">
                                <div className="form-group">
                                    <button className="thm-btn" type="submit" data-loading-text="Please wait...">
                                        Login Here
                                        <span className="hover-btn hover-bx"></span>
                                        <span className="hover-btn hover-bx2"></span>
                                        <span className="hover-btn hover-bx3"></span>
                                        <span className="hover-btn hover-bx4"></span>
                                    </button>
                                </div>
                            </div>
                            <div className="remember-forget">
                                <div className="checked-box1">
                                    <input type="checkbox" name="saveMyInfo" id="saveinfo" defaultChecked={true} />
                                    <label htmlFor="saveinfo">
                                        <span></span>
                                        Remember me
                                    </label>
                                </div>
                                <div className="forget">
                                    <a href="#">Forget password?</a>
                                </div>
                            </div>

                            <div className="create-account text-center">
                                <p>Not registered yet? <a href="/sign-up">Create an Account</a></p>
                            </div>
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

