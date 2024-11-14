 

 function Card(props){
  
   // Destructure the props object to extract specific properties
    let {img,title,description,btnColor,click} = props;
    
    return(
        <div className="col-lg-4">
          <div className="card" >
            <img src= {img} className="card-img-top" alt="..." />
            <div className="card-body">
             <h5 className="card-title">{title}</h5>
             <p className="card-text">{description}</p>
             <a href="#" className= {`btn  btn-${btnColor}`}>{click}</a>
            </div>
         </div>
      </div>
      );
 }

export default Card; 