import { ToastContainer } from "react-toastify";
import Form from "./Form";
import Items from "./Items";
const App = () => {
  return (
    <section className="section-center">
      <Form />
      <Items />
      <ToastContainer position="top-center" />
    </section>
  );
};
export default App;
