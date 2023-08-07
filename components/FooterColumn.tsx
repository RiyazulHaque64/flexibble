import Link from "next/link";
import React from "react";

type columnProps = {
  title: String;
  links: Array<String>;
};
const FooterColumn = ({ title, links }: columnProps) => {
  return (
    <div className="footer_column">
      <h4 className="font-semibold">{title}</h4>
      <ul className="flex flex-col gap-2 font-normal">
        {links.map((link) => (
          <Link href="/">{link}</Link>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;
