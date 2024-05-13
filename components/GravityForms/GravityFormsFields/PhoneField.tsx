import { gql } from "@apollo/client";

import { PhoneField as PhoneFieldType, FieldError } from "../../../generated/graphql";
import useGravityForm, { ACTION_TYPES, FieldValue, StringFieldValue } from "../../../hooks/useGravityForm";
import { Input } from "../../Core/Input";

export const PHONE_FIELD_FIELDS = gql`
  fragment PhoneFieldFields on PhoneField {
    id
    label
    description
    cssClass
    isRequired
    placeholder
  }
`;

interface Props {
  field: PhoneFieldType;
  fieldErrors: FieldError[];
}

const DEFAULT_VALUE = '';

export default function PhoneField({ field, fieldErrors }: Props) {
  const { id, type, label, description, cssClass, isRequired, placeholder } = field;
  const htmlId = `field_${id}`;
  const { state, dispatch } = useGravityForm();
  const fieldValue = state.find((fieldValue: FieldValue) => fieldValue.id === id) as StringFieldValue | undefined;
  const value = fieldValue?.value || DEFAULT_VALUE;

  return (
    <div className={`gfield gfield-${type} ${cssClass}`.trim()}>
      <label className="label text-left" htmlFor={htmlId}>{`${label} ${isRequired ? " *" : " "}`}</label>
      <Input
        type="tel"
        name={String(id)}
        id={htmlId}
        required={Boolean(isRequired)}
        placeholder={placeholder || ''}
        value={value}
        onChange={event => {
          dispatch({
            type: ACTION_TYPES.updatePhoneFieldValue,
            fieldValue: {
              id,
              value: event.target.value,
            },
          })
        }}
      />
      {description ? <p className="field-description ">{description}</p> : null}
      {fieldErrors?.length ? fieldErrors.map(fieldError => (
        <p key={fieldError.id} className="error-message">{fieldError.message}</p>
      )) : null}
    </div>
  );
}
