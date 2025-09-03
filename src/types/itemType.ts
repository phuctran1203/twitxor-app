import type { JSX } from "react";

export type Type = "plugin" | "tool";
export type Item = {
  title: string;
  type: Type;
  description: string;
  image: JSX.Element;
  link_1: string;
  link_2: string;
};
