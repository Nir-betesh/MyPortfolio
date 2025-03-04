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
        alert('I received your message and will get back to you soon!');
        form.current.reset();
      },
      (error) => {
        console.log(error.text);
        alert('Failed to send the message. Please try again.');
      }
    );
  };

  return (
    <section id="contact" className="transition-colors duration-500 ease-in-out scroll-mt-16 min-h-screen p-8 bg-white dark:bg-[#0c0c0e] dark:text-white">
      <h2 className="Block text-5xl font-bold mb-28 text-center glow-text dark:dark-glow-text animate-fade-in-down">
        <AnimatedText text="Contact Me"/>
      </h2>
      <div className="bg-white -translate-y-16 dark:bg-[#12102f] pb-1 pt-1 justify-center rounded-xl  lg:w-1/3 mx-auto">
        <form ref={form} onSubmit={sendEmail} className="Block -translate-y-7  mt-16 grid grid-cols-1 gap-4 items-center justify-center">
          
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            autoComplete="name"
            className="Block p-2 dark:text-white bg-gray-100 dark:bg-[#151342] rounded-md w-60 lg:w-5/6 mx-auto"
            required
          />
          <input
            type="phone_number"
            name="phone_number"
            placeholder="Your phone number"
            autoComplete="tel"
            className="Block p-2 dark:text-white bg-gray-100 dark:bg-[#151342] rounded-md w-60 lg:w-5/6 mx-auto"
          />
          <input
            type="email"
            name="reply_to"
            placeholder="Your Email"
            autoComplete="email"
            className="Block p-2 dark:text-white bg-gray-100 dark:bg-[#151342] rounded-md w-60 lg:w-5/6 mx-auto"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="Block p-2 dark:text-white bg-gray-100 dark:bg-[#151342] rounded-md w-60 lg:w-5/6 mx-auto"
            autoComplete="off"
            rows="4"
            required
          ></textarea>
          <div className="flex justify-center">
            <button
              type="submit"
              className="Block w-40 h-12 bg-gray-200 dark:bg-[#36318c] dark:text-white font-bold px-4 py-2 rounded transition-transform duration-300 ease-in-out transform hover:scale-110">
              Send Message
            </button>
          </div>
        </form>
      </div>
      <div className="Block text-6xl mb-6 text-center mt-16 glow-text dark:dark-glow-text">
        <AnimatedText text="Let's build something amazing together!"/>
      </div>
    </section>
  );
};

export default Contact;
