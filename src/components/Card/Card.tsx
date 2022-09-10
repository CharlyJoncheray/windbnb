import { Stay } from "@interfaces";

import "./Card.scss";

type CardProps = {
  stay: Stay;
};

export const Card = ({ stay }: CardProps): JSX.Element => {
  return (
    <article className="card">
      <img className="card__image" src={stay.photo} alt={stay.title} />
      <div className="card__infos">
        <div className="card__infos__filtering">
          {stay.superHost && (
            <span className="card__infos__superhost">SUPER HOST</span>
          )}
          <span>{`${stay.type} ${
            stay.beds !== null
              ? ` . ${stay.beds} bed${stay.beds > 1 ? "s" : ""}`
              : ""
          }`}</span>
        </div>
        <span className="card__infos__rating">
          <i className="bx bxs-star"></i>
          {stay.rating}
        </span>
      </div>
      <h1 className="card__title">{stay.title}</h1>
    </article>
  );
};
