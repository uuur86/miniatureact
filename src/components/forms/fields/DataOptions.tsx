import { BaseDropdown } from '../BaseFields';

/**
 * TODO bu kısım tamamlanacak
 * api_conf ile belirtilen api'den veri çekilir.
 *  - api_conf: { url: string, method: string, params: any }
 * seçenekleri hazırla
 *  - options: { label: string, value: any }[]
 * seçimi kaydet
 *  - setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => void
 *
 */
export const DataOptions = ({ props, formik, id }: any): JSX.Element => {
   const { label, name, value, options, disabled, optionLabel, optionValue } = props;
   const onChange = (e: any) => {
      console.log('veriler', e.target.value, value, formik);

      formik.setFieldValue(name, e.target.value);
   };

   //    const optionsFactory = options?.map((item: Pick<string, any>) => {
   //       return { label: item?.[optionLabel], value: item?.[optionValue] };
   //    });
   //    console.log('options', optionsFactory);

   return (
      <BaseDropdown
         id={id}
         name={name}
         label={label}
         value={value}
         options={options}
         onChange={onChange}
         disabled={disabled}
         optionLabel={optionLabel}
         optionValue={optionValue}
      />
   );
};
