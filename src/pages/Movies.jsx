import { Formik, Form, Field } from 'formik';
import { useState } from 'react';

export const Movies = () => {
  const [query, setQuery] = useState('');
  const onFormSubmit = (values, { resetForm }) => {
    setQuery(values.query);
    resetForm();
  };
  return (
    <Formik initialValues={{ query: '' }} onSubmit={onFormSubmit}>
      <Form>
        <Field type="text" name="query" />
        <button type="submit">submit</button>
      </Form>
    </Formik>
  );
};
// тут буду делать fetch по query и передавать данные в MovieDetails
