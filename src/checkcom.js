import React, { Component } from 'react'
import avatarimg from './images/avatar.png'
import './CreateComponent.css';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';
  import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';
import axios from 'axios';
import { Redirect } from 'react-router'
let base="https://clone.thediscuss.tk"

  class CreateComponent extends Component{
    constructor(props){
      super(props);
      this.state={
       // id:this.props.post.location.state.p,
        //posts:[],
        //comments:[],
        // editdata:'',
        // content:''
        content:" ",
        redirect:false,
        title :'',
        category:'discourse'
      };
      this.handleContentChange= this.handleContentChange.bind(this);
      this.handleSubmit= this.handleSubmit.bind(this);
      this.handleTitleChange= this.handleTitleChange.bind(this);
      this.handleCategoryChange= this.handleCategoryChange.bind(this);
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
  handleSubmit(event)
  {
    event.preventDefault();
    console.log(this.state)
    axios.post(`${base}/topics/`,{"topic":{
      "title":this.state.title,
      "category":this.state.category,
      "content":this.state.content
    }}).
    then( () =>
    this.setState({redirect:true})
    );
    
  }
  handleContentChange(content,delta,source,editor)
  {
    this.setState({content:content})
  }
  handleTitleChange(event){
    //console.log(event.target.value);
    this.setState({title: event.target.value})
  }
  handleCategoryChange(event){
    //console.log(event.target.value);
    this.setState({category: event.target.value})
  }
  
  render(){
        const { redirect } = this.state;

     if (redirect) {
       return <Redirect to='/'/>;
     }
          return(
            <div className="container">
                 <div className="row row-no-gutters">
                         <div className="col-sm-12" >
                           <div className=" clearfix main createhead"  >
                             <h2><Link to="/"><span className="glyphicon glyphicon-share-alt createicon" ></span></Link>&nbsp;Create a new topic</h2>
                           </div>
                        </div>
                 </div>
          <form onSubmit={this.handleSubmit} method="post" >

       <div className="row row-no-gutters">
           <div className="col-sm-12" > 
               <input type="text" name = "title" value={this.state.title} onChange ={this.handleTitleChange} placeholder="&nbsp;Type title or paste a link here" className="edit1" required/>
           </div>
       </div>
       <br/>

       <div className="row row-no-gutters">
       <div className="col-sm-6">
           <div className="part1">
            <div className="form-group">
                    <select className="form-control" name= "category" id="sel1">
                      <option>Uncategorised</option>
                      <option>Categorised</option>
                      
                    </select>
                    
            </div>  
        </div>
             
        </div>
        <div className="col-sm-6">
            <div className="part2">
                <div className="form-group">
                        <select className="form-control" value={this.state.category} onChange ={this.handleCategoryChange} name="tag" id="sel1">
                          {/* <option>other tags </option> */}
                          <option>discourse</option>
                          <option>movies</option>
                          <option>videos</option>
                          <option>tech</option>
                          
                        </select>
                </div>  
                </div>       
            </div>
      </div>
      <div className="row-no-gutters">
        <div className="col-sm-12">
          
       {/* <ReactQuill  name="content" theme="snow"  modules={this.modules}
				formats={this.formats} onChange={this.rteChange}
      value={this.state.comments || ''}/> */}
      {/* <textarea className="matter" name="content"></textarea> */}
      <ReactQuill theme="snow" modules={this.modules} formats={this.formats} value={this.state.content} onChange={this.handleContentChange} />
   
                
        </div>
    </div>
    <div className="row row-no-gutters">
          <div className="col-sm-4 col-xs-6">
                <button type="submit" className="btn btn-primary editbut ">
                    <span className="glyphicon glyphicon-plus"></span>&nbsp;Create Topic</button>
        </div>
        <div className="col-sm-4 col-xs-6 cancellink">         
               <Link to="/"> <a  href="post.html" className="cancellink">Cancel</a></Link>
          </div>     
        {/* <div className=" col-sm-4  col-xs-4 hidden-lg hidden-md cancellink">
                <i className="fa fa-angle-double-left" aria-hidden="true"></i>
                    
                    <a href="" className="cancellink">hide preview</a>
        </div>  */}
        </div>

    </form>
            </div>     
          )
      }
  }

  export default CreateComponent;