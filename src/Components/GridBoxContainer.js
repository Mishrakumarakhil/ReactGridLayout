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

        const currentRef = gridBoxRef.current; 

        if (currentRef) {
          observer.observe(currentRef);
        }
    
        return () => {
          if (currentRef) {
            observer.unobserve(currentRef);
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