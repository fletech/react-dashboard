import React from 'react';
import categories from '../database/categories';



function ArticleCategory({title}) {
     return(
              <>
               <div className="row">
                {
                  categories.map((category,i)=>{
                    return(
                      <div className="col-lg-6 mb-4" key={i}>
                          <div className="card bg-info text-white shadow" >
                            <div className="card-body" >
                              {category}
                            </div>
                          </div>
                      </div>
                    )
                  })
                }
                </div>
              </>
     )
}

export default ArticleCategory