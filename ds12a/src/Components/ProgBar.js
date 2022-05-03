export default function ProgBar(props) {
    return (
        <div className="w-full h-2 bg-gray-400 rounded-full mt-3">
            <div className="h-full bg-green-500 rounded-full" style={{width: props.pct}}></div>
        </div>
    );
}
