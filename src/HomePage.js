// HomePage.js
import React from 'react';
import './App.css'; // Import the CSS file with styles

const HomePage = ({ username }) => {
  // Dummy data for demonstration
  const data = [
    {
      month: 'January',
      year: 2024,
      fromDate: '2024-01-01',
      toDate: '2024-01-31',
      feeAmount: 100,
      lateFee: 10,
      totalFee: 110,
      paid: 'Yes',
      receiptUrl: 'http://example.com/receipt1',
    },
    // Add more data as needed
  ];

  return (
    <div className="home-container">
      <h2>Welcome, {username}!</h2>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Month</th>
              <th>Year</th>
              <th>From Date</th>
              <th>To Date</th>
              <th>Fee Amount</th>
              <th>Late Fee</th>
              <th>Total Fee</th>
              <th>Paid</th>
              <th>Receipt</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.month}</td>
                <td>{item.year}</td>
                <td>{item.fromDate}</td>
                <td>{item.toDate}</td>
                <td>{item.feeAmount}</td>
                <td>{item.lateFee}</td>
                <td>{item.totalFee}</td>
                <td>{item.paid}</td>
                <td>
                  <a href={item.receiptUrl} target="_blank" rel="noopener noreferrer">
                    Receipt
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HomePage;
