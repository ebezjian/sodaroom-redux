import React from 'react';
import NewSodaForm from './NewSodaForm';
import SodaList from './SodaList';
import SodaDetail from './SodaDetail';
import EditSodaForm from './EditSodaForm';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from './../actions';

class SodaControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,      
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
          selectedSoda: null,
          editing: false,
        });
      } else {
        const {dispatch} =this.props;
        const action = a.toggleForm();
        dispatch(action);
      }
  } 

  handleAddingNewSodaToList =(newSoda) => {
    const { dispatch } = this.props;
    const action = a.addSoda(newSoda);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  handleChangingSelectedSoda = (id) => {
    const selectedSoda = this.props.masterSodaList[id];
    this.setState({selectedSoda: selectedSoda});
  }

  handleDeletingSoda = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_SODA',
      id: id,
    }
    dispatch(action);
    this.setState({selectedSoda: null});
  }

  handleEditclick = () => {
    this.setState({editing: true});
  }

  handleEditingSodaInList = (sodaToEdit) => {
    const {dispatch} = this.props;
    const action = a.addSoda(sodaToEdit);
    dispatch(action);
    this.setState({
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

    } else if (this.props.formVisibleOnPage) {
        currentlyVisibleState = <NewSodaForm 
        onNewSodaCreation={this.handleAddingNewSodaToList} />;
        buttonText = "Return to Soda List";

    } else {
      currentlyVisibleState = <SodaList 
      sodaList={this.props.masterSodaList} 
      onSodaSelection ={this.handleChangingSelectedSoda} />;
      buttonText = "Add Soda"
    }

    return (
      <>
      {currentlyVisibleState}
      <Button  variant="outline-secondary" onClick={this.handleClick}>{buttonText}</Button>
      </>
    );
  }
  
}

SodaControl.propTypes = {
  masterSodaList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool,
};

const mapStateToProps = state => {
  return {
    masterSodaList: state.masterSodaList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}
SodaControl = connect(mapStateToProps)(SodaControl);
export default SodaControl;