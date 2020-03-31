import { createGlobalStyle } from "styled-components";

import {
	DARK_BLUE,
	BLUE,
	ORANGE,
	GREEN,
	YELLOW,
	FONT_FAMILY,
	BODY_BACKGROUND,
	BODY_COLOR
} from "@constants/style";

const GlobalStyle = createGlobalStyle`
    &::-webkit-scrollbar {
        width: 7px;
    }

    &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${DARK_BLUE};
        outline: 1px solid ${DARK_BLUE};
    }

    .backgroundMobileMenu {
        background-image: url('/backgroundMobileMenu.png') !important;
        background-repeat: no-repeat !important;
        background-position: left top !important;
        background-size: 100% 100% !important; 
    }

    body {
        font-family: ${FONT_FAMILY};
        color:${BODY_COLOR};

        @media only screen and (max-width: 768px) {
            background-image: url('/backgroundWaveMobile.png') !important;
            background-repeat: no-repeat !important;
            background-position: left top !important;
            background-size: 100% auto !important; 
        }
        @media only screen and (min-width: 769px) {
            background-color: ${BODY_BACKGROUND};
            height: 100vh;
            overflow: hidden;
        }
    }
    

    .ant-layout{
        background:none;
    }

    .ant-layout-content{
        padding:0;
    }

    h1 {
        font-size: 45px;
        line-height: 27px;
        color: ${BODY_COLOR};
    }

    h2 {
        font-size: 30px;
        line-height: 27px;
        font-weight: 900;
        color: ${BODY_COLOR};
    }

    h3 {
        font-size: 23px;
        line-height: 27px;
        font-weight: 900;
        color: ${BODY_COLOR};
    }

    p {
        font-size: 15px;
        line-height: 27px;
        color: ${BODY_COLOR};
    }

    a {
        color: ${BODY_COLOR};
    }

    a:hover {
        color: ${ORANGE};
    }

    .text-uppercase {
        text-transform: uppercase;
    }

    .text-center {
        text-align: center;
    }

    .cursor-pointer {
        cursor: pointer;
    }

    /* Theme */

    .bg-blue {
        background-color: ${BLUE};
    }
    
    .text-blue {
        color: ${BLUE};
    }

    .bg-orange {
        background-color: ${ORANGE};
    }
    
    .text-orange {
        color: ${ORANGE};
    }

    .bg-green {
        background-color: ${GREEN};
    }
    
    .text-green {
        color: ${GREEN};
    }

    .bg-yellow {
        background-color: ${YELLOW};
    }
    
    .text-yellow {
        color: ${YELLOW};
    }

    .mobile-icon {
        font-size: 30px;
        color: white;
    }

    /* NProgress */

    #nprogress {
        pointer-events: none;

        .bar {
            background: ${BODY_COLOR};
            position: fixed;
            z-index: 1031;
            top: 0;
            left: 0;
            width: 100%;
            height: 2px;
        }

        .peg {
            display: block;
            position: absolute;
            right: 0;
            width: 100px;
            height: 100%;
            box-shadow: 0 0 10px ${BODY_COLOR}, 0 0 5px ${BODY_COLOR};
            opacity: 1;
            -webkit-transform: rotate(3deg) translate(0px, -4px);
            -ms-transform: rotate(3deg) translate(0px, -4px);
            transform: rotate(3deg) translate(0px, -4px);
        }

        .spinner {
            display: block;
            position: fixed;
            z-index: 1031;
            top: 15px;
            right: 15px;
        }

        .spinner-icon {
            width: 18px;
            height: 18px;
            box-sizing: border-box;
            border: solid 2px transparent;
            border-top-color: ${BODY_COLOR};
            border-left-color: ${BODY_COLOR};
            border-radius: 50%;
            -webkit-animation: nprogress-spinner 400ms linear infinite;
            animation: nprogress-spinner 400ms linear infinite;
        }
    }

    .nprogress-custom-parent {
        overflow: hidden;
        position: relative;

        #nprogress {
            .spinner,
            .bar {
                position: absolute;
            }
        }
    }

    @-webkit-keyframes nprogress-spinner {
        0% {
            -webkit-transform: rotate(0deg);
        }
        100% {
            -webkit-transform: rotate(360deg);
        }
    }

    @keyframes nprogress-spinner {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

export default GlobalStyle;
