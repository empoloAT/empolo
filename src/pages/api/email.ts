import { NextApiRequest, NextApiResponse } from "next";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const { method } = req;

	switch (method) {
		case 'POST':
			const { name, email, message } = req.body;

			let data = {
				sender: { name: name, email: email },
				to: [{ email: "gleb.krishin@icloud.com" }],
				subject: "Message from: " + name,
				textContent: message,
			};

			// Send email
			try {
				const response = await fetch('https://api.brevo.com/v3/smtp/email', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						'api-key': process.env.NEXT_PUBLIC_BREVO_KEY!,
					},
					body: JSON.stringify(data),
				});

				if (!response.ok) {
					throw new Error('Response was not ok');
				}

				const responseData = await response.json();
				res.status(200).json({ message: 'Email sent: ' + responseData.messageId });
			} catch (error) {
				if (error instanceof Error) {
					res.status(500).json({ error: error.toString() });
				} else {
					res.status(500).json({ error: 'An unknown error occurred.' });
				}
			}

			break;
		default:
			res.setHeader('Allow', ['POST']);
			res.status(405).end(`Method ${method} Not Allowed`);
	}
}
