import "./CostForm.css";
import { useState } from "react";

export default function CostForm(props) {
  const [userInput, setUserInput] = useState({
    description: "",
    amount: "",
    date: "",
  });

  const nameChangeHandler = (event) =>
    setUserInput((previousState) => {
      return {
        ...previousState,
        description: event.target.value,
      };
    });

  const amountChangeHandler = (event) =>
    setUserInput((previousState) => {
      return {
        ...previousState,
        amount: event.target.value,
      };
    });

  const amountDateHandler = (event) =>
    setUserInput((previousState) => {
      return {
        ...previousState,
        date: event.target.value,
      };
    });

  const submitHandler = (event) => {
    event.preventDefault();

    props.onSaveCostData(userInput);

    console.log(userInput);

    setUserInput({
      description: "",
      amount: "",
      date: "",
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Название</label>
          <input
            type="text"
            value={userInput.description}
            onChange={nameChangeHandler}
          />
        </div>
        <div className="new-cost__control">
          <label>Сумма</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-cost__control">
          <label>Дата</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={userInput.date}
            onChange={amountDateHandler}
          />
        </div>
        <div className="new-cost__actions">
          <button type="submit">Добавить расход</button>
          <button type="button" onClick={props.onCancel}>
            Отмена
          </button>
        </div>
      </div>
    </form>
  );
}
