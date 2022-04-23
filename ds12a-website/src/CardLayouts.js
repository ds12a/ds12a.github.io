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
                <div className="progress-bar bg-info progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={100} style={{width: value + '%'}} />
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
    <GenericCard title={props.title} icon={props.icon} compContent={<ProgBars skillPercentMap = {props.skillPct}></ProgBars>}></GenericCard> 
  );
}


function SubtitleCard(props) {
  return (
    <GenericCard icon={props.icon} title={props.title} text={props.text} narrow></GenericCard>
  );
}

function AloneCard(props) {
  return (
    <GenericCard level={1} icon={props.icon} title={props.title} text={props.text}></GenericCard>
  );
}

function GenericCard(props) {
  const TitleTag = `h${props.level ? props.level : "2"}`;

  return (
    <div className={"card bg-dark bg-gradient mb-4 " + (props.narrow ? "w-75 mx-auto" : "")}>
      <div className="card-body">
        {props.title && <TitleTag className="card-title text-center">{props.icon && <i className={props.icon} />} {props.title}</TitleTag>}
        <p style={{ whiteSpace: 'pre-line' }} className="card-text"> {props.text} </p>

        {props.link && <a href={props.link} role="button" target="_blank" className="btn btn-primary"><i className="bi bi-link-45deg" /> View</a>}
        {props.github && <a href={props.github} role="button" target="_blank" className="btn btn-info"><i className="bi bi-github" /> Github repository</a>}
        {props.compContent}
      </div>
    </div>
  );
}

function QuoteCard(props) {
  return (
    <div className="col-md mb-4">
      <div className="card bg-dark bg-gradient" data-aos="fade-down">
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p>
              {props.quote}
            </p>
            <footer className="blockquote-footer">ds12a</footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
}

function Quotes(props) {
  var quotes = props.quotes;

  return (<GridList perRow={2} list={quotes.map((q) => {return (<QuoteCard quote={q}></QuoteCard>)})}></GridList>);
}

function Accomplishments(props) {
  var accList = [];

  Object.keys(props.accomplishments).map(function(title) {
    accList.push(<GenericCard title={title} text={props.accomplishments[title]}></GenericCard>);
  });

  return (<GridList perRow={2} list={accList}></GridList>);
}

function GridList(props) {
  var list = [];
  var row = [];
  var counter = 0;

  for (const item of props.list) {
    if (counter % props.perRow === 0) {
      list.push(<div class="row">{row}</div>);

      row = [];
    }

    row.push(<div data-aos="fade-down" className="col-md mb-4">{item}</div>);

    counter++;
  }

  list.push(<div class="row">{row}</div>);

  return list;
}

function Projects(props) {
  var projectCards = [];

  for (const p of props.projects) {
    projectCards.push(<GenericCard title={p.title} text={p.text} link={p.link} github={p.repository}></GenericCard>);
  }

  return (<GridList list={projectCards}></GridList>);
}

export {
  SubtitleCard,
  SkillCard,
  AloneCard,
  Quotes,
  Accomplishments,
  Projects,
  GenericCard
};