import React from "react";

function MostUsedWordsHeader(props: { mostUsedWordsMap: Record<string, number>}) {
  return <div>
    <h2>Check out your most used words!</h2>
    {Object.entries(props.mostUsedWordsMap).map(([word, count]) => (
        <div key={word}>
          Word: {word}, Count: {count}
        </div>
    ))}
  </div>;
}

export default MostUsedWordsHeader;