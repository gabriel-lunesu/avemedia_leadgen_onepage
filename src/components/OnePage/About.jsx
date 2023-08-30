import React from 'react';

function About() {
  return (
    <section className="about section-padding">
      <div className="container">
        <div className="row md-marg">
          <div className="col-lg-6 valign">
            <div className="cont md-mb50">
              <h6 className="sub-title opacity-8 wow fadeInUp">About Us.</h6>
              <h2 className="d-slideup wow">
                <span className="sideup-text">
                  <span className="up-text">We are a <span className="sub-font">full–service</span></span>
                </span>
                <span className="sideup-text">
                  <span className="up-text"><u>Lead Generation</u> Agency.</span>
                </span>
                <span className="sideup-text">
                <span className="sub-font">money back guarantee!</span>
                </span>
              </h2>
              <div className="text mt-20 wow fadeIn" data-wow-delay=".5s">
                <p>Based in <b>Amsterdam</b> and extending our expertise to <b>Dubai and the UAE</b>, Ave Media is your one-stop digital agency. Specializing in <b>lead generation</b> through precision-targeted paid ads, we're not just confident in our skills—we guarantee results! Beyond generating leads, our comprehensive suite of services encompasses web design, branding, and more. Whether you're looking to craft an impeccable online presence or drive unparalleled business growth, <b>Ave Media is committed to turning your vision into reality.</b></p>
              </div>
              <div className="stutas pt-40 mt-40 bord-thin-top">
                <div className="row">
                  <div className="col-md-6">
                    <div className="d-flex align-items-center sm-mb30">
                      <div className="mr-30">
                        <h2 className="stroke fw-800">22+</h2>
                      </div>
                      <div>
                        <h6 className="sub-title ls1 opacity-8">Months <br/> To craft our strategy</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex align-items-center">
                      <div className="mr-30">
                        <h2 className="stroke fw-800"></h2>
                      </div>
                      <div>
                        <h6 className="sub-title ls1 opacity-8"> <br /> </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="img">
              <img src="/dark/assets/imgs/about/book1.png" alt="" />
              <div className="exp main-bg">
                <h2>8+</h2>
                <h6 className="sub-title">Years Of Experience</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About