import { Request, Response, NextFunction } from "express";
import resend from "../resend/resend";

export const getName = (req: Request, res: Response) => {
  res.send("We are inside email controller !!! yay!!!");
};

export const sendEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { username, email, description } = req.body;
  try {
    const { data, error } = await resend.emails.send({
      from: `${username} <onboarding@resend.dev>`,
      to: ["bishtshyam135@gmail.com"],
      subject: "Some one contected you through you portfolio!!!!",
      html: `<div>
        From: <strong>${email}</strong>
        <br/>
         <p>Message: ${description}</p>
      </div>`,
    });

    if (error) {
      res.status(400).json({ error });
      return;
    }
    res.status(200).json({ data, message: `Hi, ${username}. Email Sent` });
  } catch (e) {
    console.error(`Some error occured ${e}`);
    next(e);
  }
};
