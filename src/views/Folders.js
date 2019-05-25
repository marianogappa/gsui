import React from "react";
import "../css/Folders.css";
import "../css/Search.css";
import Autocomplete from "react-autocomplete";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      value: ""
    };
  }

  componentDidMount() {
    const items = this.props.folders.map(f => {
      return { label: f };
    });
    const value = "";
    this.setState({ items, value });
    this.input.focus();
  }

  render() {
    return (
      <Autocomplete
        key={"autocomplete"}
        ref={el => (this.input = el)}
        getItemValue={item => item.label}
        items={this.state.items}
        renderItem={(item, isHighlighted) => {
          if (!item.label.startsWith(this.state.value)) {
            return <div />;
          }
          return (
            <div style={{ background: isHighlighted ? "#EFEFEF" : "white" }}>
              <a href={"./f/" + item.label}>{item.label}</a>
            </div>
          );
        }}
        renderMenu={children => <div className="menu">{children}</div>}
        value={this.state.value}
        onChange={e => {
          this.setState({ value: e.target.value });
        }}
        onSelect={value => (window.location.href = "./f/" + value)}
        open={true}
        inputProps={{
          onKeyUp: e => {
            // On Enter, go to closest match
            if (e.keyCode === 13) {
              this.state.items.forEach(i => {
                if (i.label.startsWith(this.state.value)) {
                  window.location.href = "./f/" + i.label;
                }
              });
            }
          }
        }}
      />
    );
  }
}

// class Folder extends React.Component {
//   render() {
//     const { name } = this.props;
//     return (
//       <div id={"folder"} className={name}>
//         <a href={"./f/" + name}>{name}</a>
//       </div>
//     );
//   }
// }

export class Folders extends React.Component {
  render() {
    const { folders } = this.props;
    return (
      <div className="folders-wrapper">
        <Search folders={folders} />
        {/* {folders.map(f => (
          <Folder name={f} key={f} />
        ))} */}
      </div>
    );
  }
}
