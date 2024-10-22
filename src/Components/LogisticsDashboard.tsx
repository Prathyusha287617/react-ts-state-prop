import React, { useState } from 'react';
import '../App.css';
import WarehouseInventory from './WarehouseInventory';
import DeliveryStatus from './DeliveryStatus';
 
const LogisticsDashboard: React.FC = () => {
  const [warehouseItems, setWarehouseItems] = useState<number>(100);  // Initial item count
  const [truckCount, setTruckCount] = useState<number>(0);  // Initial truck dispatch count
  const [inputValue, setInputValue] = useState<number>(5);  // Default input value
  const minItemsLeft = 20;  // Minimum number of items to stop dispatching trucks
 
  // Function to handle truck departure
  const handleTruckDeparture = () => {
    if (warehouseItems > minItemsLeft) {
      const inputItems = Number(inputValue);
 
      // Ensure the input value is between 5 and 20
      if (inputItems >= 5 && inputItems <= 20) {
        const updatedItems = warehouseItems - inputItems;
 
        // Update warehouse items and truck count
        setWarehouseItems(Math.max(updatedItems, minItemsLeft));  // Ensure item count doesn't go below 20
        setTruckCount(truckCount + 1);  // Increment truck count
      } else {
        alert('Please enter a value between 5 and 20.');
      }
    }
  };
 
  return (
    <div className="dashboard">
      <h1>Logistics Dashboard</h1>
      <div className="dashboard-content">
        <WarehouseInventory itemCount={warehouseItems} />
        <DeliveryStatus
          truckCount={truckCount}
          inputValue={inputValue}
          setInputValue={setInputValue}
          onTruckDeparture={handleTruckDeparture}
        />
      </div>
      {warehouseItems <= minItemsLeft && (
        <p>Item count is now at the minimum threshold (20 items left).</p>
      )}
    </div>
  );
};
 
export default LogisticsDashboard;