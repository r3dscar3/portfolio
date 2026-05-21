import type { ActionFunctionArgs } from 'react-router';
import FormInput from '../components/form/FormInput';
import PageWrapper from '../components/PageWrapper';
import { Resend } from 'resend';
import formSubmissionHtml from '../components/emails/formSubmission.html?raw';
import { renderHTMLTemplate } from '../utils';
import { useActionData } from 'react-router';
import useFormInput from '../hooks/useFormInput';
import { useMemo } from 'react';
import { z } from 'zod';

const ContactFormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.email('Invalid email address').nullable().optional(),
  phone: z.string().min(10, 'Invalid phone number').nullable().optional(),
  body: z.string().min(1, 'Message is required'),
});

type ContactFormData = z.infer<typeof ContactFormSchema>;

const resend = new Resend(process.env.RESEND_API_KEY);

export function meta() {
  return [{ title: 'Nolan Thompson - Contact' }, { name: 'description', content: 'Contact me' }];
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();

  // Error type 1: No form data
  if (!formData) {
    return {
      formData: undefined,
      error: { type: 'form' as const, message: 'No form data' },
    };
  }

  const formDataObj = {
    name: formData.get('name') as string,
    email: (formData.get('email') as string | null) || null,
    phone: (formData.get('phone') as string | null) || null,
    body: formData.get('body') as string,
  };

  // Error type 2: Validation
  const result = ContactFormSchema.safeParse(formDataObj);

  if (!result.success) {
    return {
      formData: formDataObj,
      success: false,
      error: { type: 'validation' as const, fields: z.treeifyError(result.error) },
    };
  }

  const { name, email, phone, body } = result.data;
  const html = renderHTMLTemplate(formSubmissionHtml, {
    name,
    email,
    phone,
    body,
  } satisfies ContactFormData);

  const { data, error } = await resend.emails.send({
    from: 'The Website <no-reply@nolanpanther.com>',
    to: ['nolan@nolanpanther.com'],
    subject: `Form submission from ${name} on NolanPanther.com`,
    html,
  });

  // Error type 3: Send failure
  if (error) {
    return {
      formData: null,
      error: {
        type: 'send' as const,
        message:
          error.message || 'An error occurred while sending your message. Please try again later.',
      },
    };
  }

  return { formData: result.data, success: data, error: null };
}

function isContactValid({
  email,
  phone,
}: {
  email: { isEmpty: boolean };
  phone: { isEmpty: boolean };
}) {
  const atLeastOneFilled = !email.isEmpty || !phone.isEmpty;
  const emailOk = !email.isEmpty;
  const phoneOk = !phone.isEmpty;

  return atLeastOneFilled && (emailOk || phoneOk);
}

function cantSend({
  name,
  email,
  phone,
  body,
}: {
  name: { isEmpty: boolean };
  email: { isEmpty: boolean };
  phone: { isEmpty: boolean };
  body: { isEmpty: boolean; value: string };
}) {
  return !isContactValid({ email, phone }) || name.isEmpty || body.isEmpty;
}

export default function Contact() {
  const actionData = useActionData<typeof action>();
  const { formData, success, error } = useMemo(
    () => actionData || { formData: undefined, success: undefined, error: undefined },
    []
  );

  const { name, email, phone, body } = formData || {};

  const { properties = {} } = error?.type === 'validation' ? error.fields : { properties: {} };
  const nameError = properties.name?.errors[0] || undefined;
  const emailError = properties.email?.errors[0] || undefined;
  const phoneError = properties.phone?.errors[0] || undefined;
  const bodyError = properties.body?.errors[0] || undefined;

  const nameInput = useFormInput({
    initialValue: name || '',
  });

  const emailInput = useFormInput({
    initialValue: email || '',
  });

  const phoneInput = useFormInput({
    initialValue: phone || '',
  });

  const bodyInput = useFormInput({
    initialValue: body || '',
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

        {error && (error.type === 'form' || error.type === 'send') ? (
          <div className='text-red-700 bg-red-100 border border-red-300 rounded-md w-full max-w-135 mx-auto p-6'>
            {error.message}
          </div>
        ) : success ? (
          <div className='text-green-700 bg-green-100 border border-green-300 rounded-md w-full max-w-135 mx-auto p-6'>
            Message sent successfully!
          </div>
        ) : (
          <div className='flex items-center justify-center mb-8'>
            <div className='py-4 px-2 bg-gray-200 rounded-md border border-gray-300 shadow-md w-full max-w-135'>
              <form method='POST' className='space-y-6 px-2 w-full'>
                <FormInput
                  key={name}
                  inputProps={{
                    ...nameInput,
                    errorMessage: nameError,
                    bind: {
                      ...nameInput.bind,
                      name: 'name',
                      placeholder: 'Name',
                      autoComplete: 'on',
                      'data-1p-ignore': true,
                    },
                  }}
                />

                <div className='flex flex-col lg:flex-row space-y-2 lg:space-y-0 items-center justify-center'>
                  <FormInput
                    key={email}
                    inputProps={{
                      ...emailInput,
                      errorMessage: emailError,
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
                    key={phone}
                    inputProps={{
                      ...phoneInput,
                      errorMessage: phoneError,
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
                  key={body}
                  inputProps={{
                    ...bodyInput,
                    errorMessage: bodyError,
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
