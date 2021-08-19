import React, { useState } from 'react';
import Aboutapi from './Api/Aboutapi';

const Aboutus = () => {
    const [Aboutwork , SetAboutWork]=useState(Aboutapi);
    return (
        <>
            <section className="common-section our_services">
        <div className="container mb-5">
          <div className="row">
            <div className="col-12 col-lg-5 text-center our_service_leftside_img">
              <img src="./images/hero3.jpg" alt="aboutusIMg" />
            </div>

            {/* 1section right side data  */}
            <div className="col-12 col-lg-7 our_services_list">
              <h3 className="mini_title">
                -- AVAILABLE @ GOOGLE AND IOS APP STORE ONLY
              </h3>
              <h1 className="main_heading">How to use the App?</h1>

                    {
                        Aboutwork.map((curElem)=>{
                            const{id,title,info} = curElem
                            return(
                                <>
                    <div className="row our_services_info" key={id} >
                      <div className="col-1 our_services_number">{id}</div>
                      <div className="col-10 our_services_data">
                        <h2>{title}</h2>
                        <p className="main-hero-para">{info}</p>
                      </div>
                      </div>

                    
                                </>
                                
                            )

                        })
                    }
                 

              <br />
              <button className="btn_style btn_style_border">learn more</button>
            </div>
          </div>
        </div>
      </section>









      {/* 2nd part of about */}

            <section className="common-section our_services our_service_rightside">
        <div className="container mb-5">
          <div className="row">
            

            {/* 1section right side data  */}
            <div className="col-12 col-lg-7 our_service_rightside_content d-flex justify-content-center align-items-start flex-column">
              <h3 className="mini_title">
                -- SUPPORT IN ANY LANGUAGES
              </h3>
              <h1 className="main_heading">World Class support is available <br/> 24/7</h1>

                    {
                        Aboutwork.map((curElem)=>{
                            const{id,title,info} = curElem
                            return(
                                <>
                    <div className="row our_services_info" key={id} >
                      <div className="col-1 our_services_number">{id}</div>
                      <div className="col-10 our_services_data">
                        <h2>{title}</h2>
                        <p className="main-hero-para">{info}</p>
                      </div>
                      </div>
                                </>  
                            )
                        })
                    }
              <br />
              <button className="btn_style btn_style_border">learn more</button>
            </div>

            {/* images section */}
            <div className="col-12 col-lg-5  our_service_rightside_img">
              <img src="./images/callcenter.jpg" alt="aboutusIMg" />
            </div>
          </div>
        </div>
      </section>

        </>

    );
}

export default Aboutus;