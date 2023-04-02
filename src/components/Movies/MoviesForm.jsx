import { Formik, Form, Field } from 'formik';

export const MoviesForm = ({ onFormSubmit }) => {
  return (
    <>
      <Formik initialValues={{ query: '' }} onSubmit={onFormSubmit}>
        <Form>
          <Field type="text" name="query" />
          <button type="submit">submit</button>
        </Form>
      </Formik>
    </>
  );
};
