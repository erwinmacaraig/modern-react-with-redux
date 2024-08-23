// when we are importing folders of files out of the node modules directory
// we do not have to use a relative path

// import 'bulma/css/bulma.css';
// import './App.css';
import PDA from "./pages/PDA";
import Animals from "./pages/Animals";
import Search from "./pages/Search";
import MyBooks from "./pages/MyBooks";
//==========================
import Button from "./components/Button";
function App() {
  return (
    <div>
      <div>
        <Button primary rounded outline>
          Click Me Baby
        </Button>
      </div>

      <div>
        <Button danger outline>
          Buy Now
        </Button>
      </div>

      <Button warning>See Deal</Button>
      <div>
        <Button primary rounded>
          Something!
        </Button>
      </div>
    </div>
  );
}

export default App;
