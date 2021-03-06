import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
  } from 'react-router-dom';
  import LoginComponent from './LoginComponent';
  import DataComponent from './DataComponent';
  import PageComponent from './PageComponent';
import HeaderComponent from './HeaderComponent';

 class HomeComponent extends Component {

  constructor() { 
    super();
    this.state = {
      data: []
      };
    }
    
  componentDidMount() {
    this.fetch();
   
  }
  
  fetch(tag) {
   
    console.log("tag=",tag)
    console.log("locations params", this.props.location.search)
    if(tag){
     // var url = `http://localhost:3000/users/posts?tag=${tag}`;
     var url = `https://medium.learnhigh.ml/users/posts/tag/${tag}`;
    } else {
      console.log("fetching all")
    // var url = "http://localhost:3000/users/posts";
    var url = "https://medium.learnhigh.ml/users/posts";
     }

    // alert(url)

    
    axios.get(url)
          .then((response) => {
            console.log(response)
            this.setState({
              data: response.data.data           
            });  
          }).catch((e) => {
            alert(e)
          });
        }



      render() {
         console.log("state",this.state)
         console.log("props",this.props)
        var allposts = this.state.data.map(post => <Post key={post.id} post={post}/>);
        return(
         <div> 
          <HeaderComponent></HeaderComponent>
        <div className="container">
        <div className="container1">
        <div className="tags">
            <Link to="/">
            <a style={{color: 'black', textDecoration: 'underline'}} onClick={()=>this.fetch()}>HOME</a>
            </Link>
            &nbsp; 
            <Link to="/">
            <a onClick={()=>this.fetch("ONEZERO")}>ONEZERO</a>
            </Link>
            &nbsp;  
            <Link to="/"> 
            <a onClick={()=>this.fetch("HEATED")}>HEATED</a>
            </Link>
            &nbsp;
            <Link to='/'>
            <a onClick={()=>this.fetch("TECH")}>TECH</a> 
            </Link>
            &nbsp;
            <Link to="/"> 
            <a className="t1" onClick={()=>this.fetch("STARTUPS")}>STARTUPS</a>
            </Link>
            &nbsp;
            <Link to="/"> 
            <a className="t1" onClick={()=>this.fetch("SELF")}>SELF</a> 
            </Link>
            &nbsp;
            <Link to="/"> 
            <a className="t1" onClick={()=>this.fetch("POLITICS")}>POLITICS</a> 
            </Link>
            &nbsp;
            <Link to="/"> 
            <a className="t1" onClick={()=>this.fetch("HEALTH")}>HEALTH</a>
            </Link>
            &nbsp;
            <Link to="/"> 
            <a className="t1" onClick={()=>this.fetch("DESIGN")}>DESIGN</a> 
            </Link>
            &nbsp;
            <Link to="/"> 
            <a className="t1" onClick={()=>this.fetch("HUMAN PARTS")}>HUMAN PARTS</a>
            </Link>
            &nbsp;
            <Link to="/"> 
            <a className="t1" onClick={()=>this.fetch()}>MORE</a>  
            </Link>
        </div>
        </div> 
        
        <div className="container2" id="post1">
          {allposts}
        </div>
        <br />
        </div>
     </div>
        );
      }
   }




   class Post extends Component {
    constructor(props) {
        super(props);
        
      } 

      render() {
        // console.log(this.props.post.user.userName)
        //console.log(this.props.post.user)
        console.log('harr',this.props.post.id)
        var Date = this.props.post.createdAt
        Date = Date.slice(0,10)
        return(
    <div className="container2" id="post1">
     
            <div className="para">
            <Link className="nav-link" to={{ pathname: '/singlepage', state: { p:this.props.post.id} }} >
            <div className="mainb">
                    <h1>{this.props.post.title}</h1>
                </div>
                <div className="b1">
                    <p>{this.props.post.titleDescription}</p>
                </div>
                {/* <div className="b1">
                <p dangerouslySetInnerHTML={{ __html: this.props.post.postDescription }} />
                </div> <br/> */}
                </Link>
                
                <div className="new">
                <div className="pub">
                  <div className="auth">
                    <p>{this.props.post.user.userName} in {this.props.post.subDomain}</p>
                    <p>{Date}  .  {this.props.post.readTime} min read &#9733;</p>
                </div>
                </div>
                <div className="resp">                    
                  <i class="far fa-bookmark"></i>
                </div>
                </div>
            </div> <br/>
   </div>
        );
    }
 
   }  

export default HomeComponent;
