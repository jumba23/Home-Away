import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);
import { type NextRequest, type NextResponse } from "next/server";
import db from "@/utils/db";
import { formatDate } from "@/utils/format";

export const POST = async (req: NextRequest, res: NextResponse) => {
  const requestHeaders = new Headers(req.headers);
  const origin = requestHeaders.get("origin");
  const { bookingId } = await req.json();

  const booking = await db.booking.findUnique({
    where: {
      id: bookingId,
    },
    include: {
      property: {
        select: {
          name: true,
          image: true,
        },
      },
    },
  });
  if (!booking) {
    return Response.json(null, { status: 404, statusText: "Not Found" });
  }
};
