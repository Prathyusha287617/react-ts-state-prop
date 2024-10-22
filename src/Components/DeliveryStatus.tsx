import React from 'react';
 
interface DeliveryStatusProps {
  truckCount: number;
  inputValue: number;
  setInputValue: (value: number) => void;
  onTruckDeparture: () => void;
}
 
const DeliveryStatus: React.FC<DeliveryStatusProps> = ({ truckCount, inputValue, setInputValue, onTruckDeparture }) => {
  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(Number(e.target.value));
  };
 
  return (
    <div className="delivery-status">
      <h2>Delivery Status</h2>
      {truckCount > 0 && <p>Truck {truckCount} has left the warehouse.</p>}
 
      {/* Input field to enter the number of items to dispatch */}
      <label>
        Enter number of items :
        <input
          type="number"
          value={inputValue}
          onChange={handleInputChange}
          min={5}
          max={20}
        />
      </label>
 
      <button onClick={onTruckDeparture}>Dispatch Truck</button>
    </div>
  );
};
 
export default DeliveryStatus;
