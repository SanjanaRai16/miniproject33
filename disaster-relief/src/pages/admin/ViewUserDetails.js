import React from 'react';

const ViewUserDetails = () => {
    return (
        <div style={styles.container}>
            <h2 style={styles.header}>View User Details</h2>
            <p>Here you can view the details of users registered in the system.</p>
            {/* Display user details data here */}
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

export default ViewUserDetails;
