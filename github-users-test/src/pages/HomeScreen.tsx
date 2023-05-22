import React from 'react';
import Layout from '../components/Layout';
import UserItem from '../components/UserItem';
import backImage from '../assets/back3.webp';
import SearchInput from '../components/SearchInput';
import useUsers from '../hooks/useUsers';
import { useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';
import Chart from '../components/Chart';
import { ToastContainer } from 'react-toastify';
import ModalUsersSaved from '../components/ModalUsersSaved';
import { faUsers as usersIcon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HomeScreen: React.FC = () => {
  const {
    getAllUsersByName,
    users,
    loading,
    userFollowers,
    startSearch,
    showModal,
    setShowModal,
    getUsersSavedLocally,
    usersLocal
  } = useUsers();
  const navigate = useNavigate();

  const navigateToUserDetails = (login: string) => {
    navigate(`/user/${login}`);
  };

  return (
    <Layout>
      {showModal && (
        <ModalUsersSaved
          users={usersLocal}
          getUsersSavedLocally={getUsersSavedLocally}
          loading={loading}
          onClose={() => setShowModal(false)}
        />
      )}
      <div className="content flex justify-start items-start gap-3" style={{ height: `calc(100vh - 12.5rem)` }} id="Users">
        <div className="image flex justify-center items-center w-1/2 h-full overflow-hidden relative">
          <img src={backImage} alt="background image" className="w-full h-full object-cover" />
          <div className="form absolute top-0 left-0 bg-black bg-opacity-40 w-full h-full flex flex-col justify-start items-center pt-5">
            <div className="content w-4/5">
              <SearchInput searchUser={getAllUsersByName} />
            </div>
            <div className="content w-4/5">
              <button
                className="w-full h-12 px-4 py-3 my-2 bg-white text-cyan-700 rounded-md font-black text-xl"
                type="button"
                onClick={() => {
                  setShowModal(true);
                }}
              >
                Users saved locally
              </button>
            </div>
          </div>
        </div>
        <div className={`
        users-grid h-full w-1/2 px-5 overflow-y-auto overflow-hidden pt-5 pb-10 border-4 border-cyan-700 flex flex-col
        ${users.length > 0 ? 'justify-start items-center' : 'justify-center items-center'}
        `}>
          <h3 className="text-5xl text-cyan-700 font-black text-center">Github Users List</h3>
          {loading ? (
            <Loader />
          ) : !loading && users.length > 0 ? (
            <>
              <span className="text-cyan-700 font-bold my-4">ID | Login</span>
              <div className="items flex flex-col items-start justify-start w-[90%]">
                {!loading &&
                  users &&
                  users?.map(user => (
                    <UserItem
                      key={user.id}
                      user={user}
                      onClick={() => {
                        navigateToUserDetails(user.login);
                      }}
                    />
                  ))}
              </div>
              <div className="w-full mt-3">
                <Chart data={userFollowers} labels={users?.map(user => user.login) || []} />
              </div>
            </>
          ) : users.length === 0 && startSearch ? (
            <span className="text-cyan-700 font-bold my-4">No users found</span>
          ) : (
            <div className='mt-10 flex flex-col justify-center items-center'>
              <span className="text-black opacity-70 font-bold mt-5 text-center text-xl">Search for github users</span>
              <div className="w-full flex justify-center items-center p-3 mt-5">
                <FontAwesomeIcon icon={usersIcon} className="text-cyan-700 text-9xl" />
              </div>
            </div>
          )}
        </div>
      </div>
      <ToastContainer />
    </Layout>
  );
};

export default HomeScreen;
