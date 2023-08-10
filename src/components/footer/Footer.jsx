import React from 'react'
import "./Footer.css";
import WorkIcon from '@mui/icons-material/Work';
import StarsIcon from '@mui/icons-material/Stars';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';


const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-left">
            <div className='footer-row'>
              <div className='footer-col'>
                <h4>About</h4>
                <ul>
                  <li><a href='#'>Contact Us</a></li>
                  <li><a href='#'>About Us</a></li>
                  <li><a href='#'>Career</a></li>
                  <li><a href='#'>Flipkart Story</a></li>
                  <li><a href='#'>Press</a></li>
                  <li><a href='#'>Flipkart Wholesale</a></li>
                  <li><a href='#'>Corporate Information</a></li>
                </ul>
              </div>
              <div className='footer-col'>
                <h4>Help</h4>
                <ul>
                  <li><a href='#'>Payment</a></li>
                  <li><a href='#'>Report Infringement</a></li>
                  <li><a href='#'>Shipping</a></li>
                  <li><a href='#'>Cancellation & Return</a></li>
                  <li><a href='#'>FAQ</a></li>
                </ul>
              </div>
              <div className='footer-col'>
                <h4>Policy</h4>
                <ul>
                  <li><a href='#'>Return Policy</a></li>
                  <li><a href='#'>Terms Of Use</a></li>
                  <li><a href='#'>Security</a></li>
                  <li><a href='#'>Privacy</a></li>
                  <li><a href='#'>Sitemap</a></li>
                  <li><a href='#'>Error Compilation</a></li>
                </ul>
              </div>
              <div className='footer-col'>
                <h4>Social</h4>
                <ul>
                  <li><a href='https://www.facebook.com/profile.php?id=100087440900660'>Facebook</a></li>
                  <li><a href='#'>Twitter</a></li>
                  <li><a href='https://www.youtube.com/@VivekChauhanVlogs4u'>YouTube</a></li>
                </ul>
              </div>
            </div>
          <div className="horizontal" ></div>
        </div>
        <div className="footer-right">
          <div className="table-inn">
            <table>
              <thead>
                <tr>
                  <td>
                    Mail Us:
                  </td>
                  <td>
                    Office Registered Office
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Flipkart Internet Private Limited,
                    Buildings Alyssa, Begonia &
                    Clove Embassy Tech Village,
                    Outer Ring Road, Devarabeesanahalli Village,
                    Bengaluru, 560103,
                    Karnataka, India
                  </td>
                  <td>
                    Flipkart Internet Private Limited,

                    Buildings Alyssa, Begonia &

                    Clove Embassy Tech Village,

                    Outer Ring Road, Devarabeesanahalli Village,

                    Bengaluru, 560103,

                    Karnataka, India

                    CIN : U51109KA2012PTC066107

                    Telephone: 044-45614700
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-bootom">
        <p className='fb-item'>
          <WorkIcon sx={{ color: "#FFC800", width:"1rem" }} />
           Become a Seller</p>
        <p className='fb-item'>
          <StarsIcon sx={{ color: "#FFC800" , width:"1rem" }} /> 
        Advertise</p>
        <p className='fb-item'>
          <CardGiftcardIcon sx={{ color: "#FFC800" , width:"1rem" }} /> 
          Gift Cards</p>
        <p className='fb-item'>
          <HelpRoundedIcon sx={{ color: "#FFC800" , width:"1rem" }} /> 
          Help Center</p>
        <p className='fb-item'>&copy; Vivek-flipkart-clone.netlify.com 2023</p>
        <img src="" alt="image" className="fb-img" />
      </div>
    </div>
  );
};

export default Footer;