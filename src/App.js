import logo from './logo.svg';
import './_normalize.css';
import './App.css';
import Form from './component/Form/Form';

function App() {
  return (
    <div id='shell'>
      <header id='header'>
        <nav id='nav'>
          <div className='tab bkash'>bKash</div>
          <div className='tab nagad'>Nagad</div>
          <div className='tab rocket'>Rocket</div>
          <div className='tab upay'>Upay</div>
        </nav>
      </header>
      <div id='content'>
        <div>
          <p>
            2000 taka Bkash Cashout charge is 20 taka. Bkash cash out charge is
            1.85%
          </p>
        </div>

        <Form />
        <div id='sug_area'>
          <h3>Popular Amounts:</h3>
          <div className='sugg'>1000</div>
          <div className='sugg'>2000</div>
          <div className='sugg'>5000</div>
          <div className='sugg'>10000</div>
        </div>
        <div id='result'>
          <div>Send money fee: 5 taka</div>
          <div>With charge, send 2020 taka</div>
          <div>If you send 2000 taka, you can cahsout 1980 taka</div>
          <div>Cashout fee from app 20</div>
          <div>Cashout fee with USSD code 20</div>
        </div>
        <div id='compare'>
          <h3>Others</h3>
          <div>Nagad: 10 tk</div>
          <div>Rocket: 20 tk</div>
          <div>Upay: 15 tk</div>
        </div>
      </div>
    </div>
  );
}

export default App;
