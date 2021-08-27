import React, { Component } from "react";
import styled from "styled-components";

const TitleStyle = styled.h2`
  color: red;
`;

class Title extends Component {
  render() {
    return <TitleStyle>待辦事項清單({this.props.todos.length})</TitleStyle>;
  }
}

export default Title;
