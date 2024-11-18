import { Resend } from "resend";
import { ActionFunctionArgs, json } from "@remix-run/node";

import PageWrapper from "../components/PageWrapper";

import useFormInput from "~/hooks/useFormInput";
import validation from "~/utils/validation";
import Input from "~/components/Input";
import { useMemo, useState } from "react";
import { useActionData } from "@remix-run/react";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const { subject, body }: any = Object.fromEntries(formData);

  const { data, error } = await resend.emails.send({
    from: "NolanPanther <no-reply@nolanpanther.com>",
    to: ["nolan@nolanpanther.com"],
    subject,
    html: `
      <div>
        <h1>Form submission from nolanpanther.com</h1>
        <h2> style="padding: 4px 0;">${subject}</h2>
        <p style="padding: 4px 0;">${body}</p>
      </div>
    `,
  });

  return json({ formData: data, error });
}

export default function Contact() {
  const actionData = useActionData<typeof action>();
  const { formData, error }: any = useMemo(() => actionData || {}, []);

  const [bodyValue, setBodyValue] = useState("");

  const subjectInput = useFormInput({
    initialValue: "",
    validators: [validation.isEmpty({ message: "Please add a subject" })],
  });

  return (
    <PageWrapper heading="Contact" emoji="☎️">
      <p className="mb-6">
        Have a question, idea, or just want to connect? I'd love to hear from
        you! Whether it's about a job opening, a collaboration opportunity, or a
        quick chat about tech and development, I'm just a message away.
      </p>
      <p className="mb-6">
        Feel free to reach out via this form or connect with me on LinkedIn. I
        aim to respond within 24-48 hours.
      </p>
      <p className="mb-6">Looking forward to connecting!</p>
      {error ? (
        <div className="text-red-700">{error.message}</div>
      ) : (
        <div className="flex items-center justify-center">
          <form
            method="POST"
            className="space-y-6 px-2 max-w-[400px] w-[400px]"
          >
            <Input
              {...subjectInput.bind}
              name="subject"
              placeholder="Subject"
              data-1p-ignore={true}
            />

            <textarea
              value={bodyValue}
              onChange={(e: any) => setBodyValue(e.target.value)}
              placeholder="What's up?"
              name="body"
              rows={12}
              className="block w-full rounded-md text-footnote"
            />

            <div className="flex w-full justify-end">
              <button
                disabled={
                  (subjectInput.isEmpty || bodyValue.length === 0) &&
                  !subjectInput.isValid
                }
                type="submit"
                className="bg-sky-600 px-6 py-2 rounded-md border border-sky-800 text-white hover:bg-sky-700 transition-colors disabled:cursor-not-allowed disabled:bg-gray-300 disabled:border-gray-400"
              >
                Send!
              </button>
            </div>
          </form>
        </div>
      )}
    </PageWrapper>
  );
}
