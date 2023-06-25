import axios from "axios";

export const instance = axios.create({
	baseURL: "https://643062afc26d69edc890e903.mockapi.io/",
	headers: { "content-type": "application/json" },
});

export const getAll = async (page, limit) => {
	try {
		if (!page || !limit) {
			return await instance.get("followers");
		}
		return await instance.get(`followers?page=${page}&limit=${limit}`);
	} catch (error) {
		console.log(error);
		let response;
		return (response.data = []);
	}
};

export const updateFollowers = async (id, followers) => {
	try {
		await instance.put(`followers/${id}`, {
			followers: followers,
		});
	} catch (error) {
		console.log(error);
		return null;
	}
};
