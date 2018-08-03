import React, {Component} from 'react';
import './popUpWindow.css';

class PopUpWindow extends Component {

    render() {
        return (
            <div>
                <div className="PopUpWindow-outer-wrapper"/>
                <div className="PopUpWindow-inner-wrapper">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default PopUpWindow;
