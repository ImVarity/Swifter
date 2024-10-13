// Contacts.js
import React from "react"
import Link from 'next/link'
import { ContactList } from "./contact-list";

export default function Contacts () {
  const contacts = ContactList

  return (
    <div className="bg-white h-screen p-6">
      {/* Header */}
      <header className="flex justify-center items-center mb-8">
        <h1 className="text-5xl font-bold absolute left-3">
          <Link href="/">
            <button>
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img src="/leftArrow.jpg" alt="Profile" className="w-full h-full" />
              </div>
            </button>
          </Link>
        </h1>
        <h1 className="text-2xl font-bold justify-center">CONTACTS</h1>
        <button>
          {/* Add a search or edit icon here */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8c1.104 0 2-.895 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zM6 6h1v7H6z" />
          </svg>
        </button>
      </header>

      {/* Contacts List */}
      <div className="mb-8">
        <p className="text-lg font-bold">4 CONTACTS</p>
        {contacts.map((contact, index) => (
          <div key={index} className="flex items-center justify-between p-4 bg-gray-100 rounded-lg mt-4">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
              <div>
                <p className="font-bold">{contact.name}</p>
                <p>{contact.phone.substring(0,3) + " " + contact.phone.substring(3,7) + " " + contact.phone.substring(7,10)}</p>
              </div>
            </div>
            <button>
              {/* Edit icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20h9" />
              </svg>
            </button>
          </div>
        ))}
      </div>

      {/* Add Contact Button */}
      <div className="text-center">
        <button className="bg-gray-200 py-2 px-4 rounded-md font-bold">ADD CONTACT</button>
      </div>

      {/* New Contact Form */}
      <div className="mt-8 flex items-center justify-between p-4 bg-gray-100 rounded-lg">
        <div className="w-12 h-12 rounded-full bg-gray-300"></div>
        <input type="text" placeholder="First Name" className="bg-gray-100 border-b-2 p-2 mr-2" />
        <input type="text" placeholder="Last Name" className="bg-gray-100 border-b-2 p-2 mr-2" />
        <input type="tel" placeholder="(XXX) - XXX - XXXX" className="bg-gray-100 border-b-2 p-2" />
      </div>
    </div>
  );
};