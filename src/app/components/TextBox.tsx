"use client";
import { fetchLlama } from "@/bedrock/fetch";
import { getLLM } from "@/bedrock/main";
import { randomContacts, randomProfile } from "@/profiles/main";
import { getLocation } from "@/tmobile/main";
import React, { useEffect, useState } from "react";

const TextBox = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [response, setResponse] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [profile, setProfile] = useState<{
    latitude: string;
    longitude: string;
  } | null>(null);

  const [contacts, setContacts] = useState<string[] | null>(null);

  const [location, setLocation] = useState<string>("");

  // Fetch profile and contacts when the component mounts or after profile is updated
  useEffect(() => {
    if (profile) {
      fetchData(inputValue);
    }
  }, [profile]);

  const fetchData = async (prompt: string) => {
    if (!profile || !contacts) return; // Ensure both profile and contacts are set
    setLoading(true);


    const data = await fetchLlama({prompt, profile});


    setLocation(data.located);

    // Update the response
    setResponse(data.generatedText);
    setLoading(false);
    setInputValue(""); // Clear the input field after submission
    console.log(response)
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // First, get the profile and contacts
    const newProfile = randomProfile();
    setProfile(newProfile);

    const newContacts = randomContacts(5);
    setContacts(newContacts);


  };

  return (
    <div className="flex justify-center items-center flex-col">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
        <label htmlFor="textbox" className="font-medium text-gray-700">
          Your Input
        </label>
        <input
          id="textbox"
          type="text"
          placeholder="Type here..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} // Update the state with input value
          className="border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-400 focus:border-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white font-semibold rounded-md shadow-sm p-2 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50"
        >
          Submit
        </button>
      </form>
      <div className="flex max-w-fit">
        {loading ? (
          <p className="mt-2 text-blue-500">Loading...</p>
        ) : (
          <pre className="mt-2 text-gray-800">{response}</pre>
        )}
      </div>
      <div>
        {loading ? (
          <p className="mt-2 text-blue-500">Loading...</p>
        ) : (
          <p className="mt-2 text-gray-800">{location}</p>
        )}
      </div>
      <div>
        {loading ? (
          <p className="mt-2 text-blue-500">Loading...</p>
        ) : (
          <div className="flex justify-center flex-col">
            <ul>
              {contacts?.map((contact) => (
                <li key={contact}>
                  Contacting {contact}...
                </li>
              ))}

            </ul>

            {/* // <p className="mt-2 text-gray-800">{contacts}</p> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default TextBox;
