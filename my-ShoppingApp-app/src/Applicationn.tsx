import React from 'react';
import { projects } from './components/data';
import { useCart } from './Functionality';
import './Style.css';

const Application = () => {
  const { cart, addToCart } = useCart();

  return (
    <div className="App">
      <header className="header">
        <div className="logo">Project Dashboard</div>
        <nav className="nav">
          <ul>
            <li>Home</li>
            <li>Cart ({cart.length})</li>
            <li>Profile</li>
            <li>Login/Signup</li>
          </ul>
        </nav>
      </header>

      <main>
        <h1>Welcome to the Project Dashboard</h1>
        <div className="product-list">
          {projects.map((project) => (
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
              <p><strong>Start Date:</strong> {project.startDate}</p>
              <p><strong>End Date:</strong> {project.endDate}</p>
              <p><strong>Status:</strong> {project.status}</p>
              <p><strong>Team Members:</strong> {project.teamMembers.join(", ")}</p>
              <p><strong>Budget:</strong> ${project.budget.toLocaleString()}</p>
              <button onClick={() => addToCart(project)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Application;
