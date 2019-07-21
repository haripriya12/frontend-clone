import React, { Component } from 'react';
import './page5.css'; 
import axios from 'axios';
import {
    BrowserRouter as Router,
    Link
  } from 'react-router-dom';
import HeaderComponent from './HeaderComponent';
import images from './images/david.jpeg';
class PageComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.post.location.state.p,
            data: [{
                title: "...",
                titleDescription: "...", 
                authorName: "...",
                postDescription: "...",
                subDomain: "...",
                createdAt: "...",
                user: {
                    email: "..."
                }
            }]
        }
    } 

    componentWillMount() {
        this.fetch();
    }

    fetch() {
        var url = "https://medium.learnhigh.ml/users/posts/" + this.state.id.toString();

        // alert(url)

        axios.get(url)
            .then((response) => {
                //console.log(response)
                this.setState({
                    //id: response.data.data.id,
                   data: response.data.data
                    //title: response.data.data.title
                });
                console.log(this.state.data[0])
            }).catch((e) => {
                alert(e)
            });
    }





    render() {
        //console.log(this.state.data[0].user.email)
        //var ID = this.props.post.location.state.p;
        var publishdate = this.state.data[0].createdAt;
        publishdate = publishdate.slice(0, 10); 
        return (
            <div>
                <HeaderComponent></HeaderComponent>
            <div className="pcontainer">
                <div className="pfirst">
                    <div className="pleftside">
                        
                    {/* <div className="picon" style={{fontSize: '270%'}}>
                        <Link to='/'>
                            <img src={require('./images/learnhigh.jpeg')} className="img1" alt="avatar" />
                        </Link> 
                        </div>             */}
                        <div className="pname">
                            <h1>{this.state.data[0].tag}</h1>
                        </div>
                    </div> 
                </div>
                <div className="pline2">
                    <h1>{this.state.data[0].title}</h1>
                </div>
                <div className="psecond">
                        <div className="pb1">
                            <p>Case Study: {this.state.data[0].titleDescription}</p>
                        </div>
                        {/* <div className="pb2">
                            {this.state.data[0].titleDescription}
                        </div> <br></br> */} <br></br>
                        <div className="profilepage"> 
                             {/* <img src={require('./images/david.jpeg')} className="pimagestyle" alt={require('./images/david.jpeg')} /> */}
                             <img src={this.state.data[0].user.image} className="pimagestyle" />
                            <div className="pagename" id="post1">
                            <div className="ppname" id="post1">
                            <Link className="nav-link" to={{pathname:'/comment', state: {p:this.state.data[0].id}}}>
                                 <h3>{this.state.data[0].user.userName} In {this.state.data[0].subDomain}</h3>
                            </Link>
                            </div>
                            <p>{publishdate} . {this.state.data[0].readTime} min read</p>
                            </div>
                        </div>
                    
                </div> <br />
                <div className="pthird">
                    <div className="p">
                       {/* {this.state.data[0].postDescription} */}
                       <p dangerouslySetInnerHTML={{ __html: this.state.data[0].postDescription }} />
                    </div>
                </div>
                <div className="viewRes">
                <Link className="nav-link" to={{pathname:'/comment', state: {p:this.state.data[0].id}}}>
                {/* <Link className="nav-link" to={`/comment/${ID}`}> */}
                    <input className="submitreply" id="submitreply" type="submit" value="show the responses" />
                </Link>
                </div> 
            </div>
            </div>
        );
    }
}
 

export default PageComponent;

