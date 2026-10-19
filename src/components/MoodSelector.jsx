import { useState } from "react";
function MoodSelector({onSelect}) {
  const [moods] = useState([
    { label:"😊 Heureux", value: "Heureux", color: "yellow", emoji: "😊" },
    { label:"😴 Fatigué", value: "Fatigué", color: "blue", emoji: "😴" },
    { label:"😡 Stressé", value: "Stressé", color: "red", emoji: "😡" },
    { label:"😎 Motivé", value: "Motivé", color: "green", emoji: "😎" },
  ]);
  return (
    <div>
      {moods.map((mood) => (
        <button
          key={mood.value}
          onClick={() => onSelect(mood)}
        >{mood.emoji} {mood.label}</button>
      ))}
    </div>
  );
}
export default MoodSelector;