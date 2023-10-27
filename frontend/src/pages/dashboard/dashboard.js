import React from 'react';
import { useDispatch } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/features/auth/authSlice';
import redirectLogoutUser from '../../custom hook/redirectLogoutUser';

const dummyData = [
  { title: 'Total Users', value: 100 },
  { title: 'Revenue', value: '$10,000' },
  { title: 'New Orders', value: 25 },
];

function Dashboard() {
  redirectLogoutUser("/");
  // const dispatch = useDispatch();

  // const isLoggedIn = useSelector(selectIsLoggedIn);
  // const { products, isLoading, isError, message } = useSelector(
  //   (state) => state.product
  // );
  return (
    <div className="min-h-screen min-w-screen p-5 bg-gray-100">
      <main className="">
        {/* Page header */}
        <header className="mb-4">
          <h1 className="lg:text-3xl  font-semibold">Dashboard Overview</h1>
        </header>

        {/* Dashboard content */}
        <div className="grid grid-cols-1  w-max lg:grid-cols-3 gap-4">
          {/* Dashboard cards */}
          {dummyData.map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md"
            >
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="text-2xl font-bold text-indigo-600">{item.value}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
