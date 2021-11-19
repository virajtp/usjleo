import React from 'react';
// import about from './images';
import { Container } from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.css';
// import { Row, Col } from 'react-bootstrap';
// import { Link } from "react-router-dom";
// import useFetch from "./useFetch";
// import Projectlist from './Projectlist';

const Projects = () => {

    // const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs')

    return (
        <div className="projects">
            {/* <h2>Club Projects</h2> */}
            {/* <Link to="/Components/Create"><button>Add Project</button></Link>
            <br/>
            <br/>
            {error && <div>{ error }</div> }
                        {isPending && <div>Loading....</div>}
                        {blogs && <Projectlist blogs={blogs} title="All Projects"/> } */}

        
            

            {/* <Container>
                <Row>
                    <Col xs="3">
                      </Col>
                    <Col xs="3">.col</Col>
                    <Col xs="3">.col-3</Col>
                    <Col xs="3">.col-3</Col>
                    <Col xs="3">.col</Col>
                    <Col xs="3">.col-3</Col>
                </Row>
                <Row>
                    <Col xs="6">.col-6</Col>
                    <Col xs="6">.col-6</Col>
                </Row>
                <Row>
                    <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
                    <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
                    <Col sm="4">.col-sm-4</Col>
                </Row>
                <Row>
                    <Col sm={{ size: 6, order: 2, offset: 1 }}>.col-sm-6 .order-sm-2 .offset-sm-1</Col>
                </Row>
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>.col-sm-12 .col-md-6 .offset-md-3</Col>
                </Row>
                <Row>
                    <Col sm={{ size: 'auto', offset: 1 }}>.col-sm-auto .offset-sm-1</Col>
                    <Col sm={{ size: 'auto', offset: 1 }}>.col-sm-auto .offset-sm-1</Col>
                </Row>
            </Container> */}
        </div>
    );
}

export default Projects;