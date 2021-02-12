import React from 'react';
import NewSodaForm from './NewSodaForm';
import SodaList from './SodaList';

class SodaControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterSodaList: []
    };
  }

  handleClick =() => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  };

  handleAddingNewSoda =(newSoda) => {
    const newMasterSodaList = this.state.masterSodaList.concat(newSoda);
    this.setState({
      masterSodaList: newMasterSodaList,
      formVisibleOnPage: false
    });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewSodaForm />;
      buttonText = "Return to Soda List";
    } else {
      currentlyVisibleState = <SodaList sodaList={this.state.masterSodaList} />;
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