import React from 'react';
import { v4 } from 'uuid';

function NewSodaForm(props) {
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

export default NewSodaForm;