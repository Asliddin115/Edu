import React from 'react';
import axios from 'axios';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      surname: '',
      date: '',
      phone: '',
      showMessage: false,
      message: '',
      isNameFilled: true,
      isSurnameFilled: true,
      isDateFilled: true,
      isPhoneFilled: true,
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    const isFilled = value !== '';

    this.setState({
      [name]: value,
      isNameFilled: name === 'name' ? isFilled : this.state.isNameFilled,
      isSurnameFilled: name === 'surname' ? isFilled : this.state.isSurnameFilled,
      isDateFilled: name === 'date' ? isFilled : this.state.isDateFilled,
      isPhoneFilled: name === 'phone' ? isFilled : this.state.isPhoneFilled,
      showMessage: false,
      message: '',
    });
  };

  handleSave = () => {
    const { name, surname, date, phone } = this.state;

    if (!name || !surname || !date || !phone) {
      this.setState({
        showMessage: true,
        message: 'Iltimos, hamma maydonlarni to\'ldiring!',
      });
      return;
    }

    axios
      .post('https://6507df0356db83a34d9b6474.mockapi.io/acceptance', {
        name,
        surname,
        date,
        phone,
      })
      .then((response) => {
        const newId = response.data.id;
        this.setState({
          showMessage: true,
          message: `Malumot muvaffaqiyatli qo\'shildi! ID: ${newId}`,
          name: '',
          surname: '',
          date: '',
          phone: '',
          isNameFilled: true,
          isSurnameFilled: true,
          isDateFilled: true,
          isPhoneFilled: true,
        });
      })
      .catch((error) => {
        console.error('Xatolik:', error);
      });
  };

  render() {
    const {
      name,
      surname,
      date,
      phone,
      showMessage,
      message,
      isNameFilled,
      isSurnameFilled,
      isDateFilled,
      isPhoneFilled,
    } = this.state;

    return (
      <div className="container">
        <h1 className="title">Yangi O'quvchi</h1>

        {showMessage && <p className="message">{message}</p>}

        <div className="form-group">
          <label htmlFor="name">Ism</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={this.handleInputChange}
            className={isNameFilled ? '' : 'error'}
          />
          {!isNameFilled && <p className="error-message">Ismni to'ldiring!</p>}
        </div>

        <div className="form-group">
          <label htmlFor="surname">Familiya</label>
          <input
            type="text"
            id="surname"
            name="surname"
            value={surname}
            onChange={this.handleInputChange}
            className={isSurnameFilled ? '' : 'error'}
          />
          {!isSurnameFilled && <p className="error-message">Familiyani to'ldiring!</p>}
        </div>

        <div className="form-group">
          <label htmlFor="date">Tug'ilgan sanasi</label>
          <input         
            type="date"
            id="date"
            name="date"
            value={date}
            onChange={this.handleInputChange}
            className={isDateFilled ? '' : 'error'}
          />
          {!isDateFilled && <p className="error-message">Sanani to'ldiring!</p>}
        </div>

        <div className="form-group">
          <label htmlFor="phone">Telefon raqami</label>
          <input
            type="number"
            id="phone"
            name="phone"
            value={phone}
            onChange={this.handleInputChange}
            className={isPhoneFilled ? '' : 'error'}
          />
          {!isPhoneFilled && <p className="error-message">Telefon raqamini to'ldiring!</p>}
        </div>

        <button className="save-button2" onClick={this.handleSave}>
          Saqlash
        </button>
      </div>
    );
  }
}

export default App;
