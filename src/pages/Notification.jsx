import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { sApprove, sReject } from "../features/nodelistSlice";
import { BASE_URI } from '../config/keys-dev';

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

  const styles={
    "div-noti":{"position":"absolute","top":"2.5rem","paddingLeft":"1rem","paddingRight":"1rem","justifyContent":"center","alignItems":"center","maxWidth":"80rem","@media (min-width: 640px)":{"paddingLeft":"1.5rem","paddingRight":"1.5rem"},"@media (min-width: 1024px)":{"paddingLeft":"2rem","paddingRight":"2rem"}},
   "c1":{"display":"flex","position":"relative","top":"0.25rem","padding":"1rem","backgroundColor":"#ffffff"},
   "c2":{"position":"relative","top":"0.25rem","letterSpacing":"-0.025em","color":"#4B5563"},
   "rt1":{"position":"relative","top":"0.50rem"},
   "apv-div":{"display":"flex","position":"relative","top":"2.5rem","padding":"1rem","margin":"2rem","marginTop":"0.25rem","flexDirection":"column","borderRadius":"0.5rem","backgroundColor":"#ffffff","boxShadow":"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"},
   "rj-div":{"display":"flex","padding":"1rem","margin":"2rem","flexDirection":"column","borderRadius":"0.5rem","backgroundColor":"#ffffff","boxShadow":"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"},
    "rq-div":{"display":"flex","position":"relative","padding":"1rem","margin":"2rem","marginTop":"2rem","flexDirection":"column","borderRadius":"0.5rem","backgroundColor":"#ffffff","boxShadow":"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"},
    "apvBtn":{"display":"flex","position":"relative","padding":"1rem","margin":"2rem","marginTop":"2rem","flexDirection":"column","borderRadius":"0.5rem","backgroundColor":"#ffffff","boxShadow":"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"},
    "rjBtn":{"paddingTop":"0.625rem","paddingBottom":"0.625rem","paddingLeft":"1.25rem","paddingRight":"1.25rem","marginTop":"0.5rem","marginBottom":"0.5rem","borderRadius":"0.5rem","borderWidth":"1px","borderColor":"#B91C1C","fontSize":"0.875rem","lineHeight":"1.25rem","fontWeight":500,"textAlign":"center","color":"#B91C1C",":hover":{"color":"#ffffff","backgroundColor":"#991B1B"}},

    "pr-2":{"paddingRight":"0.5rem"},
    "smpb-2" :{"paddingBottom":"0.5rem","fontSize":"0.875rem","lineHeight":"1.25rem"},
    "tracking-tight":{"fontSize":"0.875rem","lineHeight":"1.25rem","letterSpacing":"-0.025em","color":"#4B5563"},
    "red-900":{"paddingTop":"0.625rem","paddingBottom":"0.625rem","paddingLeft":"1.25rem","paddingRight":"1.25rem","marginTop":"0.5rem","marginBottom":"0.5rem","borderRadius":"0.5rem","borderWidth":"1px","borderColor":"#B91C1C","fontSize":"0.875rem","lineHeight":"1.25rem","fontWeight":500,"textAlign":"center","color":"#B91C1C",":hover":{"color":"#ffffff","backgroundColor":"#991B1B"}},
    "contact":{"display":"flex","position":"fixed","right":"2rem","bottom":"2.5rem","justifyContent":"center","alignItems":"center","borderRadius":"9999px","width":"5rem","height":"5rem","fontSize":"2.25rem","lineHeight":"2.5rem","color":"#ffffff","backgroundColor":"#10B981","dropShadow":"drop-shadow(0 10px 8px rgba(0, 0, 0, 0.04)) drop-shadow(0 4px 3px rgba(0, 0, 0, 0.1))",":hover":{"backgroundColor":"#1D4ED8"}},
    "float-right":{"cssFloat":"right"},
    "message-text":{"fontWeight":700}, 
    "loadingUp":{"paddingTop":"0.5rem","paddingBottom":"0.5rem","paddingLeft":"1rem","paddingRight":"1rem","borderRadius":"0.25rem","fontWeight":700,"color":"#ffffff","backgroundColor":"#3B82F6",":hover":{"backgroundColor":"#1D4ED8"}},
    "input-file":{"display":"block","position":"relative","paddingLeft":"0.75rem","paddingRight":"0.75rem","margin":"0","borderRadius":"0.25rem","borderWidth":"1px","borderStyle":"solid","fontSize":"1rem","lineHeight":"1.5rem","fontWeight":400,"backgroundClip":"padding-box","transitionProperty":"background-color, border-color, color, fill, stroke, opacity, box-shadow, transform","transitionTimingFunction":["cubic-bezier(0.4, 0, 0.2, 1)","cubic-bezier(0.4, 0, 0.2, 1)"],"transitionDuration":["300ms","300ms"],":hover":{}},
          "tb-blk":{"display":"inline-block","marginBottom":"0.5rem","color":"#000000"},
    "label-y":{"display":"block","marginBottom":"0.5rem","fontSize":"0.875rem","lineHeight":"1.25rem","fontWeight":700,"color":"#374151"},
    "form-f":{"paddingTop":"2.5rem","paddingBottom":"2.5rem","paddingLeft":"2.5rem","paddingRight":"2.5rem","borderRadius":"0.5rem","backgroundColor":"#ffffff","boxShadow":"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"},
    "md-hf":{"width":"100%","@media (min-width: 768px)":{"width":"50%"}},
    "qr-p":{"overflow":"hidden","paddingTop":"2.5rem","paddingBottom":"2.5rem","paddingLeft":"2.5rem","paddingRight":"2.5rem","borderRadius":"0.5rem","maxWidth":"32rem","backgroundColor":"#ffffff","boxShadow":"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"},
    "qr-c":{"padding":"0.5rem","marginRight":"0.5rem","borderWidth":"2px","borderColor":"#EF4444"},
    "orn-div":{"padding":"1rem","boxShadow":"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"},
    "acc-btn":{"padding":"1rem","borderRadius":"0.5rem","width":"100%","textAlign":"left","color":"#6B7280","backgroundColor":"#000000","transitionProperty":"background-color, border-color, color, fill, stroke, opacity, box-shadow, transform","transitionTimingFunction":"cubic-bezier(0.4, 0, 0.2, 1)","transitionDuration":["300ms","300ms"],":hover":{"backgroundColor":"#1E3A8A"}},
    "input-r":{"paddingTop":"0.5rem","paddingBottom":"0.5rem","paddingLeft":"0.75rem","paddingRight":"0.75rem","borderRadius":"0.25rem","borderWidth":"1px","width":"100%","lineHeight":1.25,"color":"#374151","appearance":"none"},
    "jb":{"display":"flex","justifyContent":"space-between"},
    "ab-10":{"position":"absolute","top":"2.5rem"},
  
  }
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
      <div style={styles['div-noti']} >
        <div style={styles.c1}>
          <div style={styles.c2} >
            <h4 style={styles.rt1}>notification</h4>
            {apidata && apidata.length > 0 ? (
              apidata.map((data, index) => (
                data.payment_status === "approved" ? (
                  <div key={index} style={styles["apv-div"]}>
                    <p>Payment from: {data.name}</p>
                    <p>Payee Details: {data.mobile}</p>
                    <p  style={{color:"green !important"}}>Status: approved </p>
                  </div>
                ) : data.payment_status === "rejected" ? (
                  <div key={index} style={styles["rj-div"]} >
                    <p>Payment from: {data.name}</p>
                    <p>Payee Details: {data.mobile}</p>
                    <p  style={{color:"red !important"}} >Status: rejected </p>
                    
                  </div>
                ) : (
                  <div key={index} style={styles["rq-div"]}>
                    <p>Payment from: {data.name}</p>
                    <p>Payee Details: {data.mobile}</p>
                    <p style={{color:"blue !important"}} >Status: Requested </p>
                    <img src={`${BASE_URI}uploads/spay/${data.userId}.png`} style={{ height: 400 }} width={200} />
                    <div>
                      <button onClick={() => handleApprove(data)} style={styles.apvBtn}>Approved</button>
                      <button onClick={() => handleReject(data)} style={styles.rjBtn}>Rejected</button>
                    </div>
                  </div>
                )
              ))
            ) : (
              <p style={{color:"black"}}>No notifications available</p>
            )}
            {/* <p className="relative top-30 text-center text-gray-600 textbase mt-9">
              Still have questions?
              <a href='#' ><span className="cursor-pointer font-medium text-tertiary transition-all duration-200 hover:text-tertiary focus:text-tertiary hover-underline">Contact
                our support
              </span> </a>
            </p> */}
          </div> 

        </div>
      </div>

    </>
  );
}
