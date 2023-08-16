import React from "react"
import './LandingPage.css'
import { Link } from "react-router-dom"

import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

const LandingPage = () => {
  return (
    <div>
      <Navbar/>
      <div className="container-fluid">
        <main>
    
            <div className="header-landing">
                <div className="row">
                    <div className="col-6 d-flex align-items-center">
                        <div className="box-left">
                            <h1>Discover Recipe <br/>& Delicious Food</h1>
                            <Link to={'/search-recipe'}>
                              <div className="search-bar">
                                  <img src="../img/search-icon.svg" alt="" />
                                  <span>Search restaurant, food</span>
                              </div>
                            </Link>
                        </div>
                    </div>        
                    <div className="col-6">
                        <div className="box-right d-flex justify-content-center">
                            <div className="box-img"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="yellow-box"></div>
          
            <h3 className="landing-tag">Popular For You</h3>
            <div className="row popular">
                <div className="col-6 position-relative">
                    <div className="popular-img img"></div>
                    <div className="yellow-border-box"></div>
                </div>
                <div className="col-6 d-flex justify-content-end align-items-center">
                    <div className="popular-text">
                        <h2>Healthy Bone Broth Ramen (Quick & Easy)</h2>
                        <p>Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a hurry? That’s right!</p>
                        <button className="btn">Learn More</button>
                    </div>
                </div>
            </div>

            <h3 className="landing-tag tag-new-recipe">New Recipe</h3>
            <div className="row popular">
                <div className="col-6">
                    <div className="new-recipe-img img"></div>
                </div>
                <div className="col-6 d-flex justify-content-end align-items-center">
                    <div className="popular-text">
                        <h2>Healthy Bone Broth Ramen (Quick & Easy)</h2>
                        <p>Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a hurry? That’s right!</p>
                        <button className="btn">Learn More</button>
                    </div>
                </div>
            </div>
            <div className="yellow-box-2"></div>

  
            <h3 className="landing-tag tag-new-recipe">Popular Recipe</h3>
            <div className="container-fluid mb-5">
              <div className="row recipes">
                <div className="col-4">
                  <div className="img-recipe recipe-1">
                    <h3 className="title">Chicken Kare</h3>
                  </div>
                </div>
                <div className="col-4">
                  <div className="img-recipe recipe-2">
                    <h3 className="title">Chicken Kare</h3>
                  </div>
                </div>
                <div className="col-4">
                  <div className="img-recipe recipe-3">
                    <h3 className="title">Chicken Kare</h3>
                  </div>
                </div>
                <div className="col-4">
                  <div className="img-recipe recipe-4">
                    <h3 className="title">Chicken Kare</h3>
                  </div>
                </div>
                <div className="col-4">
                  <div className="img-recipe recipe-5">
                    <h3 className="title">Chicken Kare</h3>
                  </div>
                </div>
                <div className="col-4">
                  <div className="img-recipe recipe-6">
                    <h3 className="title">Chicken Kare</h3>
                  </div>
                </div>
              </div>
            </div>

        </main>
      </div>
      <Footer/>
    </div>
  )
};

export default LandingPage;
