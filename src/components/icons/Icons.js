import React from "react";
import { Gear, AddOutline } from "@rsuite/icons";
import PieChartIcon from "@rsuite/icons/PieChartIcon";

const ChartIcon = ({ size }) => (
  <PieChartIcon style={{ fontSize: size, marginRight: 10 }} />
);

const Icons = () => {
  return (
    <>
      <div>
        <ChartIcon size="1em" />
        <ChartIcon size="2em" />
        <ChartIcon size="3em" />
        <ChartIcon size="4em" />
        <ChartIcon size="5em" />
      </div>
    </>
  );
};

export default Icons;
