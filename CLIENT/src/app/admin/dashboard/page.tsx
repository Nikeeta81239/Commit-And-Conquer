import React from 'react';

const Dashboard = () => {
  return (
    <div style={styles.dashboardContainer}>
      <h1 style={styles.title}>Dashboard</h1>
      <div style={styles.cardContainer}>
        <div style={styles.card}>
          <h2>Card 1</h2>
          <p>This is some information about Card 1.</p>
        </div>
        <div style={styles.card}>
          <h2>Card 2</h2>
          <p>This is some information about Card 2.</p>
        </div>
        <div style={styles.card}>
          <h2>Card 3</h2>
          <p>This is some information about Card 3.</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  dashboardContainer: {
    padding: '20px',
    backgroundColor: '#f4f4f4',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  card: {
    backgroundColor: '#fff',
    padding: '15px',
    borderRadius: '5px',
    boxShadow: '0 1px 5px rgba(0, 0, 0, 0.1)',
    width: '30%',
    textAlign: 'center',
  },
};

export default Dashboard;
