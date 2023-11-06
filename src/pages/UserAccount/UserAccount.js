import React from 'react';
import CustomButton from '../../components/Shared/CustomBtn/CustomBtn';
import './UserAccount.scss';
import checkIcon from '../../resources/icons/check-black.svg';

export const  UserAccount = ( ) =>  {
    const plan = 'Free';

    return (
        <div className='user-account-wrapper'>
            <div className='user-account-content'>
                <h2 className='user-account-title title'>Account</h2>
                <div className='user-account-main'>
                    <div className='user-plan-block'>
                        <h4 className='user-plan-title'>
                        Your Plan - {plan}
                        </h4>
                        <ul className='plan-info-block'>
                            <li><img src={checkIcon} alt="checkIcon" />50 message credits/month</li>
                            <li><img src={checkIcon} alt="checkIcon" />1 chatbot</li>
                            <li><img src={checkIcon} alt="checkIcon" />400,00 characters/chatbot</li>
                            <li><img src={checkIcon} alt="checkIcon" />Embed on unlimited websites</li>
                            <li><img src={checkIcon} alt="checkIcon" />Upload multiple files</li>
                            <li><img src={checkIcon} alt="checkIcon" />View conversation history</li>
                        </ul>
                        <div className='plan-upgrate'>
                           <p>If you want upgrade plan, please contact us</p>
                           <CustomButton animated={true}>Contact</CustomButton>
                        </div>
                    </div>
                    <div className='user-info-block'>
                        <div className='user-block-top'>
                        <div className='usage-info-wrapper'>
                            <div className='usage-info-content'>
                                <h4 className='usage-info-title'>Usage</h4>
                                <p>Messages consumed: 0/50</p>
                                <p>Your credits renew at the start of every calendar month.</p> 
                                <p>Next renewal: //month 1st//</p> 
                            </div>
                        </div>
                        <div className='email-info-wrapper'>
                            <div className='email-info-content'>
                                <h4 className='email-info-title'>Your Email</h4>
                                <p>email.user@mail.com</p>
                            </div>
                        </div>
                        </div>
                        <div className='user-control-btns'>
                            <CustomButton dark={true}>Sign out</CustomButton>
                            <CustomButton className='red'>Delete account</CustomButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}