import React, {Component} from 'react';
import './Post.css';
import axios from 'axios';
import { Redirect } from 'react-router';
import ReactQuill from 'react-quill';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
  } from 'react-router-dom';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';
import HeaderComponent from './HeaderComponent';
 class PostComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            data: [{
                title: '',
                titleDescription: '',
                subDomain: '',
                readTime: '',
                postDescription: '',
                tag: '',
                userId: ''
            }]

        }

        this.handlePostChange= this.handlePostChange.bind(this);
        this.modules = {
            toolbar: [
                [{ 'font': [] }],
                [{ 'size': ['small', false, 'large', 'huge'] }],
                ['bold', 'italic', 'underline'],
                [{'list': 'ordered'}, {'list': 'bullet'}],
                [{ 'align': [] }],
                [{ 'color': [] }, { 'background': [] }],
                ['clean']
              ]
          };

          this.formats = [
            'font',
            'size',
            'bold', 'italic', 'underline',
            'list', 'bullet',
            'align',
            'color', 'background'
          ];
 

    }
 
    handleCommentdataChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    // handlePostChange = e => {
    //     this.setState({
    //         [e.target.name]: e.target.value,
    //     });
    // };

    handlePostChange(name,delta,source,editor)
    {
      this.setState({postDescription:name})
    }
  

    handleSubmit = e =>{
        console.log("fghhcikd")
        e.preventDefault();
        // var form = e.target;
        const { title, titleDescription, subDomain, readTime,  postDescription, tag} = this.state;
        const post = {
            title,
            titleDescription,
            subDomain,
            readTime,
            postDescription,
            tag,
            userId: window.localStorage.getItem("userid")
        }; 
        console.log(post)
        var check = window.localStorage.getItem("isLoggedIn");
        if(check === "true" ) {
        axios
            .post('https://medium.learnhigh.ml/users/post',post)
            .then( ()=> this.setState({redirect: true}));
            
        } else {
            alert('please sign in first');
        }
    }

      render() { 
        const { redirect } = this.state;
        if (redirect) {
            return <Redirect to={{ pathname: '/'}} />
          //  return <Redirect to={{pathname: '/comment',state:{p:this.state.data[0].id}}}/>
        }
        return(
            <div className="postcontainer">
                 <HeaderComponent></HeaderComponent>
             <form onSubmit={this.handleSubmit} method="post">   
            <div className="postline1">
                
            <div className="postname">
            {/* <div className="picon" style={{fontSize: '70%'}}>
               <Link className="nav-link" to='/'>
                    <img src={require('./images/learnhigh.jpeg')} style={{color: 'black'}} className="img1" alt="avatar" />
                </Link>
            </div>&nbsp; &nbsp; */}
               {/* <a href="#">Drafts</a> &nbsp; &nbsp;
               <a href="#">Saved</a> */}
            </div>
            <div className="posticons">

            </div>
            
        </div>
        <div className="postcontainer2">
            <div className="postdes">
                <p>
                    <h2>Story Preview</h2> 
                    {/* <textarea typep="text" id="p_wrap" name="postDescription" onChange={this.handleCommentdataChange} rows="13" placeholder="&#10753;  Tell your story..." /> */}
                    <ReactQuill theme="snow" modules={this.modules} formats={this.formats} name="PostDescription" onChange={this.handlePostChange} />
                </p><br></br>
                <p>
                    <h4>Give a title to your story</h4>
                    <input type="text" name="title" onChange={this.handleCommentdataChange} placeholder="add a title" />
                </p> <br></br>
                <p>
                    <h4>Give a small description what is your story about</h4>
                    <input type="text" name="titleDescription" onChange={this.handleCommentdataChange} placeholder="enter title description" />
                </p> <br></br>
                <p>
                    <h4>give your name so readers know who is you</h4>
                    <input type="text" name="subDomain" onChange={this.handleCommentdataChange} placeholder="enter subDomain" />
                </p><br></br>
                <p>
                    <h4>Add a time that how much time taken to read your story</h4>
                    <input type="text" name="readTime" onChange={this.handleCommentdataChange} placeholder="read time" />
                </p> <br></br> 
                <p>
                    <h4>Add tags so readers know what your story is about</h4>
                    <input type="text" name="tag" onChange={this.handleCommentdataChange} placeholder="select a tag" />
                    <p style={{color: "grey"}}>( ONEZERO, HEATED, TECH, STARTUPS, SELF, POLITICS, HEALTH, DESIGN, HUMAN PARTS, MORE)</p>
                </p>
                <p>
                   <input className="submitreplypost" id="submitreplypost" type="submit" value="Publish Now" />
                </p> 
            </div>
        </div> 
        </form>
 
        </div> 
        );
      }
   } 


export default PostComponent;
