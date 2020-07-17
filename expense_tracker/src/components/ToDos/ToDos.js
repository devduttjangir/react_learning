import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import React, { Component } from "react";

export default class ToDos extends Component {
  constructor() {
    super();
    this.state = { todos: [] };
  }
  filterCollections = (data) => {
    const todo = data.map((item, index) => {
      return {
        id: index,
        url: item.url,
        description: item.description,
        avatar_url: item.owner.avatar_url,
        username: item.owner.login,
      };
    });
    this.setState({ todos: todo });
  };

  getCollections = () => {
    const URL = "https://api.github.com/gists/public";
    fetch(URL)
      .then((response) => response.json())
      .then((data) => this.filterCollections(data));
  };

  addTodo = () => {
    // form call
    // description, url, username
    const username = Math.random().toString(36).substring(7);
    const description = "New Todo " + username;
    const url =
      "https://gist.github.com/rajivmehtaflex/c49bf48821b6a745b0301363f3311324";
    const avatar_url = "https://image.flaticon.com/icons/svg/145/145867.svg";

    const { todos } = this.state;

    const newTodo = {
      id: todos.length,
      url: url,
      description: description,
      avatar_url: avatar_url,
      username: username,
    };

    todos.splice(0, 0, newTodo);
    this.setState({
      todos: todos,
    });
  };

  removeTodo = (id) => {
    const { todos } = this.state;
    const index = id.id;
    const updatedTodos = todos.filter((item) => item.id !== index);
    this.setState({
      todos: updatedTodos,
    });
  };

  renderCollections = () => {
    const { todos } = this.state;
    return todos.map((item) => {
      const { url, description, avatar_url, username, id } = item;
      return (
        <Col className="col-4 d-flex flex-grow-1">
          <Container className="m-1 border border-secondary rounded">
            <Row>
              <Col className="col-2 p-0">
                <Image src={avatar_url} width="100%" />
              </Col>
              <Col className="p-0">
                <Container>
                  <Row>
                    <Col className="font-weight-bold">
                      <div>
                        {username}
                        <button
                          type="button"
                          className="close"
                          aria-label="Close"
                          id={id}
                          onClick={() => this.removeTodo({ id })}
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="text-wrap font-weight-light">
                      {description}
                    </Col>
                  </Row>
                  <Row>
                    <Col className="text-wrap font-weight-light ">
                      <a href={url}>Gist Link</a>
                    </Col>
                  </Row>
                </Container>
              </Col>
            </Row>
          </Container>
        </Col>
      );
    });
  };
  componentDidMount() {
    this.getCollections();
  }

  render() {
    return (
      <Container>
        <Row>
          <Col className="col-10">
            <h3>ToDos</h3>
          </Col>
          <Col>
            <Button onClick={() => this.addTodo()}>Add Todo</Button>
          </Col>
        </Row>
        <Row>{this.renderCollections()}</Row>
      </Container>
    );
  }
}
