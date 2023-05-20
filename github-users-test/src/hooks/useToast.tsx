import { toast } from 'react-toastify';

const useToast = () => {
  const notifyError = (message: string, toastId: string) => {
    toast(message, {
      type: "error",
      toastId,
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
  return {
    notifyError
  }
}

export default useToast