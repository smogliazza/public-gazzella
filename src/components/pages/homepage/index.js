/* eslint-disable react/style-prop-object */
function Index() {
    return (
        <div>
            {/* Welcome Slides Area Start */}
            <section className="welcome_area">
                <div className="welcome_slides owl-carousel">
                    {/* Single Slide Start */}
                    <div className="single_slide height-800 bg-img background-overlay"
                        style={{backgroundImage: "url(img/bg-img/bg-1.jpg)"}}>
                        <div className="container h-100">
                            <div className="row h-100 align-items-center">
                                <div className="col-12">
                                    <div className="welcome_slide_text">
                                        <h6 data-animation="bounceInDown" data-delay="0" data-duration="500ms">* Only today we offer
                                            free shipping</h6>
                                        <h2 data-animation="fadeInUp" data-delay="500ms" data-duration="500ms">Fashion Trends</h2>
                                        <a href="#." className="btn karl-btn" data-animation="fadeInUp" data-delay="1s"
                                            data-duration="500ms">Shop Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Single Slide Start */}
                    <div className="single_slide height-800 bg-img background-overlay"
                        style={{backgroundImage: "url(img/bg-img/bg-4.jpg)"}}>
                        <div className="container h-100">
                            <div className="row h-100 align-items-center">
                                <div className="col-12">
                                    <div className="welcome_slide_text">
                                        <h6 data-animation="fadeInDown" data-delay="0" data-duration="500ms">* Only today we offer
                                            free shipping</h6>
                                        <h2 data-animation="fadeInUp" data-delay="500ms" data-duration="500ms">Summer Collection
                                        </h2>
                                        <a href="#." className="btn karl-btn" data-animation="fadeInLeftBig" data-delay="1s"
                                            data-duration="500ms">Check Collection</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Single Slide Start */}
                    <div className="single_slide height-800 bg-img background-overlay"
                        style={{backgroundImage: "url(img/bg-img/bg-2.jpg)"}}>
                        <div className="container h-100">
                            <div className="row h-100 align-items-center">
                                <div className="col-12">
                                    <div className="welcome_slide_text">
                                        <h6 data-animation="fadeInDown" data-delay="0" data-duration="500ms">* Only today we offer
                                            free shipping</h6>
                                        <h2 data-animation="bounceInDown" data-delay="500ms" data-duration="500ms">Women Fashion
                                        </h2>
                                        <a href="#." className="btn karl-btn" data-animation="fadeInRightBig" data-delay="1s"
                                            data-duration="500ms">Check Collection</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Welcome Slides Area End */}

            {/* Top Catagory Area Start */}
            <section className="top_catagory_area d-md-flex clearfix">
                {/* Single Catagory */}
                <div className="single_catagory_area d-flex align-items-center bg-img"
                    style={{backgroundImage: "url(img/bg-img/bg-2.jpg)"}}>
                    <div className="catagory-content">
                        <h6>On Accesories</h6>
                        <h2>Sale 30%</h2>
                        <a href="#." className="btn karl-btn">SHOP NOW</a>
                    </div>
                </div>
                {/* Single Catagory */}
                <div className="single_catagory_area d-flex align-items-center bg-img"
                    style={{backgroundImage: "url(img/bg-img/bg-3.jpg)"}}>
                    <div className="catagory-content">
                        <h6>in Bags excepting the new collection</h6>
                        <h2>Designer bags</h2>
                        <a href="#." className="btn karl-btn">SHOP NOW</a>
                    </div>
                </div>
            </section>
            {/* Top Catagory Area End */}

            {/* Quick View Modal Area Start */}
            <div className="modal fade" id="quickview" tabIndex="-1" role="dialog" aria-labelledby="quickview" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <button type="button" className="close btn" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>

                        <div className="modal-body">
                            <div className="quickview_body">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12 col-lg-5">
                                            <div className="quickview_pro_img">
                                                <img src="img/product-img/product-1.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-7">
                                            <div className="quickview_pro_des">
                                                <h4 className="title">Boutique Silk Dress</h4>
                                                <div className="top_seller_product_rating mb-15">
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                </div>
                                                <h5 className="price">$120.99 <span>$130</span></h5>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia expedita
                                                    quibusdam aspernatur, sapiente consectetur accusantium perspiciatis praesentium
                                                    eligendi, in fugiat?</p>
                                                <a href="#.">View Full Product Details</a>
                                            </div>
                                            {/* Add to Cart Form */}
                                            <form className="cart" method="post">
                                                <div className="quantity">
                                                    <span className="qty-minus"
                                                        ><i
                                                            className="fa fa-minus" aria-hidden="true"></i></span>

                                                    <input type="number" className="qty-text" id="qty" step="1" min="1" max="12"
                                                        name="quantity" />

                                                    <span className="qty-plus"
                                                        ><i
                                                            className="fa fa-plus" aria-hidden="true"></i></span>
                                                </div>
                                                <button type="submit" name="addtocart" className="cart-submit">Add to
                                                    cart</button>
                                                {/* Wishlist */}
                                                <div className="modal_pro_wishlist">
                                                    <a href="wishlist.html" target="_blank"><i className="ti-heart"></i></a>
                                                </div>
                                                {/* Compare */}
                                                <div className="modal_pro_compare">
                                                    <a href="compare.html" target="_blank"><i className="ti-stats-up"></i></a>
                                                </div>
                                            </form>

                                            <div className="share_wf mt-30">
                                                <p>Share With Friend</p>
                                                <div className="_icon">
                                                    <a href="#."> <i className="fa fa-facebook" aria-hidden="true"></i> </a>
                                                    <a href="#."> <i className="fa fa-twitter" aria-hidden="true"></i> </a>
                                                    <a href="#."> <i className="fa fa-pinterest" aria-hidden="true"></i> </a>
                                                    <a href="#."> <i className="fa fa-google-plus" aria-hidden="true"></i> </a>
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
            {/* Quick View Modal Area End */}

            {/* New Arrivals Area Start */}
            <section className="new_arrivals_area section_padding_100_0 clearfix">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section_heading text-center">
                                <h2>New Arrivals</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="karl-projects-menu mb-100">
                    <div className="text-center portfolio-menu">
                        <button className="btn active" data-filter="*">ALL</button>
                        <button className="btn" data-filter=".women">WOMAN</button>
                        <button className="btn" data-filter=".man">MAN</button>
                        <button className="btn" data-filter=".access">ACCESSORIES</button>
                        <button className="btn" data-filter=".shoes">shoes</button>
                        <button className="btn" data-filter=".kids">KIDS</button>
                    </div>
                </div>

                <div className="container">
                    <div className="row karl-new-arrivals">

                        {/* Single gallery Item Start */}
                        <div className="col-12 col-sm-6 col-md-4 single_gallery_item women wow fadeInUpBig" data-wow-delay="0.2s">
                            {/* Product Image */}
                            <div className="product-img">
                                <img src="img/product-img/product-1.jpg" alt="" />
                                <div className="product-quicview">
                                    <a href="#." data-toggle="modal" data-target="#quickview"><i className="ti-plus"></i></a>
                                </div>
                            </div>
                            {/* Product Description */}
                            <div className="product-description">
                                <h4 className="product-price">$39.90</h4>
                                <p>Jeans midi cocktail dress</p>
                                {/* Add to Cart */}
                                <a href="#." className="add-to-cart-btn">ADD TO CART</a>
                            </div>
                        </div>

                        {/* Single gallery Item Start */}
                        <div className="col-12 col-sm-6 col-md-4 single_gallery_item women wow fadeInUpBig" data-wow-delay="0.3s">
                            {/* Product Image */}
                            <div className="product-img">
                                <img src="img/product-img/product-2.jpg" alt="" />
                                <div className="product-quicview">
                                    <a href="#." data-toggle="modal" data-target="#quickview"><i className="ti-plus"></i></a>
                                </div>
                            </div>
                            {/* Product Description */}
                            <div className="product-description">
                                <h4 className="product-price">$39.90</h4>
                                <p>Jeans midi cocktail dress</p>
                                {/* Add to Cart */}
                                <a href="#." className="add-to-cart-btn">ADD TO CART</a>
                            </div>
                        </div>

                        {/* Single gallery Item Start */}
                        <div className="col-12 col-sm-6 col-md-4 single_gallery_item access wow fadeInUpBig" data-wow-delay="0.4s">
                            {/* Product Image */}
                            <div className="product-img">
                                <img src="img/product-img/product-3.jpg" alt="" />
                                <div className="product-quicview">
                                    <a href="#." data-toggle="modal" data-target="#quickview"><i className="ti-plus"></i></a>
                                </div>
                            </div>
                            {/* Product Description */}
                            <div className="product-description">
                                <h4 className="product-price">$39.90</h4>
                                <p>Jeans midi cocktail dress</p>
                                {/* Add to Cart */}
                                <a href="#." className="add-to-cart-btn">ADD TO CART</a>
                            </div>
                        </div>

                        {/* Single gallery Item Start */}
                        <div className="col-12 col-sm-6 col-md-4 single_gallery_item shoes wow fadeInUpBig" data-wow-delay="0.5s">
                            {/* Product Image */}
                            <div className="product-img">
                                <img src="img/product-img/product-4.jpg" alt="" />
                                <div className="product-quicview">
                                    <a href="#." data-toggle="modal" data-target="#quickview"><i className="ti-plus"></i></a>
                                </div>
                            </div>
                            {/* Product Description */}
                            <div className="product-description">
                                <h4 className="product-price">$39.90</h4>
                                <p>Jeans midi cocktail dress</p>
                                {/* Add to Cart */}
                                <a href="#." className="add-to-cart-btn">ADD TO CART</a>
                            </div>
                        </div>

                        {/* Single gallery Item Start */}
                        <div className="col-12 col-sm-6 col-md-4 single_gallery_item women wow fadeInUpBig" data-wow-delay="0.6s">
                            {/* Product Image */}
                            <div className="product-img">
                                <img src="img/product-img/product-5.jpg" alt="" />
                                <div className="product-quicview">
                                    <a href="#." data-toggle="modal" data-target="#quickview"><i className="ti-plus"></i></a>
                                </div>
                            </div>
                            {/* Product Description */}
                            <div className="product-description">
                                <h4 className="product-price">$39.90</h4>
                                <p>Jeans midi cocktail dress</p>
                                {/* Add to Cart */}
                                <a href="#." className="add-to-cart-btn">ADD TO CART</a>
                            </div>
                        </div>

                        {/* Single gallery Item */}
                        <div className="col-12 col-sm-6 col-md-4 single_gallery_item kids man wow fadeInUpBig" data-wow-delay="0.7s">
                            {/* Product Image */}
                            <div className="product-img">
                                <img src="img/product-img/product-6.jpg" alt="" />
                                <div className="product-quicview">
                                    <a href="#." data-toggle="modal" data-target="#quickview"><i className="ti-plus"></i></a>
                                </div>
                            </div>
                            {/* Product Description */}
                            <div className="product-description">
                                <h4 className="product-price">$39.90</h4>
                                <p>Jeans midi cocktail dress</p>
                                {/* Add to Cart */}
                                <a href="#." className="add-to-cart-btn">ADD TO CART</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* New Arrivals Area End */}

            {/* Offer Area Start */}
            <section className="offer_area height-700 section_padding_100 bg-img" style={{backgroundImage: "url(img/bg-img/bg-5.jpg)"}}>
                <div className="container h-100">
                    <div className="row h-100 align-items-end justify-content-end">
                        <div className="col-12 col-md-8 col-lg-6">
                            <div className="offer-content-area wow fadeInUp" data-wow-delay="1s">
                                <h2>White t-shirt <span className="karl-level">Hot</span></h2>
                                <p>* Free shipping until 25 Dec 2017</p>
                                <div className="offer-product-price">
                                    <h3><span className="regular-price">$25.90</span> $15.90</h3>
                                </div>
                                <a href="#." className="btn karl-btn mt-30">Shop Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Offer Area End */}

            {/* Popular Brands Area Start */}
            <section className="karl-testimonials-area section_padding_100">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section_heading text-center">
                                <h2>Testimonials</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8">
                            <div className="karl-testimonials-slides owl-carousel">

                                {/* Single Testimonial Area */}
                                <div className="single-testimonial-area text-center">
                                    <span className="quote">"</span>
                                    <h6>Nunc pulvinar molestie sem id blandit. Nunc venenatis interdum mollis. Aliquam finibus nulla
                                        quam, a iaculis justo finibus non. Suspendisse in fermentum nunc.Nunc pulvinar molestie sem
                                        id blandit. Nunc venenatis interdum mollis. </h6>
                                    <div className="testimonial-info d-flex align-items-center justify-content-center">
                                        <div className="tes-thumbnail">
                                            <img src="img/bg-img/tes-1.jpg" alt="" />
                                        </div>
                                        <div className="testi-data">
                                            <p>Michelle Williams</p>
                                            <span>Client, Los Angeles</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Single Testimonial Area */}
                                <div className="single-testimonial-area text-center">
                                    <span className="quote">"</span>
                                    <h6>Nunc pulvinar molestie sem id blandit. Nunc venenatis interdum mollis. Aliquam finibus nulla
                                        quam, a iaculis justo finibus non. Suspendisse in fermentum nunc.Nunc pulvinar molestie sem
                                        id blandit. Nunc venenatis interdum mollis. </h6>
                                    <div className="testimonial-info d-flex align-items-center justify-content-center">
                                        <div className="tes-thumbnail">
                                            <img src="img/bg-img/tes-1.jpg" alt="" />
                                        </div>
                                        <div className="testi-data">
                                            <p>Michelle Williams</p>
                                            <span>Client, Los Angeles</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Single Testimonial Area */}
                                <div className="single-testimonial-area text-center">
                                    <span className="quote">"</span>
                                    <h6>Nunc pulvinar molestie sem id blandit. Nunc venenatis interdum mollis. Aliquam finibus nulla
                                        quam, a iaculis justo finibus non. Suspendisse in fermentum nunc.Nunc pulvinar molestie sem
                                        id blandit. Nunc venenatis interdum mollis. </h6>
                                    <div className="testimonial-info d-flex align-items-center justify-content-center">
                                        <div className="tes-thumbnail">
                                            <img src="img/bg-img/tes-1.jpg" alt="" />
                                        </div>
                                        <div className="testi-data">
                                            <p>Michelle Williams</p>
                                            <span>Client, Los Angeles</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </section>
            {/* Popular Brands Area End */}
        </div>
    );
}

export default Index