import { useContext } from 'react';
import InputField from '../components/InputField';
import './contact.css';
import { LoadingContext } from '../template/Template';
import TextArea from '../components/TextArea';

const API_PATH = import.meta.env.VITE_API_PATH;

const Contact = () => {
  const { isLoading, setIsLoading } = useContext(LoadingContext);
  console.log('isLoading', isLoading, setIsLoading);
  const handleSubmit = (event) => {
    event.preventDefault();
    const formEle = document.querySelector('form');
    const formDatab = new FormData(formEle);
    setIsLoading(true);
    fetch(API_PATH, {
      method: 'POST',
      body: formDatab,
    })
      .then((res) => res.json())
      .then((data) => {
        formEle.reset();
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  return (
    <div className='contact-wrapper'>
      <div className='box'>
        <div className='box-body'>
          <div className='user-text mb-3'>
            <a href='/contact'>/contact</a>
          </div>
          <form
            className='form'
            onSubmit={(e) => handleSubmit(e)}
            autoComplete='off'
          >
            <div>
              <div className='name-mobile-container'>
                <InputField
                  type='text'
                  placeholder='Name'
                  name='Name'
                  required={true}
                  className={'name-wrapper'}
                  maxLength={50}
                />
                <InputField
                  type='text'
                  placeholder='Mobile'
                  name='Mobile'
                  required={true}
                  className='mobile-wrapper'
                  maxLength={10}
                />
              </div>
              <InputField
                type='email'
                placeholder='Email'
                name='Email'
                required={true}
                className={'email-wrapper'}
                maxLength={100}
              />
              <InputField
                type='text'
                placeholder='Subject'
                name='Subject'
                required={true}
                className={'subject-wrapper'}
                maxLength={100}
              />
              <TextArea
                type='text'
                placeholder='Message'
                name='Message'
                required={true}
                className={'message-wrapper'}
                maxLength={800}
              />
            </div>
            <div className='button-wrapper'>
              <button className='submit-button' type='submit'>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
