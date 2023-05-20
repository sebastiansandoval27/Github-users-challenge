import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';

const UserScreen = () => {

  let { login } = useParams();

  return (
    <Layout>
      <div className="content flex justify-start items-start gap-3"
        style={{ height: `calc(100vh - 12.5rem)` }}
      >
        {login}</div>
    </Layout>
  )
}

export default UserScreen