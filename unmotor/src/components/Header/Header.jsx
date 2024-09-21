import React from "react";
import styles from "./Header.module.css";

import { NavLink } from 'react-router-dom'; 

import { ReactComponent as BasketIcon } from './delivery.svg';



export const Header = () => {
return (
   <div className={styles.HeaderBox}>
     
        <a className={styles.HeaderBoxLogo} href="/">
        <p>Good <br/> Truck</p>
        <BasketIcon/>
        </a>
      
      <nav className={styles.HeaderNav}>
        
         <NavLink exact to="/pageone" className={styles.HeaderNavLink}>
             <p>Link1</p>
            </NavLink>
            <NavLink exact to="/pagetwo" className={styles.HeaderNavLink}>
             <p>Link2</p>
            </NavLink>
            <NavLink exact to="/pagethree" className={styles.HeaderNavLink}>
             <p>Link3</p>
            </NavLink>
            <NavLink exact to="/pagefour" className={styles.HeaderNavLink}>
             <p>Link4</p>
            </NavLink>
         
      </nav>
   </div>
)

}

export default Header;