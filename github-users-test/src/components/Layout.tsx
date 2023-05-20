import NavbarComponent from "./Navbar"

interface Props {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({
  children
}) => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <NavbarComponent />
      <div className="content mt-24 w-4/6">
        {children}
      </div>
    </div>
  )
}

export default Layout