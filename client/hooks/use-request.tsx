import { useState } from "react";
import axios from "axios";

interface UseRequestProps {
  url: string;
  method: "get" | "post" | "patch";
  body?: {};
}

const useRequest = ({ url, method, body }: UseRequestProps) => {
  const [errors, setErrors] = useState<JSX.Element | null>(null);

  const doRequest = async () => {
    try {
      const response = await axios[method](url, body);
      return response.data;
    } catch (err) {
      setErrors(
        <div className="alert alert-danger">
          <h4>Ooops...</h4>
          <ul className="my-0">
            {err.response.data.errors.map((error) => (
              <li key={error.message}>{error.message}</li>
            ))}
          </ul>
        </div>
      );
    }
  };

  return { doRequest, errors };
};

export default useRequest;
