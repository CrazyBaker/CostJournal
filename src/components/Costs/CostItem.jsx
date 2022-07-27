import "./CostItem.css";
import CostDate from "./CostDate";
import Card from "../UI/Card";

function CostItem(props) {
  return (
    <li>
      <Card className="cost-item">
        <div className="cost-item__description">
          <CostDate date={props.date} />
          <h2>{props.description}</h2>
          <div className="cost-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default CostItem;
