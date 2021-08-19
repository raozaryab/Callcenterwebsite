import React from 'react';

const Header = () => {
    return (
        <>
            <header>
                <section className="container main-hero-container">
                    <div className="row">
                        <div className="col-12 col-md-12 col-lg-6  header-left-side d-flex justify-content-center flex-column align-items-start">
                        <h1 className="dispaly-2">
                            Online Payment made <br/>Easy for you
                        </h1>
                        <p className="main-hero-para">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam qui beatae quis tempore magni sed. Maiores quidem quibusdam veniam, quas omnis recusandae accusamus porro officia, molestias temporibus, cum libero reprehenderit cupiditate atque quod fuga.
                        </p>
                        <h3>Get Early acess for you</h3>
                        <div className="input-group mt-3">
                            <input type="text" 
                            className="rounded-pill w-50 me-3 p-2 form-control-text" 
                            placeholder="Enter Your Email" />

                            <div className="input-group-button ">Get It Now</div>
                        </div>
                        </div>
{/*-------------------------------------------------------main header right side-------------------------------------------------- */}
                        <div className="col-12 col-md-6 col-lg-6 header-right-side d-flex justify-content-center align-items-center main_herosection_images">
                        <img src="./images/hero1.jpg" alt="Hero" className="img-fluid" />
                        <img src="./images/hero4.jpg" alt="Hero4" className="img-fluid main_hero_img2"  />

                        </div>

                    </div>

                </section>
            </header>

        </>

    );
}

export default Header;