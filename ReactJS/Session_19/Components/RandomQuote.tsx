import React, { useState } from 'react'

export default function RandomQuote() {
    const [quote, setQuote] = useState("");
    const changeQuote = () => {
        const change = Math.floor(Math.random() * 5) + 1 ;
        switch(change) {
            case 1: 
                setQuote("Học, học nữa, học mãi.");
                break;
            case 2:
                setQuote("Thất bại là mẹ thành công.");
                break;
            case 3:
                setQuote("Không gì là không thể.");
                break;
            case 4:
                setQuote("Kiến tha lâu đầy tổ.");
                break;
            case 5:
                setQuote("Muốn đi nhanh hãy đi một mình, muốn đi xa hãy đi cùng nhau.");
                break;
            case 6:
                return quote
                break;
        }
    }

  return (
    <div>
      <h3>🧠 Câu nói truyền cảm hứng hôm nay: </h3>
      <p>{quote}</p>
      <button onClick={changeQuote}>Lấy câu nói mới</button>
    </div>
  )
}
