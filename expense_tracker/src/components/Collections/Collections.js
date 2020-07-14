import React, { Component } from 'react'
import {Container,Row,Col} from 'react-bootstrap'

export default class Collections extends Component {
    constructor (props){
        super(props);
        this.state={collections:[]};        
    }
    renderCollections =()=>
    {
       const {collections}= this.state.collections;
      console.log(collections);
       return collections.map((
           collection
       )=>{
           return(
               <Row><Col>{collection.title}</Col>
               </Row>
           )
           })
    }
    componentDidMount()
    {
        const collections=[{title:"first"},{title:"second"},{title:"third"},{title:"fourth"},{title:"fifth"}];
        this.setState ({
           // collections:collections,
        });

    }
    render() {
        return (

            <Container>
            <Row>
            <Col>Collections</Col>
            </Row>
            {this.renderCollections()}
            </Container>
           
            )
    }
}
