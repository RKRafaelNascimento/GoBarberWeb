import styled, { css } from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { lighten } from 'polished';

export const Container = styled.div`
    position: relative;
`;

export const Badge = styled.div`
    background: none;
    border: 0;
    position: relative;

    ${(props) =>
        props.hasUnread &&
        css`
            &::after {
                position: absolute;
                right: 0px;
                top: 0px;
                width: 8px;
                height: 8px;
                background: #ff829e;
                content: '';
                border-radius: 50px;
            }
        `}
`;

export const NotificationList = styled.div`
    position: absolute;
    width: 260px;
    left: calc(50%, 130px);
    top: calc(100% + 30px);
    background: rgba(0, 0, 0, 0.6);
    border-radius: 4px;
    padding: 15px 5px;

    &::before {
        content: '';
        position: absolute;
        left: calc(50% - 20px);
        top: -20px;
        width: 0px;
        height: 0;
        border-left: 20px solid transparent;
        border-right: 20px solid transparent;
        border-bottom: 20px solid rgba(0, 0, 0, 0.6);
    }
`;

export const Notification = styled.div`
    color: #fff;

    & + div {
        margin-top: 15px;
        padding-top: 15px;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
    }

    p {
        font-size: 13px;
        line-height: 18px;
    }

    time {
        font-size: 12px;
        opacity: 0.6;
    }

    button {
        font-size: 12px;
        border: 0;
        background: none;
        color: ${lighten(0.2, '#7159c1')};
        padding: 0 6px;
        margin: 0 6px;
        border-left: 1px solid rgba(255, 255, 255, 0.1);

        ${(props) =>
            props.unread &&
            css`
                &::after {
                    content: '';
                    display: inline-block;
                    width: 6px;
                    height: 6px;
                    margin-left: 5px;
                    background: #ff892e;
                    border-radius: 50%;
                }
            `}
    }
`;

export const Scroll = styled(PerfectScrollbar)`
    max-height: 260px;
    padding: 5px 15px;
`;
