import instructor from '../../assets/instructor.json';

function Instructor() {
  return (
    <div className="main-container">
      <div className="flex flex-col gap-8 text-black">
        <h4>강사 소개</h4>

        {instructor.map((item) => (
          <>
            <p>{`${item.name} 강사 | ${item.desc}`}</p>

            <hr />
          </>
        ))}
      </div>
    </div>
  );
}

export default Instructor;
