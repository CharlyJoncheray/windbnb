import { useSelector } from "react-redux";

import { Stay } from "@interfaces";
import { RootState } from "@store";
import { Card } from "@components";

import "./Stays.scss";

export const Stays = (): JSX.Element => {
  const stays = useSelector((state: RootState) => state.stays.displayedStays);

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
