import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Button from '../Button';
import { ReactComponent as KeyIcon } from '../../../assets/icons/key.svg';
import Modal from '../Modal';
import ModalHeader from '../ModalHeader';
import ModalBody from '../ModalBody';
import useFormLoading from '../../../hooks/useFormLoading';
import Input from '../Input';
import { login } from '../../../http/employeeAPI';
import Context from '../../../context/context';
import { EMPLOYEES_ROUTE } from '../../../utils/consts';
import { errorCatch } from '../../../utils/functions';

function AuthModal() {
  const { employee, modal } = useContext(Context);
  const {
    register,
    formState: { errors },
    handleSubmit,
    clearErrors,
  } = useForm({
    mode: 'onChange',
  });
  const {
    formLoading,
    setFormLoading,
  } = useFormLoading();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();
  useEffect(() => {
    clearErrors();
  }, [email, password]);
  useEffect(() => {
    if (employee.isEmployee) {
      navigate(`/${EMPLOYEES_ROUTE}`);
    }
  }, [employee.isEmployee]);
  const leave = () => navigate('/');
  const submit = async () => {
    try {
      setFormLoading(true);
      const user = await login(email, password);
      employee.set(user);
    } catch (e) {
      modal.setErrorModalMessage(errorCatch(e));
    }
  };
  return employee.isEmployee ? null : (
    <Modal className="auth-modal" id="auth-modal" open onClose={() => leave()}>
      <ModalHeader onClose={leave}>
        <KeyIcon
          className="key-icon"
        />
        Employees
      </ModalHeader>
      <ModalBody>
        <form className={`${formLoading ? 'loading' : ''}`} onSubmit={handleSubmit(submit)}>
          <Input
            input={email}
            setInput={setEmail}
            errors={errors}
            name="email"
            placeholder="Email"
            register={register}
            registerOptions={{ required: true }}
          />
          <Input
            input={password}
            setInput={setPassword}
            errors={errors}
            name="password"
            placeholder="Password"
            register={register}
            registerOptions={{ required: true }}
            type="password"
          />
          <Button>Login</Button>
        </form>
      </ModalBody>
    </Modal>
  );
}

export default AuthModal;
