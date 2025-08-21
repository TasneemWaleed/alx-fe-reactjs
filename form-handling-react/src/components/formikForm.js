import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function FormikForm() {
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log("Submitting with Formik:", values);
        // Mock API call would go here
      }}
    >
      {() => (
        <Form className="max-w-md mx-auto p-4 border rounded">
          <h2 className="text-xl font-bold mb-4">Register (Formik)</h2>

          <div className="mb-3">
            <label className="block">Username</label>
            <Field name="username" type="text" className="border p-2 w-full rounded" />
            <ErrorMessage name="username" component="p" className="text-red-500 text-sm" />
          </div>

          <div className="mb-3">
            <label className="block">Email</label>
            <Field name="email" type="email" className="border p-2 w-full rounded" />
            <ErrorMessage name="email" component="p" className="text-red-500 text-sm" />
          </div>

          <div className="mb-3">
            <label className="block">Password</label>
            <Field name="password" type="password" className="border p-2 w-full rounded" />
            <ErrorMessage name="password" component="p" className="text-red-500 text-sm" />
          </div>

          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
}
