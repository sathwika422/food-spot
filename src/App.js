import "./App.css";
import Home from "./components/home/home";
import Login from "./components/login/login";
import Account from "./components/accounts/account";
import {BrowserRouter , Routes, Route} from 'react-router-dom';
import NavBar from "./components/navBar/navBar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="" exact element={<Home />}></Route>
          {/* <Route path="/post" exact element={<PostDialog />}></Route>
          <Route path="/check" exact element={<CheckDiaries />}></Route> */}
          <Route path="/login" exact element={<Login />}></Route>
          <Route path="/accounts" exact element={<Account />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
