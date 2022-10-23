// const App = () =>{
  
//   console.log("Hello from component");

//   const now = new Date();
//   const a = 10
//   const b = 20 



//   return (
//   <div>
//     <p>Hello World, it is {now.toString()}</p>
//     <p>{a} plus {b} is {a+b}</p>
//   </div>
// )
// }

const Hello = (props) =>{
  return(
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const App = () =>{

  const name = "Peter";
  const age =  30;
  
  return(
    <>
        <h1>Greattings</h1>
    <Hello name="Jose" age="22" />
    <Hello name="John" age={33 + 22}/>
    <Hello name={name} age={age} />
    <Hello />


    </>

  )
}
export default App;
