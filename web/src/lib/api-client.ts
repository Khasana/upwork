import { env } from "@/config/env";
import Axios from "axios";

export const api = Axios.create({
  baseURL: env.API_URL,
});
