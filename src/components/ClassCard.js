function ClassCard({ grade, cover, name, permission }) {
  return (
    <a id="test-two" href={permission ? `/myclass/${grade}/${name}` : "#"}>
      <div className="class-card">
        <div className="card-image">
          <img src={cover} alt="Card" />
        </div>
        <div className="grade">{grade}th Grade</div>
        <div className="card-content">
          <h4>
            {grade}
            {name} (2024-2025)
          </h4>
          <p>
            A curated selection of literary works for in-class analysis,
            accompanied by quizzes to deepen comprehension for {name}.
          </p>
        </div>
      </div>
    </a>
  );
}

export default ClassCard;
