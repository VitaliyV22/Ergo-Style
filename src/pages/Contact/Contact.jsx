import React from 'react'

export const Contact = () => {
  return (
    <div>
      <div className="pb-5">
    
        </div>
        <section className="bg-gray-100">
          <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
              <div className="lg:col-span-2 lg:py-12">
                <p className="max-w-xl text-lg">
                  Questions about your order, refunds or any other matter,
                  please shoot us an email or fill out the form.
                </p>
                <h1>
                  <p className="font-bold text-indigo-600">
                    {" "}
                    ergostyle@contact.com{" "}
                  </p>
                </h1>

                <div className="mt-8">
                  <a href="#" className="text-2xl font-bold text-indigo-600">
                    {" "}
                    0151 475 4450{" "}
                  </a>

                  <address className="mt-2 not-italic">
                    123 Street, City, ST 12356
                  </address>
                </div>
              </div>

              <div className="rounded-lg bg-gray p-8 shadow-lg lg:col-span-3 lg:p-12">
                <form action="#" className="space-y-4">
                  <div>
                    <label className="sr-only" htmlFor="name">
                      Name
                    </label>
                    <input
                      className="w-full rounded-lg border-black p-3 text-sm"
                      placeholder="Name"
                      type="text"
                      id="name"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="sr-only" htmlFor="email">
                        Email
                      </label>
                      <input
                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                        placeholder="Email address"
                        type="email"
                        id="email"
                      />
                    </div>

                    <div>
                      <label className="sr-only" htmlFor="phone">
                        Phone
                      </label>
                      <input
                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                        placeholder="Phone Number"
                        type="tel"
                        id="phone"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3"></div>

                  <div>
                    <label className="sr-only" htmlFor="message">
                      Message
                    </label>

                    <textarea
                      className="w-full rounded-lg border-black p-3 text-sm"
                      placeholder="Message"
                      rows="8"
                      id="message"
                    ></textarea>
                  </div>

                  <div className="mt-4">
                    <button
                      type="submit"
                      className="inline-block w-full rounded-lg bg-indigo-600 px-5 py-3 font-medium text-white sm:w-auto"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          </section>
    </div>
  )
}
