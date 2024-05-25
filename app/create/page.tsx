import React from "react";
import Layout from "../components/layout";

const CreatePage = () => {
  const options = [
    "Animals",
    "Arts, culture and heritage",
    "Community development",
    "Education",
    "Environment protection and sustainability",
    "Healthcare",
    "Other overseas causes",
    "Overseas humanitarian aid",
    "Social service and welfare",
    "Sports",
    "Adults",
    "Animal welfare",
    "Caregivers",
    "Children",
    "Disaster/Crisis victims",
    "Elderly",
    "Ethnic groups",
    "Families",
    "Foreign workers",
    "Gender groups",
    "General population",
    "Incarcerated individuals",
    "Local community",
    "Low-income groups",
    "Persons living with dementia",
    "Persons living with medical illnesses",
    "Persons living with disabilities",
    "Persons living with mental health conditions",
    "The environment",
    "Youth",
  ];

  // Function to register inputs with validation
  const register = (name: string) => ({
    name,
    required: true,
  });

  const onHandleFileButtonClick = () => {};
  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-center mb-4 text-black">
          Create a Volunteer Campaign
        </h1>
        <form className="max-w-xl mx-auto shadow p-4 bg-white rounded-lg">
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Campaign Title
            </label>
            <input
              id="title"
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register("title")}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register("description")}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="category"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Category
            </label>
            <select
              id="category"
              className="block appearance-none w-full bg-white border border-gray-300 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-gray-700"
              multiple
              {...register("category")}
            >
              {options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4 flex justify-between">
            <div className="w-full mr-2">
              <label
                htmlFor="startDate"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Start Time
              </label>
              <input
                id="startDate"
                type="datetime-local"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register("startDate")}
              />
            </div>
            <div className="w-full ml-2">
              <label
                htmlFor="endDate"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                End Time
              </label>
              <input
                id="endDate"
                type="datetime-local"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register("endDate")}
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="location"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Location
            </label>
            <input
              id="location"
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register("location")}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="image"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Upload Image(s)
            </label>
            <input
              type="file"
              id="image"
              style={{ display: "none" }}
              {...register("image")}
              multiple
              accept="image/*"
            />
            <label
              htmlFor="image"
              className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Choose Image
            </label>
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Create Campaign
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default CreatePage;
