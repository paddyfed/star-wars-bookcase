import { NextResponse } from "next/server";
import bookcase from "@/json/bookcase.json";
import bookCaseReleaseOrder from "@/app/helpers/bookCaseReleaseOrder";

const ordered = bookCaseReleaseOrder(bookcase);

export async function GET() {
  return NextResponse.json({ bookcase: ordered });
}
