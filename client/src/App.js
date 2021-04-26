import "./App.js";
import Home from "./pages/Home";
import QuestionPage from "./pages/QuestionPage";
import {Router} from "@reach/router";

function App() {
  return (
     <Router>
       
       <QuestionPage path="questions/:id" />
       <Home path="/" />
     </Router>
     

  );

}

export default App;
