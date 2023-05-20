import { User } from "../interfaces/User"

interface Props {
  user: User;
  onClick?: (id: number) => void;
}

const UserItem: React.FC<Props> = ({
  user: {
    id,
    login
  },
  onClick
}) => {
  return (
    <div className="w-full h-12 flex items-center justify-start px-4 py-3 my-2 bg-teal-500 rounded-md cursor-pointer hover:bg-cyan-950 hover:transition-all hover:duration-500"
      onClick={() => onClick && onClick(id)}
    >
      <span className="text-cyan-700 font-bold text-center w-[25%] bg-white rounded-md pl-2">{id}</span>
      <span className="mx-3 w-[2px] h-full bg-white "></span>
      <h3 className="text text-white font-bold text-xl w-[70%] text-ellipsis overflow-hidden whitespace-nowrap">{login}</h3>
    </div>
  )
}

export default UserItem