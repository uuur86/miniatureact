// exports all the fields in this directory
import { FormikContextType, FormikValues } from 'formik';
import { DataOptions } from './DataOptions';
import { TextField } from './TextField';

const fieldTags = { DataOptions, TextField };

export declare type FormFieldPropsType = {
   props: {
      label?: string;
      name: string;
      value?: any;
      data?: any[];
      disabled?: boolean;
   };
   formik?: FormikContextType<FormikValues>;
   id: string;
};

export declare type FormFieldsType = (props: FormFieldPropsType) => JSX.Element;

export const fields: { [key: string]: FormFieldsType } = fieldTags;
