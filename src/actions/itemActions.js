import axiosWithAuth from '../utils/axiosWithAuth';

export const SET_LOADING = 'SET_LOADING';
export const FETCH_LISTS_START = 'FETCH_LISTS_START';
export const FETCH_LISTS_SUCCESS = 'FETCH_LISTS_SUCCESS';
export const FETCH_LISTS_FAIL = 'FETCH_LISTS_FAIL';
export const ADD_LIST_START = 'ADD_LIST_START';
export const ADD_LIST_SUCCESS = 'ADD_LIST_SUCCESS';
export const ADD_LIST_FAIL = 'ADD_LIST_FAIL';
export const UPDATE_LIST_START = 'UPDATE_LIST_START';
export const UPDATE_LIST_SUCCESS = 'UPDATE_LIST_SUCCESS';
export const UPDATE_LIST_FAIL = 'UPDATE_LIST_FAIL';
export const FETCH_LIST_START = 'FETCH_LIST_START';
export const FETCH_LIST_SUCCESS = 'FETCH_LIST_SUCCESS';
export const FETCH_LIST_FAIL = 'FETCH_LIST_FAIL';
export const DELETE_LIST_START = 'DELETE_LIST_START';
export const DELETE_LIST_SUCCESS = 'DELETE_LIST_SUCCESS';
export const DELETE_LIST_FAIL = 'DELETE_LIST_FAIL';
export const ADD_ITEM_START = 'ADD_ITEM_START';
export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS';
export const ADD_ITEM_FAIL = 'ADD_ITEM_FAIL';
export const DELETE_ITEM_START = 'DELETE_ITEM_START';
export const DELETE_ITEM_SUCCESS = 'DELETE_ITEM_SUCCESS';
export const DELETE_ITEM_FAIL = 'DELETE_ITEM_FAIL';
export const UPDATE_ITEM_START = 'UPDATE_ITEM_START';
export const UPDATE_ITEM_SUCCESS = 'UPDATE_ITEM_SUCCESS';
export const UPDATE_ITEM_FAIL = 'UPDATE_ITEM_FAIL';
export const ADD_COMMENT_START = 'ADD_COMMENT_START';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAIL = 'ADD_COMMENT_FAIL';
export const DELETE_COMMENT_START = 'DELETE_COMMENT_START';
export const DELETE_COMMENT_SUCCESS = 'DELETE_COMMENT_SUCCESS';
export const DELETE_COMMENT_FAIL = 'DELETE_COMMENT_FAIL';
export const UPDATE_COMMENT_START = 'UPDATE_COMMENT_START';
export const UPDATE_COMMENT_SUCCESS = 'UPDATE_COMMENT_SUCCESS';
export const UPDATE_COMMENT_FAIL = 'UPDATE_COMMENT_FAIL';
export const ERROR = 'ERROR';
export const SET_CURRENT_ITEM = 'SET_CURRENT_ITEM';
export const CLEAR_CURRENT_ITEM = 'CLEAR_CURRENT_ITEM';

//GET all lists
export const fetchLists = () => dispatch => {
  dispatch({ type: FETCH_LISTS_START })
  axiosWithAuth
    .get('/lists')
    .then(response => {
      dispatch({
        type: FETCH_LISTS_SUCCESS,
        payload: response.data
      })
    })
    .catch(error => {
      console.log(error.response.error, 'actions/index.js, line 29, error fetching lists');
      alert('There was an error retrieving your list. Please try again.');
      dispatch({
        type: FETCH_LISTS_FAIL,
        payload: error.response.error
      })
    })
};

// GET list by id
export const fetchList = selectedList => dispatch => {
  dispatch({ type: FETCH_LIST_START })
  axiosWithAuth
    .get(`/lists/${selectedList.id}`, selectedList)
    .then(response => {
      dispatch({
        type: FETCH_LIST_SUCCESS,
        payload: response.data
      })
    })
    .catch(error => {
      console.log(error.response.error, 'actions/index.js, line 29, error fetching lists');
      alert('There was an error retrieving your list. Please try again.');
      dispatch({
        type: FETCH_LIST_FAIL,
        payload: error.response.error
      })
    })
};

// POST new list
export const addList = newList => dispatch => {
  dispatch({ type: ADD_LIST_START })
  axiosWithAuth
    .post('/lists', newList)
    .then(response => {
      dispatch({
        type: ADD_LIST_SUCCESS,
        payload: response.data
      })
    })
    .catch(error => {
      console.log(error.response.error, 'actions/index.js, line 67, error adding list');
      alert('There was an error adding a new list. Please try again.');
      dispatch({
        type: ADD_LIST_FAIL,
        payload: error.response.error
      })
    })
};

// PUT (update/edit) list
export const updateList = updateList => dispatch => {
  dispatch({ type: UPDATE_LIST_START})
  axiosWithAuth
    .put(`/lists/${updateList.id}`, updateList)
    .then(response => {
      dispatch({
        type: UPDATE_LIST_SUCCESS,
        payload: response.data
      })
    })
    .catch(error => {
      console.log(error.response.error, 'actions/index.js, line 56, error updating list');
      alert('There was an error updating your list. Please try again.');
      dispatch({
        type: UPDATE_LIST_FAIL,
        payload: error.response.error
      })
    })
};

// DELETE list
export const deleteList = deleteList => dispatch => {
  dispatch({ type: DELETE_LIST_START})
  axiosWithAuth
    .delete(`/lists/${deleteList.id}`, deleteList)
    .then(response => {
      dispatch({
        type: DELETE_LIST_SUCCESS,
        payload: response.data
      })
    })
    .catch(error => {
      console.log(error.response.error, 'actions/index.js, line 74, error deleting list');
      alert('There was an error deleting the selected list. Please try again.');
      dispatch({
        type: DELETE_LIST_FAIL,
        payload: error.response.error
      })
    })
};

// POST (add) item
export const addItem = newItem => dispatch => {
  dispatch({ type: ADD_ITEM_START})
  axiosWithAuth
    .post('/lists/:id/items', newItem)
    .then(response => {
      dispatch({
        type: ADD_ITEM_SUCCESS,
        payload: response.data
      })
    })
    .catch(error => {
      console.log(error.response.error, 'actions/index.js, line 41, error adding item');
      alert('There was an arror adding your new item. Please try again.');
      dispatch({
        type: ADD_ITEM_FAIL,
        payload: error.response.error
      })
    })
};

// PUT (update/edit) item by id
export const updateItem = updateItem => dispatch => {
  dispatch({ type: UPDATE_ITEM_START})
  axiosWithAuth
    .put(`/lists/:id/items/${updateItem.id}`, updateItem)
    .then(response => {
      dispatch({
        type: UPDATE_ITEM_SUCCESS,
        payload: response.data
      })
    })
    .catch(error => {
      console.log(error.response.error, 'actions/index.js, line 56, error updating item');
      alert('There was an error updating the selected item. Please try again.');
      dispatch({
        type: UPDATE_ITEM_FAIL,
        payload: error.response.error
      })
    })
};

// DELETE item by id
export const deleteItem = deleteItem => dispatch => {
  dispatch({ type: DELETE_ITEM_START})
  axiosWithAuth
    .delete(`/lists/:id/items/${deleteItem.id}`, deleteItem)
    .then(response => {
      dispatch({
        type: DELETE_ITEM_SUCCESS,
        payload: response.data
      })
    })
    .catch(error => {
      console.log(error.response.error, 'actions/index.js, line 74, error deleting item');
      alert('There was an error deleting the selected item. Please try again.');
      dispatch({
        type: DELETE_ITEM_FAIL,
        payload: error.response.error
      })
    })
};

// POST (add) comment
export const addComment = newComment => dispatch => {
  dispatch({ type: ADD_COMMENT_START})
  axiosWithAuth
    .post('/lists/:id/comments', newComment)
    .then(response => {
      dispatch({
        type: ADD_COMMENT_SUCCESS,
        payload: response.data
      })
    })
    .catch(error => {
      console.log(error.response.error, 'actions/index.js, line 41, error adding acomment');
      alert('There was an arror adding your comment. Please try again.');
      dispatch({
        type: ADD_COMMENT_FAIL,
        payload: error.response.error
      })
    })
};

// PUT (update/edit) comment
export const updateComment = updateComment => dispatch => {
  dispatch({ type: UPDATE_COMMENT_START})
  axiosWithAuth
    .put(`/lists/:id/comments/${updateComment.id}`, updateComment)
    .then(response => {
      dispatch({
        type: UPDATE_COMMENT_SUCCESS,
        payload: response.data
      })
    })
    .catch(error => {
      console.log(error.response.error, 'actions/index.js, line 56, error editing comment');
      alert('There was an error editing the selected comment. Please try again.');
      dispatch({
        type: UPDATE_COMMENT_FAIL,
        payload: error.response.error
      })
    })
};

// DELETE comment by id
export const deleteComment = deleteComment => dispatch => {
  dispatch({ type: DELETE_COMMENT_START})
  axiosWithAuth
    .delete(`/lists/:id/comments/${deleteComment.id}`, deleteComment)
    .then(response => {
      dispatch({
        type: DELETE_COMMENT_SUCCESS,
        payload: response.data
      })
    })
    .catch(error => {
      console.log(error.response.error, 'actions/index.js, line 74, error deleting comment');
      alert('There was an error deleting the selected comment. Please try again.');
      dispatch({
        type: DELETE_COMMENT_FAIL,
        payload: error.response.error
      })
    })
};

// set isLoading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};

// set current item
export const setCurrentItem = item => {
  return {
    type: SET_CURRENT_ITEM
  };
};

// clear current item
export const clearCurrentItem = item => {
  return {
    type: CLEAR_CURRENT_ITEM
  };
};