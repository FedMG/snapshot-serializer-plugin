import Link from "next/link";

import { Anchor } from "./anchor";
import type { ReactElement } from "react";
import type { LinkProps, FooterLinksColumns, FooterProps } from "additional";

const getYear = (): number => new Date().getFullYear();

const createRows = ({ route, path }: LinkProps): ReactElement => {
  const options = ["Instagram", "Twitter", "Facebook"];

  if (!options.includes(route)) {
    return (
      <div className="inline" key={route}>
        <Link
          href={path}
          className="text-white hover:text-gray-400 hover:underline"
        >
          {route}
        </Link>
      </div>
    );
  }
  return (
    <div className="inline" key={route}>
      <Anchor path={path} route={route} />
    </div>
  );
};

const createColumns = ({
  id,
  title,
  column,
}: FooterLinksColumns): ReactElement => {
  return (
    <div key={id} className="p-2 border sm:p-4 sm:border-none">
      <h4 className="font-bold text-lg mb-[0.65em] underline underline-offset-4 sm:text-xl">
        {title}
      </h4>
      <div className="flex flex-col">{column.map(createRows)}</div>
    </div>
  );
};

export const Footer = ({ links }: FooterProps): ReactElement => {
  if (links) {
    return (
      <footer className=" w-full bg-[#000000] text-white px-4 pt-4">
        <div
          data-test-id="footer-links"
          className="w-full grid grid-cols-2 gap-8 sm:flex sm:flex-row sm:justify-evenly sm:gap-2"
        >
          {links.map(createColumns)}
        </div>

        <div className="w-full text-sm">
          <p>&copy {getYear()} e-commerce</p>
          Bye
        </div>
      </footer>
    );
  }

  return (
    <footer className="w-full bg-[#000000] text-white px-4 pt-4">
      <div data-test-id="test-2" className="new-div"></div>
      <a href="" className="mt-8" />
      This
      <hr data-test-id="test" className="m-2" />
      <div className="flex text-center pt-2 sm:text-end">
        top
        <div>
          <p>first paragraph</p>
        </div>
        middle
      </div>
      <div className="w-full text-sm">
        <p>&copy {getYear()} e-commerce</p>
        Bye
      </div>
    </footer>
  );
};
