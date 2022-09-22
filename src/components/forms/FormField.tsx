import React from 'react';
import { ErrorMessage, useFormikContext, FormikValues } from 'formik';
import { UniqueComponentId } from 'primereact/utils';
import { FormFieldsContext } from './FormikFormWizard';
import { BaseFieldAdapter } from './BaseFields';

/**
 * Gets the formik
 */
export function FormField(props: { name: string; disabled?: boolean }): JSX.Element {
   const { name, disabled = false } = props;
   const formik = useFormikContext<FormikValues>();
   const formConfig = React.useContext(FormFieldsContext);
   const fields = formConfig.fields[name] || {};

   if (Object.entries(fields).length === 0) {
      console.warn(`Field ${name} is not defined in the form`);
   }

   const { label = '', type = 'text', defaultValue = '', options = [] } = fields;

   const { values: { [name]: value } = {} } = formik;

   const id = UniqueComponentId(`form-field-${name}`);
   const fieldProps = {
      ...fields,
      id,
      label,
      name,
      value: value || defaultValue,
      disabled: disabled,
      onChange: formik.handleChange,
      options
   };

   return (
      <>
         <span className="p-float-label">
            <BaseFieldAdapter type={type} attr={fieldProps} />
            <label htmlFor={id}>{label}</label>
         </span>
         <ErrorMessage name={name} />
      </>
   );
}
