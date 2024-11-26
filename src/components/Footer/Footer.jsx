import React from 'react';
import FooterContactinformation from './FooterContactinformation';
import imageSity from '../../images/sity-bakground.png';
import FooterNavigation from './FooterNavigation';
import FooterRequisitequisite from './FooterRequisite';


const Footer = () => {
  return (
    <footer style={{ background: `url("${imageSity}") center / cover no-repeat` }}>
      <div className="container">
        <div className="footer-content">
          <FooterContactinformation />
          <FooterNavigation />
          <FooterRequisitequisite />
        </div>
      </div>
    </footer>
  )
}

export default Footer