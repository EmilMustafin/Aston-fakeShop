import { signInWithEmailAndPassword } from 'firebase/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

import { Input } from '../../components/ui/Input/Input';
import { auth } from '../../firebase.config';
import './SigninPage.scss';
import { IFormValues } from '../../interfaces/types';

const SigninPage = () => {
  const { register, handleSubmit } = useForm<IFormValues>();
  const navigate = useNavigate();

  const handleLogin = (data: IFormValues) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then(() => navigate('/'))
      .catch(error => {
        console.error('Registration error in Firebase:', error);
      });
  };
  return (
    <div className="form_container">
      <form className="form_input" onSubmit={handleSubmit(handleLogin)}>
        <h1 className="title_input">Sign In</h1>
        <Input
          {...register('email')}
          autoComplete="email"
          id="Email"
          maxLength={30}
          placeholder="Enter Email"
          label="Email"
        />
        <Input
          {...register('password')}
          autoComplete="current-password"
          id="password"
          type="password"
          placeholder="Enter Password"
          label="Password"
        />
        {/* {errorMessage && <p className="error-message-class">{errorMessage}</p>} */}
        <button type="submit" className="button_signin">
          Login
        </button>
        <p className="register_item">
          Don t have an account?
          <Link className="register_button" to="/signup">
            Registration
          </Link>
        </p>
      </form>
    </div>
  );
};

export { SigninPage };
