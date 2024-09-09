import classNames from "classnames";
import { FunctionalComponent, h } from "preact";

interface ButtonProps extends h.JSX.HTMLAttributes<HTMLButtonElement> {
  className?: string;
  href?: string;
  dimension: "xs" | "sm" | "md" | "lg" | "xl";
  variant: "primary" | "outline" | "danger" | "secondary";
  isLoading?: boolean;
  isBlock?: boolean;
}

const Button: FunctionalComponent<ButtonProps> = (props) => {
  const {
    variant,
    dimension,
    type,
    onClick,
    disabled,
    isLoading,
    ...otherProps
  } = props;
  const isOutlined = variant === "outline";

  const classes = classNames(
    "disabled:cursor-not-allowed text-sm ring-1 dark:ring-white/10 ring-primary/5 py-2 w-full px-4 h-12 font-semibold focus:ring-2 rounded-lg   dark:text-primary dark:hover:text-white hover:text-primary dark:hover:bg-white/5 hover:bg-primary/10 text-white flex duration-200 focus:ring-offset-2 focus:ring-inline-flex items-center justify-between",
    {
      "bg-nibss-primary dark:text-white  dark:hover:bg-green/5  border-transparent":
        variant === "primary",
      "bg-nibss-secondary dark:text-white  dark:hover:bg-green/5  border-transparent":
        variant === "secondary",
      "bg-red-600 hover:bg-red-700 dark:text-white border-transparent":
        variant === "danger",
      "bg-white hover:bg-gray-50 text-gray-700 border-gray-300":
        variant === "outline",
      "px-2.5 py-1.5 text-xs rounded": dimension === "xs",
      "px-3 py-2 text-sm leading-4 rounded-md": dimension === "sm",
      "px-4 py-2 text-sm rounded-md": dimension === "md",
      "px-4 py-2 text-base rounded-md": dimension === "lg",
      "px-6 py-3 text-base rounded-md": dimension === "xl",
    }
  );

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={classNames(classes, props.className ?? "")}
      {...otherProps}
    >
      {isLoading ? <ButtonLoader isOutlined={isOutlined} /> : props.children}
    </button>
  );
};

export function ButtonLoader({ isOutlined }: any) {
  return (
    <svg
      class={classNames("animate-spin -ml-1 mr-3 h-5 w-full", {
        "text-white": !isOutlined,
        "text-primary-500": isOutlined,
      })}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      ></circle>
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );
}

export default Button;
