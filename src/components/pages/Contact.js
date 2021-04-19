import React from "react";
import ContactForm from "../ContactForm/ContactForm"
import "./index.css"


function Contact() {
  return (
    <div>
      <div className="container-fluid" >
        <section id="info" className="sec-info">
          <div className="sec-contanier mt-5">
            <h1>Info</h1>
            <div className="row">
              <div className="col-sm-6">
                <button>
                  <a data-toggle="popover"
                    href="https://drive.google.com/file/d/1UyOwt3lbH_OaslXe76A8fbK7qLcdhh7a/view?usp=sharing"><i
                      className="fa fa-user-circle big-icon"></i></a>

                </button>
                <h3>Avatar</h3>
                <p>Click the icon above to see my Avatar</p>
              </div>
              <div className="col-sm-6">
                <button>

                  <a href="https://my.indeed.com/p/carlosa-fs10kqu"><i className="fa fa-file big-icon"></i></a>
                </button>
                <h3>Resume</h3>
                <p>Click the icon above to see my Resume</p>
              </div>
              <div className="col">

              </div>

            </div>
          </div>
        </section>
        <div className="sec-contanier text-center mt-5">
          <h1>Info</h1>
          <div className="row">
            <div className="col">
              <ContactForm />
            </div>


          </div>
        </div>

      </div>


    </div>
  );
}

export default Contact;

