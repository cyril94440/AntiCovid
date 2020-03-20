const infos = ["Localisation géographique", "Organisme", "Contact", "Adresse mail"];

const DescriptionInfos = ({ data }) =>
    infos.map(info => (
        <React.Fragment key={info}>
            {data[info] ? (
                <p style={{ fontWeight: "bold" }}>
                    {info}:{" "}
                    <span
                        style={{ color: "white", padding: "5px 10px", borderRadius: 10 }}
                        className="bg-green"
                    >
                        {data[info]}
                    </span>
                </p>
            ) : null}
        </React.Fragment>
    ));

export default DescriptionInfos;
