import React from "react";
import withState from "recompose/withState";
import compose from "recompose/compose";
import withHandlers from "recompose/withHandlers";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";

const LandingPage = ({
  started,
  onStart,
  onSetIncome,
  income,
  expenses,
  onSetExpenses,
  onSubmitMoney
}) => (
  <div className="bg-indigo-lighter h-full flex flex-col items-center justify-between fc-white w-full text-center">
    <div>
      <div className="text-5xl pt-3 font-extrabold"> Is it worth it? </div>
      <div className="text-3xl pt-4 font-semibold">
        An unopinionated dive into the relationship between money and time. Your
        money. Your time.
      </div>
    </div>
    {!started ? (
      <Button
        raisedPrimary
        onClick={onStart}
        // className="bg-yellow w-24 h-24"
      >
        {" "}
        Get started?{" "}
      </Button>
    ) : (
      <div>
        <div> Let's start with how much you make per month. </div>
        <Input
          className="mt-3"
          onChange={onSetIncome}
          value={income}
          startAdornment={<InputAdornment className="mr-2">$</InputAdornment>}
        />
        <div> And your monthly living expenses?</div>
        <Input
          className="mt-3 align-middle"
          onChange={onSetExpenses}
          value={expenses}
          startAdornment={<InputAdornment className="mr-2">$</InputAdornment>}
        />
        <div>
          <Button onClick={onSubmitMoney}> Go! </Button>
        </div>
      </div>
    )}
    <div />
  </div>
);

const onStart = ({ setStarted }) => () => setStarted(true);
const onSetIncome = ({ setIncome }) => e => setIncome(e.target.value);
const onSetExpenses = ({ setExpenses }) => e => setExpenses(e.target.value);

const onSubmitMoney = ({ income, expenses }) => null;
export default compose(
  withState("started", "setStarted", true),
  withState("income", "setIncome", 0),
  withState("expenses", "setExpenses", 0),
  withHandlers({ onStart, onSetIncome, onSetExpenses, onSubmitMoney })
)(LandingPage);
