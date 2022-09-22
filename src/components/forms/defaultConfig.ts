import { FormComponentConfig, FormFieldAttr } from 'miniatureact/forms';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';

export const FORM_COMPONENTS: FormComponentConfig = {
   text: {
      el: InputText,
      props: (attr: FormFieldAttr) => {
         return { ...attr, idx: attr.id, namex: attr.name };
      }
   },
   textarea: {
      el: InputTextarea,
      props: (attr: FormFieldAttr) => {
         return {
            ...attr,
            rows: attr.rows,
            minLength: attr.min,
            maxLength: attr.max
         };
      }
   },
   dropdown: {
      el: Dropdown,
      props: (attr: FormFieldAttr) => {
         return { ...attr, options: attr.options };
      }
   }
};
