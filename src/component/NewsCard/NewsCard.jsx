import React from 'react'
import './NewsCard.scss';


export default function NewsCard() {
  return (
    <div className='news-card'>
      <div>
        <img src="https://the7.io/elementor-product/wp-content/uploads/sites/111/2023/12/Mask-group-35.jpg" alt="img" />
      </div>
      <div>
        <p className='news-card-date'>December 12, 2023</p>
        <h1>Di facciamo verso esso divenuti audaci noi giudice primo.</h1>
        <p>Vestibulum in quam aliquam, tempor neque quis, pellentesque neque. Nullam et euismod nibh. Nunc urna augue, dignissim vitae risus id, imperdiet tincidunt dui. Ut quis consectetur odio, vitae pellentesque justo.</p>
        <button>learn more</button>
      </div>
    </div>
  )
}
