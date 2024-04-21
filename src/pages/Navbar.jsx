// Navbar.js 
import { useDispatch } from 'react-redux'; // Import for dispatching actions
import { useNavigate } from 'react-router-dom'; // Import for navigation
import { signout } from '../features/registerSlice'; 
import Logo3 from '../assets/logo.png'

export default function Navbar({from}) { 
	const dispatch = useDispatch();
  const navigate = useNavigate();

  
  const handleLogout = async () => {
    try {
      await dispatch(signout()); // Dispatch the signout action
      navigate('/'); // Navigate to the login route after successful logout
    } catch (error) {
      console.error('Error during logout:', error);
      // Handle errors here (optional: display error message to user)
    }
  };

  
	return ( 
		<>
		


<nav style ={{"position":"fixed","top":"0","zIndex":20,"borderBottomWidth":"1px","borderColor":"#E5E7EB","width":"100%","backgroundColor":"#111827"}}>
  <div style={{"display":"flex","padding":"1rem","flexWrap":"wrap","justifyContent":"space-between","alignItems":"center","maxWidth":"1280px"}}>
  <a href="#!" style={{"display":"flex","marginLeft":["0.75rem","0.875rem"],"alignItems":"center"}}>
      <img src={Logo3} style={{"width":"11rem"}} alt="Flowbite Logo"/>
      <span style={{"alignSelf":"center","fontSize":"1.5rem","lineHeight":"2rem","fontWeight":600,"whiteSpace":"nowrap"}}></span>
  </a>
  <div style={{"display":"flex","marginLeft":["0.75rem","0.875rem"],"@media (min-width: 768px)":{"marginLeft":"0","order":2}}}>

  {from === 'dash' && (
      <a href='/notification' type="button" style={{"paddingTop":"0.5rem","paddingBottom":"0.5rem","paddingLeft":"1rem","paddingRight":"1rem","marginRight":"0.5rem","borderRadius":"0.5rem","fontSize":"0.875rem","lineHeight":"1.25rem","fontWeight":500,"textAlign":"center","color":"#ffffff","backgroundColor":"#1D4ED8",":hover":{"backgroundColor":"#1E40AF"}}}>Notifications</a>
  )}
  {from === 'noti' && (

	  <a href='/udashboard' type="button" style={{"paddingTop":"0.5rem","paddingBottom":"0.5rem","paddingLeft":"1rem","paddingRight":"1rem","marginRight":"0.5rem","borderRadius":"0.5rem","fontSize":"0.875rem","lineHeight":"1.25rem","fontWeight":500,"textAlign":"center","color":"#ffffff","backgroundColor":"#1D4ED8",":hover":{"backgroundColor":"#1E40AF"}}}>Dashboard</a>
  )}
	  
      <button onClick={handleLogout} data-collapse-toggle="navbar-sticky" type="button" style={{"display":"inline-flex","padding":"0.5rem","justifyContent":"center","alignItems":"center","borderRadius":"0.5rem","width":"2.5rem","height":"2.5rem","fontSize":"0.875rem","lineHeight":"1.25rem","color":"#ffffff","backgroundColor":"#B91C1C",":hover":{"backgroundColor":"#F3F4F6"}}} aria-controls="navbar-sticky" aria-expanded="false">
        <span className="sr-only">Logout</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"/>
  <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
</svg>
    </button>
  </div>
  </div>
</nav>
		
		
		{/* <nav className="bg-white fixed w-full 
		z-20 top-0 left-0 
		border-b border-gray-200 "> 
<div className="flex flex-wrap items-center 
		justify-between mx-auto p-4"> 
<a href="#"
className="flex items-center"> 
<img src= 
"https://cdn.logo.com/hotlink-ok/logo-social.png"
	className="mr-2"
	width={75}
	height={75}
	alt="Logo here" /> 
<span className="self-center text-2xl font-semibold "> 
	Brand Name 
</span> 
</a> 
<div className="items-center justify-between hidden 
			w-full md:flex md:w-auto md:order-1  mb-16!important"
id="navbar-sticky"> 
<ul className="flex flex-col p-4 
			md:p-0 mt-4 font-medium 
			border border-gray-100 rounded-lg 
			bg-gray-50 md:flex-row md:space-x-8 
			md:mt-0 md:border-0 md:bg-white"> 
	 {from === 'dash' && (
<li>
<a href="/notification" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">
Notifications
</a>
</li>
)}
{from === 'noti' && (
<li>
<a href="/udashboard" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">
Dashboard
</a>
</li>
)}
	<li> 
	<button onClick={handleLogout} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">
		Logout
	</button>
	</li> 
</ul> 
</div> 
</div> 
</nav>  */}

</>
	) 
}

