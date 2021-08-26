import { Button } from "@material-ui/core";
import { GitHub, Mail, WhatsApp } from "@material-ui/icons";
import "./app.css";
import Form from "./Form";

function App() {
  
  return (
    <div className="app">
      <div className="header">
        <h1>FastTexts</h1>
        <WhatsApp />
      </div>
      <div className="main">
        <Form />
        <div className="footer">
            <a href="https://github.com/sameerfa/fasttexts/tree/master">
              <Button>
                <GitHub />
              </Button>
            </a>
            <a href="mailto:write2sameerfa@gmail.com">
              <Button>
                <Mail />
              </Button>
            </a>
            
        </div>
      </div>
    </div>
  );
}

export default App;
