let data = fetch('http://localhost:6138/discount/get').then(data => data).then((data) => { return data });
let html = '';

function TopDiscountCards() {
    for(let key in data) {
        console.log(data[key]);
        html+=
            <div className="single-discount-area">
                <h5>Free Shipping &amp; Returns</h5>
                <h6><a href="buy">BUY NOW</a></h6>
            </div>
        ;
    }
    return (<section className="top-discount-area d-md-flex align-items-center"> {html} </section>);
}

export default TopDiscountCards