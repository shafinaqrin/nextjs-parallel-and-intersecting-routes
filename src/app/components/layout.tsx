import Link from "next/link";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <>
        <ul className="flex">
          <li className="mr-6">
            <Link className="text-blue-500 hover:text-blue-800" href="/home">
              Home
            </Link>
          </li>
          <li className="mr-6">
            <Link className="text-blue-500 hover:text-blue-800" href="/about">
              About
            </Link>
          </li>
          <li className="mr-6">
            <Link className="text-blue-500 hover:text-blue-800" href="/store">
              Store
            </Link>
          </li>
        </ul>
      </>
      <>{children}</>
    </>
  );
};

export default Layout;
