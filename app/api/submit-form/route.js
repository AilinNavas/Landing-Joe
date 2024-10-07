
  // import { google } from 'googleapis';
  // import { promises as fs } from 'fs';
  // import path from 'path';

  // export async function POST(req, res) {
  //   try {
  //     const credentialsPath = path.join(process.cwd(), 'app', 'secrets', 'citas-anuncio-joel-e93dad6c9eeb.json');
  //     const credentials = JSON.parse(await fs.readFile(credentialsPath, 'utf8'));

  //     const auth = new google.auth.GoogleAuth({
  //       credentials,
  //       scopes: ['https:www.googleapis.com/auth/spreadsheets'],
  //     });

  //     const sheets = google.sheets({ version: 'v4', auth });

  //     const body = await req.json();

  //     //Ahora puedes agregar el formulario a la hoja de Google Sheets
  //     const spreadsheetId = '1MFQ7lj3UNJH1urg9sY6yt8sQN7QMs0m21odbOLPZJuE'; // Coloca tu ID de la hoja de cálculo
  //     const range = "'Hoja 1'!A1"; //Ajusta el rango según la estructura de tu hoja
  //     const values = [[body.name, body.email, body.practiceName, body.budget, body.appointment, body.timezone]];

  //     await sheets.spreadsheets.values.append({
  //       spreadsheetId,
  //       range,
  //       valueInputOption: 'RAW',
  //       resource: {
  //         values,
  //       },
  //     });
    
  //     return new Response(JSON.stringify({ message: 'Datos enviados correctamente a Google Sheets' }), {
  //       status: 200,
  //     });
  //   } catch (error) {
  //     console.error('Error al enviar los datos a Google Sheets:', error);
  //     return new Response(JSON.stringify({ error: 'Error al enviar los datos a Google Sheets' }), {
  //       status: 500,
  //     });
  //   }
  // }


  import { google } from 'googleapis';

  export async function POST(req) {
    try {
      const credentials = JSON.parse(process.env.GOOGLE_CREDENTIALS); // Cargar las credenciales desde las variables de entorno
      console.log('Credenciales de Google:', credentials);
  
      const auth = new google.auth.GoogleAuth({
        credentials,
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      });
  
      const sheets = google.sheets({ version: 'v4', auth });
  
      const body = await req.json();
  
      const spreadsheetId = '1MFQ7lj3UNJH1urg9sY6yt8sQN7QMs0m21odbOLPZJuE'; // Coloca tu ID de la hoja de cálculo
      const range = "'Hoja 1'!A1"; // Ajusta el rango según la estructura de tu hoja
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
  