import Header from "./components/header";
import BigPicture from "./components/big_picture";
import { dummy } from "./dummy";
import Free from "./components/Free";
function App() {
  return (
    <div>
      <div>
        <Header />
        <BigPicture dummy={dummy} />
        <Free dummy={dummy} />
      </div>
    </div>
  );
}

export default App;
