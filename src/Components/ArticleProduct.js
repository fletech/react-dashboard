import React, { Component } from 'react';
import imageDefault from "../images/product_dummy.svg"
import image from "../images/fleteAvatar.png"

class ArticleProduct extends Component{
     constructor(props){
          super(props);
          this.db={}
          this.state= {
               image: undefined,
               imageDefault : imageDefault,
          }
     }

     apiCall(url,handler){
          fetch(url)
          .then(response=>response.json())
          .then(data=>handler(data))
          .catch(error=>{
               console.log(error);
               return error
          })
     }

     resultApi(){
          this.apiCall("https://grupo6-caniada.herokuapp.com/api/products",this.handlerData)
     }

     handlerData = (data)=>{
          console.log(data)
          this.setState({
               image: `https://grupo6-caniada.herokuapp.com/${data.productos[data.totalDeProductos-1].image}`,
               description: data.productos[data.totalDeProductos-1].description,
          })
     }

     componentDidMount(){
          this.resultApi()
     }

     
     
     render() {

          let img;
          let p;
          if(this.state.image != undefined){
               img = <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" src={this.state.image} alt="...loading"/>
               p = this.state.description
          }else{
               img= <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" src={this.state.imageDefault} alt="image dummy"/>
               p= "Lorem ipsum"
          }

          return(

               <div className="card-body">
                   <div className="text-center">
                     {img}
                   </div>

                   <p>{p}</p>
                   <a target="_blank" rel="nofollow" href="/">View product detail</a>
               </div>
            
          )
     }
}

export default ArticleProduct

