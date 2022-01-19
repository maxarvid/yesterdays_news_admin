import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1 data-cy="header">Yesterdays News Admin</h1>
      <button onClick={() => navigate("/authenticate")} data-cy="authenticate">
        Log in
      </button>
    </>
  );
};

export default Dashboard;
