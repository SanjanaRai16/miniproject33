import React, { useState } from 'react';

const PostShelter = () => {
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [capacity, setCapacity] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/shelter/add', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, location, capacity }),
            });
            const result = await response.json();
            console.log('Shelter added:', result);
        } catch (err) {
            console.error('Error adding shelter:', err);
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ padding: '20px' }}>
            <label>
                Shelter Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
                Location:
                <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
            </label>
            <label>
                Capacity:
                <input type="number" value={capacity} onChange={(e) => setCapacity(e.target.value)} />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default PostShelter;
