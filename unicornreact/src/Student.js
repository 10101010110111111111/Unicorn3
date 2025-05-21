function Student(props) {
  return (
    <div>
        <p>Name: {props.name} </p>
        <p>Age: {props.age} </p>
        <p>Student: {props.isStudent ? "yes" : "No"} </p>
    </div>
  );
}
Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool
};
Student.defaultProps = {
  name: "John Doe",
  age: 18,
  isStudent: false
};
export default Student;