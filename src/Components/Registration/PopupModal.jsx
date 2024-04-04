import React, { useEffect, useRef } from 'react'
import { Modal,Button } from 'flowbite-react';
function PopupModal({visible,onClose}) {
return(   
<Modal dismissible show={visible} onClose={onClose}>
  <Modal.Header>
    <div className='text-3xl '>Online Reservation</div>
  </Modal.Header>
  <Modal.Body>
    <form action="https://formspree.io/f/myyrnjbv" method="post">
      <div className="grid md:grid-cols-2 md:gap-6 my-3">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          autoComplete="off"
          className="py-2 px-3 border border-gray-300 my-3 md:my-0"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          autoComplete="off"
          className="py-2 px-3 border border-gray-300"
        />
      </div>
      <div className="grid md:grid-cols-3 md:gap-6">
        <select
          name="person"
          className="py-2 px-3 border border-gray-300 my-3"
        >
          <option value="1-person">1 Person</option>
          <option value="2-person">2 Person</option>
          <option value="3-person">3 Person</option>
          <option value="4-person">4 Person</option>
          <option value="5-person">5 Person</option>
          <option value="6-person">6 Person</option>
          <option value="7-person">7 Person</option>
          <option value="7-person">8 Person</option>
        </select>
        <div className="border border-gray-300 my-3">
          <input
            type="date"
            name="reservation-date"
            className="py-2 px-3 appearance-none"
          />
        </div>
        <select
          id="time"
          name="time"
          className="py-2 px-3 border border-gray-300 my-3"
        >
          <option value="010:00am">10 : 00 am</option>
          <option value="011:00am">11 : 00 am</option>
          <option value="012:00am">12 : 00 am</option>
          <option value="01:00pm">01 : 00 pm</option>
          <option value="02:00pm">02 : 00 pm</option>
          <option value="03:00pm">03 : 00 pm</option>
          <option value="04:00pm">04 : 00 pm</option>
          <option value="05:00pm">05 : 00 pm</option>
          <option value="06:00pm">06 : 00 pm</option>
          <option value="07:00pm">07 : 00 pm</option>
          <option value="08:00pm">08 : 00 pm</option>
          <option value="09:00pm">09 : 00 pm</option>
          <option value="10:00pm">10 : 00 pm</option>
        </select>
      </div>
      <textarea
        name="message"
        placeholder="Message"
        autoComplete="off"
        className="block py-2 px-3 border border-gray-300 w-full my-3"
      ></textarea>
      <Button type="submit" className="text-white mx-auto bg-black hover:scale-110 duration-300 py-2 px-4">
      Book A Table
    </Button>
    </form>
  </Modal.Body>

</Modal>)
  
}

export default PopupModal