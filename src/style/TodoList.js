import styled from '@emotion/styled';

const Wrapper = styled.div`
  min-width: 800px;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 10px 0;
`

const Title = styled.div`
  width: 100%;
  height: 30px;
  clear: both;
  border: 2px solid gray;
  border-top: 0;
  border-bottom: 0;
  padding: 5px 15px;
  display: flex;
  align-items: center;
`

const TitleLeft = styled.p`
  font-size: 18px;
`

const TitleRight = styled.p`
  font-size: 12px;
  margin-left: auto;
`

const UserInput = styled.div`
  width: 100%;
  height: 80px;
  margin: 5px 0; 
  clear: both;
  border-radius: 10px;
  background-color: #f5f2f5;
  padding: 5px 25px;
  display: flex;
  align-items: center;
`

const UserInputLeft = styled.div`
  width: 90%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-right: 10px;
`

const UserInputTitle = styled.div`
  width: 4%;
  font-size: 0.8rem;
  font-weight: 700;
`

const UserInputBoxTitle = styled.input`
  width: 20%;
  height: 2rem;
  padding: 0 10px;
  border: 0.5px solid gray;
  border-radius: 10px;
  margin-right: 13px;
`

const UserInputContent = styled.div`
  width: 4%;
  font-size: 0.8rem;
  font-weight: 700;
`

const UserInputBoxContent = styled.input`
  width: 60%;
  height: 2rem;
  padding: 0 10px;
  border: 0.5px solid gray;
  border-radius: 10px;
`

const UserInputRight = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`

const UserInputButton = styled.button`
  background-color: #fff;
  border: 1px solid #d5d9d9;
  border-radius: 8px;
  box-shadow: rgba(213, 217, 217, .5) 0 2px 5px 0;
  box-sizing: border-box;
  color: #0f1111;
  cursor: pointer;
  display: inline-block;
  font-family: "Amazon Ember",sans-serif;
  font-size: 13px;
  font-weight: 600;
  line-height: 29px;
  padding: 0 10px 0 11px;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  width: 6rem;

  &:hover {
    background-color: #f7fafa;
  }
`

const MainContents = styled.div`
  margin: 12px 0;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  // background-color: black;
`

const WorkingArea = styled.div`
  display: flex;
  flex-direction: column;
`

const DoneArea = styled.div`
  display: flex;
  flex-direction: column;
`

const WorkingAreaTitle = styled.div`
  font-size: 20px;
  font-weight: 550;
  margin: 0 0 10px 0;
`

const WorkingAreaContent = styled.div`
  min-height: 200px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const DoneAreaTitle = styled.div`
  font-size: 20px;
  font-weight: 550;
  margin: 0 0 10px 0;
`

const DoneAreaContent = styled.div`
  min-height: 200px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const TodoCard = styled.div`
  width: 240px;
  height: 150px;
  display: flex;
  flex-direction: column;
  padding: 10px 10px;
  border: 2px solid green;
  border-radius: 10px;
  margin: 10px;
`

const TodoCardTitle = styled.div`
  width: 95%;
  height: 50px;
  font-size: 1.2rem;
`

const TodoCardContent = styled.div`
  width: 95%;
  height: 50px;
  font-size: 0.9rem;
`

const TodoCardButtonBoxes = styled.div`
  width: 95%;
  display: flex;
  flex-direction: row;
  justify-content: center;

`

const TodoCardDeleteButton = styled.button`
  background-color: #F393A0;
  border: 1px solid #d5d9d9;
  border-radius: 8px;
  box-shadow: rgba(213, 217, 217, .5) 0 2px 5px 0;
  box-sizing: border-box;
  color: #0f1111;
  cursor: pointer;
  display: inline-block;
  font-family: "Amazon Ember",sans-serif;
  font-size: 13px;
  font-weight: 600;
  line-height: 29px;
  padding: 0 10px 0 11px;
  margin: 0 5px;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  width: 4rem;

  &:hover {
    background-color: #F17787;
  }
`

const TodoCardDoneButton = styled.button`
  background-color: #9FF1AB;
  border: 1px solid #d5d9d9;
  border-radius: 8px;
  box-shadow: rgba(213, 217, 217, .5) 0 2px 5px 0;
  box-sizing: border-box;
  color: #0f1111;
  cursor: pointer;
  display: inline-block;
  font-family: "Amazon Ember",sans-serif;
  font-size: 13px;
  font-weight: 600;
  line-height: 29px;
  padding: 0 10px 0 11px;
  margin: 0 5px;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  width: 4rem;

  &:hover {
    background-color: #65EE79;
  }
`

export { Wrapper, Title, TitleLeft, TitleRight, UserInput, UserInputLeft, 
  UserInputTitle, UserInputContent, UserInputRight, UserInputButton,
  UserInputBoxTitle, UserInputBoxContent, MainContents, WorkingArea, 
  DoneArea, WorkingAreaTitle, WorkingAreaContent, DoneAreaTitle, 
  DoneAreaContent, TodoCard, TodoCardTitle, TodoCardContent,
  TodoCardButtonBoxes, TodoCardDeleteButton, TodoCardDoneButton }