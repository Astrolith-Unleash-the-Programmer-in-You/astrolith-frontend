import React,{useState} from 'react'
import { logo,settings} from "../assets";
import { useAuth } from '../contexts/auth';
import {useGame } from '../contexts/Game';

function convertImageToBase64(file, callback) {
	const reader= new FileReader();

	reader.onload = () => {
		const base64String = reader?.result;
		console.log(base64String);
		callback(base64String);
	};

	reader.readAsDataURL(file);
}
export default function Layout({children}) {
	const [showPreview,setShowPreview] = useState(false);
	const [formData,setFormData] = useState({
		userName: '',
		fullName: '',
	});
	const [avatar,setAvatar] = useState("");
	const {userName} = useAuth();
	const {startGame,showLevels} = useGame();

	const handleFileChange = (e) => {
      const selectedFile = e.target?.files[0];

      if (selectedFile) {
		console.log(selectedFile)
        convertImageToBase64(selectedFile, (base64String) => {
          setAvatar(base64String);
		  setShowPreview(true);
        });
      }
    };

	const handleFormSubmit = (e) => {
		e.preventDefault();
		const {userName,fullName} = e.target;
		
		setFormData({userName,fullName});
		console.log(formData)
	};

  return (
		<div className="layout relative ">
			{children}
			{/* prompt if user is not registered for the game */}
			{
				(startGame && !Boolean(userName)) && 
				<div className="my-6 fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-20 overflow-y-auto">
					<div className="w-[80vw] md:w-[80vw] lg:w-[75vw] max-w-6xl mx-auto bg-[#232323] rounded-lg">
						<div className="grid md:grid-cols-2 items-center gap-16 sm:p-10 p-4 font-[sans-serif]">
							<div>
								<h1 className="text-4xl font-extrabold text-white">
									Set Up your Account
								</h1>
								<p className="text-sm text-gray-400 mt-3">
									To get a rich experience of the asthrolith ecosystem you need to
									create an account!
								</p>
								<div className='grid place-content-center mt-8'>
									<img src={logo} alt="astrolith logo" width={140} />
								</div>
							</div>
							<div className="bg-gray-200 p-6 rounded-lg border border-orange-300 shadow-lg relative">
								{
									showPreview &&
									<div className="preview absolute grid -top-10 left-[50%] -translate-x-[50%] rounded-full overflow-hidden  bg-cover h-24 w-24">
										<img src={avatar} alt="preview" className="object-contain"/>
									</div>
								}
								<form onSubmit={handleFormSubmit} className="mt-8 space-y-4">
									<input
										required
										type="text"
										placeholder="Full Name"
										className="w-full border-2 rounded-md py-3 px-4 text-sm outline-orange-500"
									/>
									<input
										required
										type="text"
										placeholder="Username"
										className="w-full rounded-md py-3 px-4 text-sm outline-orange-500"
									/>
									<div class="relative">
										<label title="Upload Avatar" for="uploadAvatar" class="cursor-pointer flex items-center gap-4 px-6 py-4 before:border-slate-400/60 hover:before:border-slate-300 group dark:before:bg-darker dark:hover:before:border-slate-500 before:bg-slate-100 dark:before:border-slate-600 before:absolute before:inset-0 before:rounded-3xl before:border before:border-dashed before:border-orange-500 before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
										<div class="w-max relative">
											<img className="w-12" src="https://www.svgrepo.com/show/485545/upload-cicle.svg" alt="file upload icon" width="512" height="512"/>
										</div>
										<div class="relative">
											<span class="block text-base font-semibold relative text-blue-900 dark:text-white group-hover:text-blue-500">
												Upload Avatar
											</span>
											<span class="mt-0.5 block text-sm text-gray-500 dark:text-gray-400">Max 2 MB</span>
										</div>
										</label>
										<input onChange={(e)=>handleFileChange(e)} hidden="true" type="file" required name="uploadAvatar" id="uploadAvatar"/>
									</div>

									<button

										type="submit"
										className="text-white bg-orange-500 hover:bg-orange-600 font-semibold rounded-md text-sm px-4 py-3 flex items-center justify-center w-full gap-4"
									>
									<img src={settings} alt="gear settings" height={30} width={35} />
									<p className='font-semibold text-xl'>Setup</p>
										
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			}
		</div>
	);
}
