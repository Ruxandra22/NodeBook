import React, { Component } from "react";
import './TeacherProfile.css';
import teacherPic from '../images/teacher.png';

import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
// import 'bootstrap/dist/css/bootstrap.css';

//material-ui
import Grid from '@material-ui/core/Grid';


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
                        <Grid item xs={12} sm={2} md={2} lg={2} xl={2}>
                            {/* empty grid for spacing */}
                        </Grid>

                        <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                            <div className="teacherDescription">
                                <h2 className="aboutMe"> Anna Lingren</h2>
                                <hr></hr>
                                <p>I am a math and physics teacher.</p>
                                <p>My mentor class is 11A.</p>
                            </div>
                        </Grid>

                        <Grid item xs={12} sm={4} md={3} lg={3} xl={3} >
                            <img src={teacherPic} alt="Teacher" className="ProfilePic"/>
                        </Grid>
                    </Row>
                </Grid>
             </div>
        );
    }
}

export default TeacherProfile;