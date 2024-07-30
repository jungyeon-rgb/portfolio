import React from "react"

const NewLineText = ({ text }) => (
    <div>
        {text.split("\n").map((line, index) => (
            <React.Fragment key={index}>
                {line}
                <br />
            </React.Fragment>
        ))}
    </div>
)

export default NewLineText
