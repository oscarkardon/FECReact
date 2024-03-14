import React from "react";
import makeAPILK from "../services/services";
import Item from "./Item";
import ColumnHeader from "./ColumnHeader";

export default function Button() {
  const [dataArray, setDataArray] = React.useState([]);

  async function handleClick() {
    try {
      const apiResponse = await makeAPILK();
      
      // Update the state with the new data
      setDataArray(apiResponse.results || []);
      
      // Log the updated state in a callback or use the state directly in the next line
      console.log(dataArray);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  const dataElements = dataArray.map(data => 
    <Item key={data.sub_id} details={data} />
  );

  return (
    <div>
      <button
        className="button"
        onClick={handleClick}
      >
        See Leonard Kardon's FEC contributions
      </button>
      <ColumnHeader/>
      {dataElements}
    </div>
  );
}
