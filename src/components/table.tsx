import classNames from "classnames";
import {
  ComponentChild,
  ComponentChildren,
  Fragment,
  FunctionalComponent,
  h,
} from "preact";
import { useEffect, useMemo } from "preact/hooks";
// import { Loader } from "./loader";

// import EmptyStateIcon from "@/assets/icons/empty-state";
interface TableProps extends h.JSX.HTMLAttributes<HTMLTableElement> {}

export const Table: FunctionalComponent<TableProps> = ({ children }) => {
  const footer = useMemo(
    () =>
      Array.from(children as any).find(
        (c: any) => c?.key === "footer"
      ) as ComponentChild,
    [children]
  );
  const _children = useMemo(
    () =>
      Array.from(children as any).filter(
        (c: any) => c?.key !== "footer"
      ) as ComponentChildren,
    [children]
  );

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <table className="min-w-full border-x  rounded-b-lg divide-y divide-gray-300">
          {_children}
        </table>
        {footer}
      </div>
    </div>
  );
};

interface THeadProps {
  variant?: "primary" | "gray";
  textSize?: "sm" | "base" | "lg" | "xs";
}

export const TableHead: FunctionalComponent<THeadProps> = ({
  children,
  variant,
  textSize = "sm",
}) => {
  return (
    <thead
      className={classNames(
        " text-gray-700 uppercase bg-gray-50   dark:bg-gray-1,00 dark:text-gray-400 ",
        {
          "bg-primary-50": variant === "primary",
          "text-sm": textSize === "sm",
          "text-base": textSize === "base",
          "text-lg": textSize === "lg",
          "text-xs": textSize === "xs",
        }
      )}
    >
      <tr>{children}</tr>
    </thead>
  );
};

export const TableBody: FunctionalComponent<{
  isEmpty?: boolean;
  isLoading?: boolean;
  title?: string;
}> = ({ children, isEmpty, isLoading, title }) => {
  return (
    <tbody className="bg-white">
      {isEmpty && !isLoading ? (
        <tr className="">
          <td className="pb-5" colSpan={100}>
            <div className="flex flex-col items-center justify-center">
              {/* <EmptyStateIcon /> */}
              <p className="text-center font-light text-[#667185] normal-case -mt-8">
                No {title || "records"} found
              </p>
            </div>
          </td>
        </tr>
      ) : null}
      {isLoading ? (
        <tr className=" bg-gray-100">
          <td className="py-12 " colSpan={100}>
            <div className="w-full flex justify-center items-center">
              {/* <Loader className="w-7 h-7 text-primary-500" /> */}
            </div>
          </td>
        </tr>
      ) : null}
      {!isLoading ? children : null}
    </tbody>
  );
};

interface TableHeadItemProps {
  first?: boolean;
  last?: boolean;
  alignment?: "right" | "left" | "center";
}
export const TableHeadItem: FunctionalComponent<TableHeadItemProps> = ({
  children,
  first,
  last,
  alignment,
}) => {
  const classes = classNames({
    "py-3.5 pl-4 pr-3 text-left font-semibold  sm:pl-6": first,
    "px-3 py-3.5 text-left font-semibold ": !(first && last),
    "relative py-3.5 pl-3 pr-4 sm:pr-6": last,
    "text-right": alignment === "right",
    "text-center": alignment === "center",
  });

  return (
    <th scope="col" className={classes}>
      {children}
    </th>
  );
};

interface TableRowProps {
  variant?: "primary";
  striped?: boolean;
}
export const TableRow: FunctionalComponent<TableRowProps> = ({
  children,
  variant,
  striped,
}) => {
  return (
    <tr
      className={classNames("bg-white", {
        "even:bg-gray-50": striped,
        "odd:bg-primary-50": striped && variant === "primary",
      })}
    >
      {children}
    </tr>
  );
};

interface TableCell {
  first?: boolean;
  last?: boolean;
  alignment?: "right" | "left" | "center";
}

export const TableCell: FunctionalComponent<TableCell> = ({
  children,
  first,
  last,
  alignment = "left",
}) => {
  const classes = classNames({
    "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-[#333333] sm:pl-6":
      first,
    "whitespace-nowrap px-3 py-4 text-sm text-[#333333] border-t": !(
      first && last
    ),
    "relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6":
      last,
    "text-right": alignment === "right",
    "text-center": alignment === "center",
  });
  return <td className={classes}>{children}</td>;
};

interface TableFooter {
  className?: string;
  key?: string;
}
export const TableFooter: FunctionalComponent<TableFooter> = ({
  children,
  className,
  key = "footer",
}) => {
  const classes = classNames(
    "border rounded-b-md border-gray-200 bg-white w-full px-4 py-3 sm:px-6",
    className
  );
  return (
    <div id="table-footer" key="footer" className={classes}>
      {children}
    </div>
  );
};
