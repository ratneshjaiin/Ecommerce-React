import React from 'react'

const Footer = () => {
  return (
    <footer>
    <div className="container">
        <div className="footer-block">
            <div className="row">
                <div className="col-md-3 col-sm-6 col-xs-12">
                    <div className="company-details">
                        <div className="footer-heading">
                            <h5>follow us</h5>
                        </div>
                        <p>Lorem ipsum dolor sit amet </p>
                        <div className="foo-social">
                            <ul className="foo-icons">
                                <li><a href=""><i className="fa-brands fa-facebook-f"></i></a></li>
                                <li><a href=""><i className="fa-brands fa-twitter"></i></a></li>
                                <li><a href=""><i className="fa-brands fa-instagram"></i></a></li>
                                <li><a href=""><i className="fa-brands fa-pinterest"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12">
                    <div className="company-details">
                        <div className="footer-heading">
                            <h5>need help?</h5>
                        </div>
                        <div className="need-help">
                            <ul className="help-us">
                                <li><a href="">Report a problem</a></li>
                                <li><a href="">Purchases</a></li>
                                <li><a href="">my app Account</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12">
                    <div className="company-details">
                        <div className="footer-heading">
                            <h5>contract us</h5>
                        </div>
                        <div className="contract-us">
                            <ul className="contract">
                                <li><a href="">contract page</a></li>
                                <li><a href="">Customer Service <br/>888-555-9955</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12">
                    <div className="company-details">
                        <div className="footer-heading">
                            <h5>Download the app</h5>
                        </div>
                        <div className="download-btn mb-3">
                            <div className="apple-btn">
                                <button>App Stode</button>
                                <a href=""><i className="fa-brands fa-apple"></i></a>
                            </div>
                            <div className="play-store">
                                <button>Google play</button>
                                <a href=""><i className="fa-brands fa-google-play"></i></a>
                            </div>
                        </div>
                    </div>   
                </div>
            </div>
        </div>   
        <div className="copyrighy">
            <h6>{new Date().getFullYear()} Daybreak Market <span>|</span> Desigread By Bluestone</h6>
         </div>
    </div>
</footer>
  )
}
export default Footer 