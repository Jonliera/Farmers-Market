import React from "react";
import PropTypes from "prop-types";

function MarketSchedule(props) {
  return (
    <React.Fragment>
      <h3>
        {props.day} - {props.location} - {props.hours} - {props.booth}
      </h3>
    </React.Fragment>
  );
}

MarketSchedule.propTypes = {
  day: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  booth: PropTypes.string.isRequired,
};

export default MarketSchedule;
