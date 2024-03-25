import React from 'react'
import './ContactInfo.scss';
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FaRegMap } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

export default function ContactInfo() {
  return (
    <div className='contact-info'>
      <div>
        <div className="contact-info-icon">
          <TfiHeadphoneAlt />
        </div>
        <h3>Customer support</h3>
        <h4>01575-088264</h4>
        <h4>Sun-Fri 8:00am-9:00pm</h4>
      </div>
      <div>
        <div className="contact-info-icon">
          <FaRegMap />
        </div>
        <h3>Mailing Address</h3>
        <h4>3 Rockaway St., New Rochelle, NY 10801</h4>
        <h4>Chattogram, Bangladesh.</h4>
      </div>
      <div>
        <div className="contact-info-icon">
          <AiOutlineMail />
        </div>
        <h3>Email</h3>
        <h4>mdrahed708@gmail.com</h4>
      </div>
    </div>
  )
}
