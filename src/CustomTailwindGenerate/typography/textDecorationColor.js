const textDecorationColor = [
  "dd-decoration-inherit",
  "dd-decoration-current",
  "dd-decoration-transparent",
  "dd-decoration-black",
  "dd-decoration-white",
  "dd-decoration-slate-50",
  "dd-decoration-slate-100",
  "dd-decoration-slate-200",
  "dd-decoration-slate-300",
  "dd-decoration-slate-400",
  "dd-decoration-slate-500",
  "dd-decoration-slate-600",
  "dd-decoration-slate-700",
  "dd-decoration-slate-800",
  "dd-decoration-slate-900",
  "dd-decoration-slate-950",
  "dd-decoration-gray-50	",
  "dd-decoration-gray-100	",
  "dd-decoration-gray-200	",
  "dd-decoration-gray-300	",
  "dd-decoration-gray-400	",
  "dd-decoration-gray-500	",
  "dd-decoration-gray-600	",
  "dd-decoration-gray-700",
  "dd-decoration-gray-800	",
  "dd-decoration-gray-900	",
  "dd-decoration-gray-950	",
  "dd-decoration-zinc-50	",
  "dd-decoration-zinc-100	",
  "dd-decoration-zinc-200	",
  "dd-decoration-zinc-300	",
  "dd-decoration-zinc-400	",
  "dd-decoration-zinc-500	",
  "dd-decoration-zinc-600	",
  "dd-decoration-zinc-700	",
  "dd-decoration-zinc-800	",
  "dd-decoration-zinc-900	",
  "dd-decoration-zinc-950	",
  "dd-decoration-neutral-50	",
  "dd-decoration-neutral-100	",
  "dd-decoration-neutral-200	",
  "dd-decoration-neutral-300	",
  "dd-decoration-neutral-400	",
  "dd-decoration-neutral-500	",
  "dd-decoration-neutral-600	",
  "dd-decoration-neutral-700	",
  "dd-decoration-neutral-800	",
  "dd-decoration-neutral-900	",
  "dd-decoration-neutral-950	",
  "dd-decoration-stone-50	",
  "dd-decoration-stone-100	",
  "dd-decoration-stone-200	",
  "dd-decoration-stone-300	",
  "dd-decoration-stone-400	",
  "dd-decoration-stone-500	",
  "dd-decoration-stone-600	",
  "dd-decoration-stone-700	",
  "dd-decoration-stone-800	",
  "dd-decoration-stone-900",
  "dd-decoration-stone-950	",
  "dd-decoration-red-50	",
  "dd-decoration-red-100	",
  "dd-decoration-red-200	",
  "dd-decoration-red-300	",
  "dd-decoration-red-400	",
  "dd-decoration-red-500	",
  "dd-decoration-red-600	",
  "dd-decoration-red-700	",
  "dd-decoration-red-800	",
  "dd-decoration-red-900	",
  "dd-decoration-red-950	",
  "dd-decoration-orange-50	",
  "dd-decoration-orange-100	",
  "dd-decoration-orange-100	",
  "dd-decoration-orange-200	",
  "dd-decoration-orange-300	",
  "dd-decoration-orange-400	",
  "dd-decoration-orange-500	",
  "dd-decoration-orange-600	",
  "dd-decoration-orange-700	",
  "dd-decoration-orange-800	",
  "dd-decoration-orange-900	",
  "dd-decoration-orange-950	",
  "dd-decoration-amber-50	",
  "dd-decoration-amber-100	",
  "dd-decoration-amber-200	",
  "dd-decoration-amber-300	",
  "dd-decoration-amber-400	",
  "dd-decoration-amber-500	",
  "dd-decoration-amber-600	",
  "dd-decoration-amber-700	",
  "dd-decoration-amber-800	",
  "dd-decoration-amber-900	",
  "dd-decoration-amber-950	",
  "dd-decoration-yellow-50	",
  "dd-decoration-yellow-100	",
  "dd-decoration-yellow-2000	",
  "dd-decoration-yellow-300	",
  "dd-decoration-yellow-400	",
  "dd-decoration-yellow-500	",
  "dd-decoration-yellow-600	",
  "dd-decoration-yellow-700	",
  "dd-decoration-yellow-800	",
  "dd-decoration-yellow-900	",
  "dd-decoration-yellow-950	",
  "dd-decoration-lime-50	",
  "dd-decoration-lime-100	",
  "dd-decoration-lime-200	",
  "dd-decoration-lime-300	",
  "dd-decoration-lime-400	",
  "dd-decoration-lime-500	",
  "dd-decoration-lime-600	",
  "dd-decoration-lime-700	",
  "dd-decoration-lime-800	",
  "dd-decoration-lime-900	",
  "dd-decoration-lime-950	",
  "dd-decoration-green-50	",
  "dd-decoration-green-100",
  "dd-decoration-green-200	",
  "dd-decoration-green-300	",
  "dd-decoration-green-400	",
  "dd-decoration-green-500	",
  "dd-decoration-green-600	",
  "dd-decoration-green-700	",
  "dd-decoration-green-800	",
  "dd-decoration-green-900	",
  "dd-decoration-green-950	",
  "dd-decoration-emerald-50	",

  "dd-decoration-emerald-100	",
  "dd-decoration-emerald-200	",
  "dd-decoration-emerald-300	",
  "dd-decoration-emerald-400	",
  "dd-decoration-emerald-500	",
  "dd-decoration-emerald-600	",
  "dd-decoration-emerald-700	",
  "dd-decoration-emerald-800	",
  "dd-decoration-emerald-900	",
  "dd-decoration-emerald-950	",
  "dd-decoration-teal-50	",
  "dd-decoration-teal-100	",
  "dd-decoration-teal-200	",
  "dd-decoration-teal-300	",
  "dd-decoration-teal-400	",
  "dd-decoration-teal-500	",
  "dd-decoration-teal-600	",
  "dd-decoration-teal-700	",
  "dd-decoration-teal-800	",
  "dd-decoration-teal-900	",
  "dd-decoration-teal-950	",
  "dd-decoration-cyan-50	",
  "dd-decoration-cyan-100	",
  "dd-decoration-cyan-200	",
  "dd-decoration-cyan-300	",
  "dd-decoration-cyan-400	",
  "dd-decoration-cyan-500	",
  "dd-decoration-cyan-600	",
  "dd-decoration-cyan-700	",
  "dd-decoration-cyan-800	",
  "dd-decoration-cyan-900	",
  "dd-decoration-cyan-950	",
  "dd-decoration-sky-50	",
  "dd-decoration-sky-100	",
  "dd-decoration-sky-200	",
  "dd-decoration-sky-300	",
  "dd-decoration-sky-400	",
  "dd-decoration-sky-500	",
  "dd-decoration-sky-600	",
  "dd-decoration-sky-700	",
  "dd-decoration-sky-800	",
  "dd-decoration-sky-900	",
  "dd-decoration-sky-950	",
  "dd-decoration-blue-50	",
  "dd-decoration-blue-100	",
  "dd-decoration-blue-200	",
  "dd-decoration-blue-300	",
  "dd-decoration-blue-400	",
  "dd-decoration-blue-500	",
  "dd-decoration-blue-600	",
  "dd-decoration-blue-700	",
  "dd-decoration-blue-800	",
  "dd-decoration-blue-950	",
  "dd-decoration-indigo-50	",
  "dd-decoration-indigo-100	",
  "dd-decoration-indigo-200	",
  "dd-decoration-indigo-300	",
  "dd-decoration-indigo-400	",
  "dd-decoration-indigo-500	",
  "dd-decoration-indigo-600	",
  "dd-decoration-indigo-700	",
  "dd-decoration-indigo-800	",
  "dd-decoration-indigo-900	",
  "dd-decoration-indigo-950	",
  "dd-decoration-violet-50	",
  "dd-decoration-violet-100	",
  "dd-decoration-violet-2000	",
  "dd-decoration-violet-300	",
  "dd-decoration-violet-400	",
  "dd-decoration-violet-500	",
  "dd-decoration-violet-600	",
  "dd-decoration-violet-700	",
  "dd-decoration-violet-800	",
  "dd-decoration-violet-900	",
  "dd-decoration-violet-950	",
  "dd-decoration-purple-50	",
  "dd-decoration-purple-100	",
  "dd-decoration-purple-200	",
  "dd-decoration-purple-300	",
  "dd-decoration-purple-400	",
  "dd-decoration-purple-500	",
  "dd-decoration-purple-600	",
  "dd-decoration-purple-700	",
  "dd-decoration-purple-800	",
  "dd-decoration-purple-900	",
  "dd-decoration-purple-950	",
  "dd-decoration-fuchsia-50	",
  "dd-decoration-fuchsia-100	",
  "dd-decoration-fuchsia-200	",
  "dd-decoration-fuchsia-300	",
  "dd-decoration-fuchsia-400	",
  "dd-decoration-fuchsia-500	",
  "dd-decoration-fuchsia-600	",
  "dd-decoration-fuchsia-700	",
  "dd-decoration-fuchsia-800	",
  "dd-decoration-fuchsia-900	",
  "dd-decoration-fuchsia-950	",
  "dd-decoration-pink-50	",

  "dd-decoration-pink-100	",
  "dd-decoration-pink-200	",
  "dd-decoration-pink-300	",
  "dd-decoration-pink-400	",
  "dd-decoration-pink-500	",
  "dd-decoration-pink-600	",
  "dd-decoration-pink-700	",
  "dd-decoration-pink-800	",
  "dd-decoration-pink-900	",
  "dd-decoration-pink-950	",
  "dd-decoration-rose-50	",
  "dd-decoration-rose-100	",
  "dd-decoration-rose-200	",
  "dd-decoration-rose-300	",
  "dd-decoration-rose-400	",
  "dd-decoration-rose-500	",
  "dd-decoration-rose-600	",
  "dd-decoration-rose-700	",
  "dd-decoration-rose-800	",
  "dd-decoration-rose-900	",
  "dd-decoration-rose-950	",
];
