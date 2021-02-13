import React from 'react';
import PropTypes from 'prop-types';
import * as $ from 'jquery';

function SodaDetail(props) {
  const { soda, onClickingDelete } = props;
  function checkquantity (num) {
    if(num > 0 $$ num <124){
      return(
        <>
          <input type="number" name="restock" id="restock"/>
          <buton onClick={()=>props.onRestocking(soda.id, parseInt("#restock").val()))}>Restock</button>
          <button onClick={()=>props.onBuying(soda.id)}>Buy Soda</button>
        </>
      )
    }else if(num > 0) {
      return <button onClick={()=>props.onBuying(soda.id)}>Buy Soda</button>
    } else if (num < 124) {
      return(
        <>
          <input type="number" name="restock" id="restock"/>
          <button onClick={()=>props.onRestocking(soda.id, parseInt($("#restock").val()))}>Restock</button>
        </>
      );
    }
  }
  const stockElements = checkquantity(soda.quantity);
  return (
    <>
    <h1>Soda Detail</h1>
    <h3>{soda.name} by {soda.brand}</h3>
    <h3>${soda.price} Per Pint </h3>
    <h3>{soda.quantity}</h3>
    <h3> {soda.flavor}</h3> 
    {stockElements}
    <button onClick={ props.onClickingEdit }>Edit Soda</button>
    <button onClick={()=> onClickingDelete(soda.id) }>Close out of Soda Detail</button>
    </>
  );
}

SodaDetail.propTypes = {
  soda: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
};

export default SodaDetail;