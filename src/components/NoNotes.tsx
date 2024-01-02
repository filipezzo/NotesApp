import { BookHeart } from "lucide-react";

export default function NoNotes() {
  return (
    <div className="flex  flex-col justify-center items-center w-full gap-4 h-full ">
      <BookHeart size={30} />
      <strong>Sem Categoria / Notas</strong>
    </div>
  );
}
