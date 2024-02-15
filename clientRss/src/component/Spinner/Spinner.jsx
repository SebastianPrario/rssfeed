import React from 'react';


// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component


/**
 * 
 */
const Spinner = () => {
    return (
    <div className='bg-danger'>
       
        <button className="btn btn-primary" type="button" disabled>
        <span className="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
        <span role="status">Loading...</span>
    </button>
    </div>)
}

// #endregion

export default Spinner;