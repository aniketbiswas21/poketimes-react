import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Pokeball from '../pokeball.png'
import {connect} from 'react-redux'
class Home extends Component{
    // state={
    //     posts:[ ]
    // }
    // componentDidMount(){
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //     .then(res => {                          //fires up only after the data is fetched
    //         console.log(res);
    //         this.setState({
    //             posts: res.data.slice(0,10)       //slice only adds the first 10 elements out of 100 elements
    //         })
    //     })
        
    //    }
   render(){
       const{ posts}= this.props;
       const postList= posts.length? (posts.map(post=>{
           return(
               <div className=" post card" key={post.id}>
               <img src={Pokeball}/>
                <div className="card-content">
                <Link to={`/${post.id}`}>
                    <span className="card-title red-text">{post.title}</span>
                </Link>
                    <p>{post.body}</p>
                </div>
                </div>
           )
       })):(
         <div className="center">
        <div className="preloader-wrapper active ">
        <div className="spinner-layer spinner-red-only">
          <div className="circle-clipper left">
            <div className="circle"></div>
          </div><div className="gap-patch">
            <div className="circle"></div>
          </div><div className="circle-clipper right">
            <div className="circle"></div>
          </div>
        </div>
      </div> 
      </div>)
    return(
        <div className="container home">
        <h4 className="center">Home</h4>
           {postList}
        </div>
    )
}
   }
   const mapStateToProps= (state)=>{
     return{
       posts:state.posts
     }
   }
export default connect(mapStateToProps)(Home);
