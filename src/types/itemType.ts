import type { JSX } from "react";

export type Item = {
  title: string;
  type: string;
  description: string;
  image: JSX.Element;
  link: string;
};
