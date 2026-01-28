import { NextResponse } from "next/server";
import { createClient } from "@sanity/client";

const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "zgh3tp87",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Valid email is required" },
        { status: 400 }
      );
    }

    // Check if email already exists
    const existingSubscriber = await sanityClient.fetch(
      `*[_type == "newsletterSubscriber" && email == $email][0]`,
      { email }
    );

    if (existingSubscriber) {
      return NextResponse.json(
        { message: "Already subscribed" },
        { status: 200 }
      );
    }

    // Create new subscriber
    const doc = {
      _type: "newsletterSubscriber",
      email,
      subscribedAt: new Date().toISOString(),
      source: "footer",
      status: "active",
    };

    await sanityClient.create(doc);

    return NextResponse.json(
      { success: true, message: "Successfully subscribed" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return NextResponse.json(
      { error: "Failed to subscribe" },
      { status: 500 }
    );
  }
}
