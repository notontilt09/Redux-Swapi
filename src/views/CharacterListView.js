import React from "react";
import { connect } from "react-redux";
import Loader from 'react-loader-spinner'

import { CharacterList } from "../components";
import { getData, fetchNext, fetchPrev } from '../actions'

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
          {this.props.isFetching && <Loader type="Ball-Triangle" color="#00BFFF" height="90" width="60" />}
          {this.props.characters && (
            <div className="CharactersList_wrapper">
              <CharacterList characters={this.props.characters} />
              {this.props.previous && 
                <button onClick={() => this.props.fetchPrev(this.props.previous)}>Previous</button>}
              {this.props.next &&
              <button onClick={() => this.props.fetchNext(this.props.next)}>Next</button>}
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
  error: state.charsReducer.error,
  next: state.charsReducer.characters.next,
  previous: state.charsReducer.characters.previous
})

// the characters and the fetching boolean
export default connect(mapStateToProps, { getData, fetchNext, fetchPrev })(CharacterListView);
