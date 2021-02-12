import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditSodaForm (props) {
  const { soda } = props;

  function handleEditSodaFormSubmission(event) {
    event.preventDefault();
    props.onEditSoda({
      name: event.target.name.value,
      brand: event.target.brand.value,
      price: event.target.price.value,
      flavor: event.target.flavor.value,
      id: soda.id,
    });
  }
  return (
    <>
    <ReusableForm
    formSubmissionHandler={handleEditSodaFormSubmission}
      buttonText="Edit Soda" />
    </>
  );
}

EditSodaForm.propTypes = {
  soda: PropTypes.object,
  onEditSoda: PropTypes.func,
};

export default EditSodaForm;