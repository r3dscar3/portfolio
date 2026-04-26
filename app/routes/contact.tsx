import type { ActionFunctionArgs } from 'react-router';
import FormInput from '../components/form/FormInput';
import PageWrapper from '../components/PageWrapper';
import { Resend } from 'resend';
import formSubmissionHtml from '../components/emails/formSubmission.html?raw';
import { renderHTMLTemplate } from '../utils';
import { useActionData } from 'react-router';
import useFormInput from '../hooks/useFormInput';
import { useMemo } from 'react';
import validation from '../utils/validation';

const resend = new Resend(process.env.RESEND_API_KEY);

export function meta() {
  return [{ title: 'Nolan Thompson - Contact' }, { name: 'description', content: 'Contact me' }];
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const name = formData.get('name') as string;
  const email = formData.get('email') as string | null;
  const phone = formData.get('phone') as string | null;
  const body = formData.get('body') as string;

  const html = renderHTMLTemplate(formSubmissionHtml, { name, email, phone, body });

  const { data, error } = await resend.emails.send({
    from: 'NolanPanther <no-reply@nolanpanther.com>',
    to: ['nolan@nolanpanther.com'],
    subject: `Form submission from ${name} on NolanPanther.com`,
    html,
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
  body: { isEmpty: boolean; value: string };
}) {
  return !isContactValid({ email, phone }) || name.isEmpty || body.isEmpty;
}

export default function Contact() {
  const actionData = useActionData<typeof action>();
  const { formData, error } = useMemo(
    () => actionData || { formData: undefined, error: undefined },
    []
  );

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

  const bodyInput = useFormInput({
    initialValue: '',
    validators: [validation.isRequired({ message: 'Please enter a message' })],
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

                <FormInput
                  inputProps={{
                    ...bodyInput,
                    bind: {
                      ...bodyInput.bind,
                      name: 'body',
                      placeholder: "What's up?",
                      'data-1p-ignore': true,
                    },
                  }}
                  rows={12}
                />

                <div className='flex w-full justify-end'>
                  <button
                    disabled={cantSend({
                      name: nameInput,
                      email: emailInput,
                      phone: phoneInput,
                      body: bodyInput,
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
