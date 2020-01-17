import React from 'react';
import './style.css';

const CallBack = () => {
    return (
        <a type="button" data-toggle="modal" data-target="#myModal">
            <div className="pulse">
                <i className="fa fa-phone"/>
            </div>
        </a> 
    );
};

export default CallBack;