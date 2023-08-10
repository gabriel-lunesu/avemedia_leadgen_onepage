import React from 'react';

function Contact() {
  return (
    <section className="contact-crev no-crev section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="sec-head md-mb80">
              <h6 className="sub-title wow fadeInUp">Get In Touch</h6>
              <h2 className="fz-50 d-rotate wow">
                <span className="rotate-text">Let's build or scale your brand!</span>
              </h2>
              <p className="fz-15 mt-10">If you would like to work with us or just want to get in touch, we’d love to hear from you!</p>
              <div className="phone fz-30 fw-600 mt-30 underline main-color">
                <a href="#0">+971 58 526 3213</a>
              </div>
              <ul className="rest social-text d-flex mt-60">
                <li>
                  <a href="#0" className="hover-this"><span className="hover-anim">Instagram</span></a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1 valign">
            <div className="full-width">
              <form id="contact-form" method="post" action="contact.php">
                <div className="messages"></div>
                <div className="controls row">
                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <input id="form_name" type="text" name="name" placeholder="Name" required="required" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <input id="form_email" type="email" name="email" placeholder="Email" required="required" />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group mb-30">
                      <input id="form_subject" type="text" name="subject" placeholder="Subject" />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <textarea id="form_message" name="message" placeholder="Message" rows="4"
                        required="required"></textarea>
                    </div>
                    <div className="mt-30">
                      <button type="submit" className="butn butn-full butn-bord radius-30">
                        <span className="text">Let's Talk</span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact