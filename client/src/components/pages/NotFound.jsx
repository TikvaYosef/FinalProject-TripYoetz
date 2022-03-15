import { Link } from 'react-router-dom';

const NotFound = () => (
    <div>
        <h1>404 - Not Found!</h1>
        <Link to="/home">Go Back Home</Link>
    </div>
);
export default NotFound;