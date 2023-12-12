import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../../prisma/client';
import { tree } from 'next/dist/build/templates/app-page';

export async function GET(request: NextRequest) {
  const courses = await prisma.course.findMany({
    where: {
      termsOffered: {
        some: {
          term: 'Term 3',
        },
      },
    },
    include: { termsOffered: true },
  });
  return NextResponse.json(courses);
}
