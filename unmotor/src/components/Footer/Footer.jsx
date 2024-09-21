import React from "react";
import styles from "./Footer.module.css";

// import { NavLink } from 'react-router-dom'; 

import { ReactComponent as BasketIcon } from './delivery.svg';



export const Footer = () => {
return (
   <div className={styles.FooterBox}>
     
        <a className={styles.FooterBoxLogo} href="/">
        <p>Good <br/> Truck</p>
        <BasketIcon/>
        </a>
      
      
   </div>
)

}

export default Footer;