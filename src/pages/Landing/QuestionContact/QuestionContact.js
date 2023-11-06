import React from 'react';
import './QuestionContact.scss';
import CustomButton from '../../../components/Shared/CustomBtn/CustomBtn';

export const  QuestionContact = () =>  {
  return (
    <section className='question-contact'>
        <h4 className='question-contact-title title'>Still have a question?</h4>
        <CustomButton animated={true}>Contact</CustomButton>
    </section>
  )
}
