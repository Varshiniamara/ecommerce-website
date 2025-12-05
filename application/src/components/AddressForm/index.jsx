export const AddressForm = ({ address, setAddress }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setAddress((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Delivery Address</h3>
            <form className="flex flex-col gap-4">
                <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-700">Full Name</label>
                    <input
                        type="text"
                        name="name"
                        value={address.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                </div>

                <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-700">Mobile Number</label>
                    <input
                        type="tel"
                        name="mobile"
                        value={address.mobile}
                        onChange={handleChange}
                        placeholder="9876543210"
                        className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                </div>

                <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-700">Street Address</label>
                    <textarea
                        name="street"
                        value={address.street}
                        onChange={handleChange}
                        placeholder="123 Main St, Apt 4B"
                        rows="2"
                        className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                </div>

                <div className="flex gap-4">
                    <div className="flex flex-col w-1/2">
                        <label className="text-sm font-medium text-gray-700">City</label>
                        <input
                            type="text"
                            name="city"
                            value={address.city}
                            onChange={handleChange}
                            placeholder="Mumbai"
                            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>
                    <div className="flex flex-col w-1/2">
                        <label className="text-sm font-medium text-gray-700">Zip Code</label>
                        <input
                            type="text"
                            name="zip"
                            value={address.zip}
                            onChange={handleChange}
                            placeholder="400001"
                            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>
                </div>

                <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-700">State</label>
                    <input
                        type="text"
                        name="state"
                        value={address.state}
                        onChange={handleChange}
                        placeholder="Maharashtra"
                        className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                </div>
            </form>
        </div>
    );
};
