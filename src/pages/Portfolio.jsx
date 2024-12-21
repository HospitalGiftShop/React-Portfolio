// Imports
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/css/bootstrap-utilities.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import projects from '../Projects.jsx';
import { Button } from 'react-bootstrap';  // Import Button from react-bootstrap for Bootstrap styling

// Function that renders the portfolio cards, grid, buttons & exports
export function Project( project ) {
  return (
    <div className='col-md-4 mb-4'> {/* Bootstrap grid system */}
      <div className='card'>
        <img
          src={project.imageLink}  // Use the correct image link
          alt="displayed projects with associated links"
        />
        <div className='card-body'>
          <h5 className='card-title'>{project.title}</h5> 
          <p className='card-text'>{project.description}</p> 
        </div>
        <div className='card-footer text-center'>
          <Button
            variant="primary"
            className="me-2"  // Margin-right for spacing
            href={project.liveLink}
            size="sm"
          >
            Live URL
          </Button>
          <Button
            variant="secondary"
            href={project.gitHub}
            size="sm"
          >
            GitHub
          </Button>
        </div>
      </div>
    </div>
  );
}

// Function/component written to map over projects.js array
export default function Work() {
  return (
    <div className='container py-5'>
      <h1 className='text-center mb-4'>Portfolio</h1>
      <div className='row'>  {/* Bootstrap row to wrap all cards */}
        {projects.map((project, index) => (
          <Project project={project} key={index} />
        ))}
      </div>
    </div>
  );
}
