import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../../prisma/client';

// Update doom voters (still under progress)
export async function PUT(req: Request) {
  if (req.method === "PUT") {
    try {
      // const data = await req.body.json();
      const body = await req.json();
      let { doomness, courseCode } = body;
      // Find course details
      const course = await prisma.course.findUnique({
        where: {
          courseCode: courseCode,
        },
      });
      // Update course details
      if (course?.doomness !== null) {
        let newDoomness: number = (parseInt(doomness) + parseInt((course as any).doomness))/2;
        const updatedCourse = await prisma.course.update({
          where: { courseCode: courseCode },
          data: {
            doomness: newDoomness,
            doomnessVoters: (parseInt((course as any).doomnessVoters) + 1)
          }
        });
        return NextResponse.json(updatedCourse, { status: 200 });
      } else {
        return NextResponse.json(
          { error: 'Course not found' },
          { status: 404 }
        );
      }
    } catch (error) {
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