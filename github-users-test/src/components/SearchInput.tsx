import useForm from "../hooks/useForm"

interface Props {
  searchUser: (login: string) => void;
}

const SearchInput: React.FC<Props> = ({
  searchUser
}) => {

  const {
    register,
    handleSubmit,
    errors
  } = useForm();

  return (
    <form onSubmit={handleSubmit((data) => searchUser(data?.login))} className="my-5 bg-white p-3 rounded-lg flex flex-col justify-start items-center">
      <h2 className='text-cyan-700 text-4xl font-bold'>Search for an User</h2>
      <input
        type="text"
        placeholder="Search for a user"
        className="w-full h-12 px-4 py-3 my-2 border-2 border-cyan-600 rounded-md mt-5"
        {...register('login')}
      />
      {
        errors.login && (
          <span className="w-full my-1 h-10 bg-red-500 rounded-md px-5 py-3 flex justify-center items-center">

            <span className="text-white">{errors.login.message}</span>
          </span>
        )
      }
      <button className="w-full h-12 px-4 py-3 my-2 bg-cyan-700 text-white rounded-md font-black text-xl" type="submit">
        Search
      </button>
    </form>
  )
}

export default SearchInput