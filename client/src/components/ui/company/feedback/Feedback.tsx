import React, { useEffect, useState } from 'react';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useForm } from 'react-hook-form';
import Button from '../../Button';
import Input from '../../Input';
import PageHeader from '../../PageHeader';

function Feedback() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    clearErrors,
  } = useForm({
    mode: 'onChange',
  });
  const [name, setName] = useState<string>('');
  const [contact, setContact] = useState<string>('');
  const [inquiry, setInquiry] = useState<string>('');
  useEffect(() => {
    clearErrors();
  }, [name, contact, inquiry]);
  const [success, setSuccess] = useState<boolean>(false);
  const submit = () => {
    setSuccess(true);
    setName('');
    setContact('');
    setInquiry('');
  };
  return (
    <div id="feedback" className="right-col">
      <PageHeader
        header="Feedback"
      />
      <p>
        Submit inquiries via our contact form.
        <br />
        Our representatives will respond promptly.
      </p>
      <form className={`${success && 'success'}`} onSubmit={handleSubmit(submit)}>
        <Input
          placeholder="Name..."
          register={register}
          registerOptions={{ required: true }}
          name="name"
          input={name}
          setInput={setName}
          errors={errors}
        />
        <Input
          placeholder="Telephone/Email......"
          register={register}
          registerOptions={{ required: true }}
          name="email"
          input={contact}
          setInput={setContact}
          errors={errors}
        />
        <Input
          placeholder="Your inquiry..."
          register={register}
          registerOptions={{ required: true }}
          name="inquiry"
          input={inquiry}
          setInput={setInquiry}
          errors={errors}
          textarea
        />
        {success ? (
          <Button
            type="submit"
            className="success"
          >
            <FontAwesomeIcon
              icon={faCheck}
            />
            Submitted
          </Button>
        ) : (
          <Button
            type="submit"
          >
            Submit
          </Button>
        )}
      </form>
    </div>
  );
}

export default Feedback;
