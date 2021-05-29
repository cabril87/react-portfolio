import { useState, useEffect } from 'react'


const actionByKey = (key) => {
    const keys = {
        ArrowUp: 'moveForward',
        ArrowDown: 'moveBackward',
        ArrowLeft: 'moveLeft',
        ArrowRight: 'moveRight',
        Space: 'jump',
    };
    return keys[key]
}


export const useKeyboardControls = () => {
    const [movement, setMovement] = useState({
      moveForward: false,
      moveBackward: false,
      moveLeft: false,
      moveRight: false,
      jump: false,
    });
    
  
    useEffect(() => {
      const handleKeyDown = (e) => {
        // Movement key
        if (actionByKey(e.code)) {
          setMovement((state) => ({
            ...state,
            [actionByKey(e.code)]: true,
          }));
        }
        // Change texture key
        
      };
      const handleKeyUp = (e) => {
        if (actionByKey(e.code)) {
          setMovement((state) => ({
            ...state,
            [actionByKey(e.code)]: false,
          }));
        }
      };
  
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('keyup', handleKeyUp);
  
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('keyup', handleKeyUp);
      };
    });
  
    return movement;
  };