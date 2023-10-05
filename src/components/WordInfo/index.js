import React from "react";
import MainText from "./MainText";
import notFoundAudio from "../../assets/audio/not-found.mp3";
import { playIcon } from "../../assets";

const WordInfo = ({ UIRender }) => {
  if (!UIRender) return;
  function wordData(data) {
    if (!data) return;

    // let vals = [];
    // data.meanings.forEach((meaning) => {
    //   let { partOfSpeech, definitions } = meaning;

    //   vals.push({ partOfSpeech, definitions });
    // });

    return {
      meanings: data.meanings,
    };
  }

  function UIGenerated(data) {
    if (!data) return;
    let { text, audio } = data.phonetics[0];

    return {
      word: data.word,
      phonetics: { text, audio },
    };
  }

  const generatedData = UIGenerated(UIRender);
  const wordMeaningData = wordData(UIRender);

  const start = () => {
    try {
      let audio, dynamicAudio;
      dynamicAudio = generatedData?.phonetics?.audio;
      audio = new Audio(dynamicAudio);
      audio.src = dynamicAudio || notFoundAudio;
      audio.play();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <main>
        <div>
          <h2>{generatedData.word}</h2>
          <span>
            <i>{generatedData.phonetics.text || undefined}</i>
          </span>
        </div>
        <div>
          <button onClick={start}>
            <img src={playIcon} alt="play audio" />
          </button>
        </div>
      </main>

      {/* For each of the wordData, create a MainText component and pass the required props */}
      {wordMeaningData.meanings.map((value) => {
        return <MainText key={value.partOfSpeech} textData={value} />;
      })}
    </>
  );
};

export default WordInfo;
