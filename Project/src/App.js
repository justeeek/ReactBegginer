import React from 'react';
import { Block } from './Block';
import { useRef } from 'react';
import './index.scss';

function App() {
  //const [Valute, setValute] = React.useState({});
  const valuteRef = useRef({});
  const [fromCurrency, setFromCurrency] = React.useState('BYN');
  const [toCurrency, setToCurrency] = React.useState('USD');
  const [fromPrice, setFromPrice] = React.useState(0);
  const [toPrice, setToPrice] = React.useState(0);
  React.useEffect(() => {
    fetch('https://www.cbr-xml-daily.ru/daily_json.js')
    .then((res) => res.json())
    .then((json) => {
      valuteRef.current = json.Valute;
      onChangeToPrice(1);
    })
    .catch((error) => {
      console.warn(error);
      alert('Не удалось получить информацию');
    });
  }, []);

  console.log(valuteRef.current[fromCurrency]?.Value);
  const onChangeFromPrice = (value) => {
    const kurs = valuteRef.current[fromCurrency]?.Value / valuteRef.current[toCurrency]?.Value;
    const result = value * kurs;
  
   // console.log(kurs);
   // console.log(Valute);
   // console.log(Valute.Value);
    setToPrice(result.toFixed(3));
    setFromPrice(value);
  }

  const onChangeToPrice = (value) => {
    const kurs = valuteRef.current[toCurrency]?.Value / valuteRef.current[fromCurrency]?.Value;
    const result = value * kurs;
    setFromPrice(result.toFixed(3));
    setToPrice(value);
  }

  React.useEffect(() => {
    onChangeFromPrice(fromPrice);
  }, [fromCurrency]);

  React.useEffect(() => {
    onChangeToPrice(toPrice);
  }, [toCurrency]);
  

  return (
    <div className="App">
      <Block 
        value={fromPrice} 
        onChangeValue={onChangeFromPrice} 
        currency={fromCurrency} 
        onChangeCurrency={setFromCurrency} />

      <Block 
        value={toPrice}
        onChangeValue={onChangeToPrice} 
        currency={toCurrency} 
        onChangeCurrency={setToCurrency} />
    </div>
  );
}

export default App;
