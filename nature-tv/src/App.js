import Header from "./components/header";
import BigPicture from "./components/big_picture";
import {dummy} from "./dummy";
function App() {
  return (
    <div>
      <div>
        <Header />
        <BigPicture dummy={dummy} />
      </div>
    </div>
  );
}

export default App;
