import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import AnimatedText from './AnimatedText';
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_iwv2y39', 
      'template_g42tioe',
      form.current,
      'eLtZXk2O5-i7pwhN3' 
    ).then(
      (result) => {
        console.log(result.text);
        alert('Message sent successfully!');
      },
      (error) => {
        console.log(error.text);
        alert('Failed to send the message. Please try again.');
      }
    );
  };

  return (
    <section id="contact" className="transition-colors duration-500 ease-in-out scroll-mt-16 min-h-screen p-8 bg-white  dark:bg-gray-900 text:black dark:text-white">
      <h2 className="Block text-3xl text-center font-bold mb-4">Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="Block mt-16 grid grid-cols-1 gap-4 items-center justify-center">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          autoComplete="name"
          className="Block p-2 text-black dark:text-white bg-gray-100 dark:bg-gray-600 rounded-md w-full sm:w-3/4 lg:w-1/3 mx-auto"
          required
        />
        <input
          type="phone_number"
          name="phone_number"
          placeholder="Your phone number"
          autoComplete="tel"
          className="Block p-2 text-black dark:text-white bg-gray-100 dark:bg-gray-600 rounded-md w-full sm:w-3/4 lg:w-1/3 mx-auto"
        />
        <input
          type="email"
          name="reply_to"
          placeholder="Your Email"
          autoComplete="email"
          className="Block p-2 text-black dark:text-white bg-gray-100 dark:bg-gray-600 rounded-md w-full sm:w-3/4 lg:w-1/3 mx-auto"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="Block p-2 text-black dark:text-white bg-gray-100 dark:bg-gray-600 rounded-md w-full sm:w-3/4 lg:w-1/3 mx-auto"
          rows="4"
          required
          autoComplete="off"
        ></textarea>
        <div className="flex justify-center">
          <button 
            className="Block w-40 h-12 bg-green-400 text-white border-l-rose-950 dark:text-gray-900 font-bold px-4 py-2 rounded transition-transform duration-300 ease-in-out transform hover:scale-110 hover:bg-green-400">
            Send Message
          </button>
        </div>
          <div className="Block text-6xl mb-6 text-center mt-16 glow-text dark:dark-glow-text">
            <AnimatedText text="Let's build something amazing together!"/>
          </div>
      </form>
    </section>
  );
};

export default Contact;
