import React from "react";
import MainText from "./MainText";
import notFoundAudio from "../../assets/audio/not-found.mp3";
import { playIcon } from "../../assets";
import { externalIcon } from "../../assets";

import styles from "./word.module.css";

const WordInfo = ({ UIRender, passedTheme }) => {
  let linkTheme = passedTheme === "dark" ? "#8d17e8" : "#2e2e2e";

  if (!UIRender) return;
  function wordData(data) {
    if (!data) return;

    return {
      meanings: data.meanings,
    };
  }

  function UIGenerated(data) {
    if (!data) return;
    let { text, audio } = data?.phonetics.length > 0 && data.phonetics[0];

    return {
      word: data.word,
      phonetics: { text, audio },
      sourceUrls: data.sourceUrls,
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
      <section className={styles["word-audio"]}>
        <div>
          <h2>{generatedData.word}</h2>
          <span>
            <i>{generatedData.phonetics.text || undefined}</i>
          </span>
        </div>
        <div className={styles["audio-button"]}>
          <button onClick={start}>
            <img src={playIcon} alt="play audio" />
          </button>
        </div>
      </section>

      {/* For each of the wordData, create a MainText component and pass the required props */}
      {wordMeaningData.meanings.map((value) => {
        return (
          <MainText
            key={value.partOfSpeech}
            textData={value}
            theme={passedTheme}
          />
        );
      })}

      {/* Source urls  */}
      {generatedData.sourceUrls.map((url) => {
        return url ? (
          <span className={styles["source-cont"]}>
            Source
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles["source-link"]}
              style={{ color: linkTheme }}
            >
              {url}
              <img src={externalIcon} alt="external Icon" />
            </a>
          </span>
        ) : (
          ""
        );
      })}
    </>
  );
};

export default WordInfo;
