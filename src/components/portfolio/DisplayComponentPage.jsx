import React from 'react';
import DisplayComponent from './DisplayComponent';

const DisplayComponentPage = ({ selectedItemData, setSelectedItemData }) => {
  
  const handleClose = () => setSelectedItemData(null);

  return (
    <div className="displaySection" id="popDiv">
      {selectedItemData && (
        <DisplayComponent data={selectedItemData} onClose={handleClose} />
      )}
    </div>
  );
};

export default DisplayComponentPage;
