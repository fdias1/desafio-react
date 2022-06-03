import React from 'react';
import './style.css'

const CallingModalBody = ({ date='01-01-0001', time='00:00', from='unknown', handleCall }) => {
    const text = {
        pt:{
            triedToCallYouAt: 'tentou entrar em contato consigo às',
            onDate: 'no dia',
            wouldYouLikeToCallBack:'Pretende contacta-lo de volta?'
        }
    }

    return (
        <div>
        <div>
            <h2 className="modal-body-title">
              Chamada não atendida
            </h2>
            <p className="modal-body-text">
                <b>{from}</b> {text.pt.triedToCallYouAt} {time} {text.pt.onDate} {date}. {text.pt.wouldYouLikeToCallBack}
            </p>
        </div>
        <div className="btn-container">
          <div className="call-circle-btn" onClick={handleCall}>
                <div className="btn-label">
                    Chamar
                </div>  
          </div>
        </div>
      </div>
    );
}
 
export default CallingModalBody;