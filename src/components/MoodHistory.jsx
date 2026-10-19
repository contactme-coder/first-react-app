function MoodHistory({ history }) {
  return (
    <div>
      <h3>⌚ Historique des humeurs</h3>
      {history.length === 0 ? (
        <p style={{ textAlign: "center" }}><b>vide</b></p>
      ) : (
        <div>
          {history.map((mood,index) => (
            <span
                key={index}
              style={{
                backgroundColor: mood.color
              }}>{mood.label}</span>
          ))}
        </div>
      )}
    </div>
  );
}
export default MoodHistory;