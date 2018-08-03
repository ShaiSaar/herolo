import * as React from 'react';
import './mobileHeaders.css';
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser, faClock, faBook, faHashtag} from '@fortawesome/free-solid-svg-icons'

library.add(faClock, faUser, faBook, faHashtag)

const MobileHeaders = (props) => {
    return <FontAwesomeIcon className="MobileHeaders-mobile-title" icon={props.type}/>
}

export default MobileHeaders;
