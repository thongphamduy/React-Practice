import React from 'react';

class LangBar extends React.Component {

  render(){
    const list = this.props.langList;
    return (
      <ul className="langbar">
        {list.map(lang => <li key={lang} onClick={() => this.props.selectLang(lang.toLowerCase())}>{lang}</li>)}
      </ul>
    );
  }
}


export default LangBar;