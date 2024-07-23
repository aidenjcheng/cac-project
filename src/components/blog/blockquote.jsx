import React from "react";

const BlockQuote = ({ children }) => {
  return;
  <>
    <br />
    <br />
    <blockquote className="border-l-2 border-blue-400 pl-3">
      <span class="inline-flex">{children[0]}</span>
    </blockquote>
    <br />
  </>;
};

export default BlockQuote;
