import React from 'react';

import { Formik, FormikConfig, FormikHelpers, FormikValues } from 'formik';
import * as Yup from 'yup';

export interface FormFieldsProps {
   [name: string]: {
      label: string;
      tagName: string;
      defaultValue?: any;
      options?: any[];
      type?: string;
      required?: boolean;
      className?: { [key: string]: string };
      disabled?: boolean;
   };
}

export interface FormContextProps {
   fields: FormFieldsProps;
}

export interface FormProps {
   formConfig: {
      fields: FormFieldsProps;
      formik: FormikConfig<FormikValues>;
   };
   children?: React.ReactNode;
}

export const FormFieldsContext = React.createContext<FormContextProps>({
   fields: {}
});

export default function FormikForm(props: FormProps) {
   const {
      formConfig: { fields, formik },
      children
   } = props;

   const onSubmitCallback = (values: FormikValues, helper: FormikHelpers<FormikValues>) => {
      setTimeout(() => {
         formik.onSubmit(values, helper);
         console.log('values', JSON.stringify(values, null, 2));
         //  setSubmitting(false);
      }, 400);
   };
   console.log('veriler', fields, formik);

   const values = Object.entries(fields).reduce((acc: any, [key, value]) => {
      acc[key] = formik.initialValues?.[key] || value.defaultValue;
      return acc;
   }, {});

   const providerValue = React.useMemo(() => ({ value: { fields } }), [fields]);

   return (
      <Formik
         onSubmit={onSubmitCallback}
         validationSchema={Yup.object().shape(formik.validationSchema || {})}
         initialValues={values}
      >
         <FormFieldsContext.Provider {...providerValue}>{children}</FormFieldsContext.Provider>
      </Formik>
   );
}
