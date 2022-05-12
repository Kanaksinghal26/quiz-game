import React from 'react'
import './Home.scss'
import Footer from '../Footer/Footer'
import img1 from '../../Images/trophy_photo.png'

const Home = () => {
  return (
      <>
        <div>
          
        </div>
        <div className='body'>
          <div className='body-1'>
            <div><img src={img1} alt="" /></div>
            <h1>KBC game</h1>
            <p>Let's have a look on the kbc game.<br1></br1> If you've knowledge and capability to do something but </p>
            <p>not have revenue, then not to worry.</p>
            <p>Here is the platform, whisch can help you bring your thoughts come true.</p>
          </div>
          <div className='body-2'>
            <div className='body-2-' id='body-2-h1'>WINNERS</div>
            <div className='body-2-'>2022-23</div>
            <div className='body-2-'>2021-22</div>
            <div className='body-2-'>2020-21</div>
            <div className='body-2-'>2019-20</div>
          </div>
        </div>
        <Footer />
      </>
  )
}

// "mmdvskm"

export default Home