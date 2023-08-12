import React from "react";
import { ToastContainer, toast } from "react-toastify";

const Noti = ({ message, type }) => {
  message && toast.success(message);
  return (
    <div className="w-20 flex">
      {/* <ToastContainer
        position="top-right"
        autoClose={2000}
        // limit={2}
        // hideProgressBar={false}
        // newestOnTop={false}
        // closeOnClick
        // rtl={false}
        // pauseOnFocusLoss
        // draggable
        // pauseOnHover
        // theme="light"
      /> */}
    </div>
  );
};

export default Noti;
