function ProgBars(props) {
    var bars = [];
    var group = [];
    var counter = 0;

    
    for (const [key, value] of Object.entries(props.skillPercentMap)) {
        if (counter % 3 === 0) {
            bars.push(
                <div className="row">
                    {group}
                </div>
            );
            group = [];
        }
        group.push(
          <div className="col col-md mb-4">
            <div data-aos="fade-down">
              <h2 className="card-subtitle text-white">{key}</h2>
              <div className="progress">
                <div className="progress-bar bg-info progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow={key} aria-valuemin={0} aria-valuemax={100} style={{width: value + '%'}} />
              </div>
            </div>
          </div>
      );
      counter += 1;
    }

    bars.push(<div className="row">{group}</div>);

    return (
        bars
    );
}

function SkillCard(props) {
  return (
    <div className="card bg-dark bg-gradient mb-4" data-aos="fade-down">
      <div className="card-body">
        <h2 className="card-title text-center"><i className={props.icon} /> {props.title}</h2>
        <ProgBars skillPercentMap = {props.skillPct}></ProgBars>
      </div>
    </div>
  );
}


function TextCard(props) {
  return (
    <div className="card bg-dark bg-gradient mb-4" data-aos="fade-down">
      <div className="card-body">
        <h2 className="card-title text-center">{props.title}</h2>
        <p className="card-text text-center"> props.text </p>
      </div>
    </div>
  );
}

function SubtitleCard(props) {
  return (
    <div className="card bg-dark bg-gradient mb-4 w-75 mx-auto" data-aos="fade-right">
      <div className="card-body">
        <h1 className="card-title text-center"><i className={props.icon} /> {props.title}</h1>
        <p className="card-text text-center"> {props.text} </p>
      </div>
    </div>
  );
}

export {
  SubtitleCard,
  SkillCard,
  TextCard
};