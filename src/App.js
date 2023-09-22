import Button from "./Button";

function App() {
  return (
    <div>
      <div>
        <Button success rounded outline>
          Click me!!
        </Button>
      </div>
      <div>
        <Button danger outliine>
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning>See Deal!</Button>
      </div>
      <div>
        <Button secondary outline>
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button secondary rounded>
          Something!
        </Button>
      </div>
    </div>
  );
}

export default App;

// npmjs.com/package/prop-types
// Docs

// comps git:(master) npm install prop-types
