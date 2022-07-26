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

  const filteredCosts = (costs) => {
    const result = costs.filter(
      (cost) => cost.date.getFullYear() == selectedYear
    );
    return result;
  };

  const filterCosts = filteredCosts(props.costs);

  console.log(filterCosts);

  return (
    <div>
      <Card className="costs">
        <CostsFilter
          defaultValue={selectedYear}
          onChangeYear={yearChangeHandler}
        />
        {filterCosts.map((cost) => {
          return (
            <CostItem
              key={cost.id}
              date={cost.date}
              description={cost.description}
              amount={cost.amount}
            />
          );
        })}
      </Card>
    </div>
  );
}
