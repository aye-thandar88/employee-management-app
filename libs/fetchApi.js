const BASE_URL = "http://localhost:3000/api";

//get all employees
export const getEmployees = async () => {
  const res = await fetch(`${BASE_URL}/employees`, { method: "GET" });
  // add the remaining CORS headers to the response
  res.headers.append('Access-Control-Allow-Credentials', "true")
  res.headers.append('Access-Control-Allow-Methods', 'GET,DELETE,PATCH,POST,PUT')
  res.headers.append(
      'Access-Control-Allow-Headers',
      'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )

  return res.json();
};

//get search employees
export const getSearchEmployees = async (id) => {
  const res = await fetch(`${BASE_URL}/employees/${id}`, { method: "GET" });

  return res.json();
};

//get single employee
export const getEmployee = async (id) => {
  const res = await fetch(`${BASE_URL}/employees/${id}`, { method: "GET" });
  return res.json();
};

//post a neww employee
export const postEmployee = async (formData) => {
  const Options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  };

  const res = await fetch(`${BASE_URL}/employees`, Options);
  return res.json();
};

//update an employee
export const updateEmployee = async (id, formData) => {
  const Options = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  };

  const res = await fetch(`${BASE_URL}/employees/${id}`, Options);
  return res.json();
};

//delete an employee
export const deleteEmployee = async (id) => {
  const Options = {
    method: "DELETE",
  };

  const res = await fetch(`${BASE_URL}/employees?id=${id}`, Options);
  return res.json();
};

//post a new user register
export const postUser = async (formData) => {
  const Options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  };

  const res = await fetch(`${BASE_URL}/register`, Options);
  return res.json();
};

//get single user
export const getExistUser = async (email) => {
  const res = await fetch(`${BASE_URL}/register/userExist`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });
  return res.json();
};
