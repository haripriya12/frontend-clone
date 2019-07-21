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
  import PostComponent from './PostComponent';
  // import SigninComponent from './SigninComponent';
  // import SignoutComponent from './SignoutComponent';
 class HeaderComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
      };
    }

    handleSignin = () => {
      document.getElementById('Signin').innerHTML = "signin"
      window.localStorage.setItem("isLoggedIn","false")
      localStorage.clear()
     
      
      // window.localStorage.setItem("userName","Null")
      // window.localStorage.setItem("userid","Null")
    }

    componentDidMount() {
     // this.fetch();
      var isLoggedIn = window.localStorage.getItem("isLoggedIn");
      if(isLoggedIn === "true" || isLoggedIn !== null ) {
        document.getElementById('Signin').innerHTML = "Sign out"
        document.getElementById("welcome").innerHTML= "Welcome"+ " "+ window.localStorage.getItem("userName");
      } else {
        document.getElementById('Signin').innerHTML = "Sign in"
        document.getElementById("welcome").style.display="none"
        // this.setState({redirect: false})
      }
     
    }


  //   fetch() {
  //     var url = `https://medium.learnhigh.ml/users/posts`;

  //     axios.get(url)
  //         .then((response) => {
  //             // console.log(response)
  //             this.setState({
  //                 data: response.data.data
  //             });
  //         }).catch((e) => {
  //             alert(e)
  //         });
  // }



        
    

      render() {
        return( 
        <div className="Hmain-container">
          <div className="det1">
            <div className="img1">
            <Link to='/'>
              <img src={require('./images/final.png')} style={{color: 'black',width:'200px', height:'150px'}} alt="avatar" />
            </Link>
            </div>
            <div className="img2">
            <Link to='/'>
              <img src={require('./images/final.png')} style={{color: 'black'}} alt="avatar" />
            </Link>
            </div>
            <div className="logo" style={{fontSize: '130%', fontStretch: 'ultra-condensed', fontFamily: 'italic', width: '60%'}}>
                <h1>learnHigh</h1>
            </div> 
          </div>
          <div className="det">
              
            <div className="mem">
                <a id="welcome">Become a Member</a> 
            </div> &nbsp;&nbsp;&nbsp;
            <div className="login-form">
            <Link className="nav-link" to='/login'>
                <a style={{textDecorationLine: 'none'}} id="Signin" onClick={this.handleSignin}>signin</a> 
            </Link>  
            </div> &nbsp;
            <div className="login-form1">
            <Link className="nav-link" to='/post'>         
                <a style={{textDecorationLine: 'none'}} className="rect">Add Post</a>
            </Link>
            </div>
          </div>            
        </div>  
        );
      }
   }


export default HeaderComponent;
