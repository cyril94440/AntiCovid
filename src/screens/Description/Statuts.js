const colors = ["orange", "yellow", "green", "blue"];

const DescriptionsStatus = ({ data }) => {
    return (
        <p style={{ fontWeight: "bold" }}>
            Type d'entreprise:{" "}
            {data["Statut du dirigeant"].length ? (
                data["Statut du dirigeant"].map((statut, index) => (
                    <span
                        style={{ color: "white", padding: "5px 10px", borderRadius: 10 }}
                        className={"bg-" + colors[index]}
                        key={statut}
                    >
                        {statut}
                    </span>
                ))
            ) : (
                <span
                    style={{ color: "white", padding: "5px 10px", borderRadius: 10 }}
                    className="bg-orange"
                    key={statut}
                >
                    Toutes
                </span>
            )}
        </p>
    );
};

export default DescriptionsStatus;
