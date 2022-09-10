import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { RootState, setAdults, setChildrens } from "@store";

import "./Guests.scss";

type CounterType = {
  title: string;
  subtitle: string;
  number: number;
  setNumber: ActionCreatorWithPayload<number, string>;
};

const Counter: React.FC<CounterType> = ({
  title,
  subtitle,
  number,
  setNumber,
}: CounterType): JSX.Element => {
  const dispatch = useDispatch();
  const increaseMethod = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    dispatch(setNumber(number + 1));
  };

  const decreaseMethod = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    if (number > 0) {
      dispatch(setNumber(number - 1));
    }
  };

  return (
    <div className="counter">
      <h1 className="counter__title">{title}</h1>
      <h2 className="counter__subtitle">{subtitle}</h2>
      <div className="counter__buttons">
        <button className="counter__button" onClick={decreaseMethod}>
          -
        </button>
        <span>{number}</span>
        <button className="counter__button" onClick={increaseMethod}>
          +
        </button>
      </div>
    </div>
  );
};

export const Guests: React.FC = (): JSX.Element => {
  const { adults, childrens } = useSelector(
    (state: RootState) => state.stays.guests
  );

  return (
    <div className="guests">
      <Counter
        title="Adults"
        subtitle="Ages 13 or above"
        number={adults}
        setNumber={setAdults}
      />
      <Counter
        title="Children"
        subtitle="Ages 2-12"
        number={childrens}
        setNumber={setChildrens}
      />
    </div>
  );
};
