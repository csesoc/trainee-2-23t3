import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../../prisma/client';

export async function GET(request: NextRequest) {
  const courses = await prisma.course.findMany({
    include: {
      termsOffered: true
    }
  })
  return NextResponse.json(courses);
}
