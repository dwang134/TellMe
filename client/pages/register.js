import Layout from '../components/Layout'
import {useState} from 'react'

const register = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        password2: ""
    })

    const {name, email, password, password2} = formData;

  return (
    <Layout>
      <div class="min-h-full flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 ">
    <div class="px-8 py-6 mx-4 mt-4 text-left drop-shadow-md">
        <div class="flex justify-center">
        <img
              class="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
        </div>
        <h3 class="text-3xl font-extrabold text-center pt-6 cursor-default">Create Account</h3>
        <form action="">
            <div class="mt-4">
                <div class="mt-4">
                    <label class="block" for="email">Email</label>
                            <input type="text" placeholder="Email"
                                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                </div>
                <div class="mt-4">
                    <label class="block">Password</label>
                            <input type="password" placeholder="Password"
                                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                </div>
                <div class="mt-4">
                    <label class="block">Confirm Password</label>
                            <input type="password" placeholder="Password"
                                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                </div>
                {/* <span class="text-xs text-red-400">Password must be same!</span> */}
                <div class="flex pt-2">
                    <button class="w-full px-6 py-2 mt-4 text-white bg-indigo-600 rounded-lg hover:bg-indigo-500">Create
                        Account</button>
                </div>
                <div class="mt-6 text-grey-dark">
                    Already have an account?{" "}
                    <a class="text-blue-600 hover:underline" href="#">
                    Log in
                    </a>
                </div>
            </div>
        </form>
    </div>
</div>
    </Layout>
  )
}

export default register