import React from "react";
import "./services.css";
import { FaCheckCircle } from "react-icons/fa";

function Services() {
  return (
    <section id="Services">
      <h5 className="offer">What I Offer</h5>
      <h2 className="services_title">Freelance Services</h2>
      <h5>Call or contact me for more details and pricing</h5>

      <div className="container services_container ">
        {/* hosting section */}
        <article className="service">
          <div className="service_head">
            <h3>Hosting</h3>
          </div>
          <ul className="service_list">
            <li>
              <p>
                <p>
                  <FaCheckCircle className="service_list-icon" />
                </p>
              </p>
              <p>Obtain a new domain name for your web site</p>
            </li>

            <li>
              <p>
                <p>
                  <FaCheckCircle className="service_list-icon" />
                </p>
              </p>
              <p>Migrate an exsisting domain name to a new hosting service</p>
            </li>

            <li>
              <p>
                <p>
                  <FaCheckCircle className="service_list-icon" />
                </p>
              </p>
              <p>Host and maintain your exsisting web site</p>
            </li>

            <li>
              <p>
                <p>
                  <FaCheckCircle className="service_list-icon" />
                </p>
              </p>
              <p>Host and maintain a newly designed web site</p>
            </li>
            <li>
              <p>
                <p>
                  <FaCheckCircle className="service_list-icon" />
                </p>
              </p>
              <p>Host and maintain a web application and or database</p>
            </li>

            <li>
              <p>
                <p>
                  <FaCheckCircle className="service_list-icon" />
                </p>
              </p>
              <p>Many more hosting services, call or contact for details</p>
            </li>
          </ul>
        </article>

        {/* Web design section */}
        <article className="service">
          <div className="service_head">
            <h3>Web Page Design</h3>
          </div>
          <ul className="service_list">
            <li>
              <p>
                <FaCheckCircle className="service_list-icon" />
              </p>
              <p>Design your web simple static web site from the ground up</p>
            </li>
            
            <li>
              <p>
                <FaCheckCircle className="service_list-icon" />
              </p>
              <p>Design your more advanced, multible page web site from start to finish</p>
            </li>
            <li>
              <p>
                <FaCheckCircle className="service_list-icon" />
              </p>
              <p>Update an exsisting web site</p>
            </li>
            <li>
              <p>
                <FaCheckCircle className="service_list-icon" />
              </p>
              <p>Maintain a new or exsisting web site</p>
            </li>
            <li>
              <p>
                <FaCheckCircle className="service_list-icon" />
              </p>
              <p>Deploy your new site  to your custom domain name</p>
            </li>
            <li>
              <p>
                <FaCheckCircle className="service_list-icon" />
              </p>
              <p>Many more web design services, call or contact for more details</p>
            </li>
          
          </ul>
        </article>

        {/* Web app section */}
        <article className="service service_last">
          <div className="service_head">
            <h3>Web Application Design</h3>
          </div>
          <ul className="service_list">
            <li>
              <p>
                <FaCheckCircle className="service_list-icon" />
              </p>
              <p>Design your web application from the ground up</p>
            </li>
            <li>
              <p>
                <FaCheckCircle className="service_list-icon" />
              </p>
              <p>Create and design a database for your web application as needed</p>
            </li>
            <li>
              <p>
                <FaCheckCircle className="service_list-icon" />
              </p>
              <p>Maintain and update your web application as needed </p>
            </li>
            <li>
              <p>
                <FaCheckCircle className="service_list-icon" />
              </p>
              <p>Email and texting service availible for your web site</p>
            </li>
            <li>
              <p>
                <FaCheckCircle className="service_list-icon" />
              </p>
              <p>Complete maintenance of you hosted web page and or application </p>
            </li>
            <li>
              <p>
                <FaCheckCircle className="service_list-icon" />
              </p>
              <p>Let me design a web application to fit your needs, call or contact me today</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Services;
