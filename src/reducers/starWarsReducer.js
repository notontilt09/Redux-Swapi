import { 
  FETCH_DATA_START, 
  FETCH_DATA_SUCCESS, 
  FETCH_DATA_FAIL,
  FETCH_NEXT,
  FETCH_PREV
} from  "../actions";

const initialState = {
  characters: [],
  isFetching: false,
  error: '',
  // Array characters, Boolean fetching, null error.
};

export const charsReducer = (state = initialState, action) => {
  console.log('reducer', action)
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCH_DATA_START:
      return {
        ...state,
        error: '',
        isFetching: true
      }
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        error: '',
        isFetching: false,
        characters: action.payload,
      }

    case FETCH_DATA_FAIL:
      return {
        ...state,
        error: 'Whoops, something went wrong here! Check to make sure the you\'re calling the correct url in the API call.  Otherwise, the Dark Side of the force has won and our DB has been deleted',
        isFetching: false,
      }
    case FETCH_NEXT:
      return {
        ...state,
        characters: action.payload
      }
    case FETCH_PREV:
      return {
        ...state,
        characters: action.payload
      }
    default:
      return state;
  }
};
