
import React from 'react';

class Mylist extends React.Component{
 
    render(){
      const {mybudies} = this.props;
      console.log(mybudies)
      const lists = mybudies.mybudies.map(person => {
        return(
            <li style={{padding: "20px"}} id ={person.id} className="list-group-item">
              <div><strong>Name:</strong>  <small>{person.name}</small></div>
              <div><strong>Age:</strong>  <small>{person.age}</small></div>
              <div><strong>Profession:</strong> <small>{person.profession}</small></div>
            </li>
          )
        }
      )
      return(
        <ul className="list-group">
          {lists}
        </ul>
     
      )
    }
}
export default Mylist;