import "./Phonemic.scss";

function Phonetic({ phonemic }) {
  const enclosedTranscription = `/${phonemic}/`;

  return (
    <p className="phonetic">{enclosedTranscription}</p>
  );
}

export default Phonetic;
