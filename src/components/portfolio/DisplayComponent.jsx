import "../../scss/displayComponent.scss"

function DisplayComponent({ data }) {
    return (
        <div className="displayComponent">
             <a href="/Latest-work">
            <div className="butnclose"><button>X</button> </div>
            </a>
            <h2>{data.title}</h2>
            <img src={data.img}/>
            <p>Description: {data.description}</p>
            Add more details as needed
            <div className="buttons">
            <a href={data.gitref}>
                <button>github</button>
            </a>
            <a href={data.hosted}>
                <button>Live</button>
            </a>
            </div>
           
        </div>
    );
}

export default DisplayComponent;