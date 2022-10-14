import Header from "./components/header";
import BigPicture from "./components/big_picture";
import { dummy } from "./dummy";
import { dummy1 } from "./dummy1";

import Free from "./components/Free";
function App() {
  return (
    <div>
      <div>
        <Header />
        <BigPicture dummy={dummy} />
        <Free dummy1={dummy1} />
      </div>
    </div>
  );
}

export default App;
