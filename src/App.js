import styled from "styled-components";
const Container = styled.div`
  background-color: #f4f4f4;
  display: grid;
  grid-template-columns: repeat(50, 20px);
  grid-template-rows: repeat(30, 20px);
`
const Wrapper = styled.div`
  border: 1px solid black;
`

function App() {
  const changeColor = (id) => {
    const element = document.getElementById(id.toString())
    const color = element.style.backgroundColor
    element.style.backgroundColor = color === 'red' ? 'white' : 'red'
  }
  const render = () => {
    let tmp = []

    for (let index = 0; index < 1500; index++) {
      tmp.push(index)
    }
    return tmp.map(
      (index) => (
        <Wrapper id={index} onClick={() => changeColor(index)}>
          
        </Wrapper>

      )
    )
  }
  return (
    <div>
      <Container>
        {
          render()
        }
      </Container>
      <button onClick={() => {console.log('dupa')}}>
        dupa
      </button>
    </div>

  );
}

export default App;
