import { Stay } from "../interfaces";

export const getData = async (): Promise<Stay[]> => {
  const data = await fetch("stays.json", {
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
    },
  });
  const jsonData = await data.json();
  return jsonData;
};
