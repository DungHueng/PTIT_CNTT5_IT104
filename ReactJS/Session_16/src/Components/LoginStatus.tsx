import { Component } from 'react'
interface State {
  isLoggedIn: boolean;
}

export default class LoginStatus extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  handleSubmit=(event: React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    if(this.state.isLoggedIn===false){
      this.setState({isLoggedIn:true});
    }
  }

  render() {
    return (
      <div>
        <h2>
          {this.state.isLoggedIn
            ? "✅ Xin chào, User!"
            : "🔒 Vui lòng đăng nhập để tiếp tục."}
        </h2>
        <form onSubmit={this.handleSubmit}>
          <button type="submit">
            {this.state.isLoggedIn ? "Đăng xuất" : "Đăng nhập"}
          </button>
        </form>
      </div>
    )
  }
}