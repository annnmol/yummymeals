import { Formik } from "formik";
import React from "react";

interface Props {
  initialValues: any;
  onSubmit: any;
  validationSchema?: any;
  innerRef?: any;
  children: React.ReactNode;
  [otherProps: string]: any;
}

const AppForm: React.FC<Props> = ({
  initialValues,
  onSubmit,
  validationSchema,
  innerRef,
  children,
  ...otherProps
}) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      enableReinitialize={true}
      {...otherProps}
      innerRef={innerRef}
    >
      {() => <>{children}</>}
    </Formik>
  );
};

export default AppForm;

