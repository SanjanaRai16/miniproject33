import React, { useState } from 'react';

const AddBankDetails = () => {
    const [bankName, setBankName] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [ifscCode, setIfscCode] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/bank/add', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ bankName, accountNumber, ifscCode }),
            });
            const result = await response.json();
            console.log('Bank details added:', result);
        } catch (err) {
            console.error('Error adding bank details:', err);
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ padding: '20px' }}>
            <label>
                Bank Name:
                <input type="text" value={bankName} onChange={(e) => setBankName(e.target.value)} />
            </label>
            <label>
                Account Number:
                <input type="text" value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} />
            </label>
            <label>
                IFSC Code:
                <input type="text" value={ifscCode} onChange={(e) => setIfscCode(e.target.value)} />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default AddBankDetails;
