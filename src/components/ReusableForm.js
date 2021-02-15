import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap';

function ReusableForm(props) {
  return(
    <>
      <form onSubmit={props.formSubmissionHandler}>
      <div class="form-floating mb-3">
        <input
            type="text"
            class="form-control"
            id="floatingInput"
            name="name"                     
            placeholder="Name of Soda"/>  
        
      </div>
      
          <input
            type="text"
            name="brand"
            placeholder="Brand of Soda" />
          <input
            type="number"
            name="price"
            placeholder="Price of Soda" />
          <input
            type="text"
            name="flavor"
            placeholder="Flavor of Soda" />
          <Button   variant="outline-secondary" type="submit">{props.buttonText}</Button>
      
      </form>
    </>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;