import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { sApprove, sReject } from "../../features/nodelistSlice";
import { BASE_URI } from '../../../config/keys-dev';

export default function Notification() {
  const [apidata, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Set loading state to true
      try {
        const uId = localStorage.getItem("_i");
        const url = `${BASE_URI}api/users/ctpay/${uId}`;
        const response = await fetch(url);
        const fetchedData = await response.json();
        console.log("nnnnnnnnnnnnnnnnnnnnnfetchedData3333##", url, fetchedData.data);
        setData(fetchedData.data);
      } catch (error) {
        console.error('Error fetching data:', error); // Handle errors gracefully
      } finally {
        setIsLoading(false); // Set loading state to false after fetch (optional)
      }
    };

    fetchData(); // Call the fetch function on component mount
  }, [refresh]);

  // const {name,email,mobile,firstPaymentStatus,secondPaymentStatus,bankDetailsStatus} = useSelector(state => state.register)
  // const dispatch= useDispatch();
  // useEffect(() => {
  //    setName( localStorage.getItem("_n"))
  //    setUserId(localStorage.getItem("_i"))
  //    setMobile(localStorage.getItem("_m"))
  //   }, [])

  const handleApprove = async (row) => {

    try {
      setIsLoading(true);
      let formData = {
        reqId: row._id,
        userId: row.userId,
        nodeUserId: row.nodeUserId
      }
      await dispatch(sApprove(formData)).unwrap();
      setRefresh(!refresh)
    } catch (err) {
      console.error('Unable to create post:', err);
    } finally {
      setIsLoading(false); // Reset loading state
    }

  }
  const handleReject = async (row) => {
    try {
      setIsLoading(true);
      let formData = {
        reqId: row._id,
        userId: row.userId,
        nodeUserId: row.nodeUserId
      }
      await dispatch(sReject(formData)).unwrap();
      setRefresh(!refresh)
    } catch (err) {
      console.error('Unable to create post:', err);
    } finally {
      setIsLoading(false); // Reset loading state
    }
  }



  return (
    <>
      <Navbar from={"noti"} />
      <div className="absolute top-10 px-4 mx-auto items-center justify-center sm:px-6 lg:px-8 max-w-7xl">
        <div className="relative top-1  bg-white mx-auto  p-4 notification-box flex">
          <div className="relative top-1  text-gray-600 tracking-tight">
            <h4 className="relative top-1">notification</h4>
            {apidata && apidata.length > 0 ? (
              apidata.map((data, index) => (
                data.payment_status === "approved" ? (
                  <div key={index} className='relative top-10 flex flex-col shadow-lg rounded-lg bg-white mx-auto m-8 p-4 notification-box mt-1'>
                    <p>Payment from: {data.name}</p>
                    <p>Payee Details: {data.mobile}</p>
                    <p className='text-lime-500 !important'>Status: approved </p>
                  </div>
                ) : data.payment_status === "rejected" ? (
                  <div key={index} className='relative top-30 flex flex-col shadow-lg rounded-lg bg-white mx-auto m-8 p-4 notification-box mt-8'>
                    <p>Payment from: {data.name}</p>
                    <p>Payee Details: {data.mobile}</p>
                    <p className='text-red-500 !important'>Status: rejected </p>
                    
                  </div>
                ) : (
                  <div key={index} className='relative top-30 flex flex-col shadow-lg rounded-lg bg-white mx-auto m-8 p-4 notification-box mt-8'>
                    <p>Payment from: {data.name}</p>
                    <p>Payee Details: {data.mobile}</p>
                    <p className='text-cyan-500 !important'>Status: Requested </p>
                    <img src={`${BASE_URI}uploads/spay/${data.userId}.png`} style={{ height: 400 }} width={200} />
                    <div>
                      <button onClick={() => handleApprove(data)} className='text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>Approved</button>
                      <button onClick={() => handleReject(data)} className='text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900 mt-2'>Rejected</button>
                    </div>
                  </div>
                )
              ))
            ) : (
              <p>No notifications available</p>
            )}
            <p className="relative top-30 text-center text-gray-600 textbase mt-9">
              Still have questions?
              <a href='#' ><span className="cursor-pointer font-medium text-tertiary transition-all duration-200 hover:text-tertiary focus:text-tertiary hover-underline">Contact
                our support
              </span> </a>
            </p>
          </div> 

        </div>
      </div>

    </>
  );
}
