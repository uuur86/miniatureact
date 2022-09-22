import React from 'react';

import { Formik, FormikHelpers, FormikValues } from 'formik';
import * as Yup from 'yup';
import { FormContextProps, FormProps } from 'miniatureact/forms';

export const FormFieldsContext = React.createContext<FormContextProps>({
   fields: {}
});

export default function FormikForm(props: FormProps) {
   const {
      formConfig: { fields, formik },
      children,
      ...others
   } = props;

   const values = React.useMemo(() => {
      if (formik.initialValues) return formik.initialValues;

      return Object.entries(fields).reduce((acc: any, [key, value]) => {
         value.defaultValue && (acc[key] = value.defaultValue);
         return acc;
      }, {});
   }, [fields, formik.initialValues]);

   const providerValue = { value: { fields } };

   return (
      <Formik
         onSubmit={formik.onSubmit}
         //validationSchema={Yup.object().shape(formik.validationSchema || {})}
         initialValues={values}
         enableReinitialize={true}
         {...others}
      >
         {({ handleSubmit, handleChange, handleBlur, values, errors }) => (
            <form onSubmit={handleSubmit} noValidate>
               <FormFieldsContext.Provider {...providerValue}>
                  {children}
               </FormFieldsContext.Provider>
            </form>
         )}
      </Formik>
   );
}
