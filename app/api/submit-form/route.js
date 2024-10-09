 import { google } from 'googleapis';

 export async function POST(req) {
   try {
     const credentials = JSON.parse(process.env.GOOGLE_CREDENTIALS); // Cargar las credenciales desde las variables de entorno
     console.log('Credenciales de Google:', credentials);

     const auth = new google.auth.GoogleAuth({
       credentials,
       scopes: ['https:www.googleapis.com/auth/spreadsheets'],
     });

     const sheets = google.sheets({ version: 'v4', auth });

     const body = await req.json();

     const spreadsheetId = '1MFQ7lj3UNJH1urg9sY6yt8sQN7QMs0m21odbOLPZJuE';  //Coloca tu ID de la hoja de cálculo
     const range = "'Hoja 1'!A1";  //Ajusta el rango según la estructura de tu hoja
     const values = [[body.name, body.email, body.practiceName, body.budget, body.appointment, body.timezone]];

     await sheets.spreadsheets.values.append({
       spreadsheetId,
       range,
       valueInputOption: 'RAW',
       resource: {
         values,
       },
     });

     return new Response(JSON.stringify({ message: 'Datos enviados correctamente a Google Sheets' }), {
       status: 200,
     });
   } catch (error) {
     console.error('Error al enviar los datos a Google Sheets:', error);
     return new Response(JSON.stringify({ error: 'Error al enviar los datos a Google Sheets' }), {
       status: 500,
     });
   }
 }







// import { google } from 'googleapis';
// import axios from 'axios';

// export async function POST(req) {
//   try {
//     const credentials = JSON.parse(process.env.GOOGLE_CREDENTIALS);
//     const auth = new google.auth.GoogleAuth({
//       credentials,
//       scopes: ['https://www.googleapis.com/auth/spreadsheets'],
//     });
//     const sheets = google.sheets({ version: 'v4', auth });
//     const body = await req.json();

//     const spreadsheetId = '1MFQ7lj3UNJH1urg9sY6yt8sQN7QMs0m21odbOLPZJuE';
//     const range = "'Hoja 1'!A1";
//     const values = [
//       [body.name, body.email, body.practiceName, body.budget, body.appointment, body.timezone],
//     ];

//     // Almacenar los datos en Google Sheets
//     await sheets.spreadsheets.values.append({
//       spreadsheetId,
//       range,
//       valueInputOption: 'RAW',
//       resource: { values },
//     });

//     // Enviar evento de conversión a Facebook solo si budget es true
//     if (body.budget) {
//       const fbToken = process.env.FB_ACCESS_TOKEN;
//       const fbPixelId = process.env.FB_PIXEL_ID;

//       const fbEvent = {
//         event_name: 'Lead',
//         event_time: Math.floor(Date.now() / 1000),
//         user_data: {
//           email: [body.email],
//         },
//         custom_data: {
//           currency: 'USD',
//           value: '850', // Puedes ajustar el valor según tu caso
//         },
//         event_source_url: 'https://www.mucho-dental-marketing.com/schedule', // URL de la página donde ocurre el evento
//         action_source: 'website',
//       };

//       await axios.post(
//         `https://graph.facebook.com/v16.0/${fbPixelId}/events?access_token=${fbToken}`,
//         {
//           data: [fbEvent],
//         }
//       );
//     }

//     return new Response(JSON.stringify({ message: 'Formulario enviado y evento registrado correctamente' }), {
//       status: 200,
//     });
//   } catch (error) {
//     console.error('Error al enviar los datos:', error);
//     return new Response(JSON.stringify({ message: 'Error en el procesamiento' }), {
//       status: 500,
//     });
//   }
// }
