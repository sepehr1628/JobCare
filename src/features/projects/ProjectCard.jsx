import { Link } from "react-router-dom";

function ProjectCard({ item }) {
  return (
    <div>
      <Link to={`/market/${item.id}`}>
        <div>
          <img
            src={item.imgUrl}
            className="rounded-t-md w-full h-40 sm:h-48 border-b border-solid border-gray-400 object-contain"
            alt={item.title}
          />
        </div>
      </Link>
      <div className="flex justify-around">
        <strong>{item.title}</strong>
        <p>${item.budget}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
