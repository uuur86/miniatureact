import React from "react";
import { FormFieldAttr } from "miniatureact/forms";
import { FORM_COMPONENTS } from "./defaultConfig";

export function BaseFieldAdapter({ type = 'text', attr }: { type: string; attr: FormFieldAttr }) {
   const { el: Component, props: adapter } = FORM_COMPONENTS[type];

   return <Component {...adapter(attr)} />;
}
