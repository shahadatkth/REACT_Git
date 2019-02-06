import axios from "axios";
import {
  FETCH_REPOSITORY_SUCCESS,
  FETCH_REPOSITORY_ERROR
} from "./action_types";
import { API_KEY } from "../utlis/contants";
import { FETCH_REPOSITORY_URL } from "../utlis/apiUrl";

export const fetchRepository = SearchText => {
  const url = `${FETCH_REPOSITORY_URL}${SearchText}&sort=stars&order=desc`;
  const request = axios.get(url);
  return {
    type: FETCH_REPOSITORY_SUCCESS,
    payload: request
  };
};
