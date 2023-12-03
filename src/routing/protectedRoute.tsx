import { Navigate } from 'react-router-dom';
import { Loader } from '../components/Loader/Loader';
import { useAuthentication } from '../utils/user-data';

interface ProtectedProps {
  children: React.ReactNode;
}

const Protected = ({ children }: ProtectedProps) => {
  const { isSignin, isLoading } = useAuthentication();

  if (isLoading) {
    return <Loader />;
  }

  if (!isSignin) {
    return <Navigate to="/signin" replace />;
  }
  return children;
};

export { Protected };
