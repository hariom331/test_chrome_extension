import React from 'react'

function Spinner(props) {
    return (
    <>
    <div className="spinner-border container " role="status">
    </div>
    <span className="sr-only"> Allow {props.device} permissions to proceed</span>
    </>
  )
}

export default Spinner