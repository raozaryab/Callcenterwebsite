import React ,{useState} from 'react'
import Serviceapi from "./Api/Serviceapi"

const Service = () => {
    const [serviceData, setServiceData] = useState(Serviceapi);
    return (
      <>
        <section className="service_main_container">
          <div className="container service_container">
            <h1 className="main_heading text-center fw-bold">
              How to send money
            </h1>
            <div className="row">
              {serviceData.map((curElem) => {
                const { id, logo, title, info } = curElem;
                return (
                  <>
                    <div
                      className="col-11 col-lg-4 col-xxl-4 work_container_subdiv"
                      key={id}>
                      <i className={`fontawesome_style ${logo}`}></i>
                      <h2 className="sub_heading">{title}</h2>
                      <p className="main-hero-para">{info}</p>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </section>
      </>
    );
  };
  
  export default Service;