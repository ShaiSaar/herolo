import React from 'react';
import './popUpWindow.css';

const PopUpWindow = (props)=>{
        return (
            <div>
                <div className="PopUpWindow-outer-wrapper"/>
                <div className="PopUpWindow-inner-wrapper">
                    <div className="PopUpWindow-resizing-wrapper">
                    {props.children}
                    </div>
                </div>
            </div>)
}


export default PopUpWindow;
