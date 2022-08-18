import React from "react";

export interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const TextInput = React.forwardRef(
  (
    { id, type = "text", children, ...props }: TextInputProps,
    ref?: React.LegacyRef<HTMLInputElement>
  ) => (
    <div className="group">
      <label htmlFor={`${id}-input`}>{children}</label>
      <input
        id={id}
        ref={ref}
        name={`${id}-input`}
        className="outline-none w-full bg-transparent leading-loose"
        type={type}
        {...props}
      />
      <div className="border-neutral-300 group-hover:border-neutral-900 w-full border-t-2"></div>
    </div>
  )
);

export default TextInput;
