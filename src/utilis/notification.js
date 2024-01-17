import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notificationService = {
  success: (message) => {
    toast.success(message);
  },
  error: (message) => {
    toast.error(message);
  },
  info: (message) => {
    toast.info(message);
  },
  warn: (message) => {
    toast.warn(message);
  },
};

export default notificationService;
