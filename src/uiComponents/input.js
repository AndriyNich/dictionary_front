const classLabelDefault = '';
const classInputDefault = '';
const classErrorDefault = '';

export default function Input({
  label,
  inputName,
  register,
  errors,
  className = {},
}) {
  let { classLabel, classInput, classError } = className;
  //    classLabel =
  return (
    <>
      <label>
        <div>{label}</div>
        <input
          className={`border-2 rounded p-1 outline-none ${
            errors[inputName]?.message
              ? 'focus:border-red-500'
              : 'focus:border-green-500'
          } `}
          {...register(inputName)}
        />
        {errors[inputName]?.message && <div>{errors[inputName].message}</div>}
      </label>
    </>
  );
}
