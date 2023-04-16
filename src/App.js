// - UI 구현하기
// - Todo 추가 하기
// - Todo 삭제 하기 **`(화) 17:00까지 완료)`**
// - Todo 완료 상태 변경하기 (완료 ↔ 진행중) **`(수)까지 17:00완료)`**
import { useState } from 'react';
import './App.css';

function App() {
  const [todo, setTodo] = useState([
    { id: 0, title: '1번', content: '1번 내용', isDone: false },
    { id: 1, title: '2번', content: '2번 내용', isDone: false },
  ])

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const titleChangeHandler = (a) => {
    setTitle(a.target.value)
  }

  const contentChangeHandler = (a) => {
    setContent(a.target.value)
  }

  const clickAddButtonHandler = () => {
    const addlist = {
      id: todo.length + 1,
      title,
      content
    }

    setTodo([...todo, addlist])
  }

  const clickRemoveButtonHandler = (id) => {
    const newTodo = todo.filter((a) => a.id !== id)
    setTodo(newTodo)
  }

  const clickCompleteButtonHandler = id => setTodo(a =>
    a.map(item => item.id === id ? { ...item, isDone: !item.isDone } : item)
  );



  return (
    <div className="App">
      <div className='layout'>
        <div className='toptitle'>My Todo List<span>React</span></div>
        <div className='inputbox'>
          <div className='add-form'>
            <div className='input-group'>
              <label class='form-label'>제목</label>
              <input className='content' value={title} onChange={titleChangeHandler}></input>
              <label className='form-label'>내용</label>
              <input className='content' value={content} onChange={contentChangeHandler}></input>
            </div>
            <button className='add-button' onClick={clickAddButtonHandler}>추가하기</button>
          </div>
        </div>
        <div className='board'>
          <h2> Working.. 🔥</h2>
          <div className='list-wrapper'>
            <Listbox
              todo={todo.filter((item) => !item.isDone)}
              clickRemoveButtonHandler={clickRemoveButtonHandler}
              clickCompleteButtonHandler={clickCompleteButtonHandler}
            />
          </div>

          <h2>Done..! 🎉</h2>
          <div className='list-wrapper'>
            <Listbox
              todo={todo.filter((item) => item.isDone)}
              clickRemoveButtonHandler={clickRemoveButtonHandler}
              clickCompleteButtonHandler={clickCompleteButtonHandler}
            />
          </div>
        </div>
      </div>
    </div>
  )


}

function Listbox({ todo, clickRemoveButtonHandler, clickCompleteButtonHandler }) {
  return (
    <div className='list-wrapper'>
      {todo.map((a) => {
        return (
          <div key={a.id} className='listbox'>
            <h2>{a.title}</h2>
            <div className='listcontent'>{a.content}</div>
            <div className='button-set'>
              <button className='todo-delete-button' onClick={() => clickRemoveButtonHandler(a.id)}>삭제하기</button>
              <button className='todo-complete-button' onClick={() => clickCompleteButtonHandler(a.id)}>
                {a.isDone ? '취소' : '완료'}
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}



export default App;