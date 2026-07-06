import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";
import ProtectedRoute from "./ProtectedRoute";
import Layout from "../components/layout/Layout";
import Chat from "../pages/Chat";
import Settings from "../pages/Settings";
import ImageGenerator from "../pages/ImageGenerator";
import ResumeBuilder from "../pages/ResumeBuilder";
import CoverLetter from "../pages/CoverLetter";
import JobMatch from "../pages/JobMatch";
import Features from "../components/home/Features";




function AppRoutes() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

          <Route path="/features" element={<Features />} />


     <Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Layout>
        <Dashboard />
      </Layout>
    </ProtectedRoute>
  }
/>
<Route
    path="/chat"
    element={
        <ProtectedRoute>
            <Layout>
                <Chat />
            </Layout>
        </ProtectedRoute>
    }
/>

<Route
    path="/settings"
    element={
        <ProtectedRoute>
            <Layout>
                <Settings />
            </Layout>
        </ProtectedRoute>
    }
/>

<Route
    path="/image-generator"
    element={
        <ProtectedRoute>
            <Layout>
                <ImageGenerator />
            </Layout>
        </ProtectedRoute>
    }
/>
<Route
    path="/profile"
    element={
        <ProtectedRoute>
            <Layout>
                <Profile />
            </Layout>
        </ProtectedRoute>
    }
/>

      <Route
    path="/resume-builder"
    element={
        <ProtectedRoute>
            <Layout>
                <ResumeBuilder />
            </Layout>
        </ProtectedRoute>
    }
/>

<Route
    path="/cover-letter"
    element={
        <ProtectedRoute>
            <Layout>
                <CoverLetter />
            </Layout>
        </ProtectedRoute>
    }
/>

<Route
    path="/job-match"
    element={
        <ProtectedRoute>
            <Layout>
                <JobMatch />
            </Layout>
        </ProtectedRoute>
    }
/>

        <Route path="*" element={<NotFound />} />

      </Routes>

    </BrowserRouter>
  );
}

export default AppRoutes;