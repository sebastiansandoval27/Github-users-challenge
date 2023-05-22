import { ToastContainer } from 'react-toastify';
import Layout from '../components/Layout';
import Loader from '../components/Loader';
import useUser from '../hooks/useUser';
import '../styles/userScreen-styles.css';

const customSpan = (text: string) => {
  return <span className="text-2xl font-bold text-cyan-800 mr-2">{text}:</span>;
};

const UserScreen = () => {
  const { user, loading, saveUser } = useUser();

  return (
    <Layout>
      {loading ? (
        <Loader />
      ) : (
        <div
          className="content flex flex-col justify-start items-start gap-3"
          style={{ height: `calc(100vh - 12.5rem)` }}
          id="User"
        >
          <h2 className="text-2xl text-white w-full bg-cyan-700 py-3 px-5">
            User Details with the Id # <span className="font-black">{user.id}</span>
          </h2>
          <div className="userGrid w-full border-2 border-cyan-700">
            <div className="grid-avatar w-80 h-80 flex justify-center items-center p-2 rounded-full">
              <img src={user.avatar_url} alt={`${user.login}`} className="rounded-full w-full h-full object-cover" />
            </div>
            <div className="grid-login flex justify-start w-full">
              {customSpan('Login')} <h1 className="text-2xl">{user.login}</h1>
            </div>
            <div className="grid-name flex justify-start w-full">
              {customSpan('Name')} <h1 className="text-2xl">{user.name}</h1>
            </div>
            <div className="grid-email flex justify-start w-full">
              {customSpan('Email')} <h1 className="text-2xl">{user.email || 'Email not allowed'}</h1>
            </div>
            <div className="grid-followers flex justify-start w-full">
              {customSpan('Followers / following')}{' '}
              <h1 className="text-2xl">
                {user.followers} / {user.following}
              </h1>
            </div>
            <div className="grid-location flex justify-start w-full">
              {customSpan('Location')} <h1 className="text-2xl">{user.location}</h1>
            </div>
            <div className="grid-bio flex justify-start w-full">
              {customSpan('Bio')} <h1 className="text-2xl">{user.bio}</h1>
            </div>
          </div>
          <div className="w-full h-16 my-3 flex justify-start py-2">
            <button
              className="w-32 h-full bg-cyan-700 text-white font-bold text-xl rounded-md"
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.preventDefault();
                saveUser(user);
              }}
            >
              Export User
            </button>
          </div>
        </div>
      )}
      <ToastContainer />
    </Layout>
  );
};

export default UserScreen;
