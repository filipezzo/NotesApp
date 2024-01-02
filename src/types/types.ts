export type CategoryT = {
  id: string;
  text: string;
  notes: NoteT[];
};

export type NoteT = {
  id: string;
  title: string;
  content: string;
};
