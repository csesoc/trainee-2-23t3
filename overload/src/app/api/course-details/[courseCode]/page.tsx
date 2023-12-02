import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../../../prisma/client';
import { useRouter } from 'next/router';

export async function GET(request: NextRequest) {
  const router = useRouter();
  const courseCode = router.query.courseCode;

  // Check if courseCode is an array and take the first element if it is
  const courseCodeStr = Array.isArray(courseCode) ? courseCode[0] : courseCode;

  if (courseCodeStr) {
    try {
      const course = await prisma.course.findUnique({
        where: {
          courseCode: courseCodeStr,
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
