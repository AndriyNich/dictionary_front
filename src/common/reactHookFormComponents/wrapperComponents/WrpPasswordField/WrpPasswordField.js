import { Controller } from 'react-hook-form';
// import { setFirstCharToUpper } from 'utils/function/string';
import { PasswordField } from 'common/muiComponents';

export default function WrpPasswordField({ params }) {
  let { control, controlName } = params;

  //   if (label === '') {
  //     label = setFirstCharToUpper(name);
  //   }
  //   if (placeholder === '') {
  //     placeholder = `Enter you ${name}`;
  //   }

  //   const newParams = { control, id: name, label, placeholder, errors };

  return (
    <Controller
      name={controlName[0]}
      control={control}
      render={({ field }) => {
        return <PasswordField params={params} {...field} />;
      }}
    />
  );
}
