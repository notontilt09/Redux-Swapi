import { 
  FETCH_DATA_START, 
  FETCH_DATA_SUCCESS, 
  FETCH_DATA_FAIL
} from  "../actions";

const initialState = {
  characters: [],
  isFetching: false,
  error: ''
  // Array characters, Boolean fetching, null error.
};

export const charsReducer = (state = initialState, action) => {
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
        characters: action.payload
      }

    case FETCH_DATA_FAIL:
      return {
        ...state,
        error: 'Whoops, something went wrong here!',
        isFetching: false,
      }
    default:
      return state;
  }
};
