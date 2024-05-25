"use client";
import React, { useState, useRef, useEffect } from "react";
import Layout from "../components/layout";
import DatePicker from "react-datepicker";
import { useLoadScript } from "@react-google-maps/api";

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

const CreatePage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const [address, setAddress] = useState("");

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    setSelectedOptions((prev: string[]) =>
      checked ? [...prev, value] : prev.filter((option) => option !== value)
    );
  };

  const removeSelectedOption = (option: string) => {
    setSelectedOptions((prev: string[]) =>
      prev.filter((selected) => selected !== option)
    );
  };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "YOUR_API_KEY",
    libraries: ["places"],
  });

  useEffect(() => {
    if (isLoaded && inputRef.current) {
      const autocomplete = new window.google.maps.places.Autocomplete(
        inputRef.current,
        {
          componentRestrictions: { country: "SG" }, // Restrict results to Singapore
        }
      );
      autocomplete.setFields([
        "address_components",
        "formatted_address",
        "name",
      ]);

      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        if (place.formatted_address) {
          // Combine the place name (if available) and the formatted address
          setAddress(
            `${place.name ? place.name + ", " : ""}${place.formatted_address}`
          );
        } else {
          // Handle the case where no address is returned
          setAddress("No address found.");
        }
      });
    }
  }, [isLoaded]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const onHandleFileButtonClick = () => {};

  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-center mb-4 text-black">
          Create a Volunteer Campaign
        </h1>
        <form className="max-w-xl mx-auto shadow p-4 bg-white rounded-lg">
          <div className="mb-4 relative">
            <label
              htmlFor="category-dropdown"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Category
            </label>
            <div
              onClick={toggleDropdown}
              id="category-dropdown"
              className="cursor-pointer block appearance-none w-full bg-white border border-gray-300 py-2 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-gray-700"
            >
              {selectedOptions.length === 0
                ? "Select Category"
                : selectedOptions.map((option) => (
                    <span
                      key={option}
                      className="inline-flex items-center bg-gray-200 rounded-full text-sm font-semibold text-gray-700 mr-2 px-2.5 py-0.5"
                    >
                      {option}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          removeSelectedOption(option);
                        }}
                        type="button"
                        className="ml-1.5 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
                      >
                        &times;
                      </button>
                    </span>
                  ))}
            </div>
            {isOpen && (
              <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded mt-1 max-h-60 overflow-y-auto">
                {options.map((option) => (
                  <li
                    key={option}
                    className="flex items-center p-2 hover:bg-gray-100"
                  >
                    <input
                      type="checkbox"
                      id={`checkbox-${option}`}
                      className="form-checkbox h-4 w-4 text-blue-600"
                      value={option}
                      checked={selectedOptions.includes(option)}
                      onChange={handleCheckboxChange}
                    />
                    <label
                      htmlFor={`checkbox-${option}`}
                      className="ml-2 text-sm text-gray-700"
                    >
                      {option}
                    </label>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="location"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Location
            </label>
            <input
              ref={inputRef}
              id="location"
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register("location")}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Title
            </label>
            <input
              id="title"
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register("title")}
            />
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
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              style={{ height: "100px" }}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register("description")}
            />
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
