import React from "react";

import { insertAt, unique } from "./utils";
import List from "./list";

class Permutation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: this.run("DDR"),
      text: "DDR"
    };
    this.run = this.run.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      list: this.run(e.target.value),
      text: e.target.value
    });
  }

  run(s) {
    const permute = (alpha, ss) => {
      let arr = [];
      if (typeof alpha === undefined || alpha === "") return [];
      if (ss.length === 2) {
        const [a, b] = ss;
        for (let i = 0; i < 3; i++) {
          arr.push(insertAt(ss, alpha, i));
          arr.push(insertAt(b + a, alpha, i));
        }
      } else if (ss.length > 2) {
        permute(ss[0], ss.slice(1, ss.length)).forEach((sss, u) => {
          for (let i = 0; i < sss.length + 1; i++) {
            arr.push(insertAt(sss, alpha, i));
          }
        });
      } else if (ss.length === 1) {
        arr.push(alpha + ss);
        arr.push(ss + alpha);
      } else {
        arr.push(alpha);
      }
      return arr;
    };

    return permute(s[0], s.slice(1));
  }

  render() {
    return (
      <div>
        <input
          value={this.state.text}
          onChange={this.handleChange}
          type="text"
          placeholder="permutation"
        />

        <p>
          <List items={this.state.list} />
        </p>
      </div>
    );
  }
}

export default Permutation;
