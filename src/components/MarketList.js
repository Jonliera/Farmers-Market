import React, { useState } from "react";
import MarketSchedule from "./MarketSchedule";

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
  const [theDay, setDate] = useState(null);

  const filterDay = (day) => {
    setDate(day);
  };

  const filterMarketList = theDay
    ? marketList.filter((market) => market.day === theDay)
    : marketList;

  return (
    <React.Fragment>
      <hr />

      <div>
        <button onClick={() => filterDay(null)}>Show All</button>
        <button onClick={() => filterDay("Sunday")}>Sunday</button>
        <button onClick={() => filterDay("Monday")}>Monday</button>
        <button onClick={() => filterDay("Tuesday")}>Tuesday</button>
        <button onClick={() => filterDay("Wednesday")}>Wednesday</button>
        <button onClick={() => filterDay("Thursday")}>Thursday</button>
        <button onClick={() => filterDay("Friday")}>Friday</button>
        <button onClick={() => filterDay("Saturday")}>Saturday</button>
      </div>

      {filterMarketList.map((market, index) => (
        <MarketSchedule
          day={market.day}
          location={market.location}
          hours={market.hours}
          booth={market.booth}
          key={index}
        />
      ))}
    </React.Fragment>
  );
}

export default MarketList;
