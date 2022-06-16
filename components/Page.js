import Link from "next/link";

import AddCount from "./AddCount";

const Page = ({ title, linkTo }) => (
  <div>
    <h1>{title}</h1>

    <AddCount />
    <nav>
      <Link href={linkTo}>
        <a>Navigate</a>
      </Link>
    </nav>
  </div>
);

export default Page;
