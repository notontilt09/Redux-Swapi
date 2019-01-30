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
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
const mapStateToProps = state => ({
  characters: state.characters,
  isFetching: state.isFetching,
  error: state.error

})

// the characters and the fetching boolean
export default connect(
 mapStateToProps,
  {
    getData
  }
)(CharacterListView);
