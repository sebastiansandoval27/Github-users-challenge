import { useState } from 'react'
import githubAPI from '../services/GithubAPI'
import { AxiosError } from 'axios';
import { User, UserFull, UserResponse } from '../interfaces/User';

const useUsers = () => {

  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [userFollowers, setUserFollowers] = useState<UserFull[]>([])

  const [startSearch, setStartSearch] = useState<boolean>(false)

  const getAllUsersByName = async (login: string): Promise<void> => {
    try {
      setLoading(true);
      setStartSearch(true);
      const response = await githubAPI.get<UserResponse>(`/search/users?per_page=10&q=${login}`);
      if (response.data.items.length > 0) {
        setUsers(response.data.items);
        getFollowersByUser(response.data.items.map((user) => user.login));
      }
    } catch (error: AxiosError | Error | any) {
      throw new Error(error);
    } finally {
      setLoading(false);
    }
  };

  const getFollowersByUser = async (login: string[]): Promise<void> => {
    try {
      setLoading(true);
      const promises = login.map((login) => githubAPI.get<UserFull>(`/users/${login}`));
      const response = await Promise.all(promises);
      const followers = response.map((user) => user.data);
      setUserFollowers(followers);
    } catch (error: AxiosError | Error | any) {
      throw new Error(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    getAllUsersByName,
    users,
    loading,
    userFollowers,
    startSearch
  }

}

export default useUsers