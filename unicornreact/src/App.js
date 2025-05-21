import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Food from './Food';
import Card from './Card';
function App() {
  return (
    <div className="App">
      <Header />
      <Food />
      <Card />ˇ
      <Card />
      <Card />
      <Card />

      <main>
        <h2>Welcome to the Unicorn React App</h2>
        <p>This is a simple React application with Bootstrap styling.</p>
        <p>Feel free to explore and customize it!</p>
      </main>
      
      <Footer />
    </div>
  );
 
}

export default App;
