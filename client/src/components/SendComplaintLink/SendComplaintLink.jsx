import { Link } from "react-router";

const SendComplaintLink = () => {
  return (
    <div>
      <h3>שלחו תלונה בצורה אנונימית ונוחה</h3>
      <Link to={"/submit"}>שליחת תלונה</Link>
    </div>
  );
};

export default SendComplaintLink;
