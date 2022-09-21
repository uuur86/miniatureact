import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';

export function BaseDropdown(props: any): JSX.Element {
   return <Dropdown {...props}></Dropdown>;
}

export function BaseInputText(props: any) {
   const { id, label, name, value, onChange } = props;

//    const onChange = (e: any) => {
//       setFieldValue(name, e.target.value);
//    };

   return (
      <>
         <span className="p-float-label">
            <InputText id={id} value={value} name={name} onChange={onChange} />
            <label htmlFor={id}>{label}</label>
         </span>
      </>
   );
}
