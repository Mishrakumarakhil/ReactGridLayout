import React from 'react';
import "./ReactGridLayout.css"

const  ReactGridLayout=(props)=> {
    const {attributeValues}=props;
    const totalGrids = Array.from({ length: attributeValues.NumberOfBoxes }, (_, index) => index + 1);
    console.log(attributeValues)
    const containerStyle={
        gridTemplateColumns:`repeat(${attributeValues.NumberOfColumns},1fr)`
    }
  return (
    <div className='grid_column_container' style={containerStyle}>
        {
         totalGrids.map((ele,index)=>{
            return <div className='grid_column_layout' key ={index}>
                {index+1}
            </div>
          })  
        }
    </div>
  )
}

export default  ReactGridLayout
