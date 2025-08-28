import React, { useRef, useState} from 'react'

export default function RenderCounter() {
    const [value, setValue] = useState<string>('');

    const countRender = useRef<number>(0);
    countRender.current += 1;

    return (
        <div>
            <h2>🔢 Component Render Counter</h2>
            <form>
                form: <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
                <p>Component đã render: {countRender.current} lần</p>
            </form>
    </div>
  )
}