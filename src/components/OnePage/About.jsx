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
                  <span className="up-text"><u>Lead Generation Agency.</u></span>
                </span>
                <span className="sideup-text">
                  <span className="up-text"><i>We Garuantee</i>.</span>
                </span>
              </h2>
              <div className="text mt-20 wow fadeIn" data-wow-delay=".5s">
                <p>At Ave Media, we're so confident in our lead generation skills that we can <b>garuantee</b> our clients a number of leads they get. Otherwise... <i>Money. Back. Garuantee</i>.</p>
              </div>
              <div className="stutas pt-40 mt-40 bord-thin-top">
                <div className="row">
                  <div className="col-md-6">
                    <div className="d-flex align-items-center sm-mb30">
                      <div className="mr-30">
                        <h2 className="stroke fw-800">500+</h2>
                      </div>
                      <div>
                        <h6 className="sub-title ls1 opacity-8">High Quality <br /> Leads Generated</h6>
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