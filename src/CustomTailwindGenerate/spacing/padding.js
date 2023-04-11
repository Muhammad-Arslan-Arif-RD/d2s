const padding = [
  "dd-p-0",
  "dd-p-1",
  "dd-p-2",
  "dd-p-3",
  "dd-p-4",
  "dd-p-5",
  "dd-p-6",
  "dd-p-7",
  "dd-p-8",
  "dd-p-9",
  "dd-p-10",
  "dd-p-11",
  "dd-p-12",
  "dd-p-14",
  "dd-p-16",
  "dd-p-20",
  "dd-p-24",
  "dd-p-28",
  "dd-p-32",
  "dd-p-36",
  "dd-p-40",
  "dd-p-44",
  "dd-p-48",
  "dd-p-52",
  "dd-p-56",
  "dd-p-60",
  "dd-p-64",
  "dd-p-72",
  "dd-p-80",
  "dd-p-96",
  "dd-p-px",
  "dd-p-0.5",
  "dd-p-1.5",
  "dd-p-2.5",
  "dd-p-3.5",
  "dd-px-0",
  "dd-px-1",
  "dd-px-2",
  "dd-px-3",
  "dd-px-4",
  "dd-px-5",
  "dd-px-6",
  "dd-px-7",
  "dd-px-8",
  "dd-px-9",
  "dd-px-10",
  "dd-px-11",
  "dd-px-12",
  "dd-px-14",
  "dd-px-16",
  "dd-px-20",
  "dd-px-24",
  "dd-px-28",
  "dd-px-32",
  "dd-px-36",
  "dd-px-40",
  "dd-px-44",
  "dd-px-48",
  "dd-px-52",
  "dd-px-56",
  "dd-px-60",
  "dd-px-64",
  "dd-px-72",
  "dd-px-80",
  "dd-px-96",
  "dd-px-px",
  "dd-px-0.5",
  "dd-px-1.5",
  "dd-px-2.5",
  "dd-px-3.5",
  "dd-py-0",
  "dd-py-1",
  "dd-py-2",
  "dd-py-3",
  "dd-py-4",
  "dd-py-5",
  "dd-py-6",
  "dd-py-7",
  "dd-py-8",
  "dd-py-9",
  "dd-py-10",
  "dd-py-11",
  "dd-py-12",
  "dd-py-14",
  "dd-py-16",
  "dd-py-20",
  "dd-py-24",
  "dd-py-28",
  "dd-py-32",
  "dd-py-36",
  "dd-py-40",
  "dd-py-44",
  "dd-py-48",
  "dd-py-52",
  "dd-py-56",
  "dd-py-60",
  "dd-py-64",
  "dd-py-72",
  "dd-py-80",
  "dd-py-96",
  "dd-py-px",
  "dd-py-0.5",
  "dd-py-1.5",
  "dd-py-2.5",
  "dd-py-3.5",
  "dd-pt-0",
  "dd-pt-1",
  "dd-pt-2",
  "dd-pt-3",
  "dd-pt-4",
  "dd-pt-5",
  "dd-pt-6",
  "dd-pt-7",
  "dd-pt-8",
  "dd-pt-9",
  "dd-pt-10",
  "dd-pt-11",
  "dd-pt-12",
  "dd-pt-14",
  "dd-pt-16",
  "dd-pt-20",
  "dd-pt-24",
  "dd-pt-28",
  "dd-pt-32",
  "dd-pt-36",
  "dd-pt-40",
  "dd-pt-44",
  "dd-pt-48",
  "dd-pt-52",
  "dd-pt-56",
  "dd-pt-60",
  "dd-pt-64",
  "dd-pt-72",
  "dd-pt-80",
  "dd-pt-96",
  "dd-pt-px",
  "dd-pt-0.5",
  "dd-pt-1.5",
  "dd-pt-2.5",
  "dd-pt-3.5",
  "dd-pr-0",
  "dd-pr-1",
  "dd-pr-2",
  "dd-pr-3",
  "dd-pr-4",
  "dd-pr-5",
  "dd-pr-6",
  "dd-pr-7",
  "dd-pr-8",
  "dd-pr-9",
  "dd-pr-10",
  "dd-pr-11",
  "dd-pr-12",
  "dd-pr-14",
  "dd-pr-16",
  "dd-pr-20",
  "dd-pr-24",
  "dd-pr-28",
  "dd-pr-32",
  "dd-pr-36",
  "dd-pr-40",
  "dd-pr-44",
  "dd-pr-48",
  "dd-pr-52",
  "dd-pr-56",
  "dd-pr-60",
  "dd-pr-64",
  "dd-pr-72",
  "dd-pr-80",
  "dd-pr-96",
  "dd-pr-px",
  "dd-pr-0.5",
  "dd-pr-1.5",
  "dd-pr-2.5",
  "dd-pr-3.5",
  "dd-pb-0",
  "dd-pb-1",
  "dd-pb-2",
  "dd-pb-3",
  "dd-pb-4",
  "dd-pb-5",
  "dd-pb-6",
  "dd-pb-7",
  "dd-pb-8",
  "dd-pb-9",
  "dd-pb-10",
  "dd-pb-11",
  "dd-pb-12",
  "dd-pb-14",
  "dd-pb-16",
  "dd-pb-20",
  "dd-pb-24",
  "dd-pb-28",
  "dd-pb-32",
  "dd-pb-36",
  "dd-pb-40",
  "dd-pb-44",
  "dd-pb-48",
  "dd-pb-52",
  "dd-pb-56",
  "dd-pb-60",
  "dd-pb-64",
  "dd-pb-72",
  "dd-pb-80",
  "dd-pb-96",
  "dd-pb-px",
  "dd-pb-0.5",
  "dd-pb-1.5",
  "dd-pb-2.5",
  "dd-pb-3.5",
  "dd-pl-0",
  "dd-pl-1",
  "dd-pl-2",
  "dd-pl-3",
  "dd-pl-4",
  "dd-pl-5",
  "dd-pl-6",
  "dd-pl-7",
  "dd-pl-8",
  "dd-pl-9",
  "dd-pl-10",
  "dd-pl-11",
  "dd-pl-12",
  "dd-pl-14",
  "dd-pl-16",
  "dd-pl-20",
  "dd-pl-24",
  "dd-pl-28",
  "dd-pl-32",
  "dd-pl-36",
  "dd-pl-40",
  "dd-pl-44",
  "dd-pl-48",
  "dd-pl-52",
  "dd-pl-56",
  "dd-pl-60",
  "dd-pl-64",
  "dd-pl-72",
  "dd-pl-80",
  "dd-pl-96",
  "dd-pl-px",
  "dd-pl-0.5",
  "dd-pl-1.5",
  "dd-pl-2.5",
  "dd-pl-3.5",
];
