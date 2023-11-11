import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../../prisma/client';

export async function GET(request: NextRequest) {
  const courses = await prisma.term.findMany({
    where: {
      term: 'Term 2'
    }
  })

  return NextResponse.json(courses);
}
