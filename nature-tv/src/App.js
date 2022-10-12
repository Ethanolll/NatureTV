import Header from "./components/header";
import BigPicture from "./components/big_picture";
import {dummy} from "./dummy";
function App() {
  return (
    <div>
      <div>
        <Header />
        {
          dummy.results.map((item) => {
            return (
              <BigPicture
              poster_path={item.poster_path}
              />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
