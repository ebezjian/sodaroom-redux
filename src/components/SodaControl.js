import React from 'react';
import NewSodaForm from './NewSodaForm';
import SodaList from './SodaList';
import SodaDetail from './SodaDetail';

class SodaControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterSodaList: [],
      selectedSoda: null
    };
  }

  handleClick = () => {
    if (this.state.selectedSoda != null) {
        this.setState({
          formVisibleOnPage: false,
          selectedSoda: null
        });
      } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  } 

  handleAddingNewSodaToList =(newSoda) => {
    const newMasterSodaList = this.state.masterSodaList.concat(newSoda);
    this.setState({
      masterSodaList: newMasterSodaList,
      formVisibleOnPage: false
    });
  }

  handleChangingSelectedSoda = (id) => {
    const selectedSoda = this.state.masterSodaList.filter(soda => soda.id === id)[0];
    this.setState({selectedSoda: selectedSoda});
  }

  handleDeletingSoda = (id) => {
    const newMasterSodaList = this.state.masterSodaList.filter(soda => soda.id !== id);
    this.setState({
      masterSodaList: newMasterSodaList,
      selectedSoda: null
    });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedSoda != null) {
      currentlyVisibleState = <SodaDetail soda ={this.state.selectedSoda} onClickingDelete = {this.handleDeletingSoda}/>;
      buttonText = "Return to Soda List";
    } else if (this.state.formVisibleOnPage) {
        currentlyVisibleState = <NewSodaForm onNewSodaCreation={this.handleAddingNewSodaToList} />;
        buttonText = "Return to Soda List";
    } else {
      currentlyVisibleState = <SodaList sodaList={this.state.masterSodaList} onSodaSelection ={this.handleChangingSelectedSoda} />;
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