import React from 'react';
import { BaseComponent } from 'cms-core';


class LanguageSelector extends BaseComponent {
  state = {

  }
  constructor(props) {
    super(props);

  }
  handleLanguageChange = (event) => {
    const selectedLanguage = this.context.languageOptions.find(item => item.id === event.target.value);
    this.context.setLanguage(selectedLanguage);
  };
  render() {
    return (
      <select
        onChange={this.handleLanguageChange}
        value={this.context.language.id}>
        {this.context.languageOptions.map(item => (
          <option
            key={item.id}
            value={item.id}>
            {item.text}
          </option>
        ))}
      </select>
    )
  }
}
export default LanguageSelector;
