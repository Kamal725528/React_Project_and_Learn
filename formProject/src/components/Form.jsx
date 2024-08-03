import { useState } from "react";

function Form() {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    comments: false,
    candidate: false,
    offers: false,
    pushNotification: ""
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => {
      return { ...prev, [name]: type === "checkbox" ? checked : value };
    });
  }

  function submitHandler(e){
     e.preventDefault();
     console.log(formData);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">

      <form className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg" onSubmit={submitHandler}>

        <div className="mb-4">
          <label htmlFor="firstName" className="block text-gray-700 font-bold mb-2">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={changeHandler}
            className="w-full p-2 border border-gray-300 rounded"
            id="firstName"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="lastName" className="block text-gray-700 font-bold mb-2">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={changeHandler}
            className="w-full p-2 border border-gray-300 rounded"
            id="lastName"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={changeHandler}
            className="w-full p-2 border border-gray-300 rounded"
            id="email"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="country" className="block text-gray-700 font-bold mb-2">
            Country
          </label>
          <select
            name="country"
            id="country"
            value={formData.country}
            onChange={changeHandler}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="india">India</option>
            <option value="usa">USA</option>
            <option value="uk">UK</option>
            <option value="uae">UAE</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="streetAddress" className="block text-gray-700 font-bold mb-2">
            Street Address
          </label>
          <input
            type="text"
            name="streetAddress"
            placeholder="Street Address"
            value={formData.streetAddress}
            onChange={changeHandler}
            className="w-full p-2 border border-gray-300 rounded"
            id="streetAddress"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="city" className="block text-gray-700 font-bold mb-2">
            City
          </label>
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={changeHandler}
            className="w-full p-2 border border-gray-300 rounded"
            id="city"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="state" className="block text-gray-700 font-bold mb-2">
            State
          </label>
          <input
            type="text"
            name="state"
            placeholder="State"
            value={formData.state}
            onChange={changeHandler}
            className="w-full p-2 border border-gray-300 rounded"
            id="state"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="postalCode" className="block text-gray-700 font-bold mb-2">
            Postal Code
          </label>
          <input
            type="number"
            name="postalCode"
            placeholder="Postal Code"
            value={formData.postalCode}
            onChange={changeHandler}
            className="w-full p-2 border border-gray-300 rounded"
            id="postalCode"
          />
        </div>

        <fieldset className="mb-4">
          <legend className="block text-gray-700 font-bold mb-2">By Email</legend>
          
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              id="comments"
              name="comments"
              checked={formData.comments}
              onChange={changeHandler}
              className="mr-2"
            />
            <div>
              <label htmlFor="comments" className="text-gray-700">Comments</label>
              <p className="text-sm text-gray-600">Get notified when someone posts a comment on a posting</p>
            </div>
          </div>

          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              id="candidate"
              name="candidate"
              checked={formData.candidate}
              onChange={changeHandler}
              className="mr-2"
            />
            <div>
              <label htmlFor="candidate" className="text-gray-700">Candidate</label>
              <p className="text-sm text-gray-600">Get notified when a candidate applies for a job</p>
            </div>
          </div>

          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              id="offers"
              name="offers"
              checked={formData.offers}
              onChange={changeHandler}
              className="mr-2"
            />
            <div>
              <label htmlFor="offers" className="text-gray-700">Offers</label>
              <p className="text-sm text-gray-600">Get notified when a candidate accepts or rejects an offer</p>
            </div>
          </div>
        </fieldset>

        <fieldset className="mb-4">
          <legend className="block text-gray-700 font-bold mb-2">Push Notification</legend>
          <p className="text-sm text-gray-600 mb-2">These are delivered via SMS to your mobile phone</p>

          <div className="mb-2">
            <input
              type="radio"
              id="pushEverything"
              name="pushNotification"
              value="Everything"
              onChange={changeHandler}
              className="mr-2"
            />
            <label htmlFor="pushEverything" className="text-gray-700">Everything</label>
          </div>

          <div className="mb-2">
            <input
              type="radio"
              id="pushEmail"
              name="pushNotification"
              value="Same as email"
              onChange={changeHandler}
              className="mr-2"
            />
            <label htmlFor="pushEmail" className="text-gray-700">Same as Email</label>
          </div>

          <div className="mb-2">
            <input
              type="radio"
              id="pushNothing"
              name="pushNotification"
              value="No Push Notification"
              onChange={changeHandler}
              className="mr-2"
            />
            <label htmlFor="pushNothing" className="text-gray-700">No Push Notification</label>
          </div>
        </fieldset>

      <button className="bg-blue-500 text-white rounded py-2 px-4">Save</button>

      </form>
    </div>
  );
}

export default Form;
