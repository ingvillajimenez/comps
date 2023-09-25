import { useState } from "react";
import Dropdown from "./components/Dropdown";

function App() {
  const [selection, setSelection] = useState(null);

  const handleSelect = (option) => {
    setSelection(option);
  };

  const options = [
    { label: "Red", value: "red" },
    { label: "Green", value: "green" },
    { label: "Blue", value: "blue" },
  ];

  return (
    <Dropdown options={options} value={selection} onChange={handleSelect} />
  );
}

export default App;

// npmjs.com/package/prop-types
// Docs

// ➜  comps git:(master) npm install prop-types

// ➜  comps git:(master) npm install -D tailwindcss postcss autoprefixer
// npx tailwindcss init -p

// tailwindcss.com/docs/guides/create-react-app
// https://tailwindcss.com/docs/installation

// npmjs.com/package/classnames
// ➜  comps git:(master) npm install classnames

// ➜  comps git:(master) npm install tailwind-merge
// import { twMerge } from 'tailwind-merge';

// react-icons.github.io/react-icons
// Gives access to a ton of different icon libraries
// ➜  comps git:(master) npm install react-icons
