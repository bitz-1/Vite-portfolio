import React from 'react'
import DisplayComponent from './DisplayComponent'
const DisplayComponentPage = ({selectedItemData}) => {
  return (
    <div className="displaySection" id="popDiv">
    {selectedItemData && <DisplayComponent data={selectedItemData} />}
    
</div>

  )
}

export default DisplayComponentPage;