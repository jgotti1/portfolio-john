import React from "react";
import "./services.css";
import { FaCheckCircle } from "react-icons/fa";

function Services() {
  return (
    <section id="Services">
      <h5 className="offer">What I Offer</h5>
      <h2 className="services_title">Services</h2>
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
              <p>Obtain a new domain name for your site</p>
            </li>
            <li>
              <p>
                <FaCheckCircle className="service_list-icon" />
              </p>
              <p>Migrate an exsisting domain name to a new hosting service</p>
            </li>
            <li>
              <p>
                <FaCheckCircle className="service_list-icon" />
              </p>
              <p>Host and maintain your exsisting web site</p>
            </li>
            <li>
              <p>
                <FaCheckCircle className="service_list-icon" />
              </p>
              <p>Host and maintain a newly designed web site</p>
            </li>
            <li>
              <p>
                <FaCheckCircle className="service_list-icon" />
              </p>
              <p>Host and maintain an exsisting designed web app and database</p>
            </li>
            <li>
              <p>
                <FaCheckCircle className="service_list-icon" />
              </p>
              <p>Host and maintain a newly designed web app and database</p>
            </li>
          </ul>
        </article>

        {/* Web app section */}
        <article className="service">
          <div className="service_head">
            <h3>Web Application Design</h3>
          </div>
          <ul className="service_list">
            <li>
              <p>
                <FaCheckCircle className="service_list-icon" />
              </p>
              <p>Obtain a new domain name for your site</p>
            </li>
            <li>
              <p>
                <FaCheckCircle className="service_list-icon" />
              </p>
              <p>Migrate an exsisting domain name to a new hosting service</p>
            </li>
            <li>
              <p>
                <FaCheckCircle className="service_list-icon" />
              </p>
              <p>Host and maintain your exsisting web site</p>
            </li>
            <li>
              <p>
                <FaCheckCircle className="service_list-icon" />
              </p>
              <p>Host and maintain a newly designed web site</p>
            </li>
            <li>
              <p>
                <FaCheckCircle className="service_list-icon" />
              </p>
              <p>Host and maintain an exsisting designed web app and database</p>
            </li>
            <li>
              <p>
                <FaCheckCircle className="service_list-icon" />
              </p>
              <p>Complete maintenance of you hosted web page and or application </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Services;
