import Link from 'next/link'


export default function ProfilePage() {
    return (
        <div>

            {/* Name: Mary-Anne Lazarte, Phone number: 425-123-4567, Sex: Female, Date of Birth: 1-1-1990, Blood Type: O, Allergies: Eggs */}


            {/* Header */}
            <header className="flex justify-center items-center mb-8 pt-4">
                <h1 className="text-5xl font-bold absolute left-3">
                    <Link href="/">
                        <button>
                            <div className="w-12 h-12 rounded-full overflow-hidden">
                                <img src="/leftArrow.jpg" alt="Profile" className="w-full h-full" />
                            </div>
                        </button>
                    </Link>
                </h1>
                <h1 className="text-2xl font-bold justify-center">PROFILE</h1>
                <button>
                {/* Add a search or edit icon here */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8c1.104 0 2-.895 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zM6 6h1v7H6z" />
                </svg>
                </button>
            </header>
            
            <div className="flex flex-col items-center p-6 bg-gray-200 min-h-screen">

                {/* Profile Picture Section */}
                <div className="relative w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center">
                    <span className="text-4xl font-bold text-gray-700">ML</span>
                </div>

                {/* Form Section */}
                <div className="w-full max-w-xs mt-6 bg-white shadow-md rounded-lg p-4">
                    {/* Name Fields */}
                    <div className="flex items-center justify-between space-x-4">
                        <div className="w-full">
                            <label className="block text-gray-700 font-bold mb-2">First Name:</label>
                            <input 
                                type="text" 
                                value="Mary-Anne" 
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                            />
                        </div>
                        <div className="w-full">
                            <label className="block text-gray-700 font-bold mb-2">Last Name:</label>
                            <input 
                                type="text" 
                                value="Lazarte" 
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                            />
                        </div>
                    </div>

                    {/* Phone Number */}
                    <div className="mt-4">
                        <label className="block text-gray-700 font-bold mb-2">Phone Number:</label>
                        <input 
                            type="text" 
                            value="(425) - 123 - 4567" 
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        />
                    </div>

                    {/* Sex */}
                    <div className="mt-4">
                        <label className="block text-gray-700 font-bold mb-2">Sex:</label>
                        <input 
                            type="text" 
                            value="Female" 
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        />
                    </div>

                    {/* Birth Date */}
                    <div className="mt-4">
                        <label className="block text-gray-700 font-bold mb-2">Date of Birth:</label>
                        <input 
                            type="text" 
                            value="1-1-1990" 
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        />
                    </div>

                    {/* Blood Type */}
                    <div className="mt-4">
                        <label className="block text-gray-700 font-bold mb-2">Blood Type:</label>
                        <input 
                            type="text" 
                            value="O" 
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        />
                    </div>

                    {/* Allergies */}
                    <div className="mt-4">
                        <label className="block text-gray-700 font-bold mb-2">Allergies:</label>
                        <input 
                            type="text" 
                            value="Eggs" 
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        />
                    </div>
                </div>

                {/* Placeholder for Additional Information */}
                <div className="w-full max-w-xs mt-6 bg-white shadow-md rounded-lg p-4">
                    <div className="w-full h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                        <span className="text-2xl text-gray-600">Additional Info</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
