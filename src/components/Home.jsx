import React from 'react'
import vg from '../assets/images02.png'
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram
} from 'react-icons/ai'

const Home = () => {
  return (
    <>
      <div className='home' id='home'>

        <main>
          <h1>TechyStar</h1>
          <p>Solution to all your problems</p>
        </main>

      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
          <p>we are one and only solution to the tech problems you face every day. we are loading tech company whose aim is to increase the problem solving ability in children.</p>
        </div>
      </div>

      <div className="home3" id='about'>
        <div>
          <h1>Who We Are?</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus rem architecto, nulla ipsam cupiditate quibusdam eum et voluptas quasi id. Dolores laborum, incidunt esse harum numquam itaque aperiam vero modi.</p>
        </div>
      </div>

      <div className="home4" id='brands'>
        <div>
          <h1>Brands</h1>

          <article>
            <div style={{ animationDelay: "o.3s" }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div style={{ animationDelay: "o.5s" }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div style={{ animationDelay: "o.7s" }}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
            <div style={{ animationDelay: "1s" }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  )
}

export default Home