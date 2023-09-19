import { InputHTMLAttributes, forwardRef } from "react";

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange" | "size"> {
  size?: "m" | "lg";
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>, value: string) => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ size = "m", value = "", onChange, ...rest }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      onChange?.(e, value);
    };

    return (
      <input
        value={value}
        {...rest}
        onChange={handleChange}
        ref={ref}
        className={`w-full placeholder:text-gray-500 text-gray-600 border outline-none border-black/15 focus-within:border-blue-400 ${style.size[size]}`}
      />
    );
  }
);

export default Input;

const style = {
  size: {
    m: "py-[0.5rem] px-[0.75rem] text-[1rem] rounded-[0.25rem]",
    lg: "py-[0.75rem] px-[1.5rem] text-[1.25rem] rounded-[0.3rem]",
  },
};
