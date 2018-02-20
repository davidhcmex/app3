import * as React from 'react';



// type json_obj  = {
//     id:string,
//     name:string,
//     email:string,
//     age:number
//   }
//   interface Props_int {}
//   interface State_int{
//     my_data:Array<json_obj>
//   }
  
export class Refs extends React.Component<{},{a:string, b:string}> {
  
    constructor(props:{}) {
      super(props);
      this.state = {
        a:"",
        b:""
      }
    }
    update (e:React.FormEvent<EventTarget>){
        //let target = e.target as HTMLInputElement;
       
        this.setState({
            a:this["a"].value, //target.value
            b:this["b"].value,
            
        })
    }
    
    render() {
      return (
       <div>
           <input 
           ref={node=>this["a"]=node}
           type="text"
           onChange={this.update.bind(this)}/>
           {this.state.a}
           <hr />
           <input 
            ref={node=>this["b"]=node}
           type="text"
           onChange={this.update.bind(this)}/>
           {this.state.b}


       </div> 
      )
    }
  }
  