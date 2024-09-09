import classNames from "classnames";
import {
  ComponentChild,
  ComponentChildren,
  FunctionalComponent,
  h,
} from "preact";
import { CloudIcon } from "@heroicons/react/24/solid";
import { useMemo } from "preact/hooks";

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
    <div className="relative overflow-x-auto  ">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        {_children}
      </table>
      {footer}
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
        "  text-zinc-500 dark:text-white bg-gray-50 dark:bg-transparent ",
        {
          "bg-primary": variant === "primary",
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
    <tbody className="">
      {isEmpty && !isLoading ? (
        <tr className="">
          <td className="pt-5" colSpan={100}>
            <div className="flex flex-col items-center justify-center">
              <CloudIcon className={"w-10 pt-10"} />
              <p className="text-center font-light text-[#667185] normal-case ">
                No {title || "records"} found
              </p>
            </div>
          </td>
        </tr>
      ) : null}
      {isLoading ? (
        <tr className=" ">
          <td className="" colSpan={100}>
            <div
              role="status"
              class="w-full bg-transparent border-t py-4 px-2 space-y-4 divide-y divide-gray-200   animate-pulse dark:divide-zinc-700  dark:border-zinc-700"
            >
              <div class="flex items-center justify-between">
                <div>
                  <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                  <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                </div>
                <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
              </div>

              <div class="flex items-center justify-between pt-4">
                <div>
                  <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                  <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                </div>
                <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
              </div>
              <div class="flex items-center justify-between pt-4">
                <div>
                  <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                  <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                </div>
                <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
              </div>
              <span class="sr-only">Loading...</span>
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
    "px-3 py-3.5 text-left text-sm font-semibold	 ": !(first && last),
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
  striped,
}) => {
  return (
    <tr
      className={classNames(
        " cursor-pointer bg-white border-b dark:bg-transparent dark:text-white dark:border-zinc-700 hover:bg-gray-50 dark:hover:bg-white/5",
        {
          "even:bg-gray-100 even:dark:bg-zinc-800": striped,
        }
      )}
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
    "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium  sm:pl-6": first,
    "whitespace-nowrap px-3 py-4 text-sm ]  border-t dark:border-zinc-700": !(
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
