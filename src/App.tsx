import { Route, Routes } from "react-router";
import RootLayout from "./layouts/RootLayout";
import Picture from "./pages/Sub1/Picture";
import Video from "./pages/Sub1/Video";
import "./App.css";

const App = () => (
  <Routes>
    <Route element={<RootLayout />}>
      <Route index element={<div>主頁</div>} />
      <Route path="/sub1/picture" element={<Picture />} />
      <Route path="/sub1/video" element={<Video />} />

      <Route path="/sub2/3" element={<div>系統設定1</div>} />
      <Route path="/sub3/4" element={<div>偏好設定1</div>} />
      <Route path="/sub4" element={<div>登出</div>} />
    </Route>
  </Routes>
);

export default App;
