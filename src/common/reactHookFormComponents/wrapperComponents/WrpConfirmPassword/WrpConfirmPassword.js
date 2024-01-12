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
    comparisonErrorType,
  } = params;

  const isConfirm = controlName.length > 1;

  const [fieldNameFirst, fieldNameSecond = ''] = controlName;
  const [fieldLabelFirst, fieldLabelSecond = ''] = label;
  const [fieldPlaceholderFirst, fieldPlaceholderSecond = ''] = placeholder;
  const { [fieldNameFirst]: fieldFirst, [fieldNameSecond]: fieldSecond } =
    getValues();

  function getErrorsForField(fieldName) {
    if (errors[fieldName]?.type === comparisonErrorType) {
      if (
        !isConfirm ||
        (!fieldFirst && !fieldSecond) ||
        fieldFirst === fieldSecond
      ) {
        return {};
      }
    }

    return { ...errors };
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
