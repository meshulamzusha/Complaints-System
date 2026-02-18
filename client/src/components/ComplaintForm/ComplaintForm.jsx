const ComplaintForm = () => {
  const handelSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());

    const response = await fetch("http://localhost:3000/api/complaints", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formJson),
    });

    const result = await response.json()
    
  };
  return (
    <div>
      <form onSubmit={handelSubmit}>
        <label htmlFor="category">תחום התלונה</label>
        <select name="category" id="category">
          <option value="מזון">מזון</option>
          <option value="ציוד">ציוד</option>
          <option value="פקודות">פקודות</option>
          <option value="אחר">אחר</option>
        </select>
        <label htmlFor="content">תוכן התלונה</label>
        <textarea name="content" id="content" rows={10}></textarea>
        <input type="submit" value={"שליחה"} />
      </form>
    </div>
  );
};

export default ComplaintForm;
