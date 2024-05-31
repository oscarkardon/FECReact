import React from "react";
import makeAPICall from "../../services/services";
import Item from "../Data/Item";
import ColumnHeader from "../Data/ColumnHeader";

export default function Button() {
  const [dataArray, setDataArray] = React.useState([]);
  const [formData, setFormData] = React.useState({name: "", city: ""})

  async function handleClick() {
    try {
      const apiResponse = await makeAPICall(formData.name, formData.city);
            setDataArray(apiResponse.results || []);
            console.log(dataArray);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  }

  const dataElements = dataArray.map(data => 
    <Item key={data.sub_id} details={data} />
  );

  return (
    <div>
      <fieldset>
        <input 
              type="text"
              placeholder="Enter the Name of the Person You Want to Search"
              onChange={handleChange}
              name="name"
              value={formData.name}
          />
          <input 
              type="text"
              placeholder="Enter the City of the Person You Want to Search"
              onChange={handleChange}
              name="city"
              value={formData.city}
          />
        <button
          className="button"
          onClick={handleClick}
        >
          See FEC contributions
        </button>
      </fieldset>
      <ColumnHeader/>
      {dataElements}
    </div>
  );
}
