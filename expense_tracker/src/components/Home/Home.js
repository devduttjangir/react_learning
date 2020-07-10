import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Home extends Component {
  navigateToAbout = () => {
    const { history } = this.props;
    history.push("/about");
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <div
          className="btn bg-primary mx-2"
          onClick={() => this.navigateToAbout()}
        >
          AboutUS
        </div>
        Home
      </div>
    );
  }
}
// HOC (High Order Component)
export default withRouter(Home);
