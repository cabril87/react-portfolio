import React, { useState } from 'react'

const Readmore = ({children, maxCharacterCount = 100 }) => {
    
    const [isTruncated, setIsTruncate] = useState(true);
    
    const text = children;
    const resultString = isTruncated ? text.slice(0, maxCharacterCount) + "..." : text ;

    const toggleIsTruncated = () => {
        setIsTruncate(!isTruncated)
    }

    return (
        <div className="has-text-left" >
          {resultString }  
          <button style={{
            marginLeft: "5px",
            fontWeight: "900",
            outline: "none",
            whiteSpace: "initial"
        }}onClick={toggleIsTruncated} className="tag is-info is-small">
              {isTruncated ? "Read More" : "Read Less"}
          </button>
        </div>
    )
}

export default Readmore
