import { createContext, useState } from "react";

export const ComplaintsContext = createContext(null);

export const ComplaintsProvider = ({ children }) => {
  const [complaints, setComplaints] = useState([]);

  return <ComplaintsContext value={{ complaints, setComplaints }}>{children}</ComplaintsContext>;
};
