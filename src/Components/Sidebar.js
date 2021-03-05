import React from 'react';

import logo from "../images/logo.svg";
import SidebarComponent from './SidebarComponent';
import Footer from "./Footer"
import dataMenu from '../database/dataMenu';


function Sidebar(props) {
     return(

        <aside>
          <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="sidebar">

            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
              <div className="sidebar-brand-icon">
                <img className="logo" src={logo} width="120"/>
              </div>
            </a>

            <div className="logo">
               <a href="/" >

               </a>
            </div>

            <hr className="sidebar-divider my-0"/>

            <li className="nav-item active">
              <a className="nav-link" href="/">
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Overview</span></a>
            </li>


            <hr className="sidebar-divider"/>


            <div className="sidebar-heading">
              <p>Menu</p>
            </div>
              {
                dataMenu.map((element,key)=>{
                  return (

                    <SidebarComponent
                    key={key}
                    span={element.span}
                    href={element.href}
                    icon={element.icon}
                    />
                  )
                })
              }


        <hr className="sidebar-divider d-none d-md-block"/>
        <Footer/>
        </ul>
        </aside>

     )
}

export default Sidebar;