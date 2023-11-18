import { useState } from 'react';
import { Link } from 'react-router-dom';

import './SignupPage.scss';
import { Input } from '../../components/ui/Input/Input';

const SignupPage = () => {
  const [errorMessage, setErrorMessage] = useState('');
  return (
    <div className="form_container">
      <form className="form_input">
        <h1 className="title_input">Sign Up</h1>
        <Input autoFocus id="Email" maxLength={30} placeholder="Enter Email" label="Email" />
        <Input id="password" type="password" placeholder="Enter Password" label="Password" />
        <Input
          id="confirmPassword"
          type="password"
          placeholder="Enter Password"
          label="Confirm Password"
        />
        {errorMessage && <p className="error-message-class">{errorMessage}</p>}
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
