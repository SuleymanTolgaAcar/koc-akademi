import { NextRequest, NextResponse } from "next/server";
import Mailjet from "node-mailjet";

const mailjet = Mailjet.apiConnect(
  process.env.MAILJET_API_KEY!,
  process.env.MAILJET_API_SECRET!
);

export async function POST(request: NextRequest) {
  if (!request.body) {
    return NextResponse.json({ message: "Request body missing", status: 400 });
  }

  const reqBody = await request.json();

  if (!reqBody.name || !reqBody.email || !reqBody.mainText) {
    return NextResponse.json({
      message: "Missing required fields",
      status: 400,
    });
  }

  const mail = mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: "a1a2@outlook.com",
          Name: "Koç Akademi - " + reqBody.name,
        },
        To: [
          {
            Email: "tolgasuleymanacar@gmail.com",
            Name: "Koç Akademi - İletişim",
          },
        ],
        Subject: reqBody.subject,
        TextPart: reqBody.mainText,
        HTMLPart: `<div>
        <p>${reqBody.mainText}</p>
        <p>İsim: ${reqBody.name}</p>
        <p>E-posta: ${reqBody.email}</p>
        <p>Telefon: ${reqBody.phone}</p>
        </div>`,
      },
    ],
  });

  mail
    .then(() => {
      return NextResponse.json({ message: "Mail sent", status: 200 });
    })
    .catch(() => {
      return NextResponse.json({ message: "Mail not sent", status: 400 });
    });
}
