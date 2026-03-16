import logo from "../assets/logo.svg";
import Button from "./Button";

export default function Navbar() {
  return (
    <nav className="flex justify-between gap-2 items-center flex-wrap border-indigo-100 border pr-2 w-full pl-auto">
      <img src={logo}  draggable={false} alt="DocuMind logo" className="max-w-3xs"/>
      <div className="flex items-center gap-2">
        <Button text="Login"  onClick={() => {}} />
        <Button text="SignUp" onClick={() => {}} />
      </div>
    </nav>
  );
}