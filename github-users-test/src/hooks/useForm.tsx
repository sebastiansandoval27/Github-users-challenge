import { yupResolver } from '@hookform/resolvers/yup';
import { useForm as useFormHook } from 'react-hook-form';
import * as yup from 'yup';

const useForm = () => {

  interface FormValues {
    login: string;
  }

  const schema = yup.object().shape({
    login: yup.string().min(4).required('Login is required').test(
      'contains-specific-word',
      'This word is not allowed',
      (value) => {
        return !value.includes('doublevpartners');
      }
    ),
  });

  const { register, handleSubmit, formState: { errors } } = useFormHook<FormValues>({
    resolver: yupResolver(schema)
  });

  return {
    register,
    handleSubmit,
    errors
  }

}

export default useForm;