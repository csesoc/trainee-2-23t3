import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../../../prisma/client';

export async function GET(
  request: NextRequest,
  { params }: { params: { courseCode: string } }
) {
  const courseCode = params.courseCode;

  if (courseCode) {
    try {
      const course = await prisma.course.findUnique({
        where: {
          courseCode: courseCode,
        },
      });

      if (course) {
        return NextResponse.json(course, { status: 200 });
      } else {
        return NextResponse.json(
          { error: 'Course not found' },
          { status: 404 }
        );
      }
    } catch (err) {
      console.error('Error fetching course:', err);
      return NextResponse.json(
        { error: 'Internal server error' },
        { status: 500 }
      );
    }
  } else {
    return NextResponse.json(
      { error: 'Course code is empty' },
      { status: 400 }
    );
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { courseCode: string } }
) {
  const courseCode = params.courseCode;
  
  const body = await request.json()

  const course = await prisma.course.findUnique({
    where: {
      courseCode: courseCode,
    },
  });

  if (course) {
    const totalVotes = course.doomnessVoters
  }
}
