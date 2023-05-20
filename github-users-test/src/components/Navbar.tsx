import NavbarItem from "./NavbarItem"
import Logo from "./Logo"
import { useNavigate } from "react-router-dom"

const NavbarComponent = () => {

  const navigate = useNavigate();

  return (
    <nav className="w-full h-16 flex flex-col justify-center items-center py-3 bg-slate-700 px-10 fixed top-0 left-0">
      <div className="content w-4/6 flex justify-between items-center">
        <div className="logo flex justify-start gap-5 items-center cursor-pointer" onClick={() => {
          navigate('/')
        }}>
          <Logo />
          <h3 className="text-white font-black">CompanyTest SA</h3>
        </div>
        <div className="menu flex justify-center gap-5">
          <NavbarItem route="/" text="HOME" />
          <div className="pointer-events-none opacity-40">
            <NavbarItem route="/user" text="USER" />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavbarComponent