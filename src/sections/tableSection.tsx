import { FunctionalComponent } from "preact";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeadItem,
  TableRow,
} from "../components/table";

type ComponentProps = {
  dimensions?: "md" | "lg" | "xl" | "2xl" | "screen";
};

export const TableSection: FunctionalComponent<ComponentProps> = ({}) => {
  const response = [
    {
      name: "Lindsay Walton",
      title: "Front-end Developer",
      email: "lindsay.walton@example.com",
      role: "Member",
    },
    {
      name: "Lindsay Walton",
      title: "Front-end Developer",
      email: "lindsay.walton@example.com",
      role: "Member",
    },
    {
      name: "Lindsay Walton",
      title: "Front-end Developer",
      email: "lindsay.walton@example.com",
      role: "Member",
    },
  ];

  return (
    <>
      <a class="ring-1 lg:row-span-2  group hover:ring-primary/10 dark:hover:ring-white/20 duration-300 h-full dark:ring-white/10 ring-primary/5 lg:row-start-2 md:grid-cols-2 md:grid lg:gap-0  md:gap-12 lg:grid-cols-none lg:col-start-2 lg:col-span-2 rounded-3xl p-8 bg-white dark:bg-secondary shadow-xl dark:shadow-thick">
        {/* <div>
          <p class="text-xl tracking-tight font-medium text-primary dark:text-white md:text-6xl">
            Our Tables
          </p> */}
        {/* <p class="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
            Design & development subscriptions for startups.
            <br />
            <br />
            Monomod streamlines the design process with a fixed monthly rate and
            limitless design requests. Say goodbye to phone calls and extensive
            contracts; reach out to Monomod directly at any time. Embrace
            flexibility, pause or terminate your subscription whenever you need.
          </p> */}
        {/* </div> */}
        {/* <div class="mt-8">
          <img
            src="/images/monomod.png"
            class="rounded-2xl group-hover:ring-white/20 duration-300 invert dark:invert-0 aspect-[4/4] bg-primary/5 dark:bg-primary ring-1 ring-white/10  object-cover"
            alt=""
          />
        </div> */}

        <div>
          <Table>
            <TableHead>
              <TableHeadItem>Name</TableHeadItem>
              <TableHeadItem>Title</TableHeadItem>
              <TableHeadItem>Email</TableHeadItem>
              <TableHeadItem>Role</TableHeadItem>
            </TableHead>
            <TableBody>
              {response.map((item, idx) => {
                return (
                  <TableRow striped key={idx}>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.title}</TableCell>
                    <TableCell>{item.email}</TableCell>
                    <TableCell>{item.role}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
        {/* <div>
          <Table>
            <TableHead>
              <TableHeadItem>Registration Number</TableHeadItem>
              <TableHeadItem>Surname</TableHeadItem>
              <TableHeadItem>First Name</TableHeadItem>
              <TableHeadItem>Middle Name</TableHeadItem>
              <TableHeadItem>Status</TableHeadItem>
            </TableHead>
            <TableBody></TableBody>
          </Table>
        </div>
        <div>
          <Table>
            <TableHead>
              <TableHeadItem>Registration Number</TableHeadItem>
              <TableHeadItem>Surname</TableHeadItem>
              <TableHeadItem>First Name</TableHeadItem>
              <TableHeadItem>Middle Name</TableHeadItem>
              <TableHeadItem>Status</TableHeadItem>
            </TableHead>
            <TableBody></TableBody>
          </Table>
        </div> */}
      </a>
    </>
  );
};
