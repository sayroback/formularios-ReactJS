import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const userId = 10;
  return (
    <div>
      Home
      <li>
        <Link to={`/users/${userId}`}>Users</Link>
      </li>
    </div>
  );
};

export default Home;
