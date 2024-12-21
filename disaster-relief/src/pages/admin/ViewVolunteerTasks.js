import React from 'react';

const ViewVolunteerTasks = () => {
    return (
        <div style={styles.container}>
            <h2 style={styles.header}>View Volunteer Tasks</h2>
            <p>Here you can view all tasks assigned to volunteers.</p>
            {/* Display volunteer tasks here */}
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

export default ViewVolunteerTasks;
