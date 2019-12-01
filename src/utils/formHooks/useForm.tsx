import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {
  const [values, setValues] = useState<{ email?: string; password?: string }>({});
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const handleChange = (keyName, text) => {
    // https://ja.reactjs.org/docs/events.html#event-pooling
    // event.persist();
    // https://ja.reactjs.org/docs/hooks-reference.html#functional-updates
    setValues((prevState) => ({ ...prevState, [keyName]: text }));
    // console.log(values);
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};

export default useForm;
