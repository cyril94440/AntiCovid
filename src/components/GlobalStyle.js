import { createGlobalStyle } from "styled-components";
import { PRIMARY, SECONDARY, FONT_FAMILY } from "../constants/style";

const GlobalStyle = createGlobalStyle`
    body {
        font-family: ${FONT_FAMILY};
        color:${PRIMARY};
    }
    a {
        color:${PRIMARY};
    }
    a:hover{
        color:${SECONDARY};
    }

    /* NProgress */

    #nprogress {
        pointer-events: none;

        .bar {
            background: ${PRIMARY};
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
            box-shadow: 0 0 10px ${PRIMARY}, 0 0 5px ${PRIMARY};
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
            border-top-color: ${PRIMARY};
            border-left-color: ${PRIMARY};
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