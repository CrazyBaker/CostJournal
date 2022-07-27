import React from "react";
import "./Costs.css";
import Card from "../UI/Card";
import CostsFilter from "./CostsFilter";
import { useState } from "react";
import CostsList from "./CostsList";

export default function Costs(props) {
  const [selectedYear, setSelectedYear] = useState("2022");
  console.log(props.costs);

  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredCosts = props.costs.filter((cost) => {
    const date = new Date(cost.date);
    return date.getFullYear().toString() === selectedYear;
  });

  return (
    <div>
      <Card className="costs">
        <CostsFilter
          defaultValue={selectedYear}
          onChangeYear={yearChangeHandler}
        />
        <CostsList costs={filteredCosts} />
      </Card>
    </div>
  );
}
