export default function Grid(props) {
    return (
    <div className="grid md:grid-cols-3">
        {props.children}
    </div>
    );
}