

import { Link } from "react-router-dom";
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

const Projectlist = ({blogs,title}) => {
    return ( 
        <div className="project-list">
            <h2> {title} </h2>
            <br/>

            <div className= "row">

                <div className= "coloumn">

                    <div className= "card">

                        <img src="images/1.jpg" style= "width:100%"/>
                        <div className="container" >
                            <h1>dcdccdd</h1>
                            <h2>effgrd</h2>
                            <p>scdwwcd</p>
                        </div>

                    </div>

                </div>

            </div>







            {/* <Row> 
            {blogs.map((blog)=>(
                // <Container>
                <Col xs="4">
                <div className="project-preview" key={blog.id}>
                
                    <Link to={`/blogs/${blog.id}`}>
                            <h2>{ blog.title }</h2>
                            <p>Chair Person : {blog.chair}</p>
                            
                    </Link> */}
                    {/* <button onClick={() => handleDelete(blog.id)}>delete blog</button> */}
                {/* </div>
                </Col>
                // </Container>
            ))}
            </Row> */}
        </div> 
     );
}
 
export default Projectlist;