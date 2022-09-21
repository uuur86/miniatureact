import { BaseInputText } from "../BaseFields";

export const TextField = ({ props, formik, id }: any) => {

    return <BaseInputText {...props} onChange={formik.handleChange} />;
}