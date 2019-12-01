import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchLists } from '../actions/itemActions';
import ItemForm from './ItemForm';
import Item from './Item';

const ItemList = (props) => {
  useEffect((props) => {
    props.fetchLists()
  }, []);
  console.log(props, 'ItemList.js, line 11');

  return (
    <div className="items">
      {props.item && props.item.map(item => <Item key={item.id} item={item} />)}
      <ItemForm />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    item: state.item,
    fetchItem: state.fetchItem,
    error: state.error
  }
};

export default connect(
  mapStateToProps,
  { fetchLists }
)(ItemList);