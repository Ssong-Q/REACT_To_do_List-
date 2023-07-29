import reset from './style/reset';
import { Global } from '@emotion/react';
import { useState } from 'react';
import { Wrapper, Title, TitleLeft, TitleRight, UserInput, UserInputLeft, 
  UserInputTitle, UserInputContent, UserInputRight, UserInputButton,
  UserInputBoxTitle, UserInputBoxContent, MainContents, WorkingArea, 
  DoneArea, WorkingAreaTitle, WorkingAreaContent, DoneAreaTitle, 
  DoneAreaContent, TodoCard, TodoCardTitle, TodoCardContent,
  TodoCardButtonBoxes, TodoCardDeleteButton, TodoCardDoneButton } from './style/TodoList';

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [todo, setTodo] = useState([{
    id: 0,
    title: "",
    content: "",
    isDone: false,
  }]);
  const [completed, setCompleted] = useState([{
    id: 0,
    title: "",
    content: "",
    isDone: true,
  }])

  const onChangeTitle = function (event) {
    setTitle(event.target.value);
  };

  const onChangeContent = function (event) {
    setContent(event.target.value);
  };

  const onClickAddButton = function () {
    if (title === "" && content === "") {
      alert("제목 또는 내용을 입력해주세요.")
    } else {
      const newTodo = {
        id: todo[todo.length - 1].id + 1,
        title: title,
        content: content,
        isDone: false,
      };
      setTodo([...todo, newTodo]);
      setTitle("");
      setContent("");      
    }
  }

  const onClickDeleteIngButton = function (id) {
    // todo.filter(todo => todo.id !== 어떤값)
    const newTodo = todo.filter(todo => todo.id !== id);
    setTodo(newTodo);
  }

  const onClickDoneButton = function (id) {
    const todoDoneIndex = todo.findIndex((num) => num.id === id);
    const doneTodo = {
      id: completed[completed.length - 1].id + 1,
      title: todo[todoDoneIndex].title,
      content: todo[todoDoneIndex].content,
      isDone: true,
    };
    setCompleted([...completed, doneTodo]);
    
    const newTodo =  todo.filter(todo => todo.id !== id);
    setTodo(newTodo);
  }

  const onClickDeleteDoneButton = function (id) {
    const newCompleted = completed.filter(completed => completed.id !== id);
    setCompleted(newCompleted);
  }

  const onClickCancelButton = function (id) {
    const todoCancelIndex = completed.findIndex((num) => num.id === id);
    const cancelTodo = {
      id: todo[todo.length - 1].id + 1,
      title: completed[todoCancelIndex].title,
      content: completed[todoCancelIndex].content,
      isDone: false,
    };
    setTodo([...todo, cancelTodo]);
    
    const newTodo =  completed.filter(completed => completed.id !== id);
    setCompleted(newTodo);
  }

  return (
    <Wrapper>
      <Global styles={reset} />
      <Title>
        <TitleLeft>My Todo List</TitleLeft>
        <TitleRight>React</TitleRight>
      </Title>
      <UserInput>
        <UserInputLeft>
            <UserInputTitle>제목</UserInputTitle>
            <UserInputBoxTitle value={title} onChange={onChangeTitle} />
            <UserInputContent>내용</UserInputContent>
            <UserInputBoxContent value={content} onChange={onChangeContent} maxLength={35}/>
        </UserInputLeft>
        <UserInputRight>
          <AddButton onClickAddButton={onClickAddButton}>추가하기</AddButton>
        </UserInputRight>
      </UserInput>
      <MainContents>
        <WorkingArea>
          <WorkingAreaTitle>Working...🔥</WorkingAreaTitle>
          <WorkingAreaContent>{todo.filter((item) => {
            return item.id !== 0;
          }).map((item) => {
            return (
              <IngTodo 
                key={item.id}
                item={item} 
                onClickDeleteIngButton={onClickDeleteIngButton}
                onClickDoneButton={onClickDoneButton}
              />
            );
          })}</WorkingAreaContent>
        </WorkingArea>
        <DoneArea>
          <DoneAreaTitle>Done...🎉</DoneAreaTitle>
          <DoneAreaContent>{completed.filter((item) => {
            return item.id !== 0;
          }).map((item) => {
            return (
              <DoneTodo 
                key={item.id}
                item={item} 
                onClickDeleteDoneButton={onClickDeleteDoneButton}
                onClickCancelButton={onClickCancelButton}
              />
            );
          })}</DoneAreaContent>
        </DoneArea>
      </MainContents>
    </Wrapper>
  );
}

const AddButton = ({onClickAddButton, children}) => {
  return (
    <UserInputButton onClick={onClickAddButton}>{children}</UserInputButton>
  )
};

const IngTodo = ({ item, onClickDeleteIngButton, onClickDoneButton }) => {
  return (
    <TodoCard key={item.id}>
      <TodoCardTitle>{item.title}</TodoCardTitle>
      <TodoCardContent>{item.content}</TodoCardContent>
      <TodoCardButtonBoxes>
        <TodoCardDeleteButton onClick={() => onClickDeleteIngButton(item.id)}>삭제</TodoCardDeleteButton>
        <TodoCardDoneButton onClick={() => onClickDoneButton(item.id)}>완료</TodoCardDoneButton>
      </TodoCardButtonBoxes>
    </TodoCard>
  )
};

const DoneTodo = ({ item, onClickDeleteDoneButton, onClickCancelButton }) => {
  return (
    <TodoCard key={item.id}>
      <TodoCardTitle>{item.title}</TodoCardTitle>
      <TodoCardContent>{item.content}</TodoCardContent>
      <TodoCardButtonBoxes>
        <TodoCardDeleteButton onClick={() => onClickDeleteDoneButton(item.id)}>삭제</TodoCardDeleteButton>
        <TodoCardDoneButton onClick={() => onClickCancelButton(item.id)}>취소</TodoCardDoneButton>
      </TodoCardButtonBoxes>
    </TodoCard>
  )
};

export default App;


