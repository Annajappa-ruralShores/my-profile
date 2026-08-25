"use server";

export async function sendEmail(prevState: any, formData: FormData) {
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    // Mock email sending delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Email sent:", { name, email, message });

    return { success: true, message: "Email sent successfully!" };
}
