// <Reference path="FormTypes.d.ts" />

declare module 'miniatureact/forms' {
  interface FormFieldsProps {
    [name: string]: {
      label: string;
      defaultValue?: any;
      options?: any[];
      type?: string;
      required?: boolean;
      className?: { [key: string]: string };
      disabled?: boolean;
    };
  }

  interface FormContextProps {
    fields: FormFieldsProps;
  }

  interface FormProps {
    formConfig: {
      fields: FormFieldsProps;
      formik: FormikConfig<FormikValues>;
    };
    children?: React.ReactNode;
  }

  type FormComponentConfig = {
    [key: string]: {
      el: any;
      props: (attr: FormFieldAttr) => FormFieldAttr;
    };
  };

  type FormFieldAttr = {
    id: string;
    name: string;
    className?: { [key: string]: string };
    options?: { [key: string]: string | number | boolean }[];
    optionLabel?: string;
    optionValue?: string;
    label?: string;
    value?: any;
    disabled?: boolean;
    rows?: string | number;
    min?: string | number;
    max?: string | number;
    onChange?: (e: any) => void;
  };

  type FormFieldPropsType = {
    props: {
      label?: string;
      name: string;
      value?: any;
      data?: any[];
      disabled?: boolean;
    };
    formik?: any;
    id: string;
  };

  type FormFieldsType = (props: FormFieldPropsType) => JSX.Element;

  type YupFieldProps = {
    name: string;
    type: string;
    errors: { [key: string]: string };
    required: boolean;
    min: number;
    max: number;
    when: {
      field: string;
      options: {
        is: any;
        then: YupFieldProps;
        otherwise: YupFieldProps;
      };
    };
  };
}
