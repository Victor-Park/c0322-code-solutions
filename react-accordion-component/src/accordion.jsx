import React from 'react';

/* const data = [
  {
    header: 'Hypertext Markup Language',
    content: 'Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web.'
  },
  {
    header: 'Cascading Style Sheets',
    content: 'Cascading Style Sheets (CSS) is a style sheet languages used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web alongside HTML and JavaScript.'
  },
  {
    header: 'JavaScript',
    content: 'JavaScript, often abbreviated as JS, is a high-level, interpreted programming language that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation and first-class functions.'
  }
]; */

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.openTab = this.openTab.bind(this);
    this.closeTab = this.closeTab.bind(this);
  }

  openTab() {
    this.setState({ isOpen: true });
  }

  closeTab() {
    this.setState({ isOpen: false });
  }

  render() {
    return <div>Some Content</div>;
  }
}

export default Accordion;
