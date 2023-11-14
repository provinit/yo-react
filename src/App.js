import "./App.css";
import Form from "./components/Form";
import Table from "./components/Table";
import { EntryProvider } from "./context/TableContext";

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <EntryProvider>
        <Form />
        <Table />
      </EntryProvider>
    </div>
  );
}

export default App;
