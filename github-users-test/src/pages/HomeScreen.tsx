import React from 'react'
import Layout from '../components/Layout'
import UserItem from '../components/UserItem'
import backImage from '../assets/back3.webp'
import SearchInput from '../components/SearchInput'
import useUsers from '../hooks/useUsers'
import { useNavigate } from 'react-router-dom'
import Loader from '../components/Loader'
import Chart from '../components/Chart'
import { ToastContainer } from 'react-toastify'

const HomeScreen: React.FC = () => {

  const {
    getAllUsersByName,
    users,
    loading,
    userFollowers,
    startSearch
  } = useUsers();
  const navigate = useNavigate();

  const navigateToUserDetails = (login: string) => {
    navigate(`/user/${login}`);
  }

  return (
    <Layout>
      <div className="content flex justify-start items-start gap-3"
        style={{ height: `calc(100vh - 12.5rem)` }}
        id="Users"
      >
        <div className="image flex justify-center items-center w-1/2 h-full overflow-hidden relative">
          <img src={backImage} alt="background image" className='w-full h-full object-cover' />
          <div className="form absolute top-0 left-0 bg-black bg-opacity-40 w-full h-full flex flex-col justify-start items-center pt-5">
            <div className='content w-4/5'>
              <SearchInput searchUser={getAllUsersByName} />
            </div>
          </div>
        </div>
        <div className="users-grid h-full w-1/2 px-5 overflow-y-auto overflow-hidden">
          <h3 className='text-5xl text-cyan-700 font-black'>Github Users List</h3>
          {
            loading ? (
              <Loader />
            ) : !loading && users.length > 0 ? (
              <>
                <span className='text-cyan-700 font-bold my-4'>
                  ID | Login
                </span>
                <div className='items flex flex-col items-start justify-start'>
                  {
                    !loading && users && users?.map((user) => (
                      <UserItem key={user.id} user={user} onClick={() => {
                        navigateToUserDetails(user.login)
                      }} />
                    ))
                  }
                </div>
                <div className='w-full mt-3'>
                  <Chart
                    data={userFollowers}
                    labels={users?.map((user) => user.login) || []}
                  />
                </div>
              </>
            ) : users.length === 0 && startSearch ? (
              (
                <span className='text-cyan-700 font-bold my-4'>
                  No users found
                </span>
              )
            ) : (
              <span className='text-cyan-700 font-bold my-4'>
                Search for a user
              </span>
            )
          }
        </div>
      </div>
      <ToastContainer />
    </Layout>
  )
}

export default HomeScreen