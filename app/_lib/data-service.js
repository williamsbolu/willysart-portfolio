import { notFound } from "next/navigation";

export const PAGE_SIZE = 8;

export async function SendUserEmail(mailData) {
  const res = await fetch(`${process.env.RENDER_URL}/api/v1/sendEmail`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(mailData),
  });

  if (!res.ok) {
    throw new Error("Couldn't send email");
  }

  const data = await res.json();
  return data;
}

export async function getClients(page) {
  // pagination
  const pageString = `page=${page}&limit=${PAGE_SIZE}`;

  const res = await fetch(
    `${process.env.RENDER_URL}/api/v1/clients/?${pageString}`
  );

  if (!res.ok) {
    throw new Error("Something went wrong, try again later");
  }

  const data = await res.json();
  return data;
}

export async function getClient(slug) {
  const res = await fetch(
    `${process.env.RENDER_URL}/api/v1/clients/client/${slug}`
  );

  if (!res.ok) {
    const data = await res.json();
    console.error(data.message);
    notFound();
  }

  const data = await res.json();
  return data;
}

export async function getGallery(type, page) {
  const pageString = `&page=${page}&limit=${PAGE_SIZE}`;

  const res = await fetch(
    `${process.env.RENDER_URL}/api/v1/gallery?type=${type}${pageString}`
  );

  if (!res.ok) {
    throw new Error("Something went wrong, try again later");
  }

  const data = await res.json();
  return data;
}
