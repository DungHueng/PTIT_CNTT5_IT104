import { Component } from 'react'
  type State ={
    isCheck:boolean
  }
export default class ThemeSwitcher extends Component <object,State>{
   constructor(props:object){
    super(props);
    this.state={
        isCheck:false
    }
   }
handleTheme = () => {
  if (this.state.isCheck === false) {
    this.setState({ isCheck: true });
  } else {
    this.setState({ isCheck: false });
  }
};
  render() {
    return (
        <div style={this.state.isCheck?{backgroundColor :"#222",width:"10000px",height:"1000px",color:"#fff"}:{backgroundColor :"#fff",width:"10000px",height:"10000px",color:"#222"}}>
            <p >{this.state.isCheck?"🌙 Chế độ Tối đang bật":"☀️ Chế độ Sáng đang bật"}</p>
            <button onClick={this.handleTheme}>Chuyển theme</button>
        </div>
    )
  }
}