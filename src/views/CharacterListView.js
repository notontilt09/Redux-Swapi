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
      return (
        <div className='App'>
          <h1>Star Wars API Characters!</h1>
          {this.props.isFetching && <h2>Fetching Your Characters!</h2>}
          {this.props.characters && (
            <div className="CharactersList_wrapper">
              <CharacterList characters={this.props.characters} />
            </div>
          )}
          {this.props.error && (
            <div className="error">
              <h3>{this.props.error}</h3>
            </div>
          )}
        </div>
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
