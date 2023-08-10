const BASE_URL = "http://localhost:3000/api/employees";

//get all employees
export const getEmployees = async () => {
  const res = await fetch(`${BASE_URL}`, { method: "GET" });
  return res.json();
};

//get search employees
export const getSearchEmployees = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`, { method: "GET" });
  return res.json();
};

//get single employee
export const getEmployee = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`, { method: "GET" });
  return res.json();
};

//post a neww employee
export const postEmployee = async (formData) => {
  const Options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  };

  const res = await fetch(`${BASE_URL}`, Options);
  return res.json();
};

//update an employee
export const updateEmployee = async (id, formData) => {
  const Options = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  };

  const res = await fetch(`${BASE_URL}/${id}`, Options);
  return res.json();
};

//delete an employee
export const deleteEmployee = async (id) => {
  const Options = {
    method: "DELETE",
  };

  const res = await fetch(`${BASE_URL}?id=${id}`, Options);
  return res.json();
};
