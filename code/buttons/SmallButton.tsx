import * as React from "react";
import { PropertyControls, ControlType } from "framer";
import styled, { css } from "styled-components";

const StyledButton = styled.button`
  height: 46px;
  width: 124px;
  padding: 8px;
  border-radius: 8px;
  border: 0;
  font-size: 1.2em;
  ${props =>
    props.type == "primary" &&
    css`
      color: white;
      background-color: #3c96f5;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.12);
    `};

  ${props =>
    props.type == "secondary" &&
    css`
      color: white;
      background-color: lightblue;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.12);
    `};
  ${props =>
    props.type == "disabled" &&
    css`
      color: white;
      background-color: #dddddd;
    `};
`;

// Define type of property
interface Props {
  text: string;
  type: string;
}

export class Button extends React.Component<Props> {
  // Set default properties
  static defaultProps = {
    text: "Button",
    type: "primary"
  };

  // Items shown in property panel
  static propertyControls: PropertyControls = {
    text: { type: ControlType.String, title: "Text" },
    type: {
      type: ControlType.Enum,
      title: "Type",
      options: ["primary", "secondary", "disabled"],
      optionTitles: ["Primary Button", "Secondary Button", "Disabled Button"]
    }
  };

  render() {
    return (
      <StyledButton type={this.props.type}>{this.props.text}</StyledButton>
    );
  }
}
