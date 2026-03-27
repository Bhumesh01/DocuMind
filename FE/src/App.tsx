import Navbar from "./components/NavBar"
import Main from "./components/Main"
import Chat from "./components/Chat"
function App() {

  return (
    <div className="bg-indigo-200 min-h-screen h-fit font-mono flex justify-start flex-col items-center gap-10">
      <Navbar></Navbar>
      <Main></Main>
      <Chat></Chat>
    </div>
  )
}

export default App
