import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Success() {
  const router = useRouter();
  const { session_id } = router.query;
  const [session, setSession] = useState(null);

  useEffect(() => {
    if (session_id) {
      const fetchSession = async () => {
        const response = await fetch(`/api/get_checkout_session?session_id=${session_id}`);
        const sessionData = await response.json();
        setSession(sessionData);
      };

      fetchSession();
    }
  }, [session_id]);

  if (!session) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Success</h1>
      <p>Thank you for your purchase!</p>
      <p>Session ID: {session.id}</p>
      <p>Customer Email: {session.customer_details.email}</p>
    </div>
  );
}
