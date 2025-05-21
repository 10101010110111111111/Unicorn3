import './index.css';
function Food() {
    const food1 = "banaana";
    const food2 = "apple";
    const food3 = "orange";
    const food4 = "grape";
  return (
    <div>
      <h1>Food List</h1>
      <ul className='liWithoutDots'>
        <li>{food1}</li>
        <li>{food2}</li>
        <li>{food3}</li>
        <li>{food4}</li>
      </ul>
    </div>
  );
}
export default Food;