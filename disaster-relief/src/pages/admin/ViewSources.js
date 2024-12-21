import React from 'react';

const ViewSources = () => {
    return (
        <div style={styles.container}>
            <h2 style={styles.header}>View Sources</h2>
            <p>Here you can view all the sources related to disaster relief.</p>
            {/* Display sources data here */}
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

export default ViewSources;
