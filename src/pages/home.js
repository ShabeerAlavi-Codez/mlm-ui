import React from "react";
import { useNavigate,Link } from 'react-router-dom'

const scrollToClass = () => {
    const element = document.getElementById('login-class');
    element.scrollIntoView({ behavior: 'smooth' });
  };
class Home extends React.Component {

    render() {
        const myStyles = {
            backgroundImage: "url('/assets/images/banner2.png')",
            backgroundSize: 'cover',
            color: 'white',
            textAlign: 'center',
            padding: '100px 0',
            // Adjust other styles as needed
        };

        return <div>

            {/* <div id="preloader" className="inso-preloader">
                <span className="loader"></span>
            </div> */}

            <div className="o-hidden">
                <div className="offcanvase">
                    <div className="offcanvase__menu">
                        <div className="offcanvase__menu--content">
                            <div className="offcanvase__menu--top mb-30 d-flex justify-content-between">
                                <div className="offcanvase__menu--logo">
                                    <div className="offcanvase__logo">
                                        <a href="index.html">
                                            <img src="assets/images/logo.png" alt="insoand" />
                                        </a>
                                    </div>
                                </div>
                                <div className="offcanvase__menu--close-icon">
                                    <div className="close-menu pointer"><i className="fa-sharp fa-regular fa-xmark"></i></div>
                                </div>
                            </div>
                            <div className="offcanvase-menu o-hidden mb-30"></div>
                            <div className="offcanvase__button mb-30">
                                <a className="login" href="#" onClick={scrollToClass} >Login</a>
                                <a className="signup" href="/register">Sign Up</a>
                            </div>
                            {/* <div className="offcanvase__menu--contact center">
                                <h4 className="offcanvase__menu--contact-title mb-20">Contact Us</h4>
                                <div className="offcanvase__menu--contact-text">
                                    <ul>
                                        <li><a href="tel:+8801755202096">+8801755202096</a></li>
                                        <li><a href="mailto:contact@insomniacafe.org">contact@insomniacafe.org</a></li>
                                    </ul>
                                    <p>Kushtia Sador, Kushtia, Bangladesh</p>
                                </div>
                            </div> */}
                            <div className="offcanvase__menu--social">
                                <ul className="d-flex justify-content-center gap-3">
                                    <li className="social-item"><a href="#" target="_blank"><i
                                        className="fa-brands fa-facebook"></i></a></li>
                                    <li className="social-item"><a href="#" target="_blank"><i className="fa-brands fa-twitter"></i></a>
                                    </li>
                                    <li className="social-item"><a href="#" target="_blank"><i className="fa-brands fa-line"></i></a>
                                    </li>
                                    <li className="social-item"><a href="#" target="_blank"><i
                                        className="fa-brands fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                            {/* <div className="thanks-giving mt-5">
                                <img src="assets/img/thanks.jpg" alt="thank you" />
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="offcanvas__overlay"></div>

            <header className="header ">
                <div className="container mt-20 mb-20">
                    <div className="row">
                        <div className="header__wrapper ">
                            <div className="header__logo">
                                <a href="index.html"><img src="assets/images/logo.png" style={{ maxWidth: '250px' }}
                                    alt="Insoand Logo" /></a>
                            </div>
                            <div className="header__menu">
                                <nav Id="offcanvase__menu">
                                    {/* <ul>
                                            <li className="has-children"><a href="index.html">Home</a>
                                                <ul className="submenu">
                                                    <li><a href="index.html">Home One</a></li>
                                                    <li><a href="index-2.html">Home Two</a></li>
                                                    <li><a href="index-3.html">Home Three</a></li>
                                                    <li><a href="index-4.html">Home Four</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="about.html">About</a></li>
                                            <li className="has-children"><a href="portfolio.html">Portfolio</a>
                                                <ul className="submenu">
                                                    <li><a href="portfolio.html">Portfolio</a></li>
                                                    <li><a href="portfolio-details.html">Portfolio Details</a></li>
                                                </ul>
                                            </li>
                                            <li className="has-children"><a href="#">Page</a>
                                                <ul className="submenu">
                                                    <li className="has-children"><a href="#">Service</a>
                                                        <ul className="submenu">
                                                            <li><a href="service.html">Service</a></li>
                                                            <li><a href="service-details.html">Service Details</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="has-children"><a href="team.html">Team</a>
                                                        <ul className="submenu">
                                                            <li><a href="team.html">Team</a></li>
                                                            <li><a href="team-details.html">Team Details</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="has-children"><a href="shop.html">Shop</a>
                                                        <ul className="submenu">
                                                            <li><a href="shop.html">Shop</a></li>
                                                            <li><a href="shop-details.html">Shop Details</a></li>
                                                            <li><a href="cart.html">Cart</a></li>
                                                            <li><a href="checkout.html">checkout</a></li>
                                                        </ul>
                                                    </li>

                                                    <li className="has-children"><a href="career.html">Career</a>
                                                        <ul className="submenu">
                                                            <li><a href="career.html">Career</a></li>
                                                            <li><a href="career-details.html">Career Details</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="testimonial.html">Testimonial</a></li>
                                                    <li><a href="pricing.html">Pricing</a></li>
                                                    <li><a href="faq.html">Faq</a></li>
                                                    <li><a href="404.html">404</a></li>
                                                </ul>
                                            </li>
                                            <li className="has-children"><a href="blog.html">Blog</a>
                                                <ul className="submenu">
                                                    <li><a href="blog.html">Blog</a></li>
                                                    <li><a href="blog-left.html">Blog Left Sidebar</a></li>
                                                    <li><a href="blog-details.html">Blog Details</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="contact.html">Contact</a></li>
                                        </ul>  */}
                                </nav>
                            </div>
                            <div className="header__right">
                                <div className="header__right--btn">
                                    <a className="login" href="#" onClick={scrollToClass} >Login</a>
                                    <a className="signup" href="/register">Sign Up</a>
                                </div>
                                <button className="menu-icon d-md-block d-lg-none"><i className="fa-sharp fa-solid fa-bars"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="hero pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="hero__text">
                                <div className="hero__vector">
                                    <img src="assets/img/animated-icon/graph.png" alt="graph" />

                                    <img src="assets/img/animated-icon/star-icon.png" alt="graph" />
                                </div>
                                <div className="hero__text--content relative">
                                    <h2>
                                        Streamline Your Wealth <br />
                                        with &nbsp;
                                        {/* <!-- <span>Mars</span>Connecting --> */}
                                        <img src="assets/images/logo2.png" width="590px" />
                                        
                                    </h2>
                                    {/* <!-- <div className="hero__video" data-sal="slide-left" data-sal-delay="400"
                                                            data-sal-easing="ease-out-back">
                                                            <div className="video-img">
                                                                <img src="assets/img/hero/team.jpg" alt=""/>
                                                                    <div className="video-play" data-video-id="u31qwQUeGuM"><i className="fa-solid fa-play"></i>
                                                                    </div>
                                                            </div>
                                                        </div> --> */}
                                </div>

                                <p>Welcome to our premier money helping platform, where financial empowerment meets community support. Join a network of individuals dedicated to mutual assistance and prosperity. Experience the power of collective financial growth today!
                                </p>
                                <div className="hero__button">
                                    <a href="#" className="rounded-btn">Get in Touch <span><i
                                        className="fa-sharp fa-light fa-arrow-right-long"></i></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero-slider slider">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="slider__wrapper">

                                <div className="slider__single">
                                {/* <img src="assets/images/building.jpeg" alt="slider" /> */}
                                    <img src="assets/images/banner.png" alt="slider" />
                                    <ul className="slider--content">
                                        <li><img src="assets/img/hero/customer-1.jpg" alt="1" /></li>
                                        <li><img src="assets/img/hero/customer-2.jpg" alt="1" /></li>
                                        <li><i className="fa-solid fa-plus"></i></li>
                                        <li>
                                            <span className=""><b>1K+</b> <br />Happy Clients</span>
                                        </li>
                                    </ul>
                                </div>
                                {/* <!-- <div className="slider__single">
                                    <img src="assets/img/hero/customer-service-cute-guy-grey-suit-with-computer-headset-smiling-showing-good-gesture.jpg"
                                        alt="slider">
                                        <ul className="slider--content">
                                            <li><img src="assets/img/hero/customer-1.jpg" alt="1"></li>
                                            <li><img src="assets/img/hero/customer-2.jpg" alt="1"></li>
                                            <li><i className="fa-solid fa-plus"></i></li>
                                            <li>
                                                <span className=""><b>2K+</b> <br>Download+</span>
                                            </li>
                                        </ul>

                                </div> --> */}
                                {/* <!-- <div className="slider__single">
                                    <img src="assets/img/hero/modern-equipped-computer-lab.jpg" alt="slider">
                                        <ul className="slider--content">
                                            <li><img src="assets/img/hero/customer-1.jpg" alt="1"></li>
                                            <li><img src="assets/img/hero/customer-2.jpg" alt="1"></li>
                                            <li><i className="fa-solid fa-plus"></i></li>
                                            <li>
                                                <span className=""><b>20+</b> <br>Projects Running</span>
                                            </li>
                                        </ul>
                                </div> --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="information pt-100 pb-100">
                <div className="information__wrapper animated-marque">
                    <div className="information__content">
                        <div className="single-information">
                            <div className="icon"><img src="assets/img/animated-icon/star.png" alt="star" /></div>
                            <h6> Your <span>Trust</span>, Our <span>Priority</span>: Crafting a Future Together.</h6>
                        </div>

                        <div className="single-information">
                            <div className="icon"><img src="assets/img/animated-icon/star.png" alt="star" /></div>
                            <h6> Your <span>Trust</span>, Our <span>Priority</span>: Crafting a Future Together.</h6>
                        </div>

                        <div className="single-information">
                            <div className="icon"><img src="assets/img/animated-icon/star.png" alt="star" /></div>
                            <h6> Your <span>Trust</span>, Our <span>Priority</span>: Crafting a Future Together.</h6>
                        </div>
                        <div className="single-information">
                            <div className="icon"><img src="assets/img/animated-icon/star.png" alt="star" /></div>
                            <h6> Your <span>Trust</span>, Our <span>Priority</span>: Crafting a Future Together.</h6>
                        </div>
                        <div className="single-information">
                            <div className="icon"><img src="assets/img/animated-icon/star.png" alt="star" /></div>
                            <h6> Your <span>Trust</span>, Our <span>Priority</span>: Crafting a Future Together.</h6>
                        </div>
                        <div className="single-information">
                            <div className="icon"><img src="assets/img/animated-icon/star.png" alt="star" /></div>
                            <h6> Your <span>Trust</span>, Our <span>Priority</span>: Crafting a Future Together.</h6>
                        </div>
                        <div className="single-information">
                            <div className="icon"><img src="assets/img/animated-icon/star.png" alt="star" /></div>
                            <h6> Your <span>Trust</span>, Our <span>Priority</span>: Crafting a Future Together.</h6>
                        </div>
                        <div className="single-information">
                            <div className="icon"><img src="assets/img/animated-icon/star.png" alt="star" /></div>
                            <h6> Your <span>Trust</span>, Our <span>Priority</span>: Crafting a Future Together.</h6>
                        </div>
                        <div className="single-information">
                            <div className="icon"><img src="assets/img/animated-icon/star.png" alt="star" /></div>
                            <h6> Your <span>Trust</span>, Our <span>Priority</span>: Crafting a Future Together.</h6>
                        </div>
                        <div className="single-information">
                            <div className="icon"><img src="assets/img/animated-icon/star.png" alt="star" /></div>
                            <h6> Your <span>Trust</span>, Our <span>Priority</span>: Crafting a Future Together.</h6>
                        </div>
                        <div className="single-information">
                            <div className="icon"><img src="assets/img/animated-icon/star.png" alt="star" /></div>
                            <h6> Your <span>Trust</span>, Our <span>Priority</span>: Crafting a Future Together.</h6>
                        </div>

                    </div>
                </div>
            </div>

            <section className="service pt-100 pb-70">
                <div className="container">
                    <div className="section">
                        <div className="section__content">
                            <h6 className="section__sub">Which Services We Provide</h6>
                            <h3 className="section__title">Lets See what we provides</h3>
                        </div>
                        <div className="view__all">
                            <a href="service.html">View All Services</a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-xl-3 col-md-6">
                            <div className="service__single">
                                <div className="service__single--box">
                                    <div className="icon"><img src="assets/img/icon/graph.svg" alt="" /></div>
                                    <div className="service__single--box-meta">
                                        <div className="meta-text">
                                            <a href="#">Collaborative Initiatives</a>
                                        </div>
                                        <div className="meta-linkbtn">
                                            <a href="#" className="link-btn"><i
                                                className="fa-sharp fa-light fa-arrow-right-long"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-xl-3 col-md-6">
                            <div className="service__single">
                                <div className="service__single--box">
                                    <div className="icon"><img src="assets/img/icon/software.svg" alt="" /></div>
                                    <div className="service__single--box-meta">
                                        <div className="meta-text">
                                            <a href="#">Community Support</a>
                                        </div>
                                        <div className="meta-linkbtn">
                                            <a href="#" className="link-btn"><i
                                                className="fa-sharp fa-light fa-arrow-right-long"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-xl-3 col-md-6">
                            <div className="service__single">
                                <div className="service__single--box">
                                    <div className="icon"><img src="assets/img/icon/product.svg" alt="" /></div>
                                    <div className="service__single--box-meta">
                                        <div className="meta-text">
                                            <a href="#">Crowdsourced Solutions</a>
                                        </div>
                                        <div className="meta-linkbtn">
                                            <a href="#" className="link-btn"><i
                                                className="fa-sharp fa-light fa-arrow-right-long"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-xl-3 col-md-6">
                            <div className="service__single">
                                <div className="service__single--box">
                                    <div className="icon"><img src="assets/img/icon/ui.svg" alt="" /></div>
                                    <div className="service__single--box-meta">
                                        <div className="meta-text">
                                            <a href="#">Resource<br /> Sharing</a>
                                        </div>
                                        <div className="meta-linkbtn">
                                            <a href="#" className="link-btn"><i
                                                className="fa-sharp fa-light fa-arrow-right-long"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-xl-3 col-md-6">
                            <div className="service__single">
                                <div className="service__single--box">
                                    <div className="icon"><img src="assets/img/icon/brand.svg" alt="" /></div>
                                    <div className="service__single--box-meta">
                                        <div className="meta-text">
                                            <a href="#">Communication Focus</a>
                                        </div>
                                        <div className="meta-linkbtn">
                                            <a href="#" className="link-btn"><i
                                                className="fa-sharp fa-light fa-arrow-right-long"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-xl-3 col-md-6">
                            <div className="service__single">
                                <div className="service__single--box">
                                    <div className="icon"><img src="assets/img/icon/marketing.svg" alt="" /></div>
                                    <div className="service__single--box-meta">
                                        <div className="meta-text">
                                            <a href="#">Social<br />
                                                Networking</a>
                                        </div>
                                        <div className="meta-linkbtn">
                                            <a href="#" className="link-btn"><i
                                                className="fa-sharp fa-light fa-arrow-right-long"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-xl-3 col-md-6">
                            <div className="service__single">
                                <div className="service__single--box">
                                    <div className="icon"><img src="assets/img/icon/graphic.svg" alt="" /></div>
                                    <div className="service__single--box-meta">
                                        <div className="meta-text">
                                            <a href="#">Financial<br /> Security</a>
                                        </div>
                                        <div className="meta-linkbtn">
                                            <a href="#" className="link-btn"><i
                                                className="fa-sharp fa-light fa-arrow-right-long"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-xl-3 col-md-6">
                            <div className="service__single">
                                <div className="service__single--box">
                                    <div className="icon"><img src="assets/img/icon/uiux.svg" alt="" /></div>
                                    <div className="service__single--box-meta">
                                        <div className="meta-text">
                                            <a href="#">Financial Independence</a>
                                        </div>
                                        <div className="meta-linkbtn">
                                            <a href="#" className="link-btn"><i
                                                className="fa-sharp fa-light fa-arrow-right-long"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <div id="login-class" className="container mt- mb-20">
                <div className="card bg-dark p-3 shadow">
                    <div className="row">
                        <div className="col-lg-6"><br /><br />
                            <h3 className="text-white text-center mt-5">Sign In</h3>

                            <div className="login__form input__form p-4">
                                <form action="#">

                                    <div className="form-group">
                                        <input type="email" className="form-control" id="exampleInputEmail1"
                                            placeholder="Enter Your Email" />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" id="exampleInputPassword11"
                                            placeholder="Enter Your Password" />
                                    </div>


                                    <div className="login-button register-button">
                                        <button type="submit" className="main-btn">Login</button>
                                    </div>
                                    <p className="text-white text-center mt-2">
                                     Don't have an account ?<Link to="/register"> Sign Up </Link>
                                    </p>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <img src="assets/images/img1.png" />
                        </div>
                    </div>
                </div>
            </div>


            <div style={myStyles}>
                <marquee><h5>📱✨ Exciting news ahead! 🚀 Stay tuned for our iOS and Android app! 🎉</h5></marquee>
            </div>




            {/* <div className="scroll active-scroll">
                <svg className="scroll__circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                    <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
                        style="transition: stroke-dashoffset 10ms linear 0s; stroke-dasharray: 307.919px, 307.919px; stroke-dashoffset: 244.073px;">
                    </path>
                </svg>
            </div> */}



        </div >
    }
}

export default Home;