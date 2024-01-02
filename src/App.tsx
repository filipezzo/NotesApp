import { BrowserRouter, Route, Routes } from "react-router-dom";
import Aside from "./components/Aside/Aside";
import Content from "./components/Content";
import { useEffect, useState } from "react";
import List from "./components/Aside/List";
import Aheader from "./components/Aside/Aheader";
import Category from "./components/Aside/Category";
import { CategoryT } from "./types/types";
import ListItem from "./components/Aside/ListItem";

function App() {
  const [category, setCategory] = useState<CategoryT[]>([]);
  const [theme, setTheme] = useState("light");
  const handleThemeSwitch = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const handleAddCategory = (text: string) => {
    const newItem = {
      id: crypto.randomUUID(),
      text,
      notes: [],
    };
    setCategory([...category, newItem]);
  };
  const mobileArray = [...category].slice(0, 7);

  const handleRemoveCategory = (id: string) => {
    const filter = category.filter((cat) => cat.id !== id);
    setCategory(filter);
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  return (
    <div className=" h-screen flex flex-col md:flex-row  antialiased font-sans  ">
      <BrowserRouter>
        <Aside>
          <Aheader theme={theme} onThemeSwitch={handleThemeSwitch} />
          <Category onAddCategory={handleAddCategory} />
          <List>
            {mobileArray?.length > 0 &&
              mobileArray.map((cat) => (
                <ListItem
                  key={cat.id}
                  category={cat}
                  onDelete={handleRemoveCategory}
                />
              ))}
          </List>
        </Aside>
        <Routes>
          <Route
            path="/"
            element={
              <Content
                onThemeSwitch={handleThemeSwitch}
                theme={theme}
                category={category}
                setCategory={setCategory}
              />
            }
          />
          <Route
            path="/note/:id"
            element={
              <Content
                onThemeSwitch={handleThemeSwitch}
                theme={theme}
                category={category}
                setCategory={setCategory}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
