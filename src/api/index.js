// Init
import axios from "axios";
import { toast } from "react-toastify";
import { baseUrl } from "../config";

const api = async (method, uri, body) => {
  console.log("🚀 ~ api ~ body:", body);
  // API Call
  const url = baseUrl + uri;
  console.log("🚀 ~ api ~ url:", url);
  return new Promise((resolve, reject) => {
    axios[method](url, body)
      .then((res) => resolve(res))
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log("API Error --------> ", err?.response?.status);
        toast.error(
          err?.response?.data ? err.response.data.message : err?.message
        );
        reject(err);
      });
  });
};
//
// Export
export default api;
