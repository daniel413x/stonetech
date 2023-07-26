import { useState } from 'react';

interface UseFormLoadingReturn {
  initLoading: boolean;
  formLoading: boolean;
  setInitLoading: (boolean: boolean) => void;
  setFormLoading: (boolean: boolean) => void;
}

function useFormLoading(): UseFormLoadingReturn {
  const [initLoading, setInitLoading] = useState<boolean>(true);
  const [formLoading, setFormLoading] = useState<boolean>(false);
  return {
    initLoading,
    formLoading,
    setInitLoading,
    setFormLoading,
  };
}

export default useFormLoading;
