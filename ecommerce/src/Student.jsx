
import PropTypes from 'prop-types';

function Student(props) {
  return (
    <div>
        <p>{props.name}</p>
        <p>{props.age}</p>
    </div>
  );
}

/*
props = readonly properties that are passed from parent component to child component.

Any PropTypes are not matched, a warning will be shown in the console.
But the application will still work.

DefaultProps are used to set default values for the props.
*/
Student.defaultProps = {
    name: "Default Name",
    age: 0
};
Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number
};
export default Student;