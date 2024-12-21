import React from 'react';

const UpdateShelter = () => {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f4f4f9',
        padding: '20px',
    };

    const formStyle = {
        backgroundColor: '#fff',
        padding: '30px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '500px',
    };

    const labelStyle = {
        marginBottom: '10px',
        fontWeight: 'bold',
        fontSize: '16px',
        color: '#333',
    };

    const inputStyle = {
        width: '100%',
        padding: '10px',
        marginBottom: '15px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        fontSize: '14px',
        color: '#333',
    };

    const buttonStyle = {
        padding: '12px 20px',
        backgroundColor: '#4CAF50',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
        width: '100%',
        transition: 'background-color 0.3s',
    };

    const buttonHoverStyle = {
        backgroundColor: '#45a049',
    };

    return (
        <div style={containerStyle}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Update Shelter</h2>
            <form style={formStyle}>
                <div>
                    <label style={labelStyle}>Shelter Name:</label>
                    <input type="text" placeholder="Enter shelter name" style={inputStyle} />
                </div>
                <div>
                    <label style={labelStyle}>Location:</label>
                    <input type="text" placeholder="Enter new shelter location" style={inputStyle} />
                </div>
                <div>
                    <label style={labelStyle}>Capacity:</label>
                    <input type="number" placeholder="Enter new shelter capacity" style={inputStyle} />
                </div>
                <button
                    type="submit"
                    style={buttonStyle}
                    onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
                    onMouseOut={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
                >
                    Update
                </button>
            </form>
        </div>
    );
};

export default UpdateShelter;
