import { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../lib/firebase';
import { useRouter } from 'next/router';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, u => {
      if (!u) {
        router.push('/login');
      } else {
        setUser(u);
      }
    });
    return () => unsub();
  }, [router]);

  async function doSignOut() {
    await signOut(auth);
    router.push('/login');
  }

  if (!user) return <p className="p-6">Checking authentication...</p>;

  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-extrabold gold-gradient">Dashboard</h1>
      <p className="mt-4 text-white/90">Welcome, {user.email}</p>
      <button onClick={doSignOut} className="mt-6 px-4 py-2 bg-white/5 rounded">Sign out</button>
    </section>
  );
}
