import { Link } from "react-router";

const AdminLoginLink = () => {
  return (
    <div>
      <h3>למפקדים בלבד</h3>
      <Link to={"/admin/login"}>כניסה לאדמין</Link>
    </div>
  );
}

export default AdminLoginLink