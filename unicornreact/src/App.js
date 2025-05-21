import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Food from './Food';
import Card from './Card';
import Student from './Student';
import UserGreeting from './UserGreeting';
function App() {
  return (
    <div className="App">
      <Header />
      <Food />
      <UserGreeting isLoggedIn={true} username = {"BroCode"}/>
      <Card />ˇ
      <Card />
      <Student name="peter" age= {30} isStudent = {true} />
      <Student name="mark" age= {1} isStudent = {false} />
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
