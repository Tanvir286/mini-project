 
 
 import './style.css'

 const App = () => {
  
  let todoTitle = "call Family";
  let todoDesc = "Amra Sonar Bangla Ami tomai Valobashi";
  
  let date = new Date();
  let dateName = date.getDate();
  let dateMonth = date.getMonth();
  let currentYear = date.getFullYear();

  
  let headingStyle = {
    backgroundColor : "purple",
    color: "white",
    textAlign: "center",
    padding: "15px"
  }

  return (
    
    <div>
      <h1 style={headingStyle}>Todo App</h1>
       <h3 style = {{color: 'red',fontSize: '26px'}} >{todoTitle}</h3>
       <p className="hi">{todoDesc}</p>
       <p>{todoTitle + todoDesc}</p>
       <p>{new Date().getFullYear()}</p>
       <p>{dateName + ' ' + dateMonth + " " + currentYear}</p>
    </div>
   

  )
}

export default App
 