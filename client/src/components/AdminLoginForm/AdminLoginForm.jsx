import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router";

const AdminLoginForm = () => {
  let navigate = useNavigate()
  const { setToken } = useContext(AuthContext);
  const handelSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());

    const response = await fetch("http://localhost:3000/api/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formJson),
    });

    const result = await response.json();
    if (result.ok) {
      setToken(result.token);
      navigate("/admin");
    }
  };
  return (
    <div>
      <form onSubmit={handelSubmit}>
        <label htmlFor="password">הזן סיסמה</label>
        <input type="password" name="password" id="password" />
        <input type="submit" value={"התחברות"} />
      </form>
    </div>
  );
};

export default AdminLoginForm;
