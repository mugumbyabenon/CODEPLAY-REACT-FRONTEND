import React from 'react'

function ContactUs() {
  return (
    <div><section id="contact" class="contact">
    <div class="container">
      <h2>Contact Us</h2>
      <form id="contact-form">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required/>
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required/>
        </div>
        <div class="form-group">
          <label for="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit" class="btn">Send Message</button>
      </form>
    </div>
  </section></div>
  )
}

export default ContactUs