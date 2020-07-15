import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import {Row,Container,Col,Image} from 'react-bootstrap';
 class Details extends Component {
     constructor(){
         super();
         this.state={data:[]};

     }
     filterCollections=(data)=>{
        this.setState({
            data:data,
        })
     }
      getCollectionDetails = () => {
          const id=this.props.match.params.collectionId;
    const URL =
      "https://api.unsplash.com/collections/:"+id+"/photos?client_id=M_Z2h_9jkKhv_ECTqs8hY3BmOSwZZYovtqJtd-A_J7k";
    fetch(URL)
      .then((response) => response.json())
      .then((data) => this.filterCollections(data));
  };

  componentDidMount() {
      console.log(this.props);
    this.getCollectionDetails();
  }
renderPhotos=()=>{
    const {data}=this.state;
   return  data.map((item)=>{
    return (<Col><Image src={item.urls.regular}/></Col>);
    });
}

    render() {
        return (
            <Container>
            <Row>{this.renderPhotos()}</Row>

           </Container>
        )
    }
}
export default withRouter(Details);
