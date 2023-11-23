import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { Input } from '../../components/ui/Input/Input';
import { auth } from '../../firebase.config';

import './SignupPage.scss';
import { IFormValues } from '../../inerfaces/IfakeProducts';
import { authUser } from '../../redux/slices/userSlice';

const SignupPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<IFormValues>();
  const handleRegister = (data: IFormValues) => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(({ user }) => {
        dispatch(
          authUser({
            email: user.email,
            id: user.uid,
          }),
        );
        navigate('/');
      })
      .catch(err => {
        alert(err);
      });
  };
  return (
    <div className="form_container">
      <form className="form_input" onSubmit={handleSubmit(handleRegister)}>
        <h1 className="title_input">Sign Up</h1>
        <Input
          {...register('email')}
          id="Email"
          maxLength={30}
          placeholder="Enter Email"
          label="Email"
        />
        <Input
          {...register('password')}
          id="password"
          type="password"
          placeholder="Enter Password"
          label="password"
        />
        {/* {errorMessage && <p className="error-message-class">{errorMessage}</p>} */}
        <button type="submit" className="button_signup">
          Register
        </button>
        <p className="register_item">
          Already have an account?
          <Link className="register_button" to="/signin">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export { SignupPage };
