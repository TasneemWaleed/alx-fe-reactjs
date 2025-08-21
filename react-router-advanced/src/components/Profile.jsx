import { Link, Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <h1>👤 Profile Page</h1>
      <nav style={{ marginTop: "10px" }}>
        <Link to="details">Details</Link> |{" "}
        <Link to="settings">Settings</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Profile;
