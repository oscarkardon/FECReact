export default async function makeAPICall(name, city) {
  if (!name || !city) {
    throw new Error('Name and city are required parameters.');
  }

  const nameAPI = encodeURIComponent(name);
  const cityAPI = encodeURIComponent(city);

  const url = `https://api.open.fec.gov/v1/schedules/schedule_a/?contributor_name=${nameAPI}&contributor_city=${cityAPI}&per_page=100&sort=-contribution_receipt_date&sort_hide_null=false&sort_null_only=false&api_key=sT5EcBtx3MYb9PURfSOW0bCiigbTk7ABmza4TiQT`;

  try {
    const response = await fetch(url, {
      method: 'GET'
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const apiResponse = await response.json();
    return apiResponse;
  } catch (error) {
    console.error('API call failed:', error);
    throw error;
  }
}




            