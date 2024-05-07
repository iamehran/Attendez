import {
  createToast,
  updateErrorToast,
  updateSuccessToast,
} from '@/utils/notification';
import axios from 'axios';
import React from 'react';
import Scanner from './scanner';

function BouncerMain() {
  // const [decodedResults, setDecodedResults] = useState();
  const onNewScanResult = async (decodedText: any, decodedResult: any) => {
    console.log(
      'decoded text is ',
      decodedText,
      ' and decoded result is ',
      decodedResult
    );

    let newToast = createToast('Scanning Qr');

    let res = JSON.parse(decodedText);

    console.log('res is ', res);

    let response = await axios.get(
      `/api/admin/event/scan-qr?eventId=${res.eventId}&userId=${res.userId}`
    );

    let data = response.data;
    if (data.status == false) {
      updateErrorToast(newToast, data.error || 'qr invalid');
    } else {
      updateSuccessToast(newToast, 'Verified');
    }

    document.getElementById('html5-qrcode-button-camera-stop')?.click();

    return;
  };
  return (
    <>
      <div className="h-full flex justify-center flex-row items-center">
        <Scanner
          fps={20}
          disableFlip={false}
          qrCodeSuccessCallback={onNewScanResult}
        />
      </div>
    </>
  );
}

export default BouncerMain;
