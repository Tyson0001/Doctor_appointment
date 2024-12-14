import React, { useEffect } from "react";
import axios from "axios";
import Layout from "../components/Layout";

const Homepage = () => {
  // Fetch user data
  const getUserData = async () => {
    try {
      const res = await axios.post(
        "/api/v1/user/getUserData", // Backend API endpoint
        {}, // Request body (if needed)
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"), // Pass the token
          },
        }
      );

      // Debugging: Log the response data
      console.log("User Data:", res.data);
    } catch (error) {
      // Handle error
      console.error(
        error.response
          ? error.response.data
          : "Error occurred while fetching user data"
      );
    }
  };

  // Call getUserData on component load
  useEffect(() => {
    getUserData();
  }, []);

  return (
    <Layout>
      <h1>Homepage</h1>
      <p>Welcome to the homepage!</p>
    </Layout>
  );
};

export default Homepage;
