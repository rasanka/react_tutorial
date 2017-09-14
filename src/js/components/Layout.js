import React from "react";

import Footer from "./Footer";
import Header from "./Header";

export default class Layout extends React.Component {

  constructor() {
    super();
    this.state = {
      title: "Helloo",
    };
  }

  render() {

    /*
    setTimeout(() => {
      this.setState({title: "Welcome Ranu"});
    }, 2000);
    */

    //const title = "Welcome Rasa";
    return (
      <div>
        <Header name={"Dilini"} title={this.state.title} />
        <Header title={"New Title"} />
        <Footer />
      </div>
    );
  }
}
