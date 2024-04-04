import React, {useState} from 'react'

function Query() {

    return (
        <div className="relative isolate bg-gray-100">
        <div className="mx-auto gap-8 grid max-w-7xl grid-cols-2 lg:grid-cols-2 md:grid-cols-1 bg-gray-100">
          
          <form className="px-6 py-8 bg-gray-100">
            <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className='text-2xl mb-8'>If you have any queries please contact us</div>
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">First name</label>
                  <div className="mt-2.5">
                    <input type="text" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" name="firstName"/>
                  </div>
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">Last name</label>
                  <div className="mt-2.5">
                    <input type="text" id="last-name" autoComplete="family-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" name="lastName"/>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">Email</label>
                  <div className="mt-2.5">
                    <input type="email" id="email" autoComplete="email" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" name="email"/>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">Message</label>
                  <div className="mt-2.5">
                    <textarea id="message" rows="4" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" name="message"></textarea>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-end">
                <button type="submit" className="w-max  rounded-2xl border-2 border-[#0057ff] bg-[#0057ff]  px-5 py-1.5 text-sm font-semibold text-white transition-colors duration-150 ease-in-out hover:border-blue-400 hover:bg-blue-400">Send message</button>
              </div>
            </div>
          </form>

          <div className=' py-16 pr-6'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.40988057884!2d85.3165884756918!3d27.735501024248705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19f06c125c4b%3A0x28e589ddc882af98!2sThe%20Everest%20Grill!5e0!3m2!1sen!2snp!4v1712214607121!5m2!1sen!2snp"
           width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    );
  }

  export default Query;