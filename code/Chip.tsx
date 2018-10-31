import * as React from "react";
import { PropertyControls, ControlType, PropertyStore } from "framer";
import styled, { css } from "styled-components";

const StyledChip = styled.button`
  display: flex;
  justify-content: left;
  align-content: left;
  padding: 4px 2px 2px 5px;
  color: white;
  border: 0;
  border-radius: 12px;
  font-weight: 600;
  text-justify: center;
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
      color: black;
      background-color: rgba(0, 0, 0, 0);
    `};
  ${props =>
    props.type == "disabled" &&
    css`
      color: white;
      background-color: #dddddd;
    `};
`;

const StyledText = styled.span`
  color: white;
  margin-top: -1px;
  ${props =>
    props.type == "primary" &&
    css`
      color: white;
    `};
  ${props =>
    props.type == "secondary" &&
    css`
      color: black;
      background-color: rgba(0, 0, 0, 0);
      font-weight: 700;
    `};
  ${props =>
    props.type == "disabled" &&
    css`
      color: white;
      background-color: #dddddd;
    `};
`;

const ChipNumber = styled.span`
  display: flex;
  padding: 2px;
  background-color: white;
  justify-content: center;
  align-content: left;
  border-radius: 12px;
  margin-left: 4px;
  font-weight: 600;
  margin-top: -2px;
  min-width: 17px;
  ${props =>
    props.type == "primary" &&
    css`
      color: #3c96f5;
    `};
  ${props =>
    props.type == "secondary" &&
    css`
      background-color: #3c96f5;
      color: white;
    `} ${props =>
    props.type == "disabled" &&
    css`
      color: #dddddd;
    `};
`;
// Define type of property
interface Props {
  text: string;
  amount: number;
  type: string;
}

export class Chip extends React.Component<Props> {
  // Set default properties
  static defaultProps = {
    text: "Chip .",
    amount: 21,
    type: "primary"
  };

  // Items shown in property panel
  static propertyControls: PropertyControls = {
    text: { type: ControlType.String, title: "Text" },
    amount: { type: ControlType.Number, title: "Amount" },
    type: {
      type: ControlType.Enum,
      title: "Type",
      options: ["primary", "secondary", "disabled"],
      optionTitles: ["Primary Chip", "Secondary Chip", "Disabled Chip"]
    }
  };

  render() {
    return (
      <StyledChip type={this.props.type}>
        <StyledText type={this.props.type}>{this.props.text}</StyledText>
        <ChipNumber type={this.props.type}>{this.props.amount}</ChipNumber>
      </StyledChip>
    );
  }
}
