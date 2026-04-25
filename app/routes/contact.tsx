import { useMemo, useState } from 'react';

import type { ActionFunctionArgs } from 'react-router';
import FormInput from '../components/form/FormInput';
import PageWrapper from '../components/PageWrapper';
import { Resend } from 'resend';
import { useActionData } from 'react-router';
import useFormInput from '../hooks/useFormInput';
import validation from '../utils/validation';

const resend = new Resend(process.env.RESEND_API_KEY);

export function meta() {
  return [{ title: 'Nolan Thompson - Contact' }, { name: 'description', content: 'Contact me' }];
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const {
    email = '',
    phone = '',
    name = '',
    body = '',
  } = Object.fromEntries(formData) as Record<string, string>;

  const { data, error } = await resend.emails.send({
    from: 'NolanPanther <no-reply@nolanpanther.com>',
    to: ['nolan@nolanpanther.com'],
    subject: `Form submission from ${name} on NolanPanther.com`,
    html: `
      <div
        style="
          background-color: #f0f0f0;
          padding: 32px 16px;
          width: 100%;
          box-sizing: border-box;
        "
      >
        <table
          role="presentation"
          cellpadding="0"
          cellspacing="0"
          style="max-width: 600px; margin: 0 auto; width: 100%"
        >
          <tr>
            <td
              style="
                background-color: #ffffff;
                border-radius: 12px;
                padding: 32px;
                font-family: Arial, sans-serif;
              "
            >
              <!-- Logo -->
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td align="center" style="padding-bottom: 24px">
                    <img
                      src="https://nolanpanther.com/media/glasses.png"
                      alt="Nolan Panther Logo"
                      width="150"
                      style="display: block; width: 150px; height: auto"
                    />
                  </td>
                </tr>
              </table>

              <!-- Title -->
              <h1
                style="
                  margin: 0 0 24px 0;
                  font-size: 24px;
                  font-weight: bold;
                  text-align: center;
                  color: #111111;
                "
              >
                Form Submission
              </h1>

              <!-- Divider -->
              <hr
                style="
                  border: none;
                  border-top: 1px solid #e0e0e0;
                  margin: 0 0 24px 0;
                "
              />

              <!-- Sender Info -->
              <table
                role="presentation"
                cellpadding="0"
                cellspacing="0"
                width="100%"
                style="margin-bottom: 24px"
              >
                <tr>
                  <td
                    width="80"
                    style="
                      padding: 4px 0;
                      font-size: 14px;
                      color: #555555;
                      font-family: Arial, sans-serif;
                    "
                  >
                    <strong style="color: #111111">Name</strong>
                  </td>
                  <td
                    style="
                      padding: 4px 0;
                      font-size: 14px;
                      color: #333333;
                      font-family: Arial, sans-serif;
                    "
                  >
                    ${name}
                  </td>
                </tr>
                ${
                  email &&
                  `
                <tr>
                  <td
                    width="80"
                    style="
                      padding: 4px 0;
                      font-size: 14px;
                      color: #555555;
                      font-family: Arial, sans-serif;
                    "
                  >
                    <strong style="color: #111111">Email</strong>
                  </td>
                  <td
                    style="
                      padding: 4px 0;
                      font-size: 14px;
                      font-family: Arial, sans-serif;
                    "
                  >
                    <a
                      href="mailto:${email}"
                      style="color: #0066cc; text-decoration: none"
                      >${email}</a
                    >
                  </td>
                </tr>
                `
                } ${
                  phone &&
                  `
                <tr>
                  <td
                    style="
                      padding: 4px 0;
                      font-size: 14px;
                      color: #555555;
                      font-family: Arial, sans-serif;
                    "
                  >
                    <strong style="color: #111111">Phone</strong>
                  </td>
                  <td
                    style="
                      padding: 4px 0;
                      font-size: 14px;
                      color: #333333;
                      font-family: Arial, sans-serif;
                    "
                  >
                    ${phone}
                  </td>
                </tr>
                `
                }
              </table>

              <!-- Divider -->
              <hr
                style="
                  border: none;
                  border-top: 1px solid #e0e0e0;
                  margin: 0 0 24px 0;
                "
              />

              <!-- Message Body -->
              <p
                style="
                  margin: 0;
                  font-size: 15px;
                  line-height: 1.7;
                  color: #333333;
                  font-family: Arial, sans-serif;
                "
              >
                ${body}
              </p>
            </td>
          </tr>
        </table>
      </div>
    `,
  });

  return { formData: data, error };
}

function isContactValid({
  email,
  phone,
}: {
  email: { isEmpty: boolean; isValid: boolean | null };
  phone: { isEmpty: boolean; isValid: boolean | null };
}) {
  const atLeastOneFilled = !email.isEmpty || !phone.isEmpty;
  const emailOk = email.isEmpty || email.isValid === true;
  const phoneOk = phone.isEmpty || phone.isValid === true;

  return atLeastOneFilled && emailOk && phoneOk;
}

function cantSend({
  name,
  email,
  phone,
  body,
}: {
  name: { isEmpty: boolean };
  email: { isEmpty: boolean; isValid: boolean | null };
  phone: { isEmpty: boolean; isValid: boolean | null };
  body: string;
}) {
  return !isContactValid({ email, phone }) || name.isEmpty || body.trim() === '';
}

export default function Contact() {
  const actionData = useActionData<typeof action>();
  const { formData, error } = useMemo(
    () => actionData || { formData: undefined, error: undefined },
    []
  );

  const [bodyValue, setBodyValue] = useState('');

  const nameInput = useFormInput({
    initialValue: '',
    validators: [validation.isRequired({ message: 'Let me know who to contact' })],
  });

  const emailInput = useFormInput({
    initialValue: '',
    validators: [validation.isEmail({ message: 'Please enter a valid email' })],
  });

  const phoneInput = useFormInput({
    initialValue: '',
    validators: [validation.isPhone({ message: 'Please enter a valid phone number' })],
  });

  return (
    <PageWrapper heading='Contact' emoji='☎️'>
      <div className='space-y-10'>
        <div className='space-y-4 mt-4'>
          <p className='text-title3 italic'>
            Have a question, idea, or just want to connect? I'd love to hear from you! Whether it's
            about a job opening, a collaboration opportunity, or a quick chat about tech and
            development, I'm just a message away.
          </p>
          <p>
            Feel free to reach out via this form or connect with me on{' '}
            <a
              href='https://linkedin.com/in/nolan-panther'
              target='_blank'
              rel='noopener noreferrer nofollow'
            >
              LinkedIn
            </a>
            . I aim to respond within 24-48 hours. <br />
            Looking forward to connecting!
          </p>
        </div>

        {error ? (
          <div className='text-red-700 bg-red-100 border border-red-300 rounded-md w-full max-w-125 mx-auto p-6'>
            {error.message}
          </div>
        ) : formData ? (
          <div className='text-green-700 bg-green-100 border border-green-300 rounded-md w-full max-w-125 mx-auto p-6'>
            Message sent successfully!
          </div>
        ) : (
          <div className='flex items-center justify-center mb-8'>
            <div className='py-4 px-2 bg-gray-200 rounded-md border border-gray-300 shadow-md'>
              <form method='POST' className='space-y-6 px-2 max-w-125 w-full'>
                <FormInput
                  inputProps={{
                    ...nameInput,
                    bind: {
                      ...nameInput.bind,
                      name: 'name',
                      placeholder: 'Name',
                      autoComplete: 'on',
                      'data-1p-ignore': true,
                    },
                  }}
                />

                <div className='flex items-center justify-center'>
                  <FormInput
                    inputProps={{
                      ...emailInput,
                      bind: {
                        ...emailInput.bind,
                        name: 'email',
                        placeholder: 'Email',
                        autoComplete: 'on',
                        'data-1p-ignore': true,
                      },
                    }}
                  />

                  <div className='px-2'>or</div>

                  <FormInput
                    inputProps={{
                      ...phoneInput,
                      bind: {
                        ...phoneInput.bind,
                        name: 'phone',
                        placeholder: 'Phone',
                        autoComplete: 'on',
                        'data-1p-ignore': true,
                      },
                    }}
                  />
                </div>

                <textarea
                  value={bodyValue}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                    setBodyValue(e.target.value)
                  }
                  placeholder="What's up?"
                  name='body'
                  rows={12}
                  className='block w-full rounded-md text-footnote placeholder-gray-400 border-gray-300'
                />

                <div className='flex w-full justify-end'>
                  <button
                    disabled={cantSend({
                      name: nameInput,
                      email: emailInput,
                      phone: phoneInput,
                      body: bodyValue,
                    })}
                    type='submit'
                    className='bg-sky-600 px-6 py-2 rounded-md border border-sky-800 text-white hover:bg-sky-700 transition-colors disabled:cursor-not-allowed disabled:bg-gray-300 disabled:border-gray-300'
                  >
                    Send It!
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </PageWrapper>
  );
}
