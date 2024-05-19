import React from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar.jsx'
import heroBanner from '../../assets/hero_banner.jpg'
import heroTitle from '../../assets/hero_title.png'
import playIcon from '../../assets/play_icon.png'
import infoIcon from '../../assets/info_icon.png'
import TitleCards from '../../Components/TitleCards/TitleCards'
import Footer from '../../Components/Footer/Footer.jsx'

const Home = () => {
  return (
    <div className='home'>
      <Navbar></Navbar>
      <div className="hero">
          <img src= {heroBanner} className='banner-img' />
          <div className="hero-caption">
            <img src= {heroTitle} className='caption-img' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum molestias aliquam autem ab itaque qui voluptas consequuntur placeat laborum nostrum sed aspernatur provident iure, sint possimus voluptatum. Debitis, est. Placeat.</p>
            <div className="hero-btns">
                <button  className='btn'>
                  <img src= {playIcon}  /> Play
                </button>
                <button className='btn dark-btn'>
                  <img src= {infoIcon}  /> More Info
                </button>
            </div>
            <TitleCards title="Popular on Netflix"></TitleCards>
          </div>
      </div>
      <div className="more-cards">
      <TitleCards title="Top Rated" category={"top_rated"} ></TitleCards>
      <TitleCards title="Popular in Togo" category={"popular"}></TitleCards>
      <TitleCards title="UpComing ..." category={"upcoming"}></TitleCards>
      </div>

      <Footer></Footer>
    </div>
  )
}

export default Home