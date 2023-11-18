import { useState } from 'react';
import { Link } from 'react-router-dom';
import './SigninPage.scss';

import { Input } from '../../components/ui/Input/Input';

const SigninPage = () => {
  const [errorMessage, setErrorMessage] = useState('');
  return (
    <div className="form_container">
      <form className="form_input">
        <h1 className="title_input">Sign In</h1>
        <Input autoFocus id="Email" maxLength={30} placeholder="Enter Email" label="Email" />
        <Input id="password" type="password" placeholder="Enter Password" label="Password" />
        {errorMessage && <p className="error-message-class">{errorMessage}</p>}
        <button type="submit" className="button_signin">
          Login
        </button>
        <p className="register_item">
          Don t have an account?
          <Link className="register_button" to="/signup">
            Registr
          </Link>
        </p>
      </form>
    </div>
  );
};

export { SigninPage };
