import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import './Autocomplete.css';
class Autocomplete extends Component {
  static propTypes = {
    suggestions: PropTypes.instanceOf(Array),
    noSuggestionsMsg: PropTypes.string,
    onClear:PropTypes.func,
  };

  static defaultProps = {
    suggestions: [],
    noSuggestionsMsg: ""
  };

  constructor(props) {
    super(props);

    this.state = {
      // The active selection's index
      activeSuggestion: 0,
      // The suggestions that match the user's input
      filteredSuggestions: [],
      // Whether or not the suggestion list is shown
      showSuggestions: false,
      // What the user has entered
      userInput: ""
    };

    
  }

  // Event fired when the input value is changed
  onChange = e => {
    const { suggestions } = this.props;

    const userInput = e.currentTarget.value;

    // Filter our suggestions that don't contain the user's input
    const filteredSuggestions = suggestions.filter(
      suggestion =>
        suggestion[this.props.textField].toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    // Update the user input and filtered suggestions, reset the active
    // suggestion and make sure the suggestions are shown
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput: e.currentTarget.value
    });
    if (typeof this.props.onSelect === "function") this.props.onSelect([]);
  };

  onClear  ()  {
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: ""
    });
  };
  // Event fired when the user clicks on a suggestion
  onClick = e => {
    const { suggestions } = this.props;
    // Update the user input and reset the rest of the state
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: e.currentTarget.innerText
    });
    const pSelectedValue = suggestions.filter(
      suggestion =>
        suggestion[this.props.keyField] == e.currentTarget.attributes['data-key'].value
    );

    if (typeof this.props.onSelect === "function") this.props.onSelect(pSelectedValue);

  };

  // Event fired when the user presses a key down
  onKeyDown = e => {

    const { activeSuggestion, filteredSuggestions } = this.state;

    // User pressed the enter key, update the input and close the
    // suggestions
    if (e.keyCode === 13) {

      this.setState({
        activeSuggestion: 0,
        showSuggestions: false,
        userInput: filteredSuggestions[activeSuggestion][this.props.textField],
      });
      const pSelect = filteredSuggestions[activeSuggestion];
      if (typeof this.props.onSelect === "function") this.props.onSelect(pSelect);
    }
    // User pressed the up arrow, decrement the index
    else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion - 1 });
    }
    // User pressed the down arrow, increment the index
    else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion + 1 });
    }
  };

  render() {
    const {
      onChange,
      onClick,
      onKeyDown,
     
      state: {
        activeSuggestion,
        filteredSuggestions,
        showSuggestions,
        userInput
      }
    } = this;
    const { noSuggestionsMsg, keyField, textField } = this.props;


   

    let suggestionsListComponent;

    if (showSuggestions && userInput) {
      if (filteredSuggestions.length) {
        suggestionsListComponent = (
          <ul className="suggestions">
            {filteredSuggestions.map((suggestion, index) => {
              let className;

              // Flag the active suggestion with a class
              if (index === activeSuggestion) {
                className = "suggestion-active";
              }

              return (
                <li
                  className={className}
                  key={suggestion[keyField]}
                  data-key={suggestion[keyField]}
                  onClick={onClick}>
                  {suggestion[textField]}
                </li>
              );
            })}
          </ul>
        );
      } else {
        suggestionsListComponent = (
          <div className="no-suggestions">
            <em>{noSuggestionsMsg}</em>
          </div>
        );
      }
    }

    return (
      <Fragment>
        <input
          type="search"
          className={this.props.className}
          placeholder={this.props.placeholder}
          onChange={onChange}
          onKeyDown={onKeyDown}
        
          value={userInput}
          required={this.props.required}/>
          
        {suggestionsListComponent}
      </Fragment>
    );
  }
}

export default Autocomplete;