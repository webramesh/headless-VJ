'use client';
import { useRef, useState } from 'react';
import CustomToast from '../CustomToast';

const SubscriptionForm = () => {
  const inputRef = useRef(null);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastClass, setToastClass] = useState('');
  const [agreeToPrivacy, setAgreeToPrivacy] = useState(false);

  const subscribeUser = async (e) => {
    e.preventDefault();

    // Check if the email input is empty or the privacy checkbox is not checked
    if (!inputRef.current.value.trim()) {
      setToastMessage('Please enter an email address.');
      setToastClass('bg-red-600'); // Error style
      setShowToast(true);
    } else if (!agreeToPrivacy) {
      setToastMessage('You must agree to the privacy policy.');
      setToastClass('bg-red-600'); // Error style
      setShowToast(true);
    } else {
      const res = await fetch('/api/subscribeUser', {
        body: JSON.stringify({
          email: inputRef.current.value,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });

      // Depending on the response, display the toast with the appropriate message and style
      if (res.ok) {
        setToastMessage('Subscribed successfully');
        setToastClass('bg-green-500'); // Success style
        setShowToast(true);
      } else {
        setToastMessage('There was an error subscribing to the newsletter.');
        setToastClass('bg-red-600'); // Error style
        setShowToast(true);
      }
    }

    // Hide the toast after 3 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <div>
      {showToast && <CustomToast message={toastMessage} className={toastClass} />}
      <div className="w-full bg-[#eb7272]">
        <div className="p-6 sm:p-8">
          <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl mb-4">Vill du ha vårt nyhetsbrev?</h1>
          <h3 className="text-white text-sm sm:text-base mb-6">
            Få handplockat innehåll i vårt nyhetsbrev, det är gratis.
          </h3>
          <form className="space-y-4" onSubmit={subscribeUser}>
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                ref={inputRef}
                className="w-full lg:w-2/3 p-2 border-4 border-[#eb7272] placeholder-gray-400 rounded-md"
                placeholder="abc@gmail.com"
                required
              />
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="privacy"
                className="mr-4"
                checked={agreeToPrivacy}
                onChange={(e) => setAgreeToPrivacy(e.target.checked)}
              />
              <label htmlFor="privacy" className="text-white text-sm">
                Jag godkänner integritetspolicy
              </label>
            </div>
            <button
              type="submit"
              className="rounded-full text-sm py-2 px-6 bg-red-600 text-white hover:bg-red-700 transition-colors"
            >
              Ja, skicka till mig!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionForm;
