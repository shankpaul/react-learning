import React from "react";
import { connect } from "react-redux";
import * as bookActions from "../redux/actions/book_actions";

class Books extends React.Component {
  state = {
    book: { title: "" }
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.dispatch(bookActions.createBook(this.state.book));
  };

  handleChange = event => {
    const book = { ...this.state.book, title: event.target.value };
    this.setState({ book: book });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>New Book</label>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.book.title}
          />
          <input type="submit" value="Save" />
        </form>

        {this.props.books.map(book => (
          <div key={book.title}>{book.title}</div>
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.books
  };
}

export default connect(mapStateToProps)(Books);
