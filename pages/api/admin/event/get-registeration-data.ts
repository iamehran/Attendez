// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from '@/lib/prisma';
import QRCode from 'qrcode';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    let { userId } = req.query;
    let registerations = await prisma.registeration.findMany({
      where: {
        user: {
          id: parseInt(userId?.toString() || '1'),
        },
      },
      include: {
        event: true,
      },
    });
    return res.json({ status: true, data: registerations });
  } catch (e: any) {
    console.log('error in creating member', e);
    return res.send({ status: false, error: e.message });
  }
}
