
'use client';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { InfoForm } from './InfoForm';
import Image from 'next/image';
import calendary from '@/public/calendar.svg';

const Formulario = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    practiceName: '',
    budget: false,
    appointment: null,
    timezone: '',
  });
  const [showCalendar, setShowCalendar] = useState(false);
  const [formStatus, setFormStatus] = useState('');
  const [showForm, setShowForm] = useState(true);

  const filterDate = (date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6; // Solo de lunes a viernes
  };

  const filterTime = (time) => {
    const hours = time.getHours();
    return hours >= 11 && hours < 18;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Primera validación de 'budget'
    if (!formData.budget) {
      setFormStatus('Gracias por ponerse en contacto con nosotros.');
      setShowForm(false);
      setTimeout(() => {
        router.push('/');
      }, 2000);
    } else {
      setShowCalendar(true); // Mostrar el calendario solo si budget es true
    }
  };

  const handleFinalSubmit = async () => {
    // Validación de 'budget' antes de enviar el formulario
    if (!formData.budget) {
      setFormStatus('Gracias por ponerse en contacto con nosotros.');
      setShowForm(false);
      setTimeout(() => {
        router.push('/');
      }, 2000);
      return; // Asegurarse de que no se ejecute el resto de la función
    }

    if (!formData.appointment) {
      setFormStatus('Seleccione una fecha y hora para la reunión.');
      return;
    }

    try {
      console.log('Datos que se enviarán al backend:', formData);
      const response = await axios.post('/api/submit-form', formData);
      setFormStatus('Formulario enviado correctamente. En breve nos pondremos en contacto con usted!');
      setShowForm(false);
      setTimeout(() => {
        router.push('/');
      }, 2000);
    } catch (error) {
      setFormStatus('Se ha producido un error al enviar el formulario.');
      console.error('Error en el envío de datos:', error);
    }
  };


  return (
    <section className="bg-fondoPrincipal py-10 md:py-16 mt-10">
      <div className="max-w-7xl px-6 mx-auto lg:px-0">
        <div className="flex">
          <div className="max-w-lg mx-auto p-4 bg-gray-50 rounded-md">
            {showForm ? (
              <form onSubmit={handleSubmit} method="POST" className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl text-azulTitulo font-black mb-4">Schedule your FREE Consultation</h2>

                {/* Nombre */}
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-grisTexto">Name:</label>
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

                {/* Email */}
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-grisTexto">E-mail:</label>
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

                {/* Nombre de la empresa/práctica */}
                <div className="mb-4">
                  <label htmlFor="practiceName" className="block text-sm font-medium text-grisTexto">Practice name:</label>
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

                {/* Checkbox de presupuesto */}
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
                    I'm willing to invest <span className="font-bold">$850/mo AFTER the 30-DAY FREE TRIAL</span>
                  </label>
                </div>

                {/* Botón para mostrar el calendario si budget es true */}
                {!showCalendar && (
                  <button
                    type="submit"
                    className="w-full text-center px-4 py-2 text-lg font-extrabold rounded-sm shadow-sm text-white bg-celestePrincipal hover:bg-celesteSecundario border-[1px] border-[rgba(0,0,0,0.13)] transition duration-150 ease-in-out"
                  >
                    Start 30-Day Free Trial
                  </button>
                )}

                {/* Mostrar el calendario si budget es true */}
                {showCalendar && (
                  <div className="mt-4">
                    <h3 className="text-xl font-semibold mb-2 text-grisTexto">Select day and time</h3>
                    <div className="flex items-center">
                      <Image src={calendary} width={28} className="mr-2 opacity-80" alt="calendary-icon" />
                      <DatePicker
                        selected={formData.appointment}
                        onChange={(date) => setFormData((prevData) => ({ ...prevData, appointment: date }))}
                        showTimeSelect
                        filterDate={filterDate}
                        filterTime={filterTime}
                        dateFormat="Pp"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-celesteSecundario"
                        placeholderText="Select day and time"
                        minDate={new Date(Date.now() + 48 * 60 * 60 * 1000)} // 48 horas en milisegundos
                      />

                    </div>

                    <div className="mb-4">
                      <label htmlFor="timezone" className="block text-sm font-medium text-grisTexto">Timezone:</label>
                      <select
                        id="timezone"
                        name="timezone"
                        value={formData.timezone}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border text-grisTexto border-gray-300 rounded-md focus:outline-none focus:border-celesteSecundario"
                        required
                      >
                        <option value="" disabled>-- Select a timezone --</option>
                        <option value="America/New_York">Eastern Time (ET) - New York</option>
                        <option value="America/Chicago">Central Time (CT) - Chicago</option>
                        <option value="America/Denver">Mountain Time (MT) - Denver</option>
                        <option value="America/Los_Angeles">Pacific Time (PT) - Los Angeles</option>
                        <option value="America/Anchorage">Alaska Time (AKT) - Anchorage</option>
                        <option value="Pacific/Honolulu">Hawaii-Aleutian Time (HAT) - Honolulu</option>
                        <option value="America/Halifax">Atlantic Time (AT) - Halifax</option>
                      </select>
                    </div>

                    {/* Checkbox de compromiso */}
                    <div className="flex items-center mb-4">
                      <input
                        type="checkbox"
                        id="finalConfirmation"
                        name="finalConfirmation"
                        onChange={handleChange}
                        className="h-4 w-4 text-celestePrincipal focus:ring-cyan-500 border-gray-300 rounded"
                        required
                      />
                      <label htmlFor="finalConfirmation" className="ml-2 text-sm text-grisTexto">
                        I confirm my commitment to invest after the trial
                      </label>
                    </div>

                    <button
                      type="button"
                      onClick={handleFinalSubmit}
                      className="w-full text-center px-4 py-2 text-lg font-extrabold rounded-sm shadow-sm text-white bg-celestePrincipal hover:bg-celesteSecundario border-[1px] border-[rgba(0,0,0,0.13)] transition duration-150 ease-in-out"
                    >
                      Confirm Appointment
                    </button>
                  </div>
                )}
              </form>
            ) : (
              <p className="text-center text-lg text-grisTexto">{formStatus}</p>
            )}
          </div>
          <InfoForm />
        </div>
      </div>
    </section>
  );
};

export default Formulario;


