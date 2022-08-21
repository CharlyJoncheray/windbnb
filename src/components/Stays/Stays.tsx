import { Stay } from "../../interfaces";
import { Card } from "../Card/Card";
import "./Stays.scss";

type StaysProps = {
  stays: Stay[];
};

export const Stays = ({ stays }: StaysProps): JSX.Element => {
  return (
    <section className="stays container">
      <div className="stays__header">
        <h1 className="stays__title">Stays in Finland</h1>
        <span className="stays__number">12+ stays</span>
      </div>
      <div className="stays__cards">
        {stays.map((stay: Stay, index: number) => (
          <Card key={index} stay={stay} />
        ))}
      </div>
    </section>
  );
};
