import { Controller } from "react-hook-form";

interface InterviewFieldProps {
  control: any;
  name: string;
  label: string;
  type?: "text" | "select" | "number";
  placeholder?: string;
  options?: { label: string; value: string }[]; 
}

const InterviewField = ({
  control,
  name,
  label,
  type = "text",
  placeholder,
  options = [],
}: InterviewFieldProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium">{label}</label>
      <Controller
        control={control}
        name={name}
        render={({ field, fieldState }) => (
          <>
            {type === "select" ? (
              <select
                {...field}
                className="input appearance-none"
              >
                {options.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            ) : (
              <input
                {...field}
                type={type}
                placeholder={placeholder}
                className="input"
              />
            )}
            {fieldState.error && (
              <p className="text-xs text-red-500 mt-1">{fieldState.error.message}</p>
            )}
          </>
        )}
      />
    </div>
  );
};

export default InterviewField;
