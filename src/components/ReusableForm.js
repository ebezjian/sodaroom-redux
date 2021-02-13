import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props) {
  return(
    <>
      <form onSubmit={props.formSubmissionHandler}>
      <input
          type="text"
          name="name"
          placeholder="Name of Soda" />
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
        <button type="submit">{props.buttonText}</button>
      </form>
    </>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;