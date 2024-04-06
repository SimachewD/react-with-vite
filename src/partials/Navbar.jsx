
import { Link, Outlet } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className=" bg-orange-900 p-4">
        <div className="container text-center">
          <Link to="/" className="text-white text-xl font-bold">Todo App</Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
