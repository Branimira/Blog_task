import axios from "axios";
import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'react-router-dom';
import {Routes, Route, useNavigate, useNavigation} from 'react-router-dom';

const baseURL = "https://jsonplaceholder.typicode.com/posts";

export default function Posts() {
  const navigate = useNavigate();
  const history = useNavigate();
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    axios.get(`${baseURL}`).then((response) => {
      setPosts(response.data);
    });
  }, []);

  const navigateSingleBlog = (post, index) => {
    // 👇️ navigate to /
    navigate('/singleblog/'+ index);
    history.push({
      pathname: "/singleblog/" + index,
      state: {post: post}
    })
  }
  return (
    <Container>
      <Row>
        <div style={{margin: '2em 1em'}}>
          <h1 style={{color:'darkgoldenrod', fontWeight: '600' }}>&#8226; Posts list &#8226;</h1>
        </div>
      {posts.map((post, index) => {return (
        <Card style={{ width: '20rem' }}>
        <Card.Body className="d-flex flex-column justify-content-between">
          <Card.Title variant='secundary'>{post.title}</Card.Title>
          <Card.Text>
            {post.body}
          </Card.Text>
          <Button onClick={()=>navigateSingleBlog(post, index)} variant="success">Read more</Button>
        </Card.Body>
      </Card>
      ) })}
      </Row>
    </Container>
  
  );
}