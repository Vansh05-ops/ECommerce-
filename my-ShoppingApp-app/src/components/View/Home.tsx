import { Project, projects } from "../../Utils/Constant/data"; 

interface HomeProps {
  addToCart: (project: Project) => void;
  cart: Project[];
}

function Home({ addToCart, cart }: HomeProps) {
  return (
    <div>
      <h1>Welcome to the Project Dashboard</h1>
      <div className="product-list">
        {projects.map((project: Project) => {
          const isInCart = cart.some((item) => item.id === project.id);
          return (
            <div key={project.id} className="product-card">
              <img
                src={project.image}
                alt={project.name}
                className="project-image"
                width="200"
                height="200"
              />
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <p>
                <strong>Start Date:</strong> {project.startDate}
              </p>
              <p>
                <strong>End Date:</strong> {project.endDate}
              </p>
              <p>
                <strong>Status:</strong> {project.status}
              </p>
              <p>
                <strong>Team Members:</strong> {project.teamMembers.join(", ")}
              </p>
              <p>
                <strong>Budget:</strong> ${project.budget.toLocaleString()}
              </p>
              <button
                onClick={() => addToCart(project)}
                disabled={isInCart}
              >
                {isInCart ? "Added" : "Add to Cart"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;