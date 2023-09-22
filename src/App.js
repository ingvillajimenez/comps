import { GoBellFill, GoCloud, GoDatabase } from "react-icons/go";
import Button from "./Button";

function App() {
  return (
    <div>
      <div>
        <Button secondary outline rounded>
          <GoBellFill />
          Click me!!
        </Button>
      </div>
      <div>
        <Button danger outline>
          <GoCloud />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning>
          <GoDatabase />
          See Deal!
        </Button>
      </div>
      <div>
        <Button secondary outline>
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button primary rounded>
          Something!
        </Button>
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
