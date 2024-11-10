import "../../scss/displayComponent.scss";

function DisplayComponent({ data, onClose }) {
    return (
        <div className="displayComponent">
            <a href="/Latest-work">
                <div className="butnclose">
                    <button onClick={onClose}>X</button>
                </div>
            </a>
            <h2>{data.title}</h2>
            <img src={data.img} alt={data.title} />
            <p>Description:<br /> {data.description}</p>
          
            <div className="buttons">
                <a href={data.gitref}>
                    <button>GitHub</button>
                </a>
                <a href={data.hosted}>
                    <button>Live</button>
                </a>
            </div>
        </div>
    );
}

export default DisplayComponent;
