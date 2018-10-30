import * as React from "react";
import { PropertyControls, ControlType } from "framer";
import styled, { css, injectGlobal } from "styled-components";

const BackGroundField = styled.button`
  background-color: white;
  width: 375px;
  height: 58px;
  padding: 4px;
  border-width: 0;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.12);
`;

const StylizedTextField = styled.button`
  display: flex;
  width: 367px;
  height: 48px;
  background-color: #f1f1f1;
  border-radius: 10px 25px 25px 10px;
  border-width: 0;
  justify-content: space-between;
  align-content: center;
`;

const StyledText = styled.span`
  display: flex;
  color: #979797;
  justify-content: left;
  align-content: left;
  align-items: left;
  text-align: left;
`;

const SendButton = styled.button`
  display: flex;
  padding: 4px;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  align-self: flex-end;
  align-items: flex-end;
  justify-content: flex-end;
  background-color: white;
  border-width: 0;
`;
// Define type of property
interface Props {
    
  text: string;
}

export class TextField extends React.Component<Props> {
  // Set default properties
  static defaultProps = {
    text: "Type Something..."
  };

  // Items shown in property panel
  static propertyControls: PropertyControls = {
    text: { type: ControlType.String, title: "Text" }
  };

  render() {
    return (
      <BackGroundField>
        <StylizedTextField>
          <StyledText>{this.props.text}</StyledText>
          <SendButton />
        </StylizedTextField>
      </BackGroundField>
    );
  }
}
