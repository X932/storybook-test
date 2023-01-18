import { DetailedHTMLProps, FC, InputHTMLAttributes } from "react";

export interface IInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
}

export const Input: FC<IInputProps> = ({ id, label, ...props }) => {
  return (
    <div>
      <label htmlFor={id}>
        <div className="text-[#FF0000]">{label}</div>
      </label>
      <input
        type="text"
        id={id}
        {...props}
        className="w-full px-3.5 py-3 md:py-4 mt-0.5 rounded-lg border border-black p-0 text-lg placeholder-darkGrey text-black leading-7"
      />
    </div>
  );
};
