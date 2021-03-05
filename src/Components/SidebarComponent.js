import React from 'react';

function SidebarComponent(props) {
     return(
     <>
      <li className="nav-item">
          <a className="nav-link" href={props.href}>
            <i className={props.icon}></i>
            <span>{props.span}</span></a>
        </li>
     </>
     )
}

export default SidebarComponent