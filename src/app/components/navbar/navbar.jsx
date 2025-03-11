import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="container bg-dark p-3">
          <div className="row">
            <div className="col-xl-6 text-items-center text-center">
              <Link href="/" className="text-decoration-none ">
                <p className="fs-4 text-white">MongoDb Curd</p>
              </Link>
            </div>
            <div className="col-xl-6 text-items-center text-center">
              <Link href="/addTopic">
                <button className="btn btn-primary">Add Topic</button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
