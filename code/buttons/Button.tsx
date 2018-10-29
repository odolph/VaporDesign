import * as React from "react";
import { PropertyControls, ControlType } from "framer";
import styled, { css } from "styled-components";

const StyledButton = styled.button`
  height: 56px;
  width: 351px;
  padding: 12px;
  border-radius: 12px;
  border: 0;
  font-size: 1.4em;
  box-shadow: "0 6px 8px rgba(0, 0, 0, .12)";
  ${props =>
    props.type == "primary" &&
    css`
      color: white;
      background-color: #3c96f5;
      box-shadow: 0 6px 8px rgba(0, 0, 0, 0.12);
    `};

  ${props =>
    props.type == "secondary" &&
    css`
      color: white;
      background-color: lightblue;
      box-shadow: 0 6px 8px rgba(0, 0, 0, 0.12);
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
