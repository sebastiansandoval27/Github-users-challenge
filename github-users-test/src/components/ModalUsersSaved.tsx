import React, { useEffect } from 'react';
import UserItem from './UserItem';
import { UserFull } from '../interfaces/User';
import Loader from './Loader';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ModalUsersSavedProps {
  users: UserFull[];
  getUsersSavedLocally: () => Promise<void>;
  loading?: boolean;
  onClose?: () => void;
}

const ModalUsersSaved: React.FC<ModalUsersSavedProps> = ({ users, getUsersSavedLocally, loading = false, onClose }) => {
  useEffect(() => {
    getUsersSavedLocally();
  }, []);

  return (
    <div className="absolute top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="content w-[50vh] flex flex-col justify-center bg-white rounded-xl overflow-y-auto py-4 p-5">
        <FontAwesomeIcon
          icon={faClose}
          className="my-2 text-cyan-700 text-3xl cursor-pointer place-self-end"
          onClick={() => {
            onClose && onClose();
          }}
        />
        {loading && <Loader />}
        {!loading && users.length > 0 && (
          <h3 className="font-bold text-2xl text-cyan-700 my-3 place-self-center">Users saved locally</h3>
        )}
        {!loading &&
          users?.map(user => {
            return (
              <>
                <div key={user.id} className="w-full flex justify-center items-center">
                  <UserItem user={user} disabled={true} />
                </div>
              </>
            );
          })}
        {!loading && users.length === 0 && (
          <div className="w-full flex justify-center items-center">
            <h3 className="font-bold text-2xl text-cyan-700 my-3 place-self-center">No users saved locally</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalUsersSaved;
