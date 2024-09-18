import { createContext } from "react";

const apiContext = createContext({ BASE_URL: "http://localhost:5000" });

export default apiContext;
