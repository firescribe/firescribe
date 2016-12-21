import React from 'react';

function ContentContainer({ children }) {
    return (
        <div style={styles.container}>
            {children}
        </div>
    );
}

const styles = {
    container: {
        paddingLeft: 24,
        paddingRight: 24,
    },
};

export default ContentContainer;
