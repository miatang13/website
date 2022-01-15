import { createRef } from "react";

export const initRefArray = (arrayRef, length) => {
  if (arrayRef.current.length !== length) {
    arrayRef.current = Array(length)
      .fill()
      .map((_, i) => arrayRef.current[i] || createRef());
  }
};
