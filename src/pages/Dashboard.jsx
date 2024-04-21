
 import Accordion from './Accordion'; 
import { useState,useEffect } from 'react'; 
import Navbar from './Navbar'; 
import { useDispatch,useSelector } from 'react-redux';
import { BASE_URI} from '../config/keys-dev';

export default function Dashboard() {
    const [name,setName]=useState('');
    const [userId,setUserId]=useState('');
    const [mobile,setMobile]=useState('');
    const {email,firstPaymentStatus,secondPaymentStatus,bankDetailsStatus} = useSelector(state => state.register)
    const [cmpQr, setCmpQr]=useState('')
    
    // const {name,email,mobile,firstPaymentStatus,secondPaymentStatus,bankDetailsStatus} = useSelector(state => state.register)
    // const dispatch= useDispatch();
    useEffect(() => {
       setName( localStorage.getItem("_n"))
       setUserId(localStorage.getItem("_i"))
       setMobile(localStorage.getItem("_m"))
      }, [])
  

    const [accordions, setAccordion] = useState([ 
        { 
            key: 1, 
            title: 'Step 1', 
            data: `Please scan the QR and done your first payment and upload the screenshot`, 
            qr:cmpQr,
            isOpen: true,
            isCount:true
        }, 
        { 
            key: 2, 
            title: 'Step 2', 
            data: `Please scan the QR and done your second payment and upload the screenshot`, 
            qr:cmpQr,
            isOpen: false,
            isCount:false
        }, ])

        const toggleAccordion = (accordionkey) => { 
            const updatedAccordions = accordions.map((accord) => { 
                if (accord.key === accordionkey) { 
                    return { ...accord, isOpen: !accord.isOpen }; 
                } else { 
                    return { ...accord, isOpen: false }; 
                } 
            }); 
      
            setAccordion(updatedAccordions); 
        }; 
        

            
        
    return (

    <div className="px-0 mx-auto sm:px-6 lg:px-0 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            </h2>
        </div>
        <Navbar from={"dash"}/> 
            <div className="p-2 m-8"> 
                
                <Accordion 
                        key={accordions[0].key} 
                        title={accordions[0].title} 
                        data={accordions[0].data} 
                        isOpen={accordions[0].isOpen} 
                        isCount={accordions[0].isCount}
                        isIfsc={true}
                        ifsc={"BNKN 0 XXX XXX"}
                        acNo={"XXXX XXXX XXXX XXXX"}
                        // qr={accordions[0].qr}
                        toggleAccordion={() => toggleAccordion(accordions[0].key)} 
                        name={name}
                        userId={userId}
                        mobile={mobile}
                    /> 
            </div> 
            <div className="z-30">
        <a href="https://api.whatsapp.com/send?phone=51955081075&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202." class="float z-50" target="_blank">
            <i class="fa fa-whatsapp my-float z-auto"></i>
        </a>
        </div> 

            {/* <footer className="fixed  bottom-0 w-full bg-gray-800 text-white py-2 text-center">
        <p className="text-sm">Still have questions? <a href='#' ><span className="cursor-pointer font-medium text-tertiary transition-all duration-200 hover:text-tertiary focus:text-tertiary hover-underline">Contact
                our support
            </span> </a> </p>
      </footer> */}
      
            
           
    
    </div>

    );
  }
  