import React from 'react';
import "./ReactGridLayout.css"
import { numberToWords } from '../Helper/helper';
import GridBoxContainer from './GridBoxContainer';

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
            return <GridBoxContainer id={numberToWords(index+1)} key ={index+1} text={numberToWords(index+1)}/>
         })  
        }
    </div>
  )
}

export default  ReactGridLayout
