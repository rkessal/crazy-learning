import axios from "axios"
import { API_URL, CONFIG } from "./config"

export function getFormation(formationId: TFormationAPI['id']) {
  return axios.get(`${API_URL}/mes-formations/${formationId}`, CONFIG)
}

type TFormationAPI = {
  id: string
}