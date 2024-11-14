import React, { useState, useEffect } from 'react';

const App = () => {

  const [registration, setRegistration] = useState({
    firstName: '',
    lastName: '',
  });

  const [submittedData, setSubmittedData] = useState([]);

  useEffect(() => {
    console.log(registration);
  }, [registration]);

  const handleChange = (e) => {
    setRegistration({ ...registration, [e.target.name]: e.target.value });
  };

  const isDataDuplicate = () => {
    // Check if the current data already exists in submittedData
    return submittedData.some((data) =>
        data.firstName === registration.firstName && data.lastName === registration.lastName
    );
  };

  const handleSubmit = (e) => {
    // Prevent the default form submission to avoid page reload
    e.preventDefault();

    if (registration.firstName.trim() !== '' && registration.lastName.trim() !== '') {
      // Check for duplicate data
      if (!isDataDuplicate()) {
        // Store the submitted values in the array
        setSubmittedData([...submittedData, { ...registration }]);
      }

      // Clear the input values after submission
      setRegistration({
        firstName: '',
        lastName: '',
      });
    }
  };

  return (
    <div className='container mx-auto mt-5'>
      <form onSubmit={handleSubmit} className='border-4 py-5 px-3 border-black'>
        {/* First Input Field Start */}
        <label className='text-xl'>
          First Name:
          <input
            type="text"
            name="firstName"
            value={registration.firstName}
            onChange={handleChange}
            className='border border-slate-500 text-xl ml-5 mb-5'
          />
        </label >
        <br />
         {/* First Input Field End */}
         {/* Second Input Field Strat */}
        <label className="text-xl">
          Last Name:
          <input
            type="text"
            name="lastName"
            value={registration.lastName}
            onChange={handleChange}
            className='border border-slate-500 text-xl ml-5 mb-5'
          />
        </label>
        <br />
        {/* Second Input Field Strat */}

        <button type="submit" className='bg-blue-500 py-3 px-4 ml-48'>Submit</button>

      </form>

      <div>
        <h2 className='text-4xl underline mb-5'>Submitted Data:</h2>
        {submittedData.map((item , index) => (
          <div key={index} className=' border border-slate-700 px-5' >
            <p className='text-2xl text-red-400'>Submission {index + 1}:</p>
            <p className='text-2xl'>First Name: {item.firstName}</p>
            <p className='text-2xl'>Last Name: {item.lastName}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
