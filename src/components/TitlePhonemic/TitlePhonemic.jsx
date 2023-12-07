import "./TitlePhonemic.scss";
import Title from '../Title/Title';
import Phonemic from '../Phonemic/Phonemic';

function TitlePhonemic({ text, level, phonemic }) {

  return (
    <>
        <Title text={text} level={level}></Title>
        <Phonemic phonemic={phonemic}></Phonemic>
    </>
  );
}

export default TitlePhonemic;
