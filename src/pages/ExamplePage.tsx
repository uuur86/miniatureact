import { FormField } from "../components/forms/FormField";
import FormikForm from "../components/forms/FormikFormWizard";

export default function ExamplePage() {
    const options = [
        { label: 'Option 1', value: 1 },
        { label: 'Option 2', value: 2 },
        { label: 'Option 3', value: 3 },
        { label: 'Option 4', value: 4 },
        { label: 'Option 5', value: 5 }
    ];

    const testFormConfig = {
        fields: {
           textBox: {
              type: 'text',
              label: 'Text Box',
              required: true,
              defaultValue: 'Test BOX 1',
           },
           testOption: {
              type: 'dropdown',
              label: 'Options',
              required: true,
              options: options,
              defaultValue: 3,
           }
        },
        formik: {
           onSubmit: (values: any) => {
              console.log(values);
           },
           initialValues: {}
        }
     };
   return (
      <div>
         <h1>Example Page</h1>
         <FormikForm formConfig={testFormConfig} >
            <FormField name="textBox" />
            <FormField name="testOption" />
            <button type="submit">Submit</button>
        </FormikForm>
      </div>
   );
}