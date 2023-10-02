import Sidebar from "./components/Sidebar";
import Route from "./components/Route";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";
import ButtonPage from "./pages/ButtonPage";
import ModalPage from "./pages/ModalPage";
import TablePage from "./pages/TablePage";
import CounterPage from "./pages/CounterPage";

function App() {
  return (
    <div className="container mx-auto grid grid-cols-6 gp-4 mt-4">
      <Sidebar />
      <div className="col-span-5">
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/">
          <DropdownPage />
        </Route>
        <Route path="/buttons">
          <ButtonPage />
        </Route>
        <Route path="/modal">
          <ModalPage />
        </Route>
        <Route path="/table">
          <TablePage />
        </Route>
        <Route path="/counter">
          <CounterPage initialCount={10} />
        </Route>
      </div>
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

// https://lipsum.com/

// ➜  comps git:(master) npm install immer
