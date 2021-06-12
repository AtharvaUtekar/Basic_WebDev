import React, { useState } from "react";

const Clock = () => {
    const time = new Date().toLocaleTimeString();
    
    const [ctime, setCtime] = useState(time);

    const UpdateTime = () => {
        const time = new Date().toLocaleTimeString();
        setCtime(time);
    };

    setInterval(UpdateTime, 1000);

    return(
        <div className="page-clock">
            <h1
            readOnly
             // necessary
                    style={{
                        borderRadius: '100px',
                        boxShadow: '0 1.5rem 2rem rgba(156, 136, 255, 0.2)',
                        fontSize: '2rem',
                        color: '#9c88ff',
      }}> {ctime}  </h1>
        </div>
    );
}

export default Clock;
