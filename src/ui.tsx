import React from 'react';
import './public/ui.css';
import { Button } from 'antd';


interface MSG {
  type: string;
  data: {}
}

function App() {

  const [msg, setMsg] = React.useState<MSG | null>(null)
  React.useEffect(() => {
    // This is how we read messages sent from the plugin controller
    window.onmessage = (event) => setMsg(event.data.pluginMessage)
  }, []);

  const buttonClickHandler = (event: MouseEvent) => {
    // To send a message from the UI to the plugin code
    console.log(event);
    parent.postMessage({ pluginMessage: 'anything here' }, '*')
  }


  return (
    <div>
      <div>{msg ? msg.type : 'nothing here'}</div>

      <Button
        onClick={() => buttonClickHandler}>
        button
      </Button>
    </div>
  );
}

export default App;
