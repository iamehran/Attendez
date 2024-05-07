// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from '@/lib/prisma';
import QRCode from 'qrcode';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    let { eventId, userId } = req.query;
    let newQr = await QRCode.toDataURL(JSON.stringify({ eventId, userId }));
    let newRegisteration = await prisma.registeration.create({
      data: {
        event: {
          connect: {
            id: parseInt(eventId?.toString() || '1'),
          },
        },
        user: {
          connect: {
            id: parseInt(userId?.toString() || '1'),
          },
        },
        qrCode: newQr,
      },
    });
    return res.json({ status: true, data: newRegisteration });
  } catch (e: any) {
    console.log('error in creating member', e);
    return res.send({ status: false, error: e.message });
  }
}
