// // path: lendsqr-fe-test\constants\sampleData.ts
// export const users = [
//   {
//     id: "1",
//     organization: "Lendsqr",
//     username: "Adedeji",
//     email: "adedeji@lendsqr.com",
//     phoneNumber: "08067890371",
//     dateJoined: new Date("May 15, 2020 10:00 AM"), // Date object for filtering
//     formattedDate: "May 15, 2020 10:00 AM", // Formatted string for display
//     status: "Inactive",
//   },
//   {
//     id: "2",
//     organization: "Irorun",
//     username: "Debby Ogana",
//     email: "debby@irorun.com",
//     phoneNumber: "08167089028",
//     dateJoined: new Date("Apr 30, 2020 10:00 AM"),
//     formattedDate: "Apr 30, 2020 10:00 AM", // Formatted string for display
//     status: "Pending",
//   },
//   {
//     id: "3",
//     organization: "Lendstar",
//     username: "Grace Effiom",
//     email: "grace@lendstar.com",
//     phoneNumber: "07067809222",
//     dateJoined: new Date("Apr 30, 2020 10:00 AM"),
//     formattedDate: "Apr 30, 2020 10:00 AM",
//     status: "Blacklisted",
//   },
//   {
//     id: "4",
//     organization: "Lendsqr",
//     username: "Tosin Dokunmu",
//     email: "tosin@lendsqr.com",
//     phoneNumber: "07003309226",
//     dateJoined: new Date("Apr 30, 2020 10:00 AM"),
//     formattedDate: "Apr 30, 2020 10:00 AM", // Corrected property name to match others
//     status: "Pending",
//   },
//   {
//     id: "5",
//     organization: "Lendstar",
//     username: "Grace Effiom",
//     email: "grace@lendstar.com",
//     phoneNumber: "08067809321",
//     dateJoined: new Date("Apr 30, 2020 10:00 AM"),
//     formattedDate: "Apr 30, 2020 10:00 AM",
//     status: "Active",
//   },
//   {
//     id: "6",
//     organization: "Lendsqr",
//     username: "Tosin Dokunmu",
//     email: "tosin@lendsqr.com",
//     phoneNumber: "08067809321",
//     dateJoined: new Date("Apr 30, 2020 10:00 AM"),
//     formattedDate: "Apr 30, 2020 10:00 AM",
//     status: "Active",
//   },
//   {
//     id: "7",
//     organization: "Lendstar",
//     username: "Grace Effiom",
//     email: "grace@lendstar.com",
//     phoneNumber: "08067809321",
//     dateJoined: new Date("Apr 30, 2020 10:00 AM"),
//     formattedDate: "Apr 30, 2020 10:00 AM",
//     status: "Blacklisted",
//   },
//   {
//     id: "8",
//     organization: "Lendsqr",
//     username: "Tosin Dokunmu",
//     email: "tosin@lendsqr.com",
//     phoneNumber: "08067809321",
//     dateJoined: new Date("Apr 30, 2020 10:00 AM"),
//     formattedDate: "Apr 30, 2020 10:00 AM",
//     status: "Inactive",
//   },
//   {
//     id: "9",
//     organization: "Lendstar",
//     username: "Grace Effiom",
//     email: "grace@lendstar.com",
//     phoneNumber: "08067809321",
//     dateJoined: new Date("Apr 30, 2020 10:00 AM"),
//     formattedDate: "Apr 30, 2020 10:00 AM",
//     status: "Inactive",
//   },

//   // First 9 sample data

//   // Generate additional random sample data with unique dates
//   ...Array.from({ length: 21 }, (_, i) => ({
//     organization: ["Lendsqr", "Irorun", "Lendstar"][
//       Math.floor(Math.random() * 3)
//     ],
//     id: `${i + 10}`,
//     username: `User ${i + 10}`,
//     email: `user${i + 10}@example.com`,
//     phoneNumber: `080${Math.floor(100000000 + Math.random() * 900000000)}`,
//     dateJoined: new Date(
//       2020,
//       Math.floor(Math.random() * 12),
//       Math.floor(Math.random() * 28 + 1)
//     ).toISOString(),
//     formattedDate: new Date(
//       2020,
//       Math.floor(Math.random() * 12),
//       Math.floor(Math.random() * 28 + 1)
//     ).toLocaleString(), // Adding formattedDate for all generated users
//     status: ["Active", "Pending", "Inactive", "Blacklisted"][
//       Math.floor(Math.random() * 4)
//     ],
//   })),
// ];


//===
// path: lendsqr-fe-test\constants\sampleData.ts
export const users = [
  {
    id: "1",
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneNumber: "08067890371",
    dateJoined: new Date("May 15, 2020 10:00 AM"),
    formattedDate: "May 15, 2020 10:00 AM",
    status: "Inactive",
  },
  {
    id: "2",
    organization: "Irorun",
    username: "Debby Ogana",
    email: "debby@irorun.com",
    phoneNumber: "08167089028",
    dateJoined: new Date("Apr 30, 2020 10:00 AM"),
    formattedDate: "Apr 30, 2020 10:00 AM",
    status: "Pending",
  },
  {
    id: "3",
    organization: "Lendstar",
    username: "Grace Effiom",
    email: "grace@lendstar.com",
    phoneNumber: "07067809222",
    dateJoined: new Date("Apr 30, 2020 10:00 AM"),
    formattedDate: "Apr 30, 2020 10:00 AM",
    status: "Blacklisted",
  },
  {
    id: "4",
    organization: "Lendsqr",
    username: "Tosin Dokunmu",
    email: "tosin@lendsqr.com",
    phoneNumber: "07003309226",
    dateJoined: new Date("Apr 30, 2020 10:00 AM"),
    formattedDate: "Apr 30, 2020 10:00 AM",
    status: "Pending",
  },
  {
    id: "5",
    organization: "Lendstar",
    username: "Grace Effiom",
    email: "grace@lendstar.com",
    phoneNumber: "08067809321",
    dateJoined: new Date("Apr 30, 2020 10:00 AM"),
    formattedDate: "Apr 30, 2020 10:00 AM",
    status: "Active",
  },
  {
    id: "6",
    organization: "Lendsqr",
    username: "Tosin Dokunmu",
    email: "tosin@lendsqr.com",
    phoneNumber: "08067809321",
    dateJoined: new Date("Apr 30, 2020 10:00 AM"),
    formattedDate: "Apr 30, 2020 10:00 AM",
    status: "Active",
  },
  {
    id: "7",
    organization: "Lendstar",
    username: "Grace Effiom",
    email: "grace@lendstar.com",
    phoneNumber: "08067809321",
    dateJoined: new Date("Apr 30, 2020 10:00 AM"),
    formattedDate: "Apr 30, 2020 10:00 AM",
    status: "Blacklisted",
  },
  {
    id: "8",
    organization: "Lendsqr",
    username: "Tosin Dokunmu",
    email: "tosin@lendsqr.com",
    phoneNumber: "08067809321",
    dateJoined: new Date("Apr 30, 2020 10:00 AM"),
    formattedDate: "Apr 30, 2020 10:00 AM",
    status: "Inactive",
  },
  {
    id: "9",
    organization: "Lendstar",
    username: "Grace Effiom",
    email: "grace@lendstar.com",
    phoneNumber: "08067809321",
    dateJoined: new Date("Apr 30, 2020 10:00 AM"),
    formattedDate: "Apr 30, 2020 10:00 AM",
    status: "Inactive",
  },
  // Generate additional random sample data with unique dates
  ...Array.from({ length: 21 }, (_, i) => {
    const randomDate = new Date(
      2020,
      Math.floor(Math.random() * 12),
      Math.floor(Math.random() * 28 + 1),
      Math.floor(Math.random() * 24), // random hour
      Math.floor(Math.random() * 60)  // random minute
    );
    return {
      organization: ["Lendsqr", "Irorun", "Lendstar"][
        Math.floor(Math.random() * 3)
      ],
      id: `${i + 10}`,
      username: `User ${i + 10}`,
      email: `user${i + 10}@example.com`,
      phoneNumber: `080${Math.floor(100000000 + Math.random() * 900000000)}`,
      dateJoined: randomDate,
      formattedDate: randomDate.toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }),
      status: ["Active", "Pending", "Inactive", "Blacklisted"][
        Math.floor(Math.random() * 4)
      ],
    };
  }),
];