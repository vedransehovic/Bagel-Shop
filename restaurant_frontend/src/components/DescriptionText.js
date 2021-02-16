import React from "react";

class Comment extends React.Component {
  render() {
    return (
      <>
        <h2>Project Description</h2>

        <p>
          This is a final project for the FlatIron's Software Engineering
          Bootcamp. I envisioned it as a simplified web store with a rudimentary
          ordering page and back page for administration.{" "}
        </p>
        <p>
          Due to time constraints I've decided not to include user
          authentication or categories.{" "}
        </p>
        <p>
          Project went largely ok with couple of surprises. When I needed to
          implement iterating update to the database I faced some unusual errors
          that were due to SQLite3 database I was developing on. Instructor
          suggested to switch the database to PostGres but again, due to time
          constrains I didn't get around to do that.{" "}
        </p>
        <p>
          In general I kept running into difficulties with constant
          manipulations of nested arrays and nested objects in my Redux state.
          That was probably the most difficult issue I faced when coding. In
          retrospect I should have organized a project better with simpler,
          easier to access state. In my defense it is my first React project and
          I have already started my second one which already goes a little
          easier. Practice makes perfect as they say.
        </p>
        {/* <button onClick={this.props.handleClick}>LIKE ME MORE</button> */}
      </>
    );
  }
}

export default Comment;
