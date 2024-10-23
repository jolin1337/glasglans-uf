// BookingForm.js
import { useState } from 'react';
import { Alert, AlertDescription } from '../components/ui/alert';

const BookingForm = () => {
  const [bookingForm, setBookingForm] = useState({
    name: '',
    phone: '',
    email: ''
  });
  const [status, setStatus] = useState({
    message: '',
    type: '' // 'success' or 'error'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ message: '', type: '' });

    try {
      const response = await fetch('/api/send-booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingForm),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          message: 'Tack för din bokning! Vi återkommer inom kort.',
          type: 'success'
        });
        // Clear form
        setBookingForm({ name: '', phone: '', email: '' });
      } else {
        throw new Error(data.message || 'Något gick fel');
      }
    } catch (error) {
      setStatus({
        message: 'Det gick inte att skicka bokningen. Försök igen senare.',
        type: 'error'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {status.message && (
        <Alert className={status.type === 'error' ? 'bg-red-50' : 'bg-green-50'}>
          <AlertDescription>
            {status.message}
          </AlertDescription>
        </Alert>
      )}
      
      <div>
        <label className="block mb-2">Namn</label>
        <input
          type="text"
          className="w-full p-2 border rounded"
          value={bookingForm.name}
          onChange={(e) => setBookingForm({...bookingForm, name: e.target.value})}
          required
          disabled={isSubmitting}
        />
      </div>
      
      <div>
        <label className="block mb-2">Telefon</label>
        <input
          type="tel"
          className="w-full p-2 border rounded"
          value={bookingForm.phone}
          onChange={(e) => setBookingForm({...bookingForm, phone: e.target.value})}
          required
          disabled={isSubmitting}
        />
      </div>
      
      <div>
        <label className="block mb-2">E-post</label>
        <input
          type="email"
          className="w-full p-2 border rounded"
          value={bookingForm.email}
          onChange={(e) => setBookingForm({...bookingForm, email: e.target.value})}
          required
          disabled={isSubmitting}
        />
      </div>
      
      <button 
        type="submit" 
        className="w-full bg-black text-white p-3 rounded disabled:opacity-50"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Skickar...' : 'Boka Nu'}
      </button>
    </form>
  );
};

export default BookingForm;
