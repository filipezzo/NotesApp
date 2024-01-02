import { FormEvent, useRef, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

type Props = {
  onAddCategory: (text: string) => void;
};

export default function Category({ onAddCategory }: Props) {
  const [text, setText] = useState("");
  const ref = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (text.trim().length > 0) {
      onAddCategory(text);
      setText("");
      ref.current?.focus();
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className=" w-full flex justify-between items-center gap-8 mt-8"
    >
      <Input
        ref={ref}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Adicione uma categoria"
        className="dark:border-sky-700 dark:focus:outline-none dark:focus:border-none"
      />
      <Button size={"sm"}>Adicionar</Button>
    </form>
  );
}
