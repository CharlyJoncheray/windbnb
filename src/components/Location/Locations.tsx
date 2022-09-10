import { useDispatch } from "react-redux";

import { Stay } from "@interfaces";
import { setLocation } from "@store";

import "./Location.scss";

export type LocationsProps = {
  stays: Stay[];
};

export const Locations: React.FC<LocationsProps> = ({
  stays,
}: LocationsProps): JSX.Element => {
  const dispatch = useDispatch();
  const cities: string[] = Array.from(
    new Set(
      stays.map((stay: Stay) => {
        return stay.city;
      })
    )
  );

  return (
    <div className="locations">
      {cities.map((city: string, index: number) => (
        <button
          key={index}
          className="locations__button"
          onClick={() => dispatch(setLocation(city))}
        >
          <i className="bx bxs-location-plus"></i>
          <span>{`${city}, Finland`}</span>
        </button>
      ))}
    </div>
  );
};
