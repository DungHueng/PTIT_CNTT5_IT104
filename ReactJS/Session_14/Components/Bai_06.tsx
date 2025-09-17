import React, { Component } from 'react'
type InitialState={
    gender:string;
}
export default class Bai_06 extends Component <object,InitialState>{
    constructor(props:object){
        super(props)
        this.state={
            gender:"",
        }
    }
    handleSubmit=(e:React.FocusEvent<HTMLFormElement>)=>{
      e.preventDefault();
      console.log("giới tính đã chọn ",this.state.gender);

    }
    handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
         this.setState({gender:e.target.value});
    }
  render() {
    return (
      <div>
        <p>giới tính: {this.state.gender}</p>
        <form action="" onSubmit={this.handleSubmit}>
             <input type="radio" onChange={this.handleChange} value={"Nam"} name="gender" /> <label htmlFor="">Nam</label><br />
                  <input type="radio" onChange={this.handleChange} value={"Nữ"} name="gender" /> <label htmlFor="">Nữ</label><br />
                      <input type="radio" onChange={this.handleChange} value={"Khác"} name="gender" /> <label htmlFor="">Khác</label><br />
             <button>Submit</button>

        </form>
      </div>
    )
  }
}