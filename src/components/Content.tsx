import { CategoryT } from "@/types/types";
import { Moon, SunMoon } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "./ui/button";
import Modal from "./Modal";
import CardItem from "./CardItem";
import NoNotes from "./NoNotes";

const getDate = () => {
  const currentDate = new Date();
  const date = new Intl.DateTimeFormat("pt-BR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const formattedDate = date.format(currentDate);
  return formattedDate;
};

const getGreetingMessage = () => {
  const currentHour = new Date().getHours();

  if (currentHour > 6 && currentHour < 12) {
    return "Bom dia ";
  } else if (currentHour >= 12 && currentHour <= 18) {
    return "Boa tarde ";
  } else {
    return "Boa noite ";
  }
};

type Props = {
  onThemeSwitch: () => void;
  theme: string;
  category: CategoryT[];
  setCategory: Dispatch<SetStateAction<CategoryT[]>>;
};

export default function Content({
  onThemeSwitch,
  theme,
  category,
  setCategory,
}: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { id } = useParams();

  const selectedCategory = category.find((cat) => cat.id === id);

  const handleDeleteNote = (noteId: string) => {
    if (setCategory) {
      setCategory((prev) =>
        prev.map((cat) =>
          cat.id === id
            ? { ...cat, notes: cat.notes.filter((note) => note.id !== noteId) }
            : cat
        )
      );
    }
  };

  return (
    <div className={`py-4 px-8 border flex-1 relative overflow-y-scroll`}>
      <header className=" items-center justify-between hidden md:flex relative">
        <div>
          <h2> {getGreetingMessage()} </h2>
          <h4 className="text-sm">{getDate()}</h4>
        </div>
        <div>
          {theme === "dark" ? (
            <SunMoon onClick={onThemeSwitch} className="cursor-pointer" />
          ) : (
            <Moon onClick={onThemeSwitch} className="cursor-pointer" />
          )}
        </div>
      </header>
      <main className="mt-5 ">
        <div className=" flex items-center justify-between gap-8 mb-8">
          {!selectedCategory && <NoNotes />}
          <strong className="uppercase ">
            {selectedCategory && selectedCategory.text}{" "}
          </strong>
          {selectedCategory && (
            <Button onClick={() => setIsModalOpen(true)}>Nova Nota</Button>
          )}
        </div>

        <ul className="flex flex-wrap gap-4 overflow-hidden">
          {selectedCategory &&
            selectedCategory.notes &&
            selectedCategory.notes.map((note) => (
              <CardItem key={note.id} note={note} onDelete={handleDeleteNote} />
            ))}
        </ul>

        {isModalOpen && (
          <Modal
            onModalOpen={setIsModalOpen}
            setCategory={setCategory}
            id={id}
          />
        )}
      </main>
    </div>
  );
}
