import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Outlet />
      </main>
    </>
  );
}

export default App;

// import { Outlet } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import TeamSection from "./TeamSection"; // Import the TeamSection component
// import MemberSection from "./Membersection"; // Import the MemberSection component
// import "./App.css";

// function App() {
//   return (
//     <>
//       <Navbar />
//       <main className="container">
//         <TeamSection /> {/* This will display the Team Section */}
//         <MemberSection /> {/* This will display the Member Section */}
//         <Outlet />
//       </main>
//     </>
//   );
// }

// export default App;
