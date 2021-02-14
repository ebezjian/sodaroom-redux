import React from 'react';
import NewSodaForm from './NewSodaForm';
import SodaList from './SodaList';
import SodaDetail from './SodaDetail';
import EditSodaForm from './EditSodaForm';

class SodaControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterSodaList: [],
      selectedSoda: null,
      editing: false,
      buying: false,
    };
  }
  
  handleBuyingSelectedSoda = () => {
    const selectedSoda = this.state.selectedSoda;
    if (selectedSoda.quantity > 1) {
      const newSodaCount = Object.assign({}, selectedSoda, { quantity: selectedSoda.quantity -1});
      const newMasterSodaList = this.state.masterSodaList
      .filter(soda => soda.id !== this.state.selectedSoda.id)
      .concat(newSodaCount);
      this.setState({ 
        masterSodaList: newMasterSodaList,
        selectedSoda: null
      });
    } else if (selectedSoda.quantity === 1) {
      const newSodaCount = Object.assign({}, selectedSoda, { quantity: selectedSoda.quantity = 'Out of Stock' });
      const newMasterSodaList = this.state.masterSodaList
      .filter(soda => soda.id !== this.state.selectedSoda.id)
      .concat(newSodaCount);
      this.setState({ 
        masterSodaList: newMasterSodaList,
        selectedSoda: null
      });
    } 
  }

  handleClick = () => {
    if (this.state.selectedSoda != null) {
        this.setState({
          formVisibleOnPage: false,
          selectedSoda: null,
          editing: false,
        });
      } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  } 

  handleAddingNewSodaToList =(newSoda) => {
    console.log(newSoda)
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

  handleEditclick = () => {
    this.setState({editing: true});
  }

  handleEditingSodaInList = (sodaToEdit) => {
    const editedMasterSodaList = this.state.masterSodaList
      .filter(soda => soda.id !== this.state.selectedSoda.id)
      .concat(sodaToEdit);
    this.setState({
      masterSodaList: editedMasterSodaList,
      editing: false,
      selectedSoda: null
    });
  }


  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    console.log(this.state)
    if (this.state.editing) {
      currentlyVisibleState = <EditSodaForm 
      soda = {this.state.selectedSoda}
      onEditSoda = {this.handleEditingSodaInList} />
      buttonText = "Return to Soda List";

    } else if (this.state.selectedSoda != null) {
      currentlyVisibleState = <SodaDetail 
      soda ={this.state.selectedSoda} 
      onClickingDelete = {this.handleDeletingSoda}
      onBuying={this.handleBuyingSelectedSoda}
      onClickingEdit = {this.handleEditclick}/>;
      buttonText = "Return to Soda List";

    } else if (this.state.formVisibleOnPage) {
        currentlyVisibleState = <NewSodaForm 
        onNewSodaCreation={this.handleAddingNewSodaToList} />;
        buttonText = "Return to Soda List";

    } else {
      currentlyVisibleState = <SodaList 
      sodaList={this.state.masterSodaList} 
      onSodaSelection ={this.handleChangingSelectedSoda} />;
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