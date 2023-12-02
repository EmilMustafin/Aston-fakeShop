import { Link } from 'react-router-dom';
import { Input } from '../../components/ui/Input/Input';
import { useSignUp } from '../../utils/user-data';
import './SignupPage.scss';

const SignupPage = () => {
  const { register, handleSubmit } = useSignUp();

  return (
    <div className="form_container">
      <form className="form_input" onSubmit={handleSubmit}>
        <h1 className="title_input">Sign Up</h1>
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
          id="password"
          autoComplete="new-password"
          type="password"
          placeholder="Enter Password"
          label="Password"
        />
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
