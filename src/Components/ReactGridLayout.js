import React from 'react';
import "./ReactGridLayout.css"
import { numberToWords } from '../Helper/helper';

const  ReactGridLayout=(props)=> {
    const {attributeValues}=props;
    const totalGrids = Array.from({ length: attributeValues.NumberOfBoxes }, (_, index) => index + 1);
    const containerStyle={
        gridTemplateColumns:`repeat(${attributeValues.NumberOfColumns},1fr)`
    }

  
      
  return (
    <div className='grid_column_container' style={containerStyle}>
        {
         totalGrids.map((ele,index)=>{
            return <div className='grid_column_layout' key ={index}>
                <div className='grid_number'>{numberToWords(index+1)}</div>
            </div>
          })  
        }
    </div>
  )
}

export default  ReactGridLayout
