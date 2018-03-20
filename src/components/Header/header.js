import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../redux/actions";

export class Header extends Component {
  constructor(props) {
    super(props);
  }

  /*-------- Method Life Cycle -------------*/
  componentWillMount() {
    this.props.fetchHello();
  }

  /** ------- Method Event -------------- */

  /** ------- Method Component ------- */
  render() {
    const { hello } = this.props;
    if (!hello) {
      return <p>Loading...</p>;
    }
    return <h1>{hello}</h1>;
  }
}

const mapStateToProps = ({ hello }) => {
  return {
    hello
  };
};

export default connect(mapStateToProps, actions)(Header);
