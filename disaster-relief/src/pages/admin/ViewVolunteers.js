import React from 'react';

const ViewVolunteers = () => {
    return (
        <div style={styles.container}>
            <h2 style={styles.header}>View Volunteers</h2>
            <p>Here you can view all the volunteers and their details.</p>
            {/* Display volunteer data here */}
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
    },
    header: {
        textAlign: 'center',
        marginBottom: '20px',
    },
};

export default ViewVolunteers;
