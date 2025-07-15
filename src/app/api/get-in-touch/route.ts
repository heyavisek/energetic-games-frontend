import axios, { AxiosError } from "axios";
import { NextResponse } from "next/server";
import { FromModel } from "../../models/global.model";
import {
  BrevoKey,
  BrevoApiUrl,
  BrevoSenderEmail,
  BrevoTemplateId,
  ContactEmailTo,
} from "../../constant/global.contstant";

export async function POST(req: Request) {
  try {
    const formData: FromModel = await req.json();

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phone ||
      !formData.dob
    ) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const response = await axios.post(
      BrevoApiUrl,
      {
        sender: { email: BrevoSenderEmail, name: "THE_SACRED_TRIANGLES" },
        to: [{ email: ContactEmailTo }],
        templateId: BrevoTemplateId,
        params: formData,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "api-key": BrevoKey,
        },
      }
    );

    return NextResponse.json(
      {
        success: true,
        message: "Email sent successfully",
      },
      { status: response.status }
    );
  } catch (error: unknown) {
    let message = "";
    if (error instanceof AxiosError) {
      message = error.response?.data || error.message;
    }
    return NextResponse.json(
      {
        error: "Failed to send email",
        details: message,
      },
      { status: 500 }
    );
  }
}
