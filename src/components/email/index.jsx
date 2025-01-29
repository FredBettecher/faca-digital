"use client";

import { useEffect, useRef, useState } from 'react';
import { IoCheckmarkCircleOutline, IoCloseCircleOutline } from "react-icons/io5";
import { motion } from 'framer-motion';

export default function Email() {
  const form = useRef();
  const [alert, setAlert] = useState({ visible: false, message: '', type: '' });
  const service_id = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const template_id = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const public_key = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(service_id, template_id, form.current, public_key)
      .then((result) => {
        if (result.text === 'OK') {
          setAlert({ visible: true, message: 'E-mail enviado com sucesso', type: 'success' });
        } else {
          setAlert({ visible: true, message: 'Erro ao enviar e-mail', type: 'error' });
        }
      }, (error) => {
        setAlert({ visible: true, message: 'Erro ao enviar e-mail', type: 'error' });
      });
  };

  useEffect(() => {
    if (alert.visible) {
      const timer = setTimeout(() => {
        setAlert({ visible: false, message: '', type: '' });
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [alert]);

  return (
    <section className='w-full max-w-xl'>
      {alert.visible && (
        <button onClick={() => setAlert({ visible: false, message: '', type: '' })} className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg flex items-center ${alert.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {alert.type === 'success' ? <IoCheckmarkCircleOutline className='mr-2 lg:text-2xl' /> : <IoCloseCircleOutline className='mr-2 lg:text-2xl' />}
          {alert.message}
        </button>
      )}
      <motion.form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col gap-4"
      // initial={{ opacity: 0, y: 100 }}
      // whileInView={{ opacity: 1, y: 0 }}
      // viewport={{ once: true }}
      // transition={{ duration: 0.3, delay: 0.4 }}
      >

        <h2 className="text-2xl">Nos mande um <span className='text-that-green'>e-mail</span></h2>
        <input
          type="email"
          name='user_email'
          placeholder="E-mail"
          className="form-input rounded p-2 placeholder:text-background"
          required
        />
        <textarea
          name="message"
          placeholder="Deixe sua mensagem"
          className="h-24 form-input rounded p-2 text-background placeholder:text-background"
          required
        />
        <button
          className="w-fit bg-that-green text-background rounded-xl mt-2 p-3 text-lg hover:bg-custom-beige hover:bg-[#a8d103]"
          type='submit'
          value='Send'
        >
          Enviar
        </button>
      </motion.form>
    </section>
  );
}
