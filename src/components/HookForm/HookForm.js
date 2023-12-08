import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import * as myYup from 'utils/myYup';
import { Input } from 'uiComponents';

const fieldName = 'userName';

const schema = yup
  .object({
    [fieldName]: myYup.string().min(3).max(6),
    example: yup.string().required().min(3, '>=3').max(6, '<=6'),
    exampleRequired: yup.number().positive().integer().required(),
  })
  .required();

export default function HookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = data => console.log(data);

  //   console.log(watch('example')); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col text-xs">
      {/* register your input into the hook by invoking the "register" function */}
      <Input
        label="User name:"
        inputName={fieldName}
        register={register}
        errors={errors}
      />
      <label className="m-2 flex">
        <span className=" block p-2">First name</span>
        <div>
          <input
            className="border-2 rounded p-1 outline-none focus:border-red-500"
            defaultValue="test"
            {...register('example')}
            aria-invalid={errors.example ? 'true' : 'false'}
          />
          {errors.example?.type === 'required' && (
            <p role="alert">First name is required</p>
          )}
          {errors.example?.message && <p>{errors.example.message}</p>}
        </div>
      </label>
      {/* include validation with required or other standard HTML validation rules */}
      <input
        className=" border-2 rounded mb-2 p-1 active:border-red-500 focus:border-red-500 hover:border-red-500 text-center outline-none"
        {...register('exampleRequired', { required: true })}
      />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired?.message && (
        <span>{errors.exampleRequired.message}</span>
      )}

      <select className="border-2 rounded mb-2 p-1" {...register('gender')}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>

      <input
        className="border-2 rounded mb-2 cursor-pointer p-1 outline-none focus:border-green-500"
        type="submit"
      />
    </form>
  );
}
