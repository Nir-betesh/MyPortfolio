import emailjs from '@emailjs/browser';
import AnimatedText from './AnimatedText';
import React, { useEffect, useRef } from 'react';

const Contact = () => {
  const form = useRef();
  const sectionRef = useRef(null);
  
  // Restart animation
  const restartAnimation = (section) => {
    const blocks = section.querySelectorAll('.appear-animation');
    blocks.forEach((block) => {
      block.classList.remove('appear-animation'); 
      void block.offsetWidth; // Force reflow
      block.classList.add('appear-animation'); 
    });
  };

  // Reststart animation when got in to the section
  useEffect(() => {
    const sectionElement = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio < 0.7) { // 70% visible means 30% scrolled past
          restartAnimation(sectionElement);
        }
      }
    );

    if (sectionElement) {
      observer.observe(sectionElement);
    }

    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement);
      }
    };
  }, []);

  // Send to me email
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
        alert('I\'ve received your message and will respond as soon as possible!');
        form.current.reset();
      },
      (error) => {
        console.log(error.text);
        alert('Failed to send the message. Please try again.');
      }
    );
  };

  return (
    <section ref={sectionRef} id="contact" className="transition-colors duration-500 ease-in-out scroll-mt-16 min-h-screen p-8 bg-white dark:bg-[#0c0c0e] dark:text-white">
      <h2 className="appear-animation text-6xl font-bold mb-28 text-center glow-text dark:dark-glow-text animate-fade-in-down">
        <AnimatedText text="Contact Me"/>
      </h2>
      <div className="appear-animation bg-white dark:bg-[#12102f] pb-1 pt-1 justify-center rounded-xl lg:w-1/3 mx-auto">
        <form ref={form} onSubmit={sendEmail} className="appear-animation pb-8 pt-8 grid grid-cols-1 gap-4 items-center justify-center">
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            autoComplete="name"
            className="appear-animation p-2 dark:text-white bg-gray-100 dark:bg-[#151342] rounded-md w-60 lg:w-5/6 mx-auto"
            required
          />
          <input
            type="phone_number"
            name="phone_number"
            placeholder="Your phone number"
            autoComplete="tel"
            className="appear-animation p-2 dark:text-white bg-gray-100 dark:bg-[#151342] rounded-md w-60 lg:w-5/6 mx-auto"
          />
          <input
            type="email"
            name="reply_to"
            placeholder="Your Email"
            autoComplete="email"
            className="appear-animation p-2 dark:text-white bg-gray-100 dark:bg-[#151342] rounded-md w-60 lg:w-5/6 mx-auto"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="appear-animation p-2 dark:text-white bg-gray-100 dark:bg-[#151342] rounded-md w-60 lg:w-5/6 mx-auto"
            autoComplete="off"
            rows="4"
            required
          ></textarea>
          <div className="flex justify-center">
            <button
              type="submit"
              className="appear-animation flex w-40 h-12 bg-gray-200 dark:bg-[#36318c] dark:text-white font-bold px-4 py-2 rounded transition-transform duration-300 ease-in-out transform hover:scale-110">
              Send Message
            </button>
          </div>
        </form>
      </div>
      <div className="appear-animation text-6xl mb-6 text-center mt-16 glow-text dark:dark-glow-text">
        <AnimatedText text="Let's build something amazing together!"/>
      </div>
    </section>
  );
};

export default Contact;
