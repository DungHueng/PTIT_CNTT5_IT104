import React, { Component } from 'react'
type Product={
   id:string;
   name:string;
   price:string;
   quantity:string;
}
type ListProduct={
    product:Product[];
}
export default class Bai_05 extends Component <object,ListProduct> {
    constructor(props:object){
        super(props)
        this.state={
            product:[{
            id:"",
            name:"",
            price:"",
            quantity:"",
        },
 ]}
    }


handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
 e.preventDefault();
 console.log(this.state.product);
}
handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
   const {name,value}=e.target;
   this.setState({product:{...this.state.product,[name]:value}})
}
  render() {
    return (
      <div>
      <form action="" onSubmit={this.handleSubmit}>
          <h4>Thêm sản phẩm mới</h4>
        <label htmlFor="">Mã sản phẩm</label> <br />
        <input type="text"  onChange={this.handleChange} name='id' /> <br />
        <label htmlFor="">Tên sản phẩm</label> <br />
          <input type="text"  onChange={this.handleChange} name='name' /> <br />
        <label htmlFor="">Giá</label><br />
          <input type="text"  onChange={this.handleChange} name='price' /><br />
        <label htmlFor="">Số lượng</label><br />
          <input type="number"  onChange={this.handleChange} name='quantity' min={1}/><br />
          <button style={{backgroundColor:'blue', color:'white'}}>Đăng ký</button>
      </form>
      </div>
    )
  }
}