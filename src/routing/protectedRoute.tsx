import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuthStatus } from '../redux/slices/userSlice';

interface ProtectedProps {
  children: React.ReactNode;
}

const Protected = ({ children }: ProtectedProps) => {
  const isSignin = useSelector(selectAuthStatus);

  if (!isSignin) {
    return <Navigate to="/signin" replace />;
  }
  return children;
};

export { Protected };
