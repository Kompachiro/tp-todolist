import React from "react";

export default function Count(){
    const [count, setCount] = React.useState(0);

    return(
        <button className="count-btn"
                onClick={()=> setCount(count + 1)}>
            Clique aussi: {count}

        </button>
    )
}   