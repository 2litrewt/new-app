"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (!userId || !password) {
      setError("ユーザーIDとパスワードを入力してください。");
      return;
    }
    if (userId !== "testuser" || password !== "password123") {
      setError("ユーザーIDまたはパスワードが間違っています。");
      return;
    }
    router.push("/customers");
  };

  const handleGuestAccess = () => {
    router.push("/customers");
  };

  return (
    <div className="p-8 flex flex-col gap-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">ログイン</h2>
      <input placeholder="ユーザーID" value={userId} onChange={(e) => setUserId(e.target.value)} className="border p-2 w-full"/>
      <input type="password" placeholder="パスワード" value={password} onChange={(e) => setPassword(e.target.value)} className="border p-2 w-full"/>
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      <button onClick={handleLogin} className="mt-4 w-full bg-blue-500 text-white p-2 rounded">ログイン</button>
      <button onClick={handleGuestAccess} className="mt-2 w-full bg-gray-500 text-white p-2 rounded">ゲストユーザーとして閲覧する</button>
    </div>
  );
}
