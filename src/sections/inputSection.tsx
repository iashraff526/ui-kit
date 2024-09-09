import { FunctionalComponent } from "preact";

type ComponentProps = {
  dimensions?: "md" | "lg" | "xl" | "2xl" | "screen";
};

export const InputSection: FunctionalComponent<ComponentProps> = ({}) => {
  return (
    <>
      <a
        href="https://lexingtonthemes.com/"
        class="lg:row-span-2 ring-1 dark:ring-white/10 ring-primary/5 hover:ring-primary/5 bg-white dark:bg-secondary  dark:hover:ring-white/20 overflow-hidden duration-300 shadow-xl dark:shadow-thick rounded-3xl p-8"
      >
        {/* <div class="-mr-24">
          <img
            src="/images/lexington.png"
            class="rounded-2xl object-cover ring-1 h-64 w-full lg:h-auto dark:ring-white/10 ring-primary/5 bg-tertiary"
            alt=""
          />
        </div> */}
        <div class="">
          <p class="text-xl tracking-tight font-medium text-primary dark:text-white lg:text-7xl ">
            Our Input Fields
          </p>
          {/* <p class="mt-4 text-sm text-zinc-500 dark:text-zinc-400 font-light">
            Free and premium multipage themes and UI Kits for freelancers,
            developers, businesses, and personal use. Beautifully crafted with
            Astro.js, and Tailwind CSS — Simple & easy to customise.
          </p> */}
        </div>
      </a>
    </>
  );
};
