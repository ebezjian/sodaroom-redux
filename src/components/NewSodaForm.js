import React from 'react';
import { v4 } from 'uuid';

function NewSodaForm(props) {
  function handleNewSodaformSubmission(event) {
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
    <form onSubmit={handleNewSodaformSubmission}>
      <input
        type="text"
        name="name"
        placeholder="Name of Soda" />
      <input
        type="text"
        name="brand"
        placeholder="Brand of Soda" />
      <input
        type="text"
        name="price"
        placeholder="Price of Soda" />
      <input
        type="text"
        name="flavor"
        placeholder="Flavor of Soda" />
      <button type="submit">New Soda</button>
    </form>
    </>
  );
}

NewSodaForm.propTypes = {
  onNewSodaCreation: PropTypes.func
};

export default NewSodaForm;