import { useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../lib/firebase';
import { useRouter } from 'next/router';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSignIn(e) {
    e.preventDefault();
    setError(''); setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/dashboard');
    } catch (err) {
      setError(err.message);
    } finally { setLoading(false); }
  }

  async function handleSignUp(e) {
    e.preventDefault();
    setError(''); setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push('/dashboard');
    } catch (err) {
      setError(err.message);
    } finally { setLoading(false); }
  }

  return (
    <section className="max-w-md mx-auto px-4 py-16">
      <h1 className="text-4xl font-extrabold gold-gradient">Login</h1>
      <form className="mt-6 space-y-4" onSubmit={handleSignIn}>
        <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" className="w-full p-3 rounded bg-white/5" required />
        <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" className="w-full p-3 rounded bg-white/5" required />
        <div className="flex gap-2">
          <button onClick={handleSignIn} className="flex-1 p-3 rounded bg-yellow-500 text-black font-bold" type="submit" disabled={loading}>Sign in</button>
          <button onClick={handleSignUp} className="flex-1 p-3 rounded bg-white/5 text-white" type="button" disabled={loading}>Create account</button>
        </div>
        {error && <p className="text-red-400">{error}</p>}
      </form>
    </section>
);
}
