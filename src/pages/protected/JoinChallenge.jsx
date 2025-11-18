import { useState } from "react";
import { useLoaderData } from "react-router";

export default function JoinChallenge() {
  const { challenge } = useLoaderData();
  const total = 30; // মোট দিন বা টাস্ক
  const [progress, setProgress] = useState(0);

  const percent = Math.round((progress / total) * 100);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="w-full max-w-md rounded-xl bg-white shadow p-6">
        <h1 className="text-xl font-semibold text-slate-900">
          Challenge Progress Dashboard
        </h1>
        <p className="text-sm text-slate-600 mt-1">
          Track your progress easily
        </p>

        {/* Progress bar */}
        <div className="mt-6">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-slate-700">
              {progress}/{total} done
            </span>
            <span className="font-medium text-slate-900">{percent}%</span>
          </div>
          <div className="h-3 w-full bg-slate-200 rounded-full">
            <div
              className="h-3 bg-indigo-600 rounded-full transition-all duration-300"
              style={{ width: `${percent}%` }}
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex gap-3">
          <button
            onClick={() => setProgress(Math.max(0, progress - 1))}
            className="flex-1 rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-700 hover:bg-slate-100"
          >
            -1
          </button>
          <button
            onClick={() => setProgress(Math.min(total, progress + 1))}
            className="flex-1 rounded-md bg-indigo-600 px-3 py-2 text-sm text-white hover:bg-indigo-700"
          >
            +1
          </button>
        </div>
      </div>
    </div>
  );
}
