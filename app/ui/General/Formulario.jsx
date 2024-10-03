
'use client';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation'; // Importar el hook useRouter
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { InfoForm } from './InfoForm';
import Image from 'next/image';
import calendary from '@/public/calendar.svg'

const Formulario = () => {
  const router = useRouter(); // Inicializar el router para redirección
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    practiceName: '',
    budget: false,
    appointment: null,
    timezone: 'America/New_York' // Zona horaria por defecto
  });
  const [showCalendar, setShowCalendar] = useState(false);
  const [formStatus, setFormStatus] = useState('');
  const [showForm, setShowForm] = useState(true); // Estado para mostrar/ocultar el formulario

  // Configuración de horario
  const filterDate = (date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6; // Solo de lunes a viernes
  };

  const filterTime = (time) => {
    const hours = time.getHours();
    return hours >= 11 && hours < 18; // Horario entre 11:00 y 18:00
  };

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.budget) {
      // Si la casilla no está marcada
      setFormStatus('Thank you for contacting us.');
      setShowForm(false); // Ocultar el formulario

      // Redirigir a la página de inicio después de 2 segundos
      setTimeout(() => {
        router.push('/'); // Redirigir a la página de inicio
      }, 2000);
    } else {
      // Si la casilla está marcada, mostramos el calendario
      setShowCalendar(true);
    }
  };

  const handleFinalSubmit = async () => {
    try {
      if (!formData.appointment) {
        setFormStatus('Please select a date and time for the meeting.');
        return;
      }
  
      // Enviar datos al backend
      const response = await axios.post('/api/submit-form', {
        name: formData.name,
        email: formData.email,
        practiceName: formData.practiceName,
        budget: formData.budget,
        appointment: formData.appointment,
        timezone: formData.timezone
      });
  
      setFormStatus('Form submitted successfully. We will contact you shortly!');
      setShowForm(false);
  
      // Si el presupuesto está marcado, enviar datos a Facebook
      if (formData.budget) {
        await axios.post('/api/facebook-conversion', {
          name: formData.name,
          email: formData.email,
          appointment: formData.appointment,
          timezone: formData.timezone
        });
      }
  
      setTimeout(() => {
        router.push('/');
      }, 2000);
    } catch (error) {
      setFormStatus('There was an error submitting the form.');
      console.error('Error sending data:', error);
    }
  };
  

  // // Enviar los datos del formulario al backend
  // const handleFinalSubmit = async () => {
  //   try {
  //     // Validar que se haya seleccionado una cita
  //     if (!formData.appointment) {
  //       setFormStatus('Please select a date and time for the meeting.');
  //       return;
  //     }

  //     // Enviar los datos al servidor, incluyendo la cita y la zona horaria
  //     const response = await axios.post('/api/submit-form', {
  //       name: formData.name,
  //       email: formData.email,
  //       practiceName: formData.practiceName,
  //       budget: formData.budget,
  //       appointment: formData.appointment, // Agregar la cita aquí
  //       timezone: formData.timezone // Agregar la zona horaria aquí
  //     });

  //     setFormStatus('Form submitted successfully. We will contact you shortly!');
  //     setShowForm(false); // Ocultar el formulario

  //     // Redirigir a la página de inicio después de 2 segundos
  //     setTimeout(() => {
  //       router.push('/'); // Redirigir a la página de inicio
  //     }, 2000);
  //   } catch (error) {
  //     setFormStatus('There was an error submitting the form.');
  //     console.error('Error sending data:', error);
  //   }
  // };

  return (
    <section className='bg-fondoPrincipal py-10 md:py-16 mt-10'>
      <div className='max-w-7xl px-6 mx-auto lg:px-0'>
        <div className='flex'>
          <div className="max-w-lg mx-auto p-4 bg-gray-50 rounded-md">
            {showForm ? (
              <form onSubmit={handleSubmit} method='POST' className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl text-azulTitulo font-black mb-4">Schedule your FREE Consultation</h2>

                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-grisTexto">
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-celesteSecundario"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-grisTexto">
                    E-mail:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-celesteSecundario"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="practiceName" className="block text-sm font-medium text-grisTexto">
                    Practice name:
                  </label>
                  <input
                    type="text"
                    id="practiceName"
                    name="practiceName"
                    value={formData.practiceName}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-celesteSecundario"
                    required
                  />
                </div>



                <div className="mb-4 flex items-center">
                  <input
                    type="checkbox"
                    id="budget"
                    name="budget"
                    checked={formData.budget}
                    onChange={handleChange}
                    className="h-4 w-4 text-celestePrincipal focus:ring-cyan-500 border-gray-300 rounded"
                  />
                  <label htmlFor="budget" className="ml-2 text-sm text-grisTexto">
                    I'm willing to invest <span className='font-bold'>$850/mo AFTER the 30-DAY FREE TRIAL</span>
                  </label>
                </div>

                {!showCalendar && (
                  <button
                    type="submit"
                    className="w-full text-center px-4 py-2 min-w-60 md:px-6 md:py-3 text-lg md:text-2xl leading-10 font-extrabold rounded-sm shadow-sm text-white bg-celestePrincipal hover:bg-celesteSecundario border-[1px] border-[rgba(0,0,0,0.13)] transition duration-150 ease-in-out"
                  >
                    Start 30-Day Free Trial
                  </button>
                )}

                {showCalendar && (
                  <div className="mt-4">
                    <h3 className="text-xl font-semibold mb-2 text-grisTexto">Select day and time</h3>
                    <div className='flex items-center'><Image src={calendary} width={28} className='mr-2 opacity-80'/><DatePicker
                      selected={formData.appointment}
                      onChange={(date) => setFormData({ ...formData, appointment: date })}
                      showTimeSelect
                      filterDate={filterDate}
                      filterTime={filterTime}
                      dateFormat="Pp"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-celesteSecundario"
                      placeholderText="Select day and time"
                    /></div>
                    <div className="mb-4">
                      <label htmlFor="timezone" className="block text-sm font-medium text-grisTexto">
                        Timezone:
                      </label>
                      <select
                        id="timezone"
                        name="timezone"
                        value={formData.timezone}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border text-grisTexto border-gray-300 rounded-md focus:outline-none focus:border-celesteSecundario"
                        required
                      >
                        <option value="America/New_York">Eastern Time (ET) - New York</option>
                        <option value="America/Chicago">Central Time (CT) - Chicago</option>
                        <option value="America/Denver">Mountain Time (MT) - Denver</option>
                        <option value="America/Los_Angeles">Pacific Time (PT) - Los Angeles</option>
                        <option value="America/Anchorage">Alaska Time (AKT) - Anchorage</option>
                        <option value="Pacific/Honolulu">Hawaii-Aleutian Time (HAT) - Honolulu</option>
                        <option value="America/Halifax">Atlantic Time (AT) - Halifax</option>
                        {/* Agrega más zonas horarias según sea necesario */}
                      </select>
                    </div>
                    <div className="my-4 flex items-center">
                      <input
                        type="checkbox"
                        id="commitment"
                        name="commitment"
                        className="h-4 w-4 text-celestePrincipal focus:ring-cyan-500 border-gray-300 rounded"
                      />
                      <label htmlFor="commitment" className="ml-2 text-sm text-grisTexto">
                        I will show up on time
                      </label>
                    </div>
                    <button
                      className="w-full mt-4 text-center px-4 py-2 min-w-60 md:px-6 md:py-3 text-lg md:text-2xl leading-10 font-extrabold rounded-sm shadow-sm text-white bg-celestePrincipal hover:bg-celesteSecundario border-[1px] border-[rgba(0,0,0,0.13)] transition duration-150 ease-in-out"
                      onClick={handleFinalSubmit}
                    >
                      Start 30-Day Free Trial
                    </button>
                  </div>
                )}
              </form>
            ) : (
              <div className="p-6 bg-white rounded-lg shadow-lg border border-celestePrincipal">
                <p className="text-center text-lg font-bold text-azulTitulo">{formStatus}</p>
              </div>
            )}
          </div>
          <InfoForm />
        </div>
      </div>
    </section>
  );
};

export default Formulario;
