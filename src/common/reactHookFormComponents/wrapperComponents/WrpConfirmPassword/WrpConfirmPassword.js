import { Box } from '@mui/material';
import { WrpPasswordField } from 'common/reactHookFormComponents';
import { componentProps } from 'common/utils';

export default function WrpConfirmPassword({
  isValidating = false,
  getValues,
  params = {},
  ...otherProps
}) {
  const {
    control = {},
    errors = {},
    controlName,
    label,
    placeholder,
    fieldComparisonErrorType,
  } = params;

  console.log('load component');
  console.log(errors);

  const isConfirm = controlName.length > 1;

  const fieldNameFirst = controlName[0];
  const fieldNameSecond = controlName[1] ?? '';

  const fieldLabelFirst = label[0];
  const fieldLabelSecond = label[1] ?? '';

  const fieldPlaceholderFirst = placeholder[0];
  const fieldPlaceholderSecond = placeholder[1] ?? '';

  const { [fieldNameFirst]: fieldFirst, [fieldNameSecond]: fieldSecond } =
    getValues();

  console.log(getErrorsForField(fieldNameFirst));

  function getErrorsForField(fieldName) {
    console.log(fieldName);
    if (!isConfirm) {
      if (errors[fieldName]?.type === fieldComparisonErrorType) {
        console.log(1);
        return {};
      } else {
        console.log(2);
        return { [fieldName]: { ...errors[fieldName] } };
      }
    } else {
      if ((!fieldFirst && !fieldSecond) || fieldFirst === fieldSecond) {
        console.log(3);
        return {};
      } else {
        console.log(4);
        return { [fieldName]: { ...errors[fieldName] } };
      }
    }
  }

  return (
    <Box {...otherProps}>
      <WrpPasswordField
        params={
          new componentProps({
            control: control,
            errors: getErrorsForField(fieldNameFirst),
            controlName: fieldNameFirst,
            label: fieldLabelFirst,
            placeholder: fieldPlaceholderFirst,
          })
        }
      />
      {isConfirm && (
        <WrpPasswordField
          params={
            new componentProps({
              control: control,
              errors: getErrorsForField(fieldNameSecond),
              controlName: fieldNameSecond,
              label: fieldLabelSecond,
              placeholder: fieldPlaceholderSecond,
            })
          }
        />
      )}
    </Box>
  );
}
