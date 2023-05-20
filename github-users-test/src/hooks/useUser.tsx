import { useEffect, useState } from 'react'
import githubAPI from '../services/GithubAPI'
import { AxiosError } from 'axios';
import { UserFull } from '../interfaces/User';
import { useParams } from 'react-router-dom';
import useToast from './useToast';

const useUser = () => {

  const [user, setUser] = useState<UserFull>({} as UserFull)
  const [loading, setLoading] = useState<boolean>(false)

  const {
    notifyError
  } = useToast();

  let { login } = useParams();

  const getUserDetails = async (login: string): Promise<void> => {
    try {
      setLoading(true);
      const response = await githubAPI.get<UserFull>(`/users/${login}`);
      setUser(response.data)
    } catch (error: AxiosError | Error | any) {
      notifyError('Error getting user details', 'User');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (login) {
      getUserDetails(login)
    }
  }, [login])


  return {
    user,
    loading
  }

}

export default useUser