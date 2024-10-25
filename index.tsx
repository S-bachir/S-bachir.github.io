import React from 'react';
import ReactDOM from 'react-dom';
import { NumberTickerProjects } from "@/components/magicui/number-ticker-projects";
import { CoolModeBS } from "@/components/magicui/cool-mode-BS";

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