import Accordion from "./components/Accordion";

function App() {
  const items = [
    {
      id: "l2kj5",
      label: "Can I use React on a project?",
      content:
        "You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.",
    },
    {
      id: "lk2j35lkj",
      label: "Can I use JavaScript on a project?",
      content:
        "You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.",
    },
    {
      id: "l1kj2i0g",
      label: "Can I use CSS on a project?",
      content:
        "You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.",
    },
  ];

  return <Accordion items={items} />;
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
