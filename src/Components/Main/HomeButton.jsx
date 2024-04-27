import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const HomeButton = () => {
  const navigate = useNavigate();

  const handleClick = () => navigate("/");

  return (
    <button
      onClick={handleClick}
      className="fixed top-4 right-4 bg-teal-900 text-sky-200 rounded-full p-3 shadow-lg hover:bg-blue-600 focus:outline-none"
      aria-label="Home"
    >
      <FaHome size={24} />
    </button>
  );
};

export default HomeButton;
