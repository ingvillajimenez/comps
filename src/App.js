import Link from "./components/Link";

function App() {
  return (
    <div>
      <Link to="/accordion">Go to accordion</Link>
      <Link to="/dropdown">Go to dropdown</Link>
    </div>
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

// window.location.pathname

// window.history.pushState({}, '', '/dropdown');
// Updates the address bar but doesn't cause a refresh

// window.history.pushState({}, '', '/a1');
// window.history.pushState({}, '', '/b2');
// window.addEventListener('popstate', () => console.log('Im at', window.location.pathname));
