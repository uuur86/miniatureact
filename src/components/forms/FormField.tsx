import React from 'react';
import { ErrorMessage, useFormikContext, FormikValues } from 'formik';
import { UniqueComponentId } from 'primereact/utils';
import * as FormFields from 'components/forms/fields';
import { FormFieldsContext } from './FormikFormWizard';

/**
 * Gets the formik
 */
export function FormField(props: { name: string; disabled?: boolean }): JSX.Element {
   const { name, disabled = false } = props;
   const formik = useFormikContext<FormikValues>();
   const formConfig = React.useContext(FormFieldsContext);
   const {
      [name]: { label, tagName, defaultValue, options }
   } = formConfig.fields;
   console.log('veriler', name, formConfig, { label, tagName, defaultValue, options }, formik);
   const { values: { [name]: value } = {} } = formik;

   if (tagName === undefined) return <></>;

   const id = UniqueComponentId(`form-field-${name}`);
   const fieldProps = {
      formik,
      props: { label, name, value: value || defaultValue, disabled: disabled, options },
      id
   };

   const FieldTag = (props: typeof fieldProps) => FormFields.fields[tagName](props);

   return (
      <>
         <span className="p-float-label">
            <FieldTag {...fieldProps} />
            <label htmlFor={id}>{label}</label>
         </span>
         <ErrorMessage name={name} />
      </>
   );
}
