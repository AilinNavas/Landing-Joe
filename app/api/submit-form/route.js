

// import axios from 'axios';

// export async function POST(req) {
//   try {
//     const body = await req.json();
//     const { name, email, practiceName, budget, appointment ,timezone} = body;

//     // Validaciones
//     if (!budget) {
//       return new Response(JSON.stringify({ message: 'No cumple los criterios' }), { status: 400 });
//     }

//     return new Response(JSON.stringify({ message: 'Formulario enviado correctamente' }), { status: 200 });
//   } catch (error) {
//     console.error('Error al enviar el formulario:', error);
//     return new Response(JSON.stringify({ message: 'Hubo un error al enviar el formulario', error: error.message }), { status: 500 });
//   }
// }


import axios from 'axios';

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, appointment, timezone } = body;

    // URL y token para la API de Conversiones de Facebook
    const facebookApiUrl = 'https://graph.facebook.com/v14.0/418969504132113/events';
    const accessToken = process.env.FACEBOOK_ACCESS_TOKEN;

    // Enviar datos a Facebook solo si la casilla de presupuesto está marcada
    await axios.post(facebookApiUrl, {
      data: [
        {
          event_name: 'Lead',
          event_time: Math.floor(Date.now() / 1000),
          event_source_url: 'YOUR_URL',
          user_data: {
            name: name,
            email: email
          },
          custom_data: {
            appointment: appointment,
            timezone: timezone
          },
          access_token: accessToken
        }
      ]
    });

    return new Response(JSON.stringify({ message: 'Formulario enviado correctamente' }), { status: 200 });
  } catch (error) {
    console.error('Error al enviar el formulario:', error);
    return new Response(JSON.stringify({ message: 'Hubo un error al enviar el formulario', error: error.message }), { status: 500 });
  }
}

