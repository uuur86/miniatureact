/**
 * Formik and Yup helper functions
 *
 * @author Uğur Biçer <info@ugurbicer.com.tr>
 * @version 1.0.3
 */

import * as yup from 'yup';

export declare type YupFieldProps = {
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

export const yupFieldType = {
   date: yup.date(),
   text: yup.string(),
   number: yup.number(),
   boolean: yup.boolean(),
   array: yup.array(),
   object: yup.object(),
   any: yup.mixed()
};

export const yupField = (props: YupFieldProps) => {
   const { type, errors, required, min, max, when } = props;
   const field = (type: string) => yup.reach(yupFieldType, type);

   let yupEl = field(type);

   if (min) yupEl.min(min, errors.min);
   if (max) yupEl.max(min, errors.max);

   if (required) yupEl.required(errors.required);
   else yupEl.nullable();

   if (when) {
      if (when.options.then) {
         when.options.then = yupField(when.options.then);
      }
      if (when.options.otherwise) {
         when.options.otherwise = yupField(when.options.otherwise);
      }

      yupEl.when(when.field, when.options);
   }

   return yupEl;
};

export function yupFactory(conf: YupFieldProps[]) {
   let results: { [key: string]: any } = {};

   conf.forEach((val: YupFieldProps) => {
      results[val.name] = yupField(val);
   });

   return results;
}
