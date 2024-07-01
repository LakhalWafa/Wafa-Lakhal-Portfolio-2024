import { CONTACT } from '../constants';

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">Get in Touch</h2>
      <div className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.address} </p>
       <p className="my-4"><a href={`tel:${CONTACT.phoneNo}`} className='border-b'>{CONTACT.phoneNo}</a></p> 
       <p className="my-4"><a href={`mailto:${CONTACT.email}`} className='border-b'>{CONTACT.email}</a></p>
      </div>
    </div>
  );
};

export default Contact;
