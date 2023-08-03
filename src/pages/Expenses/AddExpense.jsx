import { useDispatch } from "react-redux";
import { useState } from "react";
import { addExpense } from "../../redux/expenses/action-creators";

const AddExpense = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const dispatch = useDispatch();

  const submitFormHandler = (e) => {
    e.preventDefault();

    dispatch(
      addExpense({
        title,
        amount,
        description,
      })
    );

    setTitle("");
    setDescription("");
    setAmount("");
  };

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const onAmountChange = (e) => {
    setAmount(e.target.value);
  };

  return (
    <div className="container expenses">
      <h1 className="title">Add Expense</h1>
      <form onSubmit={submitFormHandler}>
        <input
          type="text"
          value={title}
          className="form-control"
          placeholder="title"
          onChange={onTitleChange}
        />
        <input
          type="text"
          value={description}
          className="form-control"
          placeholder="description"
          onChange={onDescriptionChange}
        />
        <input
          type="text"
          value={amount}
          className="form-control"
          placeholder="amount"
          onChange={onAmountChange}
        />
        <button type="submit" className="submit btn">
          Add Expense
        </button>
      </form>
    </div>
  );
};

export default AddExpense;
