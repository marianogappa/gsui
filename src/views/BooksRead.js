import React from "react";
import ReactDataSheet from "react-datasheet";
// Be sure to include styles at some point, probably during your bootstrapping
import "react-datasheet/lib/react-datasheet.css";
import "../css/BooksRead.css";

export class BooksRead extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: [],
      api: props.api
    };
  }

  async componentDidMount() {
    const table = await this.props.api.query(["SELECT * FROM books_read"]);
    const grid = [];
    grid.push(
      table.books_read.fields.map(v => {
        return { value: v, readOnly: true, className: "header-row" };
      })
    );
    table.books_read.lines.forEach((v, i) => {
      const row = [];
      v.forEach(cell => row.push({ value: cell }));
      grid.push(row);
    });
    this.setState({ grid });
  }

  render() {
    return (
      <ReactDataSheet
        data={this.state.grid}
        valueRenderer={cell => cell.value}
        onCellsChanged={changes => {
          const grid = this.state.grid.map(row => [...row]);
          changes.forEach(({ cell, row, col, value }) => {
            grid[row][col] = { ...grid[row][col], value };
          });
          this.setState({ grid });
        }}
      />
    );
  }
}
