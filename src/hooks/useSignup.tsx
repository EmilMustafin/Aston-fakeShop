import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase.config';
import { IFormValues } from '../interfaces/types';

const useSignUp = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<IFormValues>();

  const handleRegister = async (data: IFormValues) => {
    try {
      const person = await createUserWithEmailAndPassword(auth, data.email, data.password);
      await setDoc(doc(db, 'users', person.user.uid), {
        firstName: data.email,
        bookmarks: [],
      });
      navigate('/');
    } catch (err) {
      console.log(err.message);
    }
  };

  return {
    register,
    handleSubmit: handleSubmit(handleRegister),
  };
};

export { useSignUp };
