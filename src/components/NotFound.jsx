
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container mx-auto text-center">
      <h1 className="text-3xl text-orange-700 font-bold mt-8 mb-4">404 - Not Found</h1>
      <p className="mb-4">Oops! The page you are looking for does not exist.</p>
      <Link to="/" className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
        Back to Todo List
      </Link>
    </div>
  );
};

export default NotFound;
