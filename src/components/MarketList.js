import React from "react";

const marketList = [
  {
    day: "Sunday",
    location: "Lents International",
    hours: "9:00am - 2:00pm",
    booth: "4A",
  },
  {
    day: "Monday",
    location: "Pioneer Courthouse Square",
    hours: "10:00am - 2:00pm",
    booth: "7C",
  },
  {
    day: "Tuesday",
    location: "Hillsboro",
    hours: "5:00pm - 8:30pm",
    booth: "1F",
  },
  {
    day: "Wednesday",
    location: "Shemanski Park",
    hours: "10:00am - 2:00pm",
    booth: "3E",
  },
  {
    day: "Thursday",
    location: "Northwest Portland",
    hours: "2:00pm - 6:00pm",
    booth: "6D",
  },
  {
    day: "Saturday",
    location: "Beaverton",
    hours: "10:00am - 1:30pm",
    booth: "9G",
  },
];

function MarketList() {
  return (
    <React.Fragment>
      <hr />
      {/* {marketList[0].map((market) => ( */}
      <div>
        <p>day : {marketList[0].day}</p>
        <p>location : {marketList[0].location}</p>
        <p>hours : {marketList[0].hours}</p>
        <p>booth : {marketList[0].booth}</p>
      </div>
      {/* ))} */}
    </React.Fragment>
  );
}

export default MarketList;
