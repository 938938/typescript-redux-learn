import React, { useRef } from 'react';
import './NewTodo.css';

type NewTodoProps = {
  onAddTodo: (todoText: string) => void;
};
// interface 나 type 둘 다 사용 가능 (강사님은 interface를 주로 사용)

const NewTodo: React.FC<NewTodoProps> = (props) => {
  // NewTodoProps를 prop으로 받는 함수 지정
  const textInputRef = useRef<HTMLInputElement>(null);
  // HTMLInputElement가 들어갈 것을 예고
  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    // 해당 함수가 실행되는 시점에선 value값이 있을 것을 표시 (!)
    props.onAddTodo(enteredText);
    
  };
  return (
    <form onSubmit={todoSubmitHandler}>
      <div className='form-control'>
        <label htmlFor='todo-text'>Todo Text</label>
        <input type='text' id='todo-text' ref={textInputRef} />
      </div>
      <button type='submit'>Add Todo</button>
    </form>
  );
};

export default NewTodo;
