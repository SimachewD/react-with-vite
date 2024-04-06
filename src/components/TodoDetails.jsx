
import { Link, useParams } from 'react-router-dom';

const TodoDetails = () => {
  const { id } = useParams();

  // Fetch todo details based on id

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold">Todo Details</h1>
      <p className="mb-4">Todo ID: {id}</p>
      {/* Display todo details */}
      <Link to="/" className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
        Back to Todo List
      </Link>
    </div>
  );
};

export default TodoDetails;
