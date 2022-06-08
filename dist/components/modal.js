import './modal.css';
import React from 'react';
export default function Modal({
  message,
  handleVisible,
  handleNotVisible,
  className
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: className
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-Container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal"
  }, /*#__PURE__*/React.createElement("p", null, message), /*#__PURE__*/React.createElement("button", {
    onClick: handleNotVisible
  }, "X")))));
}