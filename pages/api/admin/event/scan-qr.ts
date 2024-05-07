// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from '@/lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    let { userId, eventId } = req.query;

    let checkRegisteration = await prisma.registeration.findFirst({
      where: {
        user: {
          id: parseInt(userId?.toString() || '1'),
        },
        event: {
          id: parseInt(eventId?.toString() || '1'),
        },
      },
    });
    if (!checkRegisteration) {
      return res.send({ status: false, error: 'Registeration Not Found' });
    }

    if (checkRegisteration.visited == true) {
      return res.send({ status: false, error: 'Already Scanned Qr' });
    }

    let updatedCheckRegisteration = await prisma.registeration.update({
      where: {
        id: checkRegisteration.id,
      },
      data: {
        visited: true,
      },
    });

    return res.json({ status: true, data: {} });
  } catch (e: any) {
    console.log('error in creating member', e);
    return res.send({ status: false, error: e.message });
  }
}
