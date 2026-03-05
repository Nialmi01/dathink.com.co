export default async function handler(req, res) {
    // Only allow POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY;

    if (!RESEND_API_KEY) {
        console.error('RESEND_API_KEY is not configured');
        return res.status(500).json({ error: 'Error de configuración del servidor.' });
    }

    try {
        // 1. Send notification email to comercial@dathink.com.co
        const notificationResponse = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${RESEND_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                from: 'Web Dathink <comercial@dathink.com.co>',
                to: ['comercial@dathink.com.co'],
                subject: `Nuevo mensaje desde la web — ${name}`,
                html: `
          <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; border-radius: 12px; overflow: hidden;">
            <div style="background: linear-gradient(135deg, #1e293b, #334155); padding: 30px; text-align: center;">
              <h1 style="color: #fff; margin: 0; font-size: 22px;">📩 Nuevo Mensaje desde la Web</h1>
            </div>
            <div style="padding: 30px;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569; width: 120px;">Nombre</td>
                  <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; color: #1e293b;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569;">Email</td>
                  <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; color: #1e293b;">
                    <a href="mailto:${email}" style="color: #2563eb;">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px; font-weight: bold; color: #475569; vertical-align: top;">Mensaje</td>
                  <td style="padding: 12px; color: #1e293b; line-height: 1.6;">${message}</td>
                </tr>
              </table>
            </div>
            <div style="background: #f1f5f9; padding: 15px; text-align: center; font-size: 12px; color: #94a3b8;">
              Enviado desde www.dathink.com.co
            </div>
          </div>
        `,
            }),
        });

        if (!notificationResponse.ok) {
            const errorData = await notificationResponse.json();
            console.error('Resend notification error:', errorData);
            return res.status(500).json({ error: 'Error al enviar el correo de notificación.' });
        }

        // 2. Send auto-response email to the client
        const autoResponseResult = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${RESEND_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                from: 'Dathink <comercial@dathink.com.co>',
                to: [email],
                subject: 'Gracias por contactar a Dathink — Hemos recibido tu mensaje',
                html: `
          <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; border-radius: 12px; overflow: hidden;">
            <div style="background: linear-gradient(135deg, #1e293b, #334155); padding: 40px 30px; text-align: center;">
              <h1 style="color: #fff; margin: 0 0 8px 0; font-size: 24px;">¡Gracias por contactarnos!</h1>
              <p style="color: #94a3b8; margin: 0; font-size: 14px;">Dathink — De datos a resultados, el camino digital</p>
            </div>
            <div style="padding: 30px;">
              <p style="color: #1e293b; font-size: 16px; line-height: 1.6;">
                Hola <strong>${name}</strong>,
              </p>
              <p style="color: #475569; font-size: 15px; line-height: 1.7;">
                Confirmamos la recepción de tu mensaje. En breve, un miembro de nuestro equipo consultor 
                revisará tu solicitud y se comunicará contigo para brindarte atención personalizada 
                y dar el siguiente paso en tu transformación digital.
              </p>
              <div style="background: #f1f5f9; border-left: 4px solid #2563eb; padding: 15px; border-radius: 0 8px 8px 0; margin: 20px 0;">
                <p style="color: #64748b; font-size: 13px; margin: 0 0 5px 0; font-weight: bold;">Tu mensaje:</p>
                <p style="color: #475569; font-size: 14px; margin: 0; line-height: 1.5; font-style: italic;">"${message}"</p>
              </div>
              <p style="color: #475569; font-size: 15px; line-height: 1.7;">
                Si tienes alguna consulta adicional, no dudes en responder directamente a este correo.
              </p>
              <p style="color: #475569; font-size: 15px; margin-top: 25px;">
                Cordialmente,<br>
                <strong style="color: #1e293b;">Equipo Comercial Dathink</strong>
              </p>
            </div>
            <div style="background: #1e293b; padding: 20px; text-align: center;">
              <p style="color: #94a3b8; font-size: 12px; margin: 0;">
                © ${new Date().getFullYear()} Dathink. Todos los derechos reservados.<br>
                <a href="https://www.dathink.com.co" style="color: #60a5fa; text-decoration: none;">www.dathink.com.co</a>
              </p>
            </div>
          </div>
        `,
            }),
        });

        if (!autoResponseResult.ok) {
            const errorData = await autoResponseResult.json();
            console.error('Resend auto-response error:', errorData);
            // Don't fail the whole request if auto-response fails
        }

        return res.status(200).json({ success: true, message: 'Correos enviados correctamente.' });

    } catch (error) {
        console.error('Server error:', error);
        return res.status(500).json({ error: 'Error interno del servidor.' });
    }
}
