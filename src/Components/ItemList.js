import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchList } from '../actions/itemActions';
import ItemForm from './ItemForm';
import Item from './Item';

const initList = {
  name: '',
  description: '',
  deadline: null,
  is_private: true,
  created_by: '',
  comments: [],
  items: ''
};

const ItemList = (props) => {
  console.log(props, 'ItemList.js, line 11');
  // eslint-disable-next-line
  useEffect((props) => {
    props.fetchList()
  }, []);

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
    fetchLists: state.fetchLists,
    error: state.error
  }
};

export default connect(
  mapStateToProps,
  { fetchList }
)(ItemList);