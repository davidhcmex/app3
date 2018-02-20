import * as React from 'react';
import axios from 'axios';


// type Props = {
//   vehicleType: 'Car' | 'Truck' | 'Motorcycle',
//   color: string,
//   numWheels: 2 | 4,
//   age: number,
// };
// type State = {
//   books:Array<string>
// };

// export class Vehicle extends React.Component<Props, State> {
//   constructor(props:Props) {
//     super(props)
//     this.state = {books: [
//       'pro express.js',
//       'practical node.js',
//       'rapid prototyping with js'
//       ]}
//     }
//   render() {
//     return(
//     <div>
//       <div>VehicleType: {this.props.vehicleType}</div>
//       <div>Color: {this.props.color}</div>
//       <div>Wheels: {this.props.numWheels}</div>
//       <div>Age: {this.state.books[0]}</div>

//     </div>);
//   }
// }


type json_obj = {
  id: string,
  name: string,
  email: string,
  age: number
}
interface Props_int { }
interface State_int {
  my_data: Array<json_obj>
  a: string
}

export class Data_json extends React.Component<Props_int, State_int> {

  constructor(props: Props_int) {
    super(props);
    this.state = {
      my_data: [],
      a:""
    }
  }
  componentDidMount() {
    const query = "age=34"

    axios.get(`http://localhost:3000/customers?${query}`).then(response => {
      this.setState({ my_data: Array.from(response.data) });
      console.log("we")
    })

  }

  update(e: React.FormEvent<EventTarget>) {
    
    let target = e.target as HTMLInputElement;
    this.setState({
      a: target.value
    })
    const query1 = "age=" + target.value
    console.log(query1)
    axios.get(`http://localhost:3000/customers?${query1}`).then(response => {
      this.setState({ my_data: Array.from(response.data) });
      console.log("we")
    })
  }

  render() {
    return (
      <div >
        <input
          type="text"
          onChange={this.update.bind(this)} />
        {this.state.a}
        {this.state.my_data.map((value, index) => <div key={index}>{value.id}{value.name}</div>
        )}
      </div>
    )
  }
}
