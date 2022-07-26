import React from "react";
import CostItem from "./CostItem";
import "./Costs.css";
import Card from "../UI/Card";
import CostsFilter from "./CostsFilter";
import { useState } from "react";

export default function Costs(props) {
  const [selectedYear, setSelectedYear] = useState("2022");
  console.log(props.costs);

  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredCosts = props.costs.filter((cost) => {
    return cost.date.getFullYear().toString() === selectedYear;
  });

  let costContent = <p>В этом году расходов нет</p>;

  if (filteredCosts.length > 0) {
    costContent = filteredCosts.map((cost) => {
      return (
        <CostItem
          key={cost.id}
          date={cost.date}
          description={cost.description}
          amount={cost.amount}
        />
      );
    });
  }

  return (
    <div>
      <Card className="costs">
        <CostsFilter
          defaultValue={selectedYear}
          onChangeYear={yearChangeHandler}
        />
        {costContent}
      </Card>
    </div>
  );
}
