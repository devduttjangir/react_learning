import React, { Component } from 'react'
import {Card,Container,Image,Col,Row} from "react-bootstrap"

export default class ToDos extends Component {
    constructor(){
        super();
        this.state={todos:[]};
    }
    filterCollections=(data)=>{
        const todo=data.map(item=>{
            return {url:item.url, description:item.description,avatar_url:item.owner.avatar_url,username:item.owner.login}
        })
        this.setState({todos:todo})
    }
    getCollections = () => {
    const URL =
      "https://api.github.com/gists/public";
    fetch(URL)
      .then((response) => response.json())
      .then((data) => this.filterCollections(data));
  };
renderCollections=()=>{
       const { todos } = this.state;
    return todos.map((item) => {
        const {url,description,avatar_url,username}=item;
      return (
        // <Col className="col-4 d-flex flex-grow-1 p-2">
        //   <Card style={{ width: "18rem" }}>
        //     <Card.Img variant="top" src={avatar_url} height={"200px"} />
            
        //     <Card.Body>
        //       <Card.Title>{username}</Card.Title>
        //       <Card.Subtitle>{url}</Card.Subtitle>
        //       <Card.Text>{description}</Card.Text>
        //     </Card.Body>
            
        //   </Card>
        // </Col>
       <Container>
  <Row>
    <Col d-flex flex-grow-1 p-1  ><Image src={avatar_url} height="35%" width="40%"/> </Col>
    <Col  d-flex flex-grow-1 p-1><Container><Row><Col>{username}</Col></Row></Container>
    <Container><Row><Col>{description}</Col></Row></Container></Col>
    </Row>
  
</Container>
      );
    });

}
  componentDidMount() {
    this.getCollections();
  }


    render() {
        return (
            <Container>
        <Row>
          <Col>
            <h3>ToDos</h3>
          </Col>
        </Row>
        <Row>{this.renderCollections()}</Row>
      </Container>
        )
    }
}
