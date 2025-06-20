import Button from "./components/Button";
import Table from "./components/Table";

function App() {
  return (
    <>
      <div className="container">
       <div>
        Curd data list
       </div>
       
        <div
          className=" d-flex justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <Table />
        </div>
      </div>
    </>
  );
}

export default App;
