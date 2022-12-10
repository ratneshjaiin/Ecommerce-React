import React from 'react'
import { useGlobleContext } from '../context';

const HeroSection = () => {
    const {name,title} = useGlobleContext();
  return (
    <section className="section-about-block">
    <div className="container">
        <div className="row  about-blocks align-items-center ">
            <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="section-about-block-content ">
                    <h3 className="mb-3">{name}</h3>
                    <p className="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sint
                        assumenda
                        veniam, numquam cumque cupiditate adipisci quod fugiat, explicabo tempora ullam et
                        tempore. Exercitationem voluptatem recusandae, quisquam nulla veritatis fugiat?
                    </p>
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
            <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="about-block-img">
                    <img src='https://www.parallels.com/static/pl/fileadmin/res/img/partner/2022/affiliate/hero-bg.png' alt="" />
                </div>
            </div>
        </div>
    </div>
</section>
 )
}
export default HeroSection