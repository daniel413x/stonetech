import React, { FormEvent, useState } from 'react';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../components/Button';
import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';

function Advantages() {
  const [name, setName] = useState<string>('');
  const [contact, setContact] = useState<string>('');
  const [inquiry, setInquiry] = useState<string>('');
  const [pressedSubmit, setPressedSubmit] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !contact || !inquiry) {
      setPressedSubmit(true);
      return;
    }
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
      <form className={`${success && 'success'}`} onSubmit={submit}>
        <Input
          placeholder="Name..."
          input={name}
          setInput={setName}
          pressedSubmit={pressedSubmit}
          setPressedSubmit={setPressedSubmit}
        />
        <Input
          placeholder="Telephone/Email......"
          input={contact}
          setInput={setContact}
          pressedSubmit={pressedSubmit}
          setPressedSubmit={setPressedSubmit}
        />
        <Input
          placeholder="Your inquiry..."
          input={inquiry}
          setInput={setInquiry}
          pressedSubmit={pressedSubmit}
          setPressedSubmit={setPressedSubmit}
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

export default Advantages;
