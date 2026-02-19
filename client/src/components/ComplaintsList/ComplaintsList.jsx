import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const ComplaintsList = () => {
  const [complaints, setComplaints] = useState([]);
  const { token } = useContext(AuthContext);

  const fetchComplaints = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/complaints", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });

      const { complaints } = await response.json();
      setComplaints(complaints);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchComplaints();
  }, []);

  return (
    <div>
      <ul>
        {complaints.map((c) => (
          <li key={c.id}>
            {c.category}
            {c.content}
            {c.created_at}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ComplaintsList;
