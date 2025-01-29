import React, { useEffect, useState, useCallback } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../redux/features/alertSlice";
import { setUser } from "../redux/features/userSlice";

export default function ProtectedRoute({ children }) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(null); // To track authentication status

  // Memoize the getUser function
  const getUser = useCallback(async () => {
    try {
      dispatch(showLoading());
      const loginType = localStorage.getItem("loginType");
      const token = localStorage.getItem("token");
      
      // Choose the appropriate endpoint based on login type
      const endpoint = loginType === "doctor" 
        ? "/api/v1/doctor/auth"
        : "/api/v1/user/getUserData";

      const res = await axios.get(endpoint, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(hideLoading());
      if (res.data.success) {
        dispatch(setUser({
          ...res.data.data,
          isDoctor: loginType === "doctor"
        }));
        setIsAuthenticated(true);
        
        // Handle redirections based on user type
        const currentPath = window.location.pathname;
        if (loginType === "doctor" && currentPath === "/") {
          window.location.href = "/doctor-homepage";
          return;
        } else if (loginType !== "doctor" && currentPath === "/doctor-homepage") {
          window.location.href = "/";
          return;
        }
      } else {
        setIsAuthenticated(false);
      }
    } catch (error) {
      dispatch(hideLoading());
      setIsAuthenticated(false);
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [dispatch]);

  useEffect(() => {
    if (!user) {
      getUser();
    } else {
      // If user exists in Redux state, check if they're on the correct route
      const loginType = localStorage.getItem("loginType");
      const currentPath = window.location.pathname;
      
      if (loginType === "doctor" && currentPath === "/") {
        window.location.href = "/doctor-homepage";
        return;
      } else if (loginType !== "doctor" && currentPath === "/doctor-homepage") {
        window.location.href = "/";
        return;
      }
      
      setIsAuthenticated(true);
      setLoading(false);
    }
  }, [user, getUser]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (isAuthenticated === false || !localStorage.getItem("token")) {
    return <Navigate to="/login" />;
  }

  return children;
}
