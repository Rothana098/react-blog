import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="bg-success text-white p-5 mt-4 rounded-3">
        <div className="container">
          <h1 className="display-4 fw-bold">Welcome to My Blog</h1>
          <p className="fs-4">
            This is a simple blog application built with React, Bootstrap, and
            JSONPlaceholder API.
          </p>
          <Link className="btn btn-light btn-lg" to={"/post"}> View All Posts</Link>
        </div>
      </div>
      <div className="container">
        <h2>Latest Posts</h2>
        <p>Navigate to the Posts page to see all available posts.</p>
      </div>
    </>
  );
};

export default Home;
