const apiUrl = import.meta.env.VITE_MOCK_API_URL;

const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};

export default async function fetcher(baseUrl = apiUrl) {
  try {
    const result = await fetch(baseUrl, options);
    return await result.json();
  } catch (err) {
    throw new Error(err);
  }
}
