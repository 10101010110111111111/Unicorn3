import PropTypes from 'prop-types';

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
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  isStudent: PropTypes.bool.isRequired
};

export default Student;