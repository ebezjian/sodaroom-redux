import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm'

function NewSodaForm(props) {

  function handleNewSodaFormSubmission(event) {
    event.preventDefault();
    props.onNewSodaCreation({
      
      name: event.target.name.value,
      brand: event.target.brand.value,
      price: event.target.price.value,
      flavor: event.target.flavor.value,
      id: v4()});
  }
  return (
    <>
    <ReusableForm
      formSubmissionHandler={handleNewSodaFormSubmission}
      buttonText="Add new Soda" />
    </>
  );
}

NewSodaForm.propTypes = {
  onNewSodaCreation: PropTypes.func
};

export default NewSodaForm;