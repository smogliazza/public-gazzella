import logo from './../../assets/img/logo.png'
let auth = false;

function Foot() {
    return (
        <footer className="footer_area">
            <div className="container">
                <div className="row">
                    {/* Single Footer Area Start */}
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="single_footer_area">
                            <div className="footer-logo">
                                <img src={logo} alt="" width='70'/>
                            </div>
                            <div className="copywrite_text d-flex align-items-center">
                                <p>
                                    Copyright &copy;<script>document.write(new Date().getFullYear());</script> Todos los derechos reservados.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Single Footer Area Start */}
                    <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                        <div className="single_footer_area">
                            <ul className="footer_widget_menu">
                                <li><a href="#.">Inicio</a></li>
                                <li><a href="#.">Faq</a></li>
                                <li><a href="#.">Contacto</a></li>
                            </ul>
                        </div>
                    </div>
                    {/* Single Footer Area Start */}
                    <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                        <div className="single_footer_area">
                            <ul className="footer_widget_menu">
                                {(auth) ? <li><a href="#.">My Account</a></li> : ''}
                                <li><a href="#.">Envios</a></li>
                                <li><a href="#.">Nuestras politicas</a></li>
                            </ul>
                        </div>
                    </div>
                    {/* Single Footer Area Start */}
                    <div className="col-12 col-lg-5">
                        <div className="single_footer_area">
                            <div className="footer_heading mb-30">
                                <h6>Subscribete para recibir ofertas</h6>
                            </div>
                            <div className="subscribtion_form">
                                <form>
                                    <input type="email" name="mail" className="mail" placeholder="Tu email aqui" />
                                    <button type="submit" className="submit">Subscribirme</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="line"></div>

                {/* Footer Bottom Area Start */}
                <div className="footer_bottom_area">
                    <div className="row">
                        <div className="col-12">
                            <div className="footer_social_area text-center">
                                <a href="https://www.instagram.com/gazzella.uy/" target="_blank" rel="noreferrer"> <i className="fa fa-instagram" aria-hidden="true"></i> </a>
                                <a href="https://m.facebook.com/gazzellauy/?ref=bookmarks" target="_blank" rel="noreferrer"> <i className="fa fa-facebook" aria-hidden="true"></i> </a>
                                <a href="https://api.whatsapp.com/send?phone=59892035758&text=Hola%2C%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20el%5Cla" target="_blank" rel="noreferrer"> <i className="fa fa-whatsapp" aria-hidden="true"></i> </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Foot