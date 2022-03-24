import { useState } from "react";
import ReactDOM from "react-dom";
import "./Form.css";

function Form() {
  const [inputs, setInputs] = useState({});


  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}));
  }

  function handleCancel() {
    let res = document.querySelector('form')
    res.style.display = 'none'
  }

 

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    document.querySelector(".client-name").value = '';
    document.querySelector(".client-comment").value = '';
    // let delet = document.querySelector(".formReview").event.target.reset();
  }

  // document.querySelector(".client-image").append("asd");

  return (
    <form onSubmit={handleSubmit} className='formReview'>
      <div className="form-top">
        <h2 className="form-title">Отзывы</h2>
        <button className="rem-form" onClick={handleCancel}>Х</button>
      </div>
      <label>Как вас зовут?
      <div className="input-block">
      <input className="client-name"
        type="text" 
        name="username" 
        placeholder="Имя Фамилия"
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      <input type="file" className="client-image" name="client-image"/>
      </div>
      </label>
      <label>Все ли вам понравилось?
        <textarea className="client-comment"
          type="textarea" 
          name="comment" 
          maxLength="200"
          minLength="0"
          placeholder="Напишите пару слов о вашем опыте..."
          value={inputs.comment || ""} 
          onChange={handleChange}
        />
        </label>
        <input type="submit" value="Отправить отзыв" className="review-submit"/>
    </form>
  )
}



export default Form

/*
Click F12 and navigate to the "Console view"
to see the result when you submit the form.
*/





// import React from 'react'

//  class Form extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: ''}; 

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }

//   handleSubmit(event) {
//     alert('A name was submitted: ' + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name:
//           <input type="text" value={this.state.value} onChange={this.handleChange} />
//         </label>
//         <label>
//           comment:
//           <input type="textarea" value={this.state.value} onChange={this.handleChange} />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }

// export default Form


//   render() {
//     return (
//       <div className="App">
//         {this.state.comments.map(comment => <div key={comment.id}>
//           <span style={{ fontStyle: 'italic' }}>{comment.id} - {format(comment.date, 'DD/MM/YYYY')}: </span>
//           <strong>{comment.name}, </strong>
//           <span>{comment.comment}</span>
//           <button onClick={this.removeComment.bind(null, comment.id)}>Удалить комментарий</button>
//         </div>)}
//         <div>
//           <label>Имя: <input
//             type="text"
//             value={this.state.form.name}
//             name="name"
//             onChange={this.handleChange} /></label>
//           <label>Комментарий: <textarea
//             name="comment"
//             value={this.state.form.comment}
//             onChange={this.handleChange}></textarea>
//           </label>
//           <button onClick={this.addComment}>Добавить комментарий</button>
//         </div>
//       </div>
//     )
//   }
// }
 
// export default Form;
