import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const { method } = req;

	switch (method) {
		case 'POST':
			const { email } = req.body;

			const data = {
				email,
				listIds: [3]
			}

			try {
				const response = await fetch('https://api.brevo.com/v3/contacts', {
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