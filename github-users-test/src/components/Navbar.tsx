import NavbarItem from "./NavbarItem"
import Logo from "./Logo"

const NavbarComponent = () => {
  return (
    <nav className="w-full h-16 flex flex-col justify-center items-center py-3 bg-slate-700 px-10 fixed top-0 left-0">
      <div className="content w-4/6 flex justify-between items-center">
        <div className="logo flex justify-start gap-5 items-center">
          <Logo />
          <h3 className="text-white font-black">CompanyTest SA</h3>
        </div>
        <div className="menu flex justify-center gap-5">
          <NavbarItem route="/" text="HOME" />
          <NavbarItem route="/user" text="USER" />
        </div>
      </div>
    </nav>
  )
}

export default NavbarComponent