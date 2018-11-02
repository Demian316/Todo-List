import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import TodoItemList from './components/TodoItemList';
import Search from './components/Search';
import Filter from './components/Filter';

class App extends Component {

  id = 3 // 이미 0,1,2 가 존재하므로 3으로 설정

  state = {
    input: '',
    todos: [
      { id: 0, text: ' Buy Apples ', checked: false },
      { id: 1, text: ' Get jobs done ', checked: true },
      { id: 2, text: ' Message to Derek ', checked: false }
    ],
    sResult: []
  }

  getVisibleTodos = ( filter ) => {
    //const {todos, sResult} = this.state;

    switch(filter){
      case 'SHOW_ALL':
        console.log('all');

      case 'SHOW_ACTIVE':
        console.log('active');

      case 'SHOW_COMPLETED':
        console.log('completed');
    }
  }

  handleChange = (event)=> {
  var updatedList = this.state.todos;
  var searcjQery = event.target.value.toLowerCase();
		updatedList = updatedList.filter((item)=>{
      var searchValue = item.text.toLowerCase();
      return searchValue.indexOf(searcjQery) !==-1;
    });
    this.setState({
      input: event.target.value,
      sResult: updatedList});
 }


  handleCreate = () => {
    const { input, todos, sResult } = this.state;
    this.setState({
      input: '', // 인풋 비우고
      // concat 을 사용하여 배열에 추가
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false
      }),
      sResult: todos.concat({
        id: this.id++,
        text: input,
        checked: false
      })
    })     
    
  }

  handleKeyPress = (e) => {
    // 눌려진 키가 Enter 면 handleCreate 호출
    if(e.key === 'Enter') {
      this.handleCreate();
    }
  }

  handleRemove = (id) => {
    const { todos, sResult } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id),
      sResult: todos.filter(todo => todo.id !== id)
    });
  }

  handleToggle = (id) => {
    const { todos, sResult } = this.state;

    // 파라미터로 받은 id 를 가지고 몇번째 아이템인지 찾습니다.
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index]; // 선택한 객체
    const nextTodos = [...todos]; // 배열을 복사

    // 기존의 값들을 복사하고, checked 값을 덮어쓰기
    nextTodos[index] = { 
      ...selected, 
      checked: !selected.checked
    };

    this.setState({
      todos: nextTodos,
      sResult: nextTodos
    });
  }
  

  componentWillMount() {
		this.setState({sResult: this.state.todos})
	}

  render() {
    const { input, todos, sResult} = this.state;
   
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      getVisibleTodos,
      handleRemove
    } = this;

    return (
      <TodoListTemplate 
       search={(
        <Search
          value={input}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onCreate={handleCreate}
        />
       )}
       filter={(
        <Filter onVisible={getVisibleTodos}/>
       )}
      >
        <TodoItemList todos={sResult} onChange={handleChange} onToggle={handleToggle} onRemove={handleRemove}/>
      </TodoListTemplate>
    );
  }
}
export default App;