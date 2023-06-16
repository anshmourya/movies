import { createContext } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
export const AunthData = createContext();

const AunthProvider = ({ children }) => {
  const validate = (email, password) => {
    if (!email && !password) {
      toast.error("Something Went Wrong", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
        
    }
  };

  return <AunthData.Provider>{children}</AunthData.Provider>;
};
