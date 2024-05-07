// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from '@/lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    let contactsData = await prisma.contact.findMany({});
    return res.json({ status: true, data: contactsData });
  } catch (e: any) {
    console.log('error in creating member', e);
    return res.send({ status: false, error: e.message });
  }
}
