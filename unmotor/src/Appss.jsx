import React, { useState } from 'react';
import './App.css';

function App() {
  // Використовуємо стан для модального вікна
  const [showModal, setShowModal] = useState(true);

  // Функція для закриття модального вікна
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>GoodTruck</h1>
      </header>

      {/* Модальне вікно */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Реєстрація</h2>
            <form>
              <label>
                name:
                <input type="text" name="name" placeholder="Введіть ім'я" />
              </label>
              <br />
              <label>
                phone:
                <input type="tel" name="phone" placeholder="Введіть номер телефону" />
              </label>
              <br />
              <button type="button" onClick={closeModal}>
                Зареєструватись
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
