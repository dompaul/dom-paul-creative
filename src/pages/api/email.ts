import { NextApiRequest, NextApiResponse } from "next";
import { SMTPClient } from "emailjs";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone || "N/A";
  const company = req.body.company || "N/A";
  const messageBody = req.body.message || "N/A";

  const client = new SMTPClient({
    user: process.env.EMAIL_USER,
    password: process.env.EMAIL_PASS,
    host: "smtp.gmail.com",
    ssl: true,
  });

  try {
    const message = await client.sendAsync({
      text: "",
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Enquiry - ${name}`,
      attachment: [
        {
          data: `
        <html>
          <div style="border-bottom: solid 1px rgba(240, 240, 240, 0.9); font-size: 24px; padding: 14px 0; margin-bottom: 14px;">
             <h3>Name:</h3>
             <p>${name}</p>
          <div>
          
          <div style="border-bottom: solid 1px rgba(240, 240, 240, 0.9); font-size: 24px; padding: 14px 0; margin-bottom: 14px;">
             <h3>Email:</h3>
             <p>${email}</p>
          </div>
       
          <div style="border-bottom: solid 1px rgba(240, 240, 240, 0.9); font-size: 24px; padding: 14px 0; margin-bottom: 14px;">
             <h3>Phone:</h3>
             <p>${phone}</p>
          </div>
          
          <div style="border-bottom: solid 1px rgba(240, 240, 240, 0.9); font-size: 24px; padding: 14px 0; margin-bottom: 14px;">
             <h3>Company:</h3>
             <p>${company}</p>
          </div>
       
          <div style="border-bottom: solid 1px rgba(240, 240, 240, 0.9); font-size: 24px; padding: 14px 0; margin-bottom: 14px;">
             <h3>Message:</h3>
             <p>${messageBody}</p>
          </div>
       </html>`,
          alternative: true,
        },
      ],
    });
    res.status(200).end();
  } catch (err) {
    res.status(500).end();
    console.error(err);
  }
};
