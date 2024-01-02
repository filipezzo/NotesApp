import { ReactNode } from "react";

export default function List({ children }: { children: ReactNode }) {
  return <ul className="flex flex-col mt-8 gap-4">{children}</ul>;
}
