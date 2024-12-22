import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/css/bootstrap-utilities.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import projects from '../Projects.jsx';

const Portfolio = () => {
  return (
    <div className="d-flex mt-5 mb-5">
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {projects.map((project) => (
          <div key={project.title} className="col">
            <div
              className="position-relative"
              style={{
                overflow: 'hidden',
                width: '350px',
                height: '250px',
              }}
              onMouseEnter={(e) => {
                const overlay = e.currentTarget.querySelector('.overlay');
                overlay.style.opacity = '1';
              }}
              onMouseLeave={(e) => {
                const overlay = e.currentTarget.querySelector('.overlay');
                overlay.style.opacity = '0';
              }}
            >
              {/* Main Image */}
              <img
                src={project.liveImage}
                alt={project.title}
                className="img-fluid border-0"
                style={{
                  width: '100%',
                  height: 'auto',
                  transition: 'transform 0.3s',
                }}
              />

              {/* Overlay for Title and GitHub Icon */}
              <div
                className="overlay position-absolute top-0 start-0 w-100 h-100 d-flex flex-column align-items-center justify-content-center"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.85)',
                  opacity: '0',
                  transition: 'opacity 0.3s ease-in-out',
                  zIndex: '10',
                }}
              >
                {/* Title (click to liveLink) */}
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-dark mb-3"
                  style={{ fontSize: '1.5rem', fontWeight: 'bold' }}
                >
                  {project.title}
                </a>

                {/* GitHub Icon (click to GitHub) */}
                <a
                  href={project.gitHub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark"
                >
                  <i
                    className="bi bi-github"
                    style={{
                      fontSize: '2rem',
                    }}
                  ></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
