
import Card from './component/Card';

function App() {
 

  return (
    <div className="row">

     <Card img="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" title="Card 1" 
     description = 'Amar sonar bangla ami tomai valo bashi' btnColor="primary" 
     click="Click Here1"
     />
     
     <Card img="https://images.unsplash.com/photo-1683009686716-ac2096a5a73b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw0Nnx8fGVufDB8fHx8fA%3D%3D" title='Card 2'  
     description = 'Choro din tomar akhas toamr batas'   btnColor="danger"
     click="Click Here2"
     /> 
     
     <Card img="https://images.unsplash.com/photo-1703201383936-26bbe6c5fc32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1NHx8fGVufDB8fHx8fA%3D%3D" title='Card 3' 
     description = 'o ma amr pare bajai bashi'  btnColor="warning"
     click="Click Here3"
     />
     
     
       
    </div>

   
  )
}

export default App
