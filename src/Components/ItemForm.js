import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';

function ItemForm(props) {
  const [item, setItem] = useState(
    {
      name: '',
      description: '',
      deadline: null,
      comments: []
    }
  )

  const handleInputChange = event => {
    setItem({
      ...item,
      [event.target.name]: event.target.value
    });
  };

  const handleAddItem = event => {
    event.preventDefault();
    props.addItem(item);
    setItem({
      name: '',
      description: '',
      deadline: '',
      comments: []
    });
  };


  return (
    <form className="add-item-form" onSubmit={handleAddItem}>
      <h3>Add new Item</h3>
      <input
        className="input"
        value={item.name}
        name="name"
        type="text"
        placeholder="Name"
        onChange={handleInputChange}
      />
      <input
        className="input"
        value={item.description}
        name="dexcription"
        type="text"
        placeholder="description"
        onChange={handleInputChange}
      />
      <input
        className="input"
        value={item.deadline}
        name="deadline"
        type="text"
        placeholder="deadline"
        onChange={handleInputChange}
      />
      <button type="submit">
        Add New Item
      </button>
    </form>
  );
};

const mapStateToProps = state => {
  return {
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { addItem }
)(ItemForm);