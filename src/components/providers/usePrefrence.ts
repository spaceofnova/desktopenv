import React from "react";
import { PrefrencesContext } from "./PrefrencesContext";

export const usePrefrence = (prefrence: string) => {
  const { getValue } = React.useContext(PrefrencesContext);

  return getValue(prefrence);
};
