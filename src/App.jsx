import "./App.css";
import Header from "./components/Header"
import Todo from "./components/Todo"
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"

function App() {

  return (
    <div className="App">
      <Header />
      <Todo/>
    </div>
  )
}

export default App
