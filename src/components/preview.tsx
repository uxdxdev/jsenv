import "./preview.css";
import { useEffect } from "react";

interface PreviewProps {
  code: string;
  err: string;
  iframe: any;
}

const html = `
  <html>
  <head>
  <style>
    html, body, #root{
      margin: 0;
      height: 100%;
      font-family: "Atkinson Hyperlegible";
    }

    #loading-text-container {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .lds-ripple {
      display: inline-block;
      position: relative;
      width: 80px;
      height: 80px;
    }
    .lds-ripple div {
      position: absolute;
      border: 4px solid black;
      opacity: 1;
      border-radius: 50%;
      animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    }
    .lds-ripple div:nth-child(2) {
      animation-delay: -0.5s;
    }
    @keyframes lds-ripple {
      0% {
        top: 36px;
        left: 36px;
        width: 0;
        height: 0;
        opacity: 0;
      }
      4.9% {
        top: 36px;
        left: 36px;
        width: 0;
        height: 0;
        opacity: 0;
      }
      5% {
        top: 36px;
        left: 36px;
        width: 0;
        height: 0;
        opacity: 1;
      }
      100% {
        top: 0px;
        left: 0px;
        width: 72px;
        height: 72px;
        opacity: 0;
      }
    }
    
    
  </style>
  </head>
  <body>
  <div id="root">
    <div id="loading-text-container">
      <div class="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
  <script>    
    const handleError = (err) => {
      const root = document.querySelector('#root');
      root.innerHTML = '<div style="color: red;"><h4>Runtime Error</h4>' + err + '</div>';
      console.error(err);
    };

    window.addEventListener('error', (event) => {
      event.preventDefault();
      handleError(event.error);
    });

    window.addEventListener('message', (event) => {
      try {
        eval(event.data);        
      } catch (err) {
        handleError(err);
      }
    }, false);
  </script>
  </body>
  </html>
`;

const Preview: React.FC<PreviewProps> = ({ code, err, iframe }) => {
  useEffect(() => {
    setTimeout(() => {
      iframe.current.contentWindow.postMessage(code, "*");
    }, 50);
  }, [code, iframe]);

  return (
    <>
      <div className="preview-wrapper">
        <iframe title="preview" ref={iframe} sandbox="allow-same-origin allow-scripts" srcDoc={html} />
        {err && <div className="preview-error">{err}</div>}
      </div>
    </>
  );
};

export default Preview;
