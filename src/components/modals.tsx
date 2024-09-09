import { Fragment, FunctionalComponent } from "preact";
import { Transition } from "@headlessui/react";
import classNames from "classnames";

type ComponentProps = {
  open: boolean;
  close(): void;
  dimensions?: "md" | "lg" | "xl" | "2xl" | "screen";
};

export const Modal: FunctionalComponent<ComponentProps> = ({
  open,
  close,
  children,
  dimensions = "md",
}) => {
  const classes = classNames(
    "w-full transform overflow-hidden rounded-md bg-white text-left align-middle shadow-xl transition-all",
    {
      "max-w-md": dimensions === "md",
      "max-w-lg": dimensions === "lg",
      "max-w-xl": dimensions === "xl",
      "max-w-2xl": dimensions === "2xl",
      "max-w-screen": dimensions === "screen",
    }
  );
  return (
    <>
      <Transition appear show={open} as={Fragment}>
        <div className={"relative z-20 "}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25  backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div
              onClick={close}
              className="flex min-h-full items-center justify-center p-4 text-center"
            >
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div onClick={(e) => e.stopPropagation()} className={classes}>
                  {children}
                </div>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Transition>
    </>
  );
};
