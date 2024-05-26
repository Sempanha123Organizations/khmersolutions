import React, {useState, useEffect} from "react";

const SwitchTheme = () => {

    const [IsDarkTheme , SetDarkTheme] = useState(false);

const Funtheme = () => {
    SetDarkTheme(!IsDarkTheme);
};

useEffect(() => {
    if(IsDarkTheme){
        document.documentElement.classList.add('theme-dark');
    }
    else{
        document.documentElement.classList.remove('theme-dark');
    }
}, [IsDarkTheme]);


  return (
    <>
      <div className="switch-box">
        <label id="switch" className="switch">
          <input type="checkbox" id="slider" onClick={Funtheme} />
          <span className="slider round"></span>
        </label>
      </div>
    </>
  );
};

export default SwitchTheme;
