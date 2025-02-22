import PropTypes from 'prop-types';

function List() {
    const fruits = [{ id: 1, name: "apple", calories: 342 },
    { id: 2, name: "banana", calories: 21 },
    { id: 3, name: "cherry", calories: 232 },
    { id: 4, name: "elderberry", calories: 45 },
    { id: 5, name: "date", calories: 2 },
    ];
    /*
            fruits.sort((a, b) => a.calories - b.calories); // Sort the fruits by calories
            fruits.sort((a, b) => a.name.localeCompare(b.name)); // Sort the fruits by name
            fruits.sort((a, b) => a.id - b.id); // Sort the fruits by id
            fruits.sort((a, b) => b.calories - a.calories); // Sort the fruits by calories in descending order  
            fruits.sort((a, b) => b.name.localeCompare(a.name)); // Sort the fruits by name in descending order
            fruits.filter(fruit => fruit.calories < 100); // Filter the fruits by calories
            fruits.filter(fruit => fruit.name.length > 5); // Filter the fruits by name

    */
    const listItems = fruits.map((fruit) => <li key={fruit.id}>
        {fruit.name}: &nbsp;
        <b>{fruit.calories}</b></li>);


    return (
        <ol>
            {listItems}
        </ol>
    );
}

List.PropTypes = {
    fruits: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        calories: PropTypes.number.isRequired
    }))
}

export default List;