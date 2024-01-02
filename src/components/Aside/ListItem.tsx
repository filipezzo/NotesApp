import { CategoryT } from "@/types/types";
import { Trash } from "lucide-react";
import { Link } from "react-router-dom";

type Props = {
  category: CategoryT;
  onDelete: (id: string) => void;
};

export default function ListItem({ category, onDelete }: Props) {
  return (
    <Link
      to={`note/${category.id}`}
      className="bg-sky-200 dark:bg-sky-800  p-2 rounded-lg hover:scale-105 cursor-pointer transition-all flex justify-between items-center"
    >
      <strong>{category.text}</strong>
      <Trash
        onClick={() => onDelete(category.id)}
        className="hover:text-red-400"
        size={14}
      />
    </Link>
  );
}
