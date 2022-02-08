import { Dashboard } from "./components/Dashboard";
import { InformationBox } from "./components/Form/InformationBox";
import { Header } from "./components/Header";
import { GlobalStyles } from "./styles/global";
import { MainPage } from '../src/pages/MainPage'
function App() {
  return (
    //Utilizando fragments
    <>
      <MainPage />
      <GlobalStyles />
    </>
  );
}

export default App;
