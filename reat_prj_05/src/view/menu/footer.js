import React, { Component } from "react";

class footer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <div class="page-wrap">
          <h1>Sticky Footer</h1>
          <h2>with Fixed Footer Height</h2>

          <button id="add">Add Content</button>
        </div>

        <footer class="site-footer">I'm the Sticky Footer.</footer>
      </div>
    );
  }
}

export default footer;
