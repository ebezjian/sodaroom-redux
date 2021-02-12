import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditSodaForm (props) {
  return (
    <>
    <ReusableForm
      buttonText="Edit Soda" />
    </>
  );
}

EditSodaForm.propTypes = {
  soda: PropTypes.object,
  onEditSoda: PropTypes.func,
};

export default EditSodaForm;