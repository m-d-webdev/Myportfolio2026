import * as React from "react"

import { cn } from "@/lib/utils"

function Input({
  label = "",
  id = "input",
  className,
  parentClassName = "",
  type,
  placeholder = " ",
  icon,
  labelClassName,
  ...props
}) {
  return (
    <div className="">

      <label htmlFor={id} className={`  ${labelClassName} opacity-80  capitalize  duration-150  font-medium tracking-tight      `}>{label}</label>
      <div className={`${parentClassName} mt-1 p-2 border  bg-foreground   border-background/20 relative flex items-center justify-start   rounded-md   `}>
        {
          React.isValidElement(icon) && icon
        }
        <input
          type={type}
          id={id}
          name={id}
          placeholder={placeholder}
          data-slot="input"
          className={cn(
            `file:text-foreground  rounded
            font-medium tracking-tight     peer placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 flex ${icon ? "w-[80%]" : "w-full "} min-w-0 bg-transparent px-3   text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 `,
            "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
            className
          )}

          {...props} />

      </div>
    </div>

  );
}

export { Input }
