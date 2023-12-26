import { useSelector } from "react-redux";
import Login from "./components/Login/Login";
import Product from "./components/Product/Product";
import ReduxInputcomponent from "./components/ReduxInputcomponent/ReduxInputcomponent";
import Todo from "./components/Todo/Todo";
import { captureOrder } from "./functions/paymentFunctions";




function App() {
  // get parameters from url and send to captureOrder function
  const params = new URLSearchParams(window.location.search);
  if (params.has("token")) captureOrder(params.get("token"));  
  const user = useSelector((state) => state.user);

  return (
    <main className="p-3">
      <h1>Simple buy</h1>
      <h6>Global state</h6>
      <p>{user.name}</p>
      <hr />
      <Product />
      <hr />
      <Todo />
      <hr />
      <Login />
      <hr />
      <ReduxInputcomponent/>

    </main>
  );
}

export default App;
