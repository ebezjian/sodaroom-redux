import React from 'react';
import NewSodaForm from './NewSodaForm';
import SodaList from './SodaList';

class SodaControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
  }

  handleClick =() => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  };

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewSodaForm />;
      buttonText = "Return to Soda List";
    } else {
      currentlyVisibleState = <SodaList />;
      buttonText = "Add Soda"
    }
    return (
      <>
      {currentlyVisibleState}
      <button onClick={this.handleClick}>{buttonText}</button>
      </>
    );
  }

}

export default SodaControl;