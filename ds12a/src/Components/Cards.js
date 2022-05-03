import ProgBar from "./ProgBar";

function Card(props) {
    return (
        <div className={"bg-white rounded-lg shadow m-1 p-4 border-solid border-2 transition duration-150 hover:border-blue-600 hover:scale-105 " + props.className}>
            {props.children}
        </div>
    );
}

function ProgressCard(props) {
    return (
        <Card>
            <h3>{props.title}</h3>
            <ProgBar pct={props.pct}/>
            <p>{props.text}</p>
        </Card>
    );
}

function TitleTextCard(props) {
    return (
        <Card>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
            {props.children}
        </Card>
    );
}

function ProjectCard(props) {
    return (
        <TitleTextCard title={props.title} text={props.text}>
            <br/>
            <a href={props.link} className="py-4 px-6 bg-sky-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg ">
                View
            </a>
        </TitleTextCard>
    );
}

export {
    Card,
    ProgressCard,
    ProjectCard,
    TitleTextCard
};