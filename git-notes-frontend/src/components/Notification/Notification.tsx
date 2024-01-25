import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

class Notification {
  static toast(text: string) {
    toast(text, {
      hideProgressBar: true,
      position: 'top-right',
      closeOnClick: false,
    });
  }
}

export default Notification;
