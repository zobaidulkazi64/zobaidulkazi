import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { fullName, email, company, message } = req.body;

    // Simulate processing (e.g., saving to a database)
    console.log("Received data:", { fullName, email, company, message });

    return res.status(200).json({ message: "Form submitted successfully." });
  } else {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
