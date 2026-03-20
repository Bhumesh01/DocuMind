import Navbar from "./components/NavBar"
import Main from "./components/Main"
function App() {

  return (
    <div className="bg-indigo-200 min-h-screen h-fit font-mono flex justify-start flex-col items-center gap-10">
      <Navbar></Navbar>
      <Main></Main>
    </div>
  )
}

export default App
