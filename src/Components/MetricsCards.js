import React from 'react';

import MetricsCardComponent from './MetricsCardComponent';

import dataCards from "../database/dataCards";

function AppMetricsCard() {
     return(

      <div className="rowUp" >
       {dataCards.map((elem, i)=>{
         return (

              <MetricsCardComponent
                  key= {i}
                  title={elem.title}
                  amount={elem.amount}
                  className={elem.className}
                  color={elem.color}
                  icon={elem.icon}
                  />)
        })
      }
      </div>)
}

export default AppMetricsCard


{/*
  <>
     {data.map((elem, key)=>
     <div className="col-md-4 mb-4" key={key}>
          <div className={elem.className}>
            <div className="card-body">
              <div className="row no-gutters align-items-center">

                <div className="col mr-2">
                  <div className={elem.color}>{elem.title}</div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">{elem.amount}</div>
                </div>

                <div className="col-auto">
                  <i className={elem.icon}></i>
                </div>

              </div>
            </div>
          </div>
     </div>)
     }
     </>
  
  
  
  
  
   <div className="col-md-4 mb-4">
          <div className="card border-left-success shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-success text-uppercase mb-1">Amount in products</div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">$546.456</div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
     </div>


     <div className="col-md-4 mb-4">
          <div className="card border-left-warning shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">Users quantity
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">38</div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-user-check fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
     </div> */}