import { NoteT } from "@/types/types";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Trash } from "lucide-react";
type Props = {
  note: NoteT;
  onDelete: (noteId: string) => void;
};

export default function CardItem({ note, onDelete }: Props) {
  return (
    <Card className="max-w-[300px] h-fit w-full text-wrap break-all hover:scale-90 cursor-pointer transition-all ">
      <CardHeader>{note.title}</CardHeader>
      <CardContent>{note.content}</CardContent>
      <CardFooter className="flex w-full ">
        <Trash
          onClick={() => onDelete(note.id)}
          className="ml-auto cursor-pointer hover:text-red-300 "
          size={16}
        />
      </CardFooter>
    </Card>
  );
}
