import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";

const AppRoutes = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/auth" element={<Login />} />
          <Route
            path="/"
            // element={
            //   <VisionStudioLayout>
            //     <HomePage />
            //   </VisionStudioLayout>
            // }
          />
          <Route
            path="/project"
            // element={
            //   <VisionStudioLayout>
            //     <ProjectImagesProvider>
            //       <VisionStudioModal />
            //       <Project />
            //     </ProjectImagesProvider>
            //   </VisionStudioLayout>
            // }
          />
          <Route
            path="/upload/:id"
            // element={
            //   <VisionStudioLayout>
            //     <ProjectImagesProvider>
            //       <TrainProvider>
            //         <VisionStudioModal />
            //         <UploadPage />
            //       </TrainProvider>
            //     </ProjectImagesProvider>
            //   </VisionStudioLayout>
            // }
          />
        </Routes>
      </Router>
    </>
  );
};

export default AppRoutes;
