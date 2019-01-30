import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { getData } from '../actions'

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getData();
  }

  render() {
    if (this.props.isFetching) {
      // return something here to indicate that you are fetching data
      return (
        <h1>Fetching your data!</h1>
      )
    }
    if (this.props.characters) {
      return (
        <div className="CharactersList_wrapper">
          <CharacterList characters={this.props.characters} />
        </div>
      );
    }
    return (
      <h1>Star Wars API Redux</h1>
    ) 
  }
}

// our mapStateToProps needs to have two properties inherited from state
const mapStateToProps = state => ({
  characters: state.charsReducer.characters.results,
  isFetching: state.charsReducer.isFetching,
  error: state.charsReducer.error
})

// the characters and the fetching boolean
export default connect(mapStateToProps, { getData })(CharacterListView);
