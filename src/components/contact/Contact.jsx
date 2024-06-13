import React from 'react'
import '../../style/contact.scss'

const Contact = () => {
  return (
    <section className='contact'>
      <form>
        <h2>Contact Us</h2>
        <input type='text' placeholder='Name' required />
        <input type='email' placeholder='Email' required />
        <textarea placeholder='Message...' cols='30' rows='10'/>
        <button type='submit'>Send</button>
        </form>
    </section>
  )
}

export default Contact;