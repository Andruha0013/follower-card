import axios from "axios";

export const instance = axios.create({
	baseURL: "https://643062afc26d69edc890e903.mockapi.io/",
	headers: { "content-type": "application/json" },
});

const response = await instance.get("followers");
console.log(response);
