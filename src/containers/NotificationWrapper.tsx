import * as React from "react";
import styled from "styled-components";
import { COLORS, NOTIFICATION_TYPE, POSITION_FROM } from "../constants/enums";
import { defaultStyles } from "../styles/defaultStyles";
import { IAttributes } from "../models/props";

const SNotificationWrapper = styled.div<any>`
  ${defaultStyles};
  background: ${({ type }: any) => {
    switch (type) {
      case NOTIFICATION_TYPE.ERROR:
        return COLORS.ERROR;
      case NOTIFICATION_TYPE.INFO:
        return COLORS.INFO;
      case NOTIFICATION_TYPE.SUCCESS:
        return COLORS.SUCCESS;
      case NOTIFICATION_TYPE.WARNING:
        return COLORS.WARNING;
      default:
        return "transparent";
    }
  }};
  ${({ positionFrom }: any) => {
    switch (positionFrom) {
      case POSITION_FROM.LEFT:
        return `
          left: 0;
          transform: translateX(-200px);
          
          animation: moving .5s both;
          
          @keyframes moving {
            0% { 
              transform: translateX(-200px);
              opacity: 0.2;   
            }
          
            100% { transform: translateX(0); opacity: 1; }
          }
        `;
      case POSITION_FROM.RIGHT:
        return `
          right: 0;
          transform: translateX(200px);
          animation: moving .5s both;
          
          @keyframes moving {
            0% { 
              transform: translateX(200px);
              opacity: 0.2;   
            }
          
            100% { transform: translateX(0); opacity: 1; }
          }
        `;
      default:
        return `left: 0`;
    }
  }}
`;

interface ILocal {
  removeNotification: () => void;
}

type IProps = IAttributes & ILocal;

export const NotificationWrapper = (props: IProps) => {
  const { message, type, positionFrom, removeNotification } = props;
  return (
    <SNotificationWrapper
      type={type}
      positionFrom={positionFrom}
      onClick={removeNotification}
    >
      {message}
    </SNotificationWrapper>
  );
};
