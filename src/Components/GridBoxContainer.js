import React, {useEffect, useRef } from 'react';

const  GridBoxContainer=(props)=> {
    const gridBoxRef = useRef(null);
    const {id,text}=props;

    useEffect(() => {
        const options = {
          threshold: 1
        };
    
        const callback = (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              console.log(`${id} WAS CALLED`);
              observer.unobserve(entry.target);
            }
          });
        };
    
        const observer = new IntersectionObserver(callback, options);
        if (gridBoxRef.current) {
          observer.observe(gridBoxRef.current);
        }
    
        return () => {
          if (gridBoxRef.current) {
            observer.unobserve(gridBoxRef.current);
          }
        };
      }, [id]);
  return (
    <div className="grid_column_layout" ref={gridBoxRef}>
     <div className='grid_number'> {text}</div>
    </div>
  )
}
export default  GridBoxContainer