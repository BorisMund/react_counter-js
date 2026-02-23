import { useState } from 'react';
import './App.scss';

export const App = () => {
  const [count, setCount] = useState(0);

  const addOne = () => { 
   setCount(prev => prev + 1);
  };

  const add100 = () => {
    setCount(prev => prev + 100);
  };

  // DON'T change the code belowэ
  const increase = () => {
    if (count % 5 === 0) {
      add100();
    }

    addOne();
  };

  return (
    <div className="App">
      <h1 className="App__title">{`Count: ${count}`}</h1>

      <button type="button" className="App__add-one" onClick={addOne}>
        Add 1
      </button>

      <button type="button" className="App__add-100" onClick={add100}>
        Add 100
      </button>

      <button type="button" className="App__increase" onClick={increase}>
        Increase
      </button>
    </div>
  );
};


// У тебя есть компонент App с заголовком и тремя кнопками. 
// Нужно реализовать функции addOne и add100, чтобы кнопки работали следующим образом:

  

// – Кнопка **Add 1** вызывает метод addOne и прибавляет 1 к счётчику.

// – Кнопка **Add 100** вызывает метод add100 и прибавляет 100 к счётчику.