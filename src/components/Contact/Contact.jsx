import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import gif from '../../assets/images/gif.gif'
import { toast } from 'react-toastify'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_3s8bnjl', 'template_owxm016', form.current, 'odrBoRcmDA3ScGZuT').then(
      (result) => {
        console.log(result.text)
        toast.success('Your message has been sent successfully!', {
          autoClose: 1000,
          closeOnClick: true
        })
        form.current.reset()
      },
      (error) => {
        console.log(error.text)
        toast.error('Your message failed to send!')
        form.current.reset()
      }
    )
  }

  return (
    <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e]'>Contact</h1>
      <p className='text-center py-4'>
        Finally, I would like to say <b>"Thank You"</b> for spent time to look at my portfolio.
      </p>
      <p className='text-center py-4 italic'>
        If you have any questions or concerns, please contact me via the form below! (◕‿↼)
      </p>
      <div className='flex justify-center'>
        <img src={gif} alt='bongo cat typing' />
      </div>
      <form ref={form} onSubmit={sendEmail} method='POST' encType='multipart/form-data'>
        <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
          <div className='flex flex-col'>
            <label className='uppercase text-sm font-semibold py-2'>Name</label>
            <input
              className='border-2 rounded-lg p-3 flex border-gray-300'
              type='text'
              name='name'
              placeholder='Enter your full name'
            />
          </div>
          <div className='flex flex-col'>
            <label className='uppercase text-sm font-semibold py-2'>Phone Number</label>
            <input
              className='border-2 rounded-lg p-3 flex border-gray-300'
              type='text'
              name='phone_number'
              placeholder='Enter your phone number'
            />
          </div>
        </div>
        <div className='flex flex-col py-2'>
          <label className='uppercase text-sm font-semibold py-2'>Email</label>
          <input
            className='border-2 rounded-lg p-3 flex border-gray-300'
            type='email'
            name='email_address'
            placeholder='Enter your email address'
          />
        </div>
        <div className='flex flex-col py-2'>
          <label className='uppercase text-sm font-semibold py-2'>Subject</label>
          <input
            className='border-2 rounded-lg p-3 flex border-gray-300'
            type='text'
            name='subject'
            placeholder='Enter your subject'
          />
        </div>
        <div className='flex flex-col py-2'>
          <label className='uppercase text-sm font-semibold py-2'>Message</label>
          <textarea
            className='border-2 rounded-lg p-3 flex border-gray-300'
            rows={10}
            name='message'
            placeholder='Enter your message'
          ></textarea>
        </div>
        <button className='bg-[#001b5e] text-gray-100 font-semibold mt-4 w-full p-4 rounded-lg'>Send Message</button>
      </form>
    </div>
  )
}

export default Contact
