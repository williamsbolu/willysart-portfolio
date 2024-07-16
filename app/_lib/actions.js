"use server";

import { redirect } from "next/navigation";

export async function sendEmail(emailInfo) {
  const res = await fetch(`${process.env.RENDER_URL}/api/v1/sendEmail`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(emailInfo),
  });

  if (!res.ok) {
    throw new Error("Couldn't send email");
  }

  redirect("/");
}
