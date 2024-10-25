import React from 'react';
import ReactDOM from 'react-dom';
import { NumberTickerProjects } from "@/components/magicui/number-ticker-projects";
import { CoolModeBS } from "@/components/magicui/cool-mode-BS";
// import { BorderBeamBS } from "@/components/magicui/border-beam-BS";

ReactDOM.render(
    <React.StrictMode>
      <NumberTickerProjects />
    </React.StrictMode>,
    document.getElementById('number-ticker-projects')
  );

  ReactDOM.render(
    <React.StrictMode>
      <CoolModeBS />
    </React.StrictMode>,
    document.getElementById('cool-mode-BS') // Render button here
  );

  // ReactDOM.render(
  //   <React.StrictMode>
  //     <BorderBeamBS />
  //   </React.StrictMode>,
  //   document.getElementById('border-beam-BS') // Render button here
  // );




