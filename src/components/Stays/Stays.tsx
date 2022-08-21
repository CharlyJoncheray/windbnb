import { Stay } from "../../interfaces";
import { Card } from "../Card/Card";
import "./Stays.scss";

type StaysProps = {
  stays: Stay[];
};

export const Stays = ({ stays }: StaysProps): JSX.Element => {
  return (
    <section className="stays container">
      <div className="stays__cards">
        {stays.map((stay: Stay, index: number) => (
          <Card key={index} stay={stay} />
        ))}
      </div>
    </section>
  );
};
