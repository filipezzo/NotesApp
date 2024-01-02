import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Aside({ children }: Props) {
  return (
    <aside className="md:border md:max-w-[500px] w-full  dark:bg-slate-800 md:h-full p-4">
      {children}
    </aside>
  );
}
