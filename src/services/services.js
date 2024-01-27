export default async function makeAPILK(){
    const url = "https://api.open.fec.gov/v1/schedules/schedule_a/?contributor_name=Leonard%20Kardon&contributor_city=Arlington&per_page=100&sort=-contribution_receipt_date&sort_hide_null=false&sort_null_only=false&api_key=sT5EcBtx3MYb9PURfSOW0bCiigbTk7ABmza4TiQT";
    const response = await fetch(url, {
      method: 'GET'
    });
    const apiResponse = await response.json();
    return apiResponse;
}


/* makeAPILK()
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.error('Error:', error);
            });
*/
            