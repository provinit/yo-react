import "./App.css";
import Form from "./components/Form";
import Table from "./components/Table";
import { EntryProvider } from "./context/TableContext";

function App() {
  return (
    <EntryProvider>
      <Form />
      <Table />
    </EntryProvider>
  );
}

export default App;
