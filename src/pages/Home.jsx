import Portfolio from './Portfolio.jsx';

const HomePage = () => {
    return (
        <div className="container">
            <h1>Welcome to My Portfolio</h1>
            <p>
                This is a simple portfolio website created using React.
            </p>
            <Portfolio />
        </div>
    );
}

export default HomePage;