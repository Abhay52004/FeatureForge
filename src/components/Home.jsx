import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container mt-4">
      <div className="jumbotron bg-primary text-white rounded p-5 text-center">
        <h1 className="display-4">Welcome to My Website</h1>
        <p className="lead">Discover amazing features including real-time weather updates, online shopping, recipe ideas, and easy contact options.</p>
        <hr className="my-4" />
        <p>Explore the sections using the navigation menu above.</p>
        <a className="btn btn-light btn-lg" href="#weather" role="button">Get Started</a>
      </div>
      <div className="row mt-5">
        <div className="col-md-4">
          <Link to="/weather" className="text-decoration-none">
            <div className="card text-center">
              <div className="card-body">
                <h5 className="card-title">Weather</h5>
                <p className="card-text">Check the current weather for any city.</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-4">
          <Link to="/shop" className="text-decoration-none">
            <div className="card text-center">
              <div className="card-body">
                <h5 className="card-title">Shop</h5>
                <p className="card-text">Browse and search products from our store.</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-4">
          <Link to="/recipes" className="text-decoration-none">
            <div className="card text-center">
              <div className="card-body">
                <h5 className="card-title">Recipes</h5>
                <p className="card-text">Find delicious recipes by searching for ingredients.</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;