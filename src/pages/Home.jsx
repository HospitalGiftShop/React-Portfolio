import Portfolio from './Portfolio.jsx';

const HomePage = () => {
    return (
        <div className="container">
        <h1>Welcome to My Portfolio</h1>
       <div className="row">
         <div className="col-md-12">
              <p>
                 This is a simple portfolio website created using React. 
              </p>
              <Portfolio />
        </div>
        </div>
        </div>
    );
}

export default HomePage;