import "./CostDate.css";

export default function CostDate(props) {
  const date = new Date(props.date);

  const month = date.toLocaleString("ru-RU", { month: "long" });
  const year = date.toLocaleString("ru-RU", { year: "numeric" });
  const day = date.toLocaleString("ru-RU", { day: "2-digit" });

  console.log(day, month, year);

  return (
    <div className="cost-date">
      <div className="cost-date__month">{month}</div>
      <div className="cost-date__year">{year}</div>
      <div className="cost-date__day">{day}</div>
    </div>
  );
}
