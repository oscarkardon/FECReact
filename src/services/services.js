export default async function makeDonorsAPICall(name, city){
  if (!name || !city) {
    throw new Error('Name and city are required parameters.');
  }

  const nameAPI = encodeURIComponent(name);
  const cityAPI = encodeURIComponent(city);


  const url = `http://localhost:8080/donors/name/${nameAPI}/city/${cityAPI}`;
  console.log(url)

  try {
    const response = await fetch(url, {
      method: 'GET'
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const apiResponse = await response.json();
    console.log(apiResponse)
    return apiResponse;
  } catch (error) {
    console.error('API call failed:', error);
    throw error;
  }
}




            