import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileMenu from "@/components/layout/MobileMenu";

export default function Products() {
  return (
    <>
      <Header />
      
        

        
        <section className="page-header">
            <div className="page-header__bg" style={{ backgroundImage: "url(/assets/images/backgrounds/page-header-bg.jpg)" }}>
            </div>
            <div className="page-header__pattern"><img src="/assets/images/pattern/page-header-pattern.png" alt="" /></div>
            <div className="container">
                <div className="page-header__inner">
                    <h2>Products</h2>
                    <ul className="thm-breadcrumb">
                        <li><a href="/">Home</a></li>
                        <li><span className="icon-right-arrow21"></span></li>
                        <li>Products</li>
                    </ul>
                </div>
            </div>
        </section>
        

    



        
        <section className="product">
            <div className="container">
                <div className="row">
                    <div className="col-xl-9 col-lg-12">
                        <div className="product__items">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="product__showing-result">
                                        <div className="product__showing-text-box">
                                            <p className="product__showing-text">Showing 1–12/14 of 14 results</p>
                                        </div>
                                        <div className="product__showing-sort">
                                            <div className="select-box">
                                                <select className="wide">
                                                    <option data-display="Sort by popular">Sort by popular</option>
                                                    <option value="1">Sort by popular</option>
                                                    <option value="2">Sort by Price</option>
                                                    <option value="3">Sort by Ratings</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="product__all">
                                <div className="product__all-tab">
                                    <div className="product__all-tab-button">
                                        <ul className="tabs-button-box clearfix">
                                            <li data-tab="#grid" className="tab-btn-item active-btn-item">
                                                <div className="product__all-tab-button-icon one">
                                                    <i className="fa fa-solid fa-bars"></i>
                                                </div>
                                            </li>
                                            <li data-tab="#list" className="tab-btn-item">
                                                <div className="product__all-tab-button-icon">
                                                    <i className="fa fa-solid fa-list-ul"></i>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                    
                                    <div className="tabs-content-box">
                                        
                                        <div className="tab-content-box-item tab-content-box-item-active" id="grid">
                                            <div className="product__all-tab-content-box-item">
                                                <div className="product__all-tab-single">
                                                    <div className="row">

                                                        
                                                        <div className="col-xl-4 col-lg-6 col-md-6">
                                                            <div className="single-product-style1">
                                                                <div className="single-product-style1__img">
                                                                    <img src="/assets/images/shop/shop-product-1-1.jpg"
                                                                        alt="" />
                                                                    <img src="/assets/images/shop/shop-product-1-1.jpg"
                                                                        alt="" />
                                                                    <ul className="single-product-style1__overlay">
                                                                        <li>
                                                                            <p>New</p>
                                                                        </li>
                                                                    </ul>
                                                                    <ul className="single-product-style1__info">
                                                                        <li>
                                                                            <a href="#" title="Add to Wishlist">
                                                                                <i className="fa fa-regular fa-heart"></i>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" title="Add to cart">
                                                                                <i className="fa fa-solid fa-cart-plus"></i>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" title="Quick View">
                                                                                <i className="fa fa-regular fa-eye"></i>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" title="Compare">
                                                                                <i className="fa fa-solid fa-repeat"></i>
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="single-product-style1__content">
                                                                    <div className="single-product-style1__content-left">
                                                                        <h4>
                                                                            <a href="/product-details">
                                                                                Science of Habits
                                                                            </a>
                                                                        </h4>
                                                                        <p>$33.00</p>
                                                                    </div>
                                                                    <div className="single-product-style1__content-right">
                                                                        <div className="single-product-style1__review">
                                                                            <i className="fa fa-star"></i>
                                                                            <p>4.9</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        
                                                        
                                                        <div className="col-xl-4 col-lg-6 col-md-6">
                                                            <div className="single-product-style1">
                                                                <div className="single-product-style1__img">
                                                                    <img src="/assets/images/shop/shop-product-1-2.jpg"
                                                                        alt="" />
                                                                    <img src="/assets/images/shop/shop-product-1-2.jpg"
                                                                        alt="" />
                                                                    <ul className="single-product-style1__info">
                                                                        <li>
                                                                            <a href="#" title="Add to Wishlist">
                                                                                <i className="fa fa-regular fa-heart"></i>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" title="Add to cart">
                                                                                <i className="fa fa-solid fa-cart-plus"></i>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" title="Quick View">
                                                                                <i className="fa fa-regular fa-eye"></i>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" title="Compare">
                                                                                <i className="fa fa-solid fa-repeat"></i>
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="single-product-style1__content">
                                                                    <div className="single-product-style1__content-left">
                                                                        <h4>
                                                                            <a href="/product-details">
                                                                                Think, Plan, Achieve
                                                                            </a>
                                                                        </h4>
                                                                        <p>$50.00</p>
                                                                    </div>
                                                                    <div className="single-product-style1__content-right">
                                                                        <div className="single-product-style1__review">
                                                                            <i className="fa fa-star"></i>
                                                                            <p>5.0</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        
                                                        
                                                        <div className="col-xl-4 col-lg-6 col-md-6">
                                                            <div className="single-product-style1">
                                                                <div className="single-product-style1__img">
                                                                    <img src="/assets/images/shop/shop-product-1-3.jpg"
                                                                        alt="" />
                                                                    <img src="/assets/images/shop/shop-product-1-3.jpg"
                                                                        alt="" />
                                                                    <ul className="single-product-style1__overlay">
                                                                        <li>
                                                                            <p>5% Off</p>
                                                                        </li>
                                                                    </ul>
                                                                    <ul className="single-product-style1__info">
                                                                        <li>
                                                                            <a href="#" title="Add to Wishlist">
                                                                                <i className="fa fa-regular fa-heart"></i>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" title="Add to cart">
                                                                                <i className="fa fa-solid fa-cart-plus"></i>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" title="Quick View">
                                                                                <i className="fa fa-regular fa-eye"></i>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" title="Compare">
                                                                                <i className="fa fa-solid fa-repeat"></i>
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="single-product-style1__content">
                                                                    <div className="single-product-style1__content-left">
                                                                        <h4>
                                                                            <a href="/product-details">
                                                                                Power of Minimalism
                                                                            </a>
                                                                        </h4>
                                                                        <p><del>$33.00</del> $28.00</p>
                                                                    </div>
                                                                    <div className="single-product-style1__content-right">
                                                                        <div className="single-product-style1__review">
                                                                            <i className="fa fa-star"></i>
                                                                            <p>4.5</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        
                                                        
                                                        <div className="col-xl-4 col-lg-6 col-md-6">
                                                            <div className="single-product-style1">
                                                                <div className="single-product-style1__img">
                                                                    <img src="/assets/images/shop/shop-product-1-4.jpg"
                                                                        alt="" />
                                                                    <img src="/assets/images/shop/shop-product-1-4.jpg"
                                                                        alt="" />
                                                                    <ul className="single-product-style1__info">
                                                                        <li>
                                                                            <a href="#" title="Add to Wishlist">
                                                                                <i className="fa fa-regular fa-heart"></i>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" title="Add to cart">
                                                                                <i className="fa fa-solid fa-cart-plus"></i>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" title="Quick View">
                                                                                <i className="fa fa-regular fa-eye"></i>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" title="Compare">
                                                                                <i className="fa fa-solid fa-repeat"></i>
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="single-product-style1__content">
                                                                    <div className="single-product-style1__content-left">
                                                                        <h4>
                                                                            <a href="/product-details">
                                                                                The Hidden Truth
                                                                            </a>
                                                                        </h4>
                                                                        <p>$40.00</p>
                                                                    </div>
                                                                    <div className="single-product-style1__content-right">
                                                                        <div className="single-product-style1__review">
                                                                            <i className="fa fa-star"></i>
                                                                            <p>4.8</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        
                                                        
                                                        <div className="col-xl-4 col-lg-6 col-md-6">
                                                            <div className="single-product-style1">
                                                                <div className="single-product-style1__img">
                                                                    <img src="/assets/images/shop/shop-product-1-5.jpg"
                                                                        alt="" />
                                                                    <img src="/assets/images/shop/shop-product-1-5.jpg"
                                                                        alt="" />
                                                                    <ul className="single-product-style1__overlay">
                                                                        <li>
                                                                            <p>5% Off</p>
                                                                        </li>
                                                                    </ul>
                                                                    <ul className="single-product-style1__info">
                                                                        <li>
                                                                            <a href="#" title="Add to Wishlist">
                                                                                <i className="fa fa-regular fa-heart"></i>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" title="Add to cart">
                                                                                <i className="fa fa-solid fa-cart-plus"></i>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" title="Quick View">
                                                                                <i className="fa fa-regular fa-eye"></i>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" title="Compare">
                                                                                <i className="fa fa-solid fa-repeat"></i>
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="single-product-style1__content">
                                                                    <div className="single-product-style1__content-left">
                                                                        <h4>
                                                                            <a href="/product-details">
                                                                                Forgotten Realm
                                                                            </a>
                                                                        </h4>
                                                                        <p><del>$25.00</del>$20.00</p>
                                                                    </div>
                                                                    <div className="single-product-style1__content-right">
                                                                        <div className="single-product-style1__review">
                                                                            <i className="fa fa-star"></i>
                                                                            <p>4.9</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        
                                                        
                                                        <div className="col-xl-4 col-lg-6 col-md-6">
                                                            <div className="single-product-style1">
                                                                <div className="single-product-style1__img">
                                                                    <img src="/assets/images/shop/shop-product-1-6.jpg"
                                                                        alt="" />
                                                                    <img src="/assets/images/shop/shop-product-1-6.jpg"
                                                                        alt="" />
                                                                    <ul className="single-product-style1__info">
                                                                        <li>
                                                                            <a href="#" title="Add to Wishlist">
                                                                                <i className="fa fa-regular fa-heart"></i>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" title="Add to cart">
                                                                                <i className="fa fa-solid fa-cart-plus"></i>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" title="Quick View">
                                                                                <i className="fa fa-regular fa-eye"></i>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" title="Compare">
                                                                                <i className="fa fa-solid fa-repeat"></i>
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="single-product-style1__content">
                                                                    <div className="single-product-style1__content-left">
                                                                        <h4>
                                                                            <a href="/product-details">
                                                                                City of Lost Souls
                                                                            </a>
                                                                        </h4>
                                                                        <p>$35.00</p>
                                                                    </div>
                                                                    <div className="single-product-style1__content-right">
                                                                        <div className="single-product-style1__review">
                                                                            <i className="fa fa-star"></i>
                                                                            <p>4.7</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        
                                                        
                                                        <div className="col-xl-4 col-lg-6 col-md-6">
                                                            <div className="single-product-style1">
                                                                <div className="single-product-style1__img">
                                                                    <img src="/assets/images/shop/shop-product-1-7.jpg"
                                                                        alt="" />
                                                                    <img src="/assets/images/shop/shop-product-1-7.jpg"
                                                                        alt="" />
                                                                    <ul className="single-product-style1__overlay">
                                                                        <li>
                                                                            <p>New</p>
                                                                        </li>
                                                                    </ul>
                                                                    <ul className="single-product-style1__info">
                                                                        <li>
                                                                            <a href="#" title="Add to Wishlist">
                                                                                <i className="fa fa-regular fa-heart"></i>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" title="Add to cart">
                                                                                <i className="fa fa-solid fa-cart-plus"></i>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" title="Quick View">
                                                                                <i className="fa fa-regular fa-eye"></i>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" title="Compare">
                                                                                <i className="fa fa-solid fa-repeat"></i>
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="single-product-style1__content">
                                                                    <div className="single-product-style1__content-left">
                                                                        <h4>
                                                                            <a href="/product-details">
                                                                                A Web of Lies
                                                                            </a>
                                                                        </h4>
                                                                        <p>$27.00</p>
                                                                    </div>
                                                                    <div className="single-product-style1__content-right">
                                                                        <div className="single-product-style1__review">
                                                                            <i className="fa fa-star"></i>
                                                                            <p>4.6</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        
                                                        
                                                        <div className="col-xl-4 col-lg-6 col-md-6">
                                                            <div className="single-product-style1">
                                                                <div className="single-product-style1__img">
                                                                    <img src="/assets/images/shop/shop-product-1-8.jpg"
                                                                        alt="" />
                                                                    <img src="/assets/images/shop/shop-product-1-8.jpg"
                                                                        alt="" />
                                                                    <ul className="single-product-style1__info">
                                                                        <li>
                                                                            <a href="#" title="Add to Wishlist">
                                                                                <i className="fa fa-regular fa-heart"></i>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" title="Add to cart">
                                                                                <i className="fa fa-solid fa-cart-plus"></i>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" title="Quick View">
                                                                                <i className="fa fa-regular fa-eye"></i>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" title="Compare">
                                                                                <i className="fa fa-solid fa-repeat"></i>
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="single-product-style1__content">
                                                                    <div className="single-product-style1__content-left">
                                                                        <h4>
                                                                            <a href="/product-details">
                                                                                Vanishing Hour
                                                                            </a>
                                                                        </h4>
                                                                        <p>$44.00</p>
                                                                    </div>
                                                                    <div className="single-product-style1__content-right">
                                                                        <div className="single-product-style1__review">
                                                                            <i className="fa fa-star"></i>
                                                                            <p>5.0</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        
                                                        
                                                        <div className="col-xl-4 col-lg-6 col-md-6">
                                                            <div className="single-product-style1">
                                                                <div className="single-product-style1__img">
                                                                    <img src="/assets/images/shop/shop-product-1-9.jpg"
                                                                        alt="" />
                                                                    <img src="/assets/images/shop/shop-product-1-9.jpg"
                                                                        alt="" />
                                                                    <ul className="single-product-style1__overlay">
                                                                        <li>
                                                                            <p>3% Off</p>
                                                                        </li>
                                                                    </ul>
                                                                    <ul className="single-product-style1__info">
                                                                        <li>
                                                                            <a href="#" title="Add to Wishlist">
                                                                                <i className="fa fa-regular fa-heart"></i>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" title="Add to cart">
                                                                                <i className="fa fa-solid fa-cart-plus"></i>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" title="Quick View">
                                                                                <i className="fa fa-regular fa-eye"></i>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" title="Compare">
                                                                                <i className="fa fa-solid fa-repeat"></i>
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="single-product-style1__content">
                                                                    <div className="single-product-style1__content-left">
                                                                        <h4>
                                                                            <a href="/product-details">
                                                                                Your Mindset
                                                                            </a>
                                                                        </h4>
                                                                        <p><del>$49.00</del>$52.00</p>
                                                                    </div>
                                                                    <div className="single-product-style1__content-right">
                                                                        <div className="single-product-style1__review">
                                                                            <i className="fa fa-star"></i>
                                                                            <p>4.9</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        
                                                        
                                                        <div className="col-xl-4 col-lg-6 col-md-6">
                                                            <div className="single-product-style1">
                                                                <div className="single-product-style1__img">
                                                                    <img src="/assets/images/shop/shop-product-1-3.jpg"
                                                                        alt="" />
                                                                    <img src="/assets/images/shop/shop-product-1-3.jpg"
                                                                        alt="" />
                                                                    <ul className="single-product-style1__info">
                                                                        <li>
                                                                            <a href="#" title="Add to Wishlist">
                                                                                <i className="fa fa-regular fa-heart"></i>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" title="Add to cart">
                                                                                <i className="fa fa-solid fa-cart-plus"></i>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" title="Quick View">
                                                                                <i className="fa fa-regular fa-eye"></i>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" title="Compare">
                                                                                <i className="fa fa-solid fa-repeat"></i>
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="single-product-style1__content">
                                                                    <div className="single-product-style1__content-left">
                                                                        <h4>
                                                                            <a href="/product-details">
                                                                                Power of Minimalism
                                                                            </a>
                                                                        </h4>
                                                                        <p>$25.00</p>
                                                                    </div>
                                                                    <div className="single-product-style1__content-right">
                                                                        <div className="single-product-style1__review">
                                                                            <i className="fa fa-star"></i>
                                                                            <p>4.7</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        
                                                        
                                                        <div className="col-xl-4 col-lg-6 col-md-6">
                                                            <div className="single-product-style1">
                                                                <div className="single-product-style1__img">
                                                                    <img src="/assets/images/shop/shop-product-1-5.jpg"
                                                                        alt="" />
                                                                    <img src="/assets/images/shop/shop-product-1-5.jpg"
                                                                        alt="" />
                                                                    <ul className="single-product-style1__overlay">
                                                                        <li>
                                                                            <p>New</p>
                                                                        </li>
                                                                        <li>
                                                                            <p>7% Off</p>
                                                                        </li>
                                                                    </ul>
                                                                    <ul className="single-product-style1__info">
                                                                        <li>
                                                                            <a href="#" title="Add to Wishlist">
                                                                                <i className="fa fa-regular fa-heart"></i>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" title="Add to cart">
                                                                                <i className="fa fa-solid fa-cart-plus"></i>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" title="Quick View">
                                                                                <i className="fa fa-regular fa-eye"></i>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" title="Compare">
                                                                                <i className="fa fa-solid fa-repeat"></i>
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="single-product-style1__content">
                                                                    <div className="single-product-style1__content-left">
                                                                        <h4>
                                                                            <a href="/product-details">
                                                                                City of Lost Souls
                                                                            </a>
                                                                        </h4>
                                                                        <p><del>$36.00</del>$43.00</p>
                                                                    </div>
                                                                    <div className="single-product-style1__content-right">
                                                                        <div className="single-product-style1__review">
                                                                            <i className="fa fa-star"></i>
                                                                            <p>4.9</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        
                                                        
                                                        <div className="col-xl-4 col-lg-6 col-md-6">
                                                            <div className="single-product-style1">
                                                                <div className="single-product-style1__img">
                                                                    <img src="/assets/images/shop/shop-product-1-4.jpg"
                                                                        alt="" />
                                                                    <img src="/assets/images/shop/shop-product-1-4.jpg"
                                                                        alt="" />
                                                                    <ul className="single-product-style1__info">
                                                                        <li>
                                                                            <a href="#" title="Add to Wishlist">
                                                                                <i className="fa fa-regular fa-heart"></i>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" title="Add to cart">
                                                                                <i className="fa fa-solid fa-cart-plus"></i>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" title="Quick View">
                                                                                <i className="fa fa-regular fa-eye"></i>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" title="Compare">
                                                                                <i className="fa fa-solid fa-repeat"></i>
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="single-product-style1__content">
                                                                    <div className="single-product-style1__content-left">
                                                                        <h4>
                                                                            <a href="/product-details">
                                                                                The Hidden Truth
                                                                            </a>
                                                                        </h4>
                                                                        <p>$28.00</p>
                                                                    </div>
                                                                    <div className="single-product-style1__content-right">
                                                                        <div className="single-product-style1__review">
                                                                            <i className="fa fa-star"></i>
                                                                            <p>4.6</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        
                                        <div className="tab-content-box-item" id="list">
                                            <div className="product__all-tab-content-box-item">
                                                <div className="product__all-tab-single">
                                                    <div className="row">

                                                        
                                                        <div className="col-xl-6 col-lg-6">
                                                            <div className="single-product-style2">
                                                                <div className="row">
                                                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                                                        <div className="single-product-style2__img">
                                                                            <img src="/assets/images/shop/shop-product-2-1.jpg"
                                                                                alt="" />
                                                                            <img src="/assets/images/shop/shop-product-2-1.jpg"
                                                                                alt="" />
                                                                            <ul className="single-product-style1__overlay">
                                                                                <li>
                                                                                    <p>New</p>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                                                        <div className="single-product-style2__content">
                                                                            <div className="single-product-style2__review">
                                                                                <i className="fa fa-star"></i>
                                                                                <i className="fa fa-star"></i>
                                                                                <i className="fa fa-star"></i>
                                                                                <i className="fa fa-star"></i>
                                                                                <i className="fa fa-star"></i>
                                                                            </div>
                                                                            <div className="single-product-style2__text">
                                                                                <h4>
                                                                                    <a href="/product-details">
                                                                                        Science of Habits
                                                                                    </a>
                                                                                </h4>
                                                                                <p>$33.00</p>
                                                                            </div>
                                                                            <ul className="single-product-style2__info">
                                                                                <li>
                                                                                    <a href="#" title="Add to Wishlist">
                                                                                        <i
                                                                                            className="fa fa-regular fa-heart">
                                                                                        </i>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="#" title="Add to cart">
                                                                                        <i
                                                                                            className="fa fa-solid fa-cart-plus">
                                                                                        </i>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="#" title="Quick View">
                                                                                        <i className="fa fa-regular fa-eye">
                                                                                        </i>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="#" title="Compare">
                                                                                        <i
                                                                                            className="fa fa-solid fa-repeat">
                                                                                        </i>
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        
                                                        
                                                        <div className="col-xl-6 col-lg-6">
                                                            <div className="single-product-style2">
                                                                <div className="row">
                                                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                                                        <div className="single-product-style2__img">
                                                                            <img src="/assets/images/shop/shop-product-2-2.jpg"
                                                                                alt="" />
                                                                            <img src="/assets/images/shop/shop-product-2-2.jpg"
                                                                                alt="" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                                                        <div className="single-product-style2__content">
                                                                            <div className="single-product-style2__review">
                                                                                <i className="fa fa-star"></i>
                                                                                <i className="fa fa-star"></i>
                                                                                <i className="fa fa-star"></i>
                                                                                <i className="fa fa-star"></i>
                                                                                <i className="fa fa-star"></i>
                                                                            </div>
                                                                            <div className="single-product-style2__text">
                                                                                <h4>
                                                                                    <a href="/product-details">
                                                                                        Think, Plan, Achieve
                                                                                    </a>
                                                                                </h4>
                                                                                <p>$50.00</p>
                                                                            </div>
                                                                            <ul className="single-product-style2__info">
                                                                                <li>
                                                                                    <a href="#" title="Add to Wishlist">
                                                                                        <i
                                                                                            className="fa fa-regular fa-heart">
                                                                                        </i>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="#" title="Add to cart">
                                                                                        <i
                                                                                            className="fa fa-solid fa-cart-plus">
                                                                                        </i>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="#" title="Quick View">
                                                                                        <i className="fa fa-regular fa-eye">
                                                                                        </i>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="#" title="Compare">
                                                                                        <i
                                                                                            className="fa fa-solid fa-repeat">
                                                                                        </i>
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        
                                                        
                                                        <div className="col-xl-6 col-lg-6">
                                                            <div className="single-product-style2">
                                                                <div className="row">
                                                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                                                        <div className="single-product-style2__img">
                                                                            <img src="/assets/images/shop/shop-product-2-4.jpg"
                                                                                alt="" />
                                                                            <img src="/assets/images/shop/shop-product-2-4.jpg"
                                                                                alt="" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                                                        <div className="single-product-style2__content">
                                                                            <div className="single-product-style2__review">
                                                                                <i className="fa fa-star"></i>
                                                                                <i className="fa fa-star"></i>
                                                                                <i className="fa fa-star"></i>
                                                                                <i className="fa fa-star"></i>
                                                                                <i className="fa fa-star"></i>
                                                                            </div>
                                                                            <div className="single-product-style2__text">
                                                                                <h4>
                                                                                    <a href="/product-details">
                                                                                        The Hidden Truth
                                                                                    </a>
                                                                                </h4>
                                                                                <p>$40.00</p>
                                                                            </div>
                                                                            <ul className="single-product-style2__info">
                                                                                <li>
                                                                                    <a href="#" title="Add to Wishlist">
                                                                                        <i
                                                                                            className="fa fa-regular fa-heart">
                                                                                        </i>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="#" title="Add to cart">
                                                                                        <i
                                                                                            className="fa fa-solid fa-cart-plus">
                                                                                        </i>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="#" title="Quick View">
                                                                                        <i className="fa fa-regular fa-eye">
                                                                                        </i>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="#" title="Compare">
                                                                                        <i
                                                                                            className="fa fa-solid fa-repeat">
                                                                                        </i>
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        
                                                        
                                                        <div className="col-xl-6 col-lg-6">
                                                            <div className="single-product-style2">
                                                                <div className="row">
                                                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                                                        <div className="single-product-style2__img">
                                                                            <img src="/assets/images/shop/shop-product-2-3.jpg"
                                                                                alt="" />
                                                                            <img src="/assets/images/shop/shop-product-2-3.jpg"
                                                                                alt="" />
                                                                        </div>
                                                                        <ul className="single-product-style1__overlay">
                                                                            <li>
                                                                                <p>5% Off</p>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                                                        <div className="single-product-style2__content">
                                                                            <div className="single-product-style2__review">
                                                                                <i className="fa fa-star"></i>
                                                                                <i className="fa fa-star"></i>
                                                                                <i className="fa fa-star"></i>
                                                                                <i className="fa fa-star"></i>
                                                                                <i className="fa fa-star"></i>
                                                                            </div>
                                                                            <div className="single-product-style2__text">
                                                                                <h4>
                                                                                    <a href="/product-details">
                                                                                        Power of Minimalism
                                                                                    </a>
                                                                                </h4>
                                                                                <p><del>$33.00</del>$28.00</p>
                                                                            </div>
                                                                            <ul className="single-product-style2__info">
                                                                                <li>
                                                                                    <a href="#" title="Add to Wishlist">
                                                                                        <i
                                                                                            className="fa fa-regular fa-heart">
                                                                                        </i>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="#" title="Add to cart">
                                                                                        <i
                                                                                            className="fa fa-solid fa-cart-plus">
                                                                                        </i>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="#" title="Quick View">
                                                                                        <i className="fa fa-regular fa-eye">
                                                                                        </i>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="#" title="Compare">
                                                                                        <i
                                                                                            className="fa fa-solid fa-repeat">
                                                                                        </i>
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        
                                                        
                                                        <div className="col-xl-6 col-lg-6">
                                                            <div className="single-product-style2">
                                                                <div className="row">
                                                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                                                        <div className="single-product-style2__img">
                                                                            <img src="/assets/images/shop/shop-product-2-5.jpg"
                                                                                alt="" />
                                                                            <img src="/assets/images/shop/shop-product-2-5.jpg"
                                                                                alt="" />
                                                                        </div>
                                                                        <ul className="single-product-style1__overlay">
                                                                            <li>
                                                                                <p>5% Off</p>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                                                        <div className="single-product-style2__content">
                                                                            <div className="single-product-style2__review">
                                                                                <i className="fa fa-star"></i>
                                                                                <i className="fa fa-star"></i>
                                                                                <i className="fa fa-star"></i>
                                                                                <i className="fa fa-star"></i>
                                                                                <i className="fa fa-star"></i>
                                                                            </div>
                                                                            <div className="single-product-style2__text">
                                                                                <h4>
                                                                                    <a href="/product-details">
                                                                                        Forgotten Realm
                                                                                    </a>
                                                                                </h4>
                                                                                <p><del>$25.00</del>$20.00</p>
                                                                            </div>
                                                                            <ul className="single-product-style2__info">
                                                                                <li>
                                                                                    <a href="#" title="Add to Wishlist">
                                                                                        <i
                                                                                            className="fa fa-regular fa-heart">
                                                                                        </i>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="#" title="Add to cart">
                                                                                        <i
                                                                                            className="fa fa-solid fa-cart-plus">
                                                                                        </i>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="#" title="Quick View">
                                                                                        <i className="fa fa-regular fa-eye">
                                                                                        </i>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="#" title="Compare">
                                                                                        <i
                                                                                            className="fa fa-solid fa-repeat">
                                                                                        </i>
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        
                                                        
                                                        <div className="col-xl-6 col-lg-6">
                                                            <div className="single-product-style2">
                                                                <div className="row">
                                                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                                                        <div className="single-product-style2__img">
                                                                            <img src="/assets/images/shop/shop-product-2-6.jpg"
                                                                                alt="" />
                                                                            <img src="/assets/images/shop/shop-product-2-6.jpg"
                                                                                alt="" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                                                        <div className="single-product-style2__content">
                                                                            <div className="single-product-style2__review">
                                                                                <i className="fa fa-star"></i>
                                                                                <i className="fa fa-star"></i>
                                                                                <i className="fa fa-star"></i>
                                                                                <i className="fa fa-star"></i>
                                                                                <i className="fa fa-star"></i>
                                                                            </div>
                                                                            <div className="single-product-style2__text">
                                                                                <h4>
                                                                                    <a href="/product-details">
                                                                                        City of Lost Souls
                                                                                    </a>
                                                                                </h4>
                                                                                <p>$35.00</p>
                                                                            </div>
                                                                            <ul className="single-product-style2__info">
                                                                                <li>
                                                                                    <a href="#" title="Add to Wishlist">
                                                                                        <i
                                                                                            className="fa fa-regular fa-heart">
                                                                                        </i>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="#" title="Add to cart">
                                                                                        <i
                                                                                            className="fa fa-solid fa-cart-plus">
                                                                                        </i>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="#" title="Quick View">
                                                                                        <i className="fa fa-regular fa-eye">
                                                                                        </i>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="#" title="Compare">
                                                                                        <i
                                                                                            className="fa fa-solid fa-repeat">
                                                                                        </i>
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        
                                                        
                                                        <div className="col-xl-6 col-lg-6">
                                                            <div className="single-product-style2">
                                                                <div className="row">
                                                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                                                        <div className="single-product-style2__img">
                                                                            <img src="/assets/images/shop/shop-product-2-8.jpg"
                                                                                alt="" />
                                                                            <img src="/assets/images/shop/shop-product-2-8.jpg"
                                                                                alt="" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                                                        <div className="single-product-style2__content">
                                                                            <div className="single-product-style2__review">
                                                                                <i className="fa fa-star"></i>
                                                                                <i className="fa fa-star"></i>
                                                                                <i className="fa fa-star"></i>
                                                                                <i className="fa fa-star"></i>
                                                                                <i className="fa fa-star"></i>
                                                                            </div>
                                                                            <div className="single-product-style2__text">
                                                                                <h4>
                                                                                    <a href="/product-details">
                                                                                        Vanishing Hour
                                                                                    </a>
                                                                                </h4>
                                                                                <p>$44.00</p>
                                                                            </div>
                                                                            <ul className="single-product-style2__info">
                                                                                <li>
                                                                                    <a href="#" title="Add to Wishlist">
                                                                                        <i
                                                                                            className="fa fa-regular fa-heart">
                                                                                        </i>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="#" title="Add to cart">
                                                                                        <i
                                                                                            className="fa fa-solid fa-cart-plus">
                                                                                        </i>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="#" title="Quick View">
                                                                                        <i className="fa fa-regular fa-eye">
                                                                                        </i>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="#" title="Compare">
                                                                                        <i
                                                                                            className="fa fa-solid fa-repeat">
                                                                                        </i>
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        
                                                        
                                                        <div className="col-xl-6 col-lg-6">
                                                            <div className="single-product-style2">
                                                                <div className="row">
                                                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                                                        <div className="single-product-style2__img">
                                                                            <img src="/assets/images/shop/shop-product-2-7.jpg"
                                                                                alt="" />
                                                                            <img src="/assets/images/shop/shop-product-2-7.jpg"
                                                                                alt="" />
                                                                            <ul className="single-product-style1__overlay">
                                                                                <li>
                                                                                    <p>New</p>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                                                        <div className="single-product-style2__content">
                                                                            <div className="single-product-style2__review">
                                                                                <i className="fa fa-star"></i>
                                                                                <i className="fa fa-star"></i>
                                                                                <i className="fa fa-star"></i>
                                                                                <i className="fa fa-star"></i>
                                                                                <i className="fa fa-star"></i>
                                                                            </div>
                                                                            <div className="single-product-style2__text">
                                                                                <h4>
                                                                                    <a href="/product-details">
                                                                                        A Web of Lies
                                                                                    </a>
                                                                                </h4>
                                                                                <p>$27.00</p>
                                                                            </div>
                                                                            <ul className="single-product-style2__info">
                                                                                <li>
                                                                                    <a href="#" title="Add to Wishlist">
                                                                                        <i
                                                                                            className="fa fa-regular fa-heart">
                                                                                        </i>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="#" title="Add to cart">
                                                                                        <i
                                                                                            className="fa fa-solid fa-cart-plus">
                                                                                        </i>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="#" title="Quick View">
                                                                                        <i className="fa fa-regular fa-eye">
                                                                                        </i>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="#" title="Compare">
                                                                                        <i
                                                                                            className="fa fa-solid fa-repeat">
                                                                                        </i>
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        
                                                        
                                                        <div className="col-xl-6 col-lg-6">
                                                            <div className="single-product-style2">
                                                                <div className="row">
                                                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                                                        <div className="single-product-style2__img">
                                                                            <img src="/assets/images/shop/shop-product-2-9.jpg"
                                                                                alt="" />
                                                                            <img src="/assets/images/shop/shop-product-2-9.jpg"
                                                                                alt="" />
                                                                            <ul className="single-product-style1__overlay">
                                                                                <li>
                                                                                    <p>3% Off</p>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                                                        <div className="single-product-style2__content">
                                                                            <div className="single-product-style2__review">
                                                                                <i className="fa fa-star"></i>
                                                                                <i className="fa fa-star"></i>
                                                                                <i className="fa fa-star"></i>
                                                                                <i className="fa fa-star"></i>
                                                                                <i className="fa fa-star"></i>
                                                                            </div>
                                                                            <div className="single-product-style2__text">
                                                                                <h4>
                                                                                    <a href="/product-details">
                                                                                        Your Mindset
                                                                                    </a>
                                                                                </h4>
                                                                                <p><del>$49.00</del>$52.00</p>
                                                                            </div>
                                                                            <ul className="single-product-style2__info">
                                                                                <li>
                                                                                    <a href="#" title="Add to Wishlist">
                                                                                        <i
                                                                                            className="fa fa-regular fa-heart">
                                                                                        </i>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="#" title="Add to cart">
                                                                                        <i
                                                                                            className="fa fa-solid fa-cart-plus">
                                                                                        </i>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="#" title="Quick View">
                                                                                        <i className="fa fa-regular fa-eye">
                                                                                        </i>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="#" title="Compare">
                                                                                        <i
                                                                                            className="fa fa-solid fa-repeat">
                                                                                        </i>
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        
                                                        
                                                        <div className="col-xl-6 col-lg-6">
                                                            <div className="single-product-style2">
                                                                <div className="row">
                                                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                                                        <div className="single-product-style2__img">
                                                                            <img src="/assets/images/shop/shop-product-2-3.jpg"
                                                                                alt="" />
                                                                            <img src="/assets/images/shop/shop-product-2-3.jpg"
                                                                                alt="" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                                                        <div className="single-product-style2__content">
                                                                            <div className="single-product-style2__review">
                                                                                <i className="fa fa-star"></i>
                                                                                <i className="fa fa-star"></i>
                                                                                <i className="fa fa-star"></i>
                                                                                <i className="fa fa-star"></i>
                                                                                <i className="fa fa-star"></i>
                                                                            </div>
                                                                            <div className="single-product-style2__text">
                                                                                <h4>
                                                                                    <a href="/product-details">
                                                                                        Power of Minimalism
                                                                                    </a>
                                                                                </h4>
                                                                                <p><del>$33.00</del>$28.00</p>
                                                                            </div>
                                                                            <ul className="single-product-style2__info">
                                                                                <li>
                                                                                    <a href="#" title="Add to Wishlist">
                                                                                        <i
                                                                                            className="fa fa-regular fa-heart">
                                                                                        </i>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="#" title="Add to cart">
                                                                                        <i
                                                                                            className="fa fa-solid fa-cart-plus">
                                                                                        </i>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="#" title="Quick View">
                                                                                        <i className="fa fa-regular fa-eye">
                                                                                        </i>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="#" title="Compare">
                                                                                        <i
                                                                                            className="fa fa-solid fa-repeat">
                                                                                        </i>
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        
                                                        
                                                        <div className="col-xl-6 col-lg-6">
                                                            <div className="single-product-style2">
                                                                <div className="row">
                                                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                                                        <div className="single-product-style2__img">
                                                                            <img src="/assets/images/shop/shop-product-2-4.jpg"
                                                                                alt="" />
                                                                            <img src="/assets/images/shop/shop-product-2-4.jpg"
                                                                                alt="" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                                                        <div className="single-product-style2__content">
                                                                            <div className="single-product-style2__review">
                                                                                <i className="fa fa-star"></i>
                                                                                <i className="fa fa-star"></i>
                                                                                <i className="fa fa-star"></i>
                                                                                <i className="fa fa-star"></i>
                                                                                <i className="fa fa-star"></i>
                                                                            </div>
                                                                            <div className="single-product-style2__text">
                                                                                <h4>
                                                                                    <a href="/product-details">
                                                                                        City of Lost Souls
                                                                                    </a>
                                                                                </h4>
                                                                                <p>$40.00</p>
                                                                            </div>
                                                                            <ul className="single-product-style2__info">
                                                                                <li>
                                                                                    <a href="#" title="Add to Wishlist">
                                                                                        <i
                                                                                            className="fa fa-regular fa-heart">
                                                                                        </i>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="#" title="Add to cart">
                                                                                        <i
                                                                                            className="fa fa-solid fa-cart-plus">
                                                                                        </i>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="#" title="Quick View">
                                                                                        <i className="fa fa-regular fa-eye">
                                                                                        </i>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="#" title="Compare">
                                                                                        <i
                                                                                            className="fa fa-solid fa-repeat">
                                                                                        </i>
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        
                                                        
                                                        <div className="col-xl-6 col-lg-6">
                                                            <div className="single-product-style2">
                                                                <div className="row">
                                                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                                                        <div className="single-product-style2__img">
                                                                            <img src="/assets/images/shop/shop-product-2-5.jpg"
                                                                                alt="" />
                                                                            <img src="/assets/images/shop/shop-product-2-5.jpg"
                                                                                alt="" />
                                                                        </div>
                                                                        <ul className="single-product-style1__overlay">
                                                                            <li>
                                                                                <p>New</p>
                                                                            </li>
                                                                            <li>
                                                                                <p>7% Off</p>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                                                        <div className="single-product-style2__content">
                                                                            <div className="single-product-style2__review">
                                                                                <i className="fa fa-star"></i>
                                                                                <i className="fa fa-star"></i>
                                                                                <i className="fa fa-star"></i>
                                                                                <i className="fa fa-star"></i>
                                                                                <i className="fa fa-star"></i>
                                                                            </div>
                                                                            <div className="single-product-style2__text">
                                                                                <h4>
                                                                                    <a href="/product-details">
                                                                                        Vanishing Hour
                                                                                    </a>
                                                                                </h4>
                                                                                <p><del>$36.00</del>$43.00</p>
                                                                            </div>
                                                                            <ul className="single-product-style2__info">
                                                                                <li>
                                                                                    <a href="#" title="Add to Wishlist">
                                                                                        <i
                                                                                            className="fa fa-regular fa-heart">
                                                                                        </i>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="#" title="Add to cart">
                                                                                        <i
                                                                                            className="fa fa-solid fa-cart-plus">
                                                                                        </i>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="#" title="Quick View">
                                                                                        <i className="fa fa-regular fa-eye">
                                                                                        </i>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="#" title="Compare">
                                                                                        <i
                                                                                            className="fa fa-solid fa-repeat">
                                                                                        </i>
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        
                                                        
                                                        <div className="col-xl-6 col-lg-6">
                                                            <div className="single-product-style2">
                                                                <div className="row">
                                                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                                                        <div className="single-product-style2__img">
                                                                            <img src="/assets/images/shop/shop-product-2-1.jpg"
                                                                                alt="" />
                                                                            <img src="/assets/images/shop/shop-product-2-1.jpg"
                                                                                alt="" />
                                                                            <ul className="single-product-style1__overlay">
                                                                                <li>
                                                                                    <p>New</p>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                                                        <div className="single-product-style2__content">
                                                                            <div className="single-product-style2__review">
                                                                                <i className="fa fa-star"></i>
                                                                                <i className="fa fa-star"></i>
                                                                                <i className="fa fa-star"></i>
                                                                                <i className="fa fa-star"></i>
                                                                                <i className="fa fa-star"></i>
                                                                            </div>
                                                                            <div className="single-product-style2__text">
                                                                                <h4>
                                                                                    <a href="/product-details">
                                                                                        The Hidden Truth
                                                                                    </a>
                                                                                </h4>
                                                                                <p>$55.00</p>
                                                                            </div>
                                                                            <ul className="single-product-style2__info">
                                                                                <li>
                                                                                    <a href="#" title="Add to Wishlist">
                                                                                        <i
                                                                                            className="fa fa-regular fa-heart">
                                                                                        </i>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="#" title="Add to cart">
                                                                                        <i
                                                                                            className="fa fa-solid fa-cart-plus">
                                                                                        </i>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="#" title="Quick View">
                                                                                        <i className="fa fa-regular fa-eye">
                                                                                        </i>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="#" title="Compare">
                                                                                        <i
                                                                                            className="fa fa-solid fa-repeat">
                                                                                        </i>
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        
                                                        
                                                        <div className="col-xl-6 col-lg-6">
                                                            <div className="single-product-style2">
                                                                <div className="row">
                                                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                                                        <div className="single-product-style2__img">
                                                                            <img src="/assets/images/shop/shop-product-2-2.jpg"
                                                                                alt="" />
                                                                            <img src="/assets/images/shop/shop-product-2-2.jpg"
                                                                                alt="" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                                                        <div className="single-product-style2__content">
                                                                            <div className="single-product-style2__review">
                                                                                <i className="fa fa-star"></i>
                                                                                <i className="fa fa-star"></i>
                                                                                <i className="fa fa-star"></i>
                                                                                <i className="fa fa-star"></i>
                                                                                <i className="fa fa-star"></i>
                                                                            </div>
                                                                            <div className="single-product-style2__text">
                                                                                <h4>
                                                                                    <a href="/product-details">
                                                                                        Science of Habits
                                                                                    </a>
                                                                                </h4>
                                                                                <p>$80.00</p>
                                                                            </div>
                                                                            <ul className="single-product-style2__info">
                                                                                <li>
                                                                                    <a href="#" title="Add to Wishlist">
                                                                                        <i
                                                                                            className="fa fa-regular fa-heart">
                                                                                        </i>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="#" title="Add to cart">
                                                                                        <i
                                                                                            className="fa fa-solid fa-cart-plus">
                                                                                        </i>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="#" title="Quick View">
                                                                                        <i className="fa fa-regular fa-eye">
                                                                                        </i>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="#" title="Compare">
                                                                                        <i
                                                                                            className="fa fa-solid fa-repeat">
                                                                                        </i>
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
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
                                    
                                </div>
                                <ul className="styled-pagination text-center clearfix">
                                    <li className="arrow prev active">
                                        <a href="#">
                                            <span className="icon-right-arrow3"></span>
                                        </a>
                                    </li>
                                    <li><a href="#">1</a></li>
                                    <li><a href="#">2</a></li>
                                    <li><a href="#">3</a></li>
                                    <li className="arrow next">
                                        <a href="#">
                                            <span className="icon-right-arrow31"></span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-12">
                        <div className="product__sidebar">
                            <div className="shop-search product__sidebar-single">
                                <form action="#">
                                    <input type="text" placeholder="Search" />
                                    <button type="submit"><i className="fa fa-search"></i></button>
                                </form>
                            </div>
                            <div className="product__price-ranger product__sidebar-single">
                                <h3 className="product__sidebar-title">Price</h3>
                                <div className="price-ranger">
                                    <div id="slider-range"></div>
                                    <div className="ranger-min-max-block">
                                        <input type="text" readOnly={true} className="min" />
                                        <span>-</span>
                                        <input type="text" readOnly={true} className="max" />
                                        <input type="submit" defaultValue="Filter"  />
                                    </div>
                                </div>
                            </div>

                            <div className="shop-category product__sidebar-single">
                                <h3 className="product__sidebar-title">Categories</h3>
                                <ul className="list-unstyled">
                                    <li><a href="#">Make a Donation</a></li>
                                    <li className="active"><a href="#">Make World Happier</a></li>
                                    <li><a href="#">Education For People</a></li>
                                    <li><a href="#">Food & Build Home</a></li>
                                    <li><a href="#">Environtment Recyle</a></li>
                                </ul>
                            </div>

                            <div className="shop-product-recent-products product__sidebar-single">
                                <h3 className="product__sidebar-title">Recent Products</h3>
                                <ul className="clearfix">
                                    <li>
                                        <div className="img">
                                            <img src="/assets/images/shop/product-thumb-1.jpg" alt="Product" />
                                            <a href="#"><i className="fa fa-link" aria-hidden="true"></i></a>
                                        </div>
                                        <div className="content">
                                            <div className="title">
                                                <h5><a href="#">Classy chair</a></h5>
                                            </div>
                                            <div className="price">
                                                <p>$33.00</p>
                                            </div>
                                            <div className="review">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star color"></i>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="img">
                                            <img src="/assets/images/shop/product-thumb-2.jpg" alt="Product" />
                                            <a href="#"><i className="fa fa-link" aria-hidden="true"></i></a>
                                        </div>
                                        <div className="content">
                                            <div className="title">
                                                <h5><a href="#">Wooden stool</a></h5>
                                            </div>
                                            <div className="price">
                                                <p>$39.00</p>
                                            </div>
                                            <div className="review">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star color"></i>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="img">
                                            <img src="/assets/images/shop/product-thumb-3.jpg" alt="Product" />
                                            <a href="#"><i className="fa fa-link" aria-hidden="true"></i></a>
                                        </div>
                                        <div className="content">
                                            <div className="title">
                                                <h5><a href="#">Sofa chair</a></h5>
                                            </div>
                                            <div className="price">
                                                <p>$54.00</p>
                                            </div>
                                            <div className="review">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star color"></i>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="img">
                                            <img src="/assets/images/shop/product-thumb-4.jpg" alt="Product" />
                                            <a href="#"><i className="fa fa-link" aria-hidden="true"></i></a>
                                        </div>
                                        <div className="content">
                                            <div className="title">
                                                <h5><a href="#">Big sofa</a></h5>
                                            </div>
                                            <div className="price">
                                                <p>$44.00</p>
                                            </div>
                                            <div className="review">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star color"></i>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="shop-product-tags product__sidebar-single">
                                <h3 className="product__sidebar-title">Product Tags</h3>
                                <div className="shop-product__tags-list">
                                    <a href="#">Art</a>
                                    <a href="#">Decor</a>
                                    <a href="#">Design</a>
                                    <a href="#">Electronix</a>
                                    <a href="#">Envato</a>
                                    <a href="#">Destination</a>
                                </div>
                            </div>

                            
                            <div className="shop-product-tags product__sidebar-single style">
                                <h3 className="product__sidebar-title">Reviews</h3>
                                <div className="sidebar-rating-box sidebar-rating-box--style2">
                                    <ul>
                                        <li>
                                            <input type="radio" id="fivestar" name="rating" defaultChecked={true} />
                                            <label htmlFor="fivestar">
                                                <i></i>
                                                <span className="icon-star"></span>
                                                <span className="icon-star"></span>
                                                <span className="icon-star"></span>
                                                <span className="icon-star"></span>
                                                <span className="icon-star"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <input type="radio" id="fourstar" name="rating" />
                                            <label htmlFor="fourstar">
                                                <i></i>
                                                <span className="icon-star"></span>
                                                <span className="icon-star"></span>
                                                <span className="icon-star"></span>
                                                <span className="icon-star"></span>
                                                <span className="icon-star gray"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <input type="radio" id="threestar" name="rating" />
                                            <label htmlFor="threestar">
                                                <i></i>
                                                <span className="icon-star"></span>
                                                <span className="icon-star"></span>
                                                <span className="icon-star"></span>
                                                <span className="icon-star gray"></span>
                                                <span className="icon-star gray"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <input type="radio" id="twostar" name="rating" />
                                            <label htmlFor="twostar">
                                                <i></i>
                                                <span className="icon-star"></span>
                                                <span className="icon-star"></span>
                                                <span className="icon-star gray"></span>
                                                <span className="icon-star gray"></span>
                                                <span className="icon-star gray"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <input type="radio" id="onestar" name="rating" />
                                            <label htmlFor="onestar">
                                                <i></i>
                                                <span className="icon-star"></span>
                                                <span className="icon-star gray"></span>
                                                <span className="icon-star gray"></span>
                                                <span className="icon-star gray"></span>
                                                <span className="icon-star gray"></span>
                                            </label>
                                        </li>
                                    </ul>
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
