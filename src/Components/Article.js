import React, { Children } from 'react';

import categories from '../database/categories';
import imageDummy from "../images/product_dummy.svg"


function Article(props) {
     return(
      <>
          


        <div className="col-lg-6 mb-4">						
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">{props.title}</h6>
            </div>

            <div className="card-body">
              
                {props.children}


            </div>

          </div>
        </div>
      </>
     )
}

export default Article