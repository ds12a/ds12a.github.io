import ProgBar from "./ProgBar";

function Card(props) {
    return (
        <div className="bg-white rounded-lg shadow m-1 p-4 border-solid border-2 hover:border-blue-600">
            {props.children}
        </div>
    );
}

function ProgressCard(props) {
    return (
        <Card>
            <h2>{props.title}</h2>
            <ProgBar frac={props.frac}/>
            <p>{props.text}</p>
        </Card>
    );
}

export {
    Card,
    ProgressCard
};