import React, { useEffect, useState } from "react";
import axios from "axios";
import DoctorDashboard from "../components/DoctorDashboard";
import { Row, Spin } from "antd"; // Added Spin for loading indicator
import DoctorList from "../components/DoctorList";
const DrHomePage = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true); 
  // login user data
  const getUserData = async () => {
    try {
      const res = await axios.get(
        "/api/v1/doctor/getDoctors",

        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      if (res.data.success) {
        setDoctors(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }finally {
      setLoading(false); // Stop loading once the API call finishes
    }
  };

  useEffect(() => {
    getUserData();
  }, []);
  return (
    <DoctorDashboard>
      <h1 className="text-center">Home Page</h1>
      <Row>
        {loading ? (
          <Spin size="large" /> // Display loading spinner
        ) : (
          doctors && doctors.map((doctor) => <DoctorList key={doctor._id} doctor={doctor} />)
        )}
      </Row>
    </DoctorDashboard>
  );
};

export default DrHomePage;
