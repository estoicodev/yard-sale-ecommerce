import { useNavigate } from "react-router-dom"
import { useOnlineStore } from "../../contexts"

function EditAccount() {
  const { updateUserAccount } = useOnlineStore();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData);
    updateUserAccount(user);
    navigate("/my-account");
  }

  return (
    <section className="w-full max-w-sm h-full mx-auto flex flex-col py-10 relative login">
      <h1 className="text-black font-bold text-lg text-start mb-10 title">My account</h1>
      <form onSubmit={handleSubmit} className="w-full flex flex-col login__form">
        <label htmlFor="name" className="mb-4 text-base font-bold login__label">Name</label>
        <input type="name" name="name" className="h-11 sm:h-12 mb-5 px-4 text-[#a3a3a3] bg-[#f7f7f7] rounded-lg border-none text-base font-normal outline-0 outline-transparent focus:outline-1 focus:outline-offset-1 focus:outline-[#c7c7c7] hover:bg-opacity-80 value" required/>
        <label htmlFor="email" className="mb-4 text-base font-bold login__label">Email address</label>
        <input type="email" name="email" className="h-11 sm:h-12 mb-5 px-4 text-[#a3a3a3] bg-[#f7f7f7] rounded-lg border-none text-base font-normal outline-0 outline-transparent focus:outline-1 focus:outline-offset-1 focus:outline-[#c7c7c7] hover:bg-opacity-80 value" required/>
        <label htmlFor="password" className="mb-4 text-base font-bold login__label">Password</label>
        <input type="password" name="password" className="h-11 sm:h-12 mb-11 px-4 text-[#a3a3a3] bg-[#f7f7f7] rounded-lg border-none text-base font-normal outline-0 outline-transparent focus:outline-1 focus:outline-offset-1 focus:outline-[#c7c7c7] hover:bg-opacity-80 value" required/>
        <input type="submit" className="flex justify-center items-center text-center w-full h-12 sm:h-14 border-2 rounded-xl font-medium text-base sm:text-lg decoration-0 cursor-pointer border-none bg-[#acd9b2] text-white hover:bg-opacity-80 outline-none button button__secondary" value="Save" />
      </form>
    </section>

  )
}

export default EditAccount