import styled from "styled-components";

import BaseButton from "@components/Button";

const buttons = [
    { key: "Formulaire en ligne", label: "Formulaire en ligne", url: "key", bg: "blue" },
    {
        key: "Documents à télécharger",
        label: "Document à télécharger",
        url: "upload",
        bg: "orange"
    },
    { key: "Site web", label: "Aller sur le site", url: "key", bg: "green" }
];

const DescriptionButtons = ({ data }) =>
    buttons.map(button => (
        <React.Fragment key={button.key}>
            {data[button.key] ? (
                <div
                    className="text-center"
                    style={{
                        marginBottom: 35
                    }}
                >
                    <LinkButton className={`bg-${button.bg}`}>
                        <a
                            href={
                                button.url === "key"
                                    ? data[button.key]
                                    : data[button.key][0].url
                            }
                            target="_blank"
                            style={{
                                color: "white",
                                margin: "auto"
                            }}
                            download={button.url === "upload"}
                        >
                            {button.label}
                        </a>
                    </LinkButton>
                </div>
            ) : null}
        </React.Fragment>
    ));

const LinkButton = styled(BaseButton)`
    @media screen and (max-width: 576px) {
        width: 200px;
        height: 50px;
        margin-bottom: -10px;
    }
    padding: 10px auto;
    width: 425px;
`;

export default DescriptionButtons;
