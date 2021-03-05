import React from 'react';

import MetricsCards from "./MetricsCards"
import Article from "./Article"
import ArticleProduct from "./ArticleProduct"
import ArticleCategory from "./ArticleCategory"


let titlesArticle = ["Ultimo producto en Base de datos","Categorias"]

function Section() {
     return(
     

            <section className="container-fluid">
                 
              <div className="row">

                  <MetricsCards/>

                  <Article title={titlesArticle[0]}>
                        <ArticleProduct/>
                  </Article>

                  <Article title={titlesArticle[1]}>
                        <ArticleCategory/>
                  </Article>

              </div>

            </section>
          
     )
}

export default Section