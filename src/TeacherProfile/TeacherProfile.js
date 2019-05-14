import React, { Component } from "react";
import './TeacherProfile.css';
import Link from "react-router-dom/es/Link";



import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.css';

//material-ui
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import teacherPic from '../images/teacher.png';


class TeacherProfile extends Component {

    render(){

        
       
       
        return(
            <div className="TeacherProfile">

                    <Container >
                        <div className="titleContainer">
                            <h1> TEACHER'S PROFILE</h1>
                        </div>
                    </Container>
                    <Grid container spacing={24}>   
                        <Row>
                        <Grid item xs={12} sm={2} md={2} lg={2} xl={2} >
                                {/* empty grid for spacing */}
                        </Grid>
                        
                            
                        
                            <Grid item xs={12} sm={4} md={4} lg={4} xl={4} >
                                <div className="teacherDescription">
                                
                                    <Typography class="aboutMe">      

                                        <h2> Anna Lingren</h2> 

                                        <hr></hr>
                                    <p>I am a math and physics teacher.</p>
                                    <p>My mentor class is 11A.</p>
                                    
                                            
                                    </Typography>   

                                </div>
                            </Grid>
                            <Grid item xs={12} sm={4} md={3} lg={3} xl={3} >
                                    <img src={teacherPic} className="ProfilePic"/>
                                
                            </Grid>
                        </Row>
                     </Grid>
                

             </div>


        );

    }

        

}


export default TeacherProfile;