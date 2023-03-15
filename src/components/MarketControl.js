import React from "react";
import MarketList from "./MarketList";
import AvailableProduce from "./AvailableProduce";

class MarketControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
    };
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
      buttonText = "What's in season?";
    }
    return (
      <React.Fragment>
        <h1>Market Control</h1>
        <button onClick={this.handleClick}>{buttonText}</button>
        {currentlyVisibleState}
      </React.Fragment>
    );
  }
}

export default MarketControl;
