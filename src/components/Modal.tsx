import { X } from "lucide-react";
import { Button } from "./ui/button";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { CategoryT } from "@/types/types";

type Props = {
  setCategory: Dispatch<SetStateAction<CategoryT[]>>;
  onModalOpen: Dispatch<SetStateAction<boolean>>;
  id: string | undefined;
};

export default function Modal({ onModalOpen, setCategory, id }: Props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (title.trim() && content.trim()) {
      const newNote = {
        id: crypto.randomUUID(),
        title,
        content,
      };
      if (setCategory) {
        setCategory((prevCategories) =>
          prevCategories.map((cat) =>
            cat.id === id ? { ...cat, notes: [...cat.notes, newNote] } : cat
          )
        );
      }
      onModalOpen(false);
    }
  };

  return (
    <div className=" -mt-32 p-4 md:p-0 md:-mt-10 absolute top-0 left-0 w-full h-screen flex justify-center items-center">
      <div className="bg-stone-950 dark:bg-slate-600  rounded-lg bg-opacity-50 p-8 h-[400px] w-[500px] md:h-[600px] flex flex-col ">
        <form className="w-full h-full flex flex-col " onSubmit={handleSubmit}>
          <div className="flex justify-between my-8 gap-4 items-center">
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              className="outline-none flex-1 text-black rounded-md p-2"
              placeholder="Titulo da nota"
            />
            <X onClick={() => onModalOpen(false)} />
          </div>

          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            spellCheck={false}
            maxLength={200}
            placeholder="Digite o conteúdo"
            className="resize-none w-full rounded-md outline-none text-wrap text-black p-2 flex-1"
          ></textarea>
          <Button className="max-w-44 ml-auto mt-4">Salvar</Button>
        </form>
      </div>
    </div>
  );
}
