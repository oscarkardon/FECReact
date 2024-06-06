import React from "react";
import makeAPICall from "./services/services";
import Item from "./components/Data/Item";
import ColumnHeader from "./components/Data/ColumnHeader";

export default function Form() {
  const [dataArray, setDataArray] = React.useState([]);
  const [formData, setFormData] = React.useState({name: "", city: ""});

  async function handleClick() {
    try {
      const apiResponse = await makeAPICall(formData.name, formData.city);
      setDataArray(apiResponse || []);
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

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleClick();
    }
  }

  const dataElements = dataArray.map(data => 
    <Item key={data.sub_id} details={data} />
  );

  return (
    <div>
      <fieldset className='form'>
        <label>Enter the Name of the Person You Want to Search</label>
        <input 
          type="text"
          placeholder="Full Name"
          onChange={handleChange}
          onKeyDown={handleKeyDown} 
          name="name"
          value={formData.name}
        />
        <label>Enter the City of the Person You Want to Search</label>
        <input 
          type="text"
          placeholder="City"
          onChange={handleChange}
          onKeyDown={handleKeyDown} 
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
      <div className="data">
        <ColumnHeader/>
        {dataElements}
      </div>
    </div>
  );
}
