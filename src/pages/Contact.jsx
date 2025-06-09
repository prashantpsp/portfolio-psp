import { useForm, ValidationError } from '@formspree/react';
import {motion} from 'framer-motion';

const Contact = () => {
  const [state, handleSubmit] = useForm(import.meta.env.VITE_FORMSPREE_ID);
  if (!import.meta.env.VITE_FORMSPREE_ID) {
    return (
      <div className="max-w-4xl mx-auto">
        <p className="text-red-600">Form configuration error. Please contact the administrator.</p>
      </div>
    );
  }
  return (
    <motion.div
      className='max-w-2xl mx-auto'
      initial={{opacity:0, y:20}}
      animate={{opacity:1, y:0}}
      transition={{duration:0.5}}
    >  
      <div className='max-w-2xl mx-auto'>
        <h1 className='text-4xl font-bold mb-6 text-center' id='contact-form-title'>Contact Me</h1>
        {state.succeeded && (<p className='mb-4 text-green-600'>Message sent successfully.</p>)}
        {state.errors>0 && (<p className='mb-4 text-red-600'>Error sending messgae. Please Try Again.</p>)}

        <form onSubmit={handleSubmit} className='space-y-4 p-6 bg-white rounded-2xl' aria-labelledby='contact-form-title'>
          <div>
            <label className='block text-lg font-medium'>Name</label>
            <input type="text" required name='name' placeholder='Your Name' className='w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600'/>
            <ValidationError prefix='Name' field='name' errors={state.errors}/>
          </div>
          <div>
            <label className='block text-lg font-medium'>Email</label>
            <input type="email" required name='email' placeholder='Your Email' className='w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600'/>
            <ValidationError prefix='Email' field='email' errors={state.errors}/>
          </div>
          <div>
            <label className='block text-lg font-medium'>Message</label>
            <textarea name="message" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" rows="4" placeholder="Your Message" required></textarea>
            <ValidationError prefix='Message' field='message' errors={state.errors}/>
          </div>
          <div>
            <input type="text" name='_gotcha' className='hidden' />
          </div>
          <button type='submit' disabled={state.submitting} className={`cursor-pointer bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors ${state.submitting ? 'opacity-50 cursor-not-allowed' : '' }`}>
            {state.submitting ? 'Sending...' : 'Send'}
          </button>
        </form>
      </div>
    </motion.div>
  )
}

export default Contact