function MoodDisplay({ mood }) {
  if (!mood) {
    return (
      <div
        style={{
          backgroundColor: "white",
        }}
      >Aujourd'hui, je me sens Aucune humeur 😶 !</div>
    );
  }
  return (
    <div
      style={{
        backgroundColor: mood.color,
      }}
    >Aujourd'hui, je me sens {mood.label} {mood.emoji} !</div>
  );
}
export default MoodDisplay;