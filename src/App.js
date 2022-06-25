import './App.css';
import React from "react";
import 'animate.css';



function App() {
  return (
    <div className="App">
      <div className="first-content">
        <p className="bounce">Azamat Alishev<strong className="fade-in">.</strong></p>
      </div>
      <div className="content-description">
        <p className="paragraph">Based in the US. Currently at Stash working as a Devops Engineer.</p>
        <p className="paragraph">I like computers, clouds, pipelines and asking dumb questions.</p>
      </div>
      <div className="content-contact">
      <h2 class="header">Favorite acronyms/tech that might impress you:</h2>
        <p className="paragraph">aws, hcl, sso, lol, ci/cd, k8s, ec2, python, datadog, lmao, spinnaker, gha </p>
      </div>
      <div className="content-contact">
        <h2 class="header">contact:</h2>
        <a className="link" href="mailto:aoalishev@gmail.com">email</a>
        <br></br>
        <a className="link" href="https://www.linkedin.com/in/azamat-alishev/">linkedin</a>
        <br></br>
        <a className="link" href="https://github.com/azamatalishev-cyber">github</a>
        <br></br>
        <a className="link" href="https://docs.google.com/document/d/e/2PACX-1vRv7Z21aGRLJwPy725tOQDGfzYMXtSNsXCU3oal9bRTusFFL0dcErMHu48Uvuo2fA/pub">resume</a>
      </div>
    </div>
  );
}

export default App;
