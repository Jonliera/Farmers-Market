import React from "react";
import MarketList from "./MarketList";
import AvailableProduce from "./AvailableProduce";

class MarketControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState((prevState) => ({
      formVisibleOnPage: !prevState.formVisibleOnPage,
    }));
  };

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <MarketList />;
      buttonText = "Return to Market List";
    } else {
      currentlyVisibleState = <AvailableProduce />;
      buttonText = "Find us today";
    }
    return (
      <React.Fragment>
        <h1>Welcome to our Market Information</h1>
        <button onClick={this.handleClick}>{buttonText}</button>
        {currentlyVisibleState}
      </React.Fragment>
    );
  }
}

export default MarketControl;
