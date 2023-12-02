import Login from "./components/Login/Login";
import Product from "./components/Product/Product";
import Todo from "./components/Todo/Todo";
import { captureOrder } from "./functions/paymentFunctions";


function App() {
  // get parameters from url and send to captureOrder function
  const params = new URLSearchParams(window.location.search);
  if (params.has("token")) captureOrder(params.get("token"));  

  return (
    <main className="p-3">
      <h1>Simple buy</h1>
      <hr />
      <Product />
      <hr />
      <Todo />
      <hr />
      <Login />

      {/* example button */}
      {/* <form>
        <script src='https://checkout.epayco.co/checkout.js' 
            data-epayco-key='c71528049eb683fbfa31242857cda012' 
            class='epayco-button' 
            data-epayco-amount='40000' 
            data-epayco-tax='0'
            data-epayco-tax-base='40000'  
            data-epayco-name='Robot' 
            data-epayco-description='Robot' 
            data-epayco-currency='cop'    
            data-epayco-country='co' 
            data-epayco-test='true' 
            data-epayco-external='true' 
            data-epayco-response=''  
            data-epayco-confirmation='' 
            data-epayco-button='https://multimedia.epayco.co/dashboard/btns/btn5.png'> 
        </script> 
      </form> */}
    </main>
  );
}

export default App;
