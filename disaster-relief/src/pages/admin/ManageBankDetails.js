import React, { useEffect, useState } from 'react';

const ManageBankDetails = () => {
    const [bankDetails, setBankDetails] = useState([]);

    useEffect(() => {
        const fetchBankDetails = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/bank');
                const data = await response.json();
                setBankDetails(data);
            } catch (err) {
                console.error('Error fetching bank details:', err);
            }
        };

        fetchBankDetails();
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <h2>Manage Bank Details</h2>
            <ul>
                {bankDetails.map((bank) => (
                    <li key={bank._id}>
                        {bank.bankName} - {bank.accountNumber} - {bank.ifscCode}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ManageBankDetails;
